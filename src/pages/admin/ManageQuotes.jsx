import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { myQuotesCollection } from '../../firebase';
import {
  getDocs,
  query,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
  where
} from 'firebase/firestore';
import Layout from '../../components/Layout';

const ManageQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [editingQuote, setEditingQuote] = useState(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        let q;
        if (statusFilter === 'all') {
          q = query(myQuotesCollection, orderBy('createdAt', 'desc'));
        } else {
          q = query(
            myQuotesCollection,
            where('status', '==', statusFilter),
            orderBy('createdAt', 'desc')
          );
        }

        const querySnapshot = await getDocs(q);
        const quotesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setQuotes(quotesData);
      } catch (error) {
        console.error("Error fetching quotes: ", error);
      }
    };

    fetchQuotes();
  }, [statusFilter]);

  const filteredQuotes = quotes.filter(quote => {
    // Apply search filter
    const matchesSearch = searchTerm === '' ||
      quote.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.author.toLowerCase().includes(searchTerm.toLowerCase());

    // Apply category filter
    const matchesCategory = categoryFilter === 'all' ||
      quote.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const handleStatusChange = async (quoteId, newStatus) => {
    try {
      const quoteRef = doc(myQuotesCollection, quoteId);
      await updateDoc(quoteRef, {
        status: newStatus,
        updatedAt: new Date()
      });

      setQuotes(quotes.map(quote =>
        quote.id === quoteId ? { ...quote, status: newStatus } : quote
      ));
    } catch (error) {
      console.error("Error updating quote status: ", error);
    }
  };

  const handleEdit = (quote) => {
    setEditingQuote(quote);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const quoteRef = doc(myQuotesCollection, editingQuote.id);
      await updateDoc(quoteRef, {
        text: editingQuote.text,
        author: editingQuote.author,
        category: editingQuote.category,
        updatedAt: new Date()
      });

      setQuotes(quotes.map(quote =>
        quote.id === editingQuote.id ? editingQuote : quote
      ));
      setEditingQuote(null);
    } catch (error) {
      console.error("Error updating quote: ", error);
    }
  };

  const handleDelete = async (quoteId) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus quote ini?")) {
      try {
        await deleteDoc(doc(myQuotesCollection, quoteId));
        setQuotes(quotes.filter(quote => quote.id !== quoteId));
      } catch (error) {
        console.error("Error deleting quote: ", error);
      }
    }
  };

  return (
    <Layout>
      <div className="min-h-screen">
        <div className="max-w-full mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari quote atau author..."
                className="w-full p-3 pl-10 rounded-lg border border-gray-300 bg-white text-gray-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute left-3 top-3.5 text-gray-400">
                <i className="ri-search-line"></i>
              </div>
            </div>

            <select
              className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">Semua Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>

            <select
              className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="all">Semua Kategori</option>
              <option value="motivation">Motivasi</option>
              <option value="life">Sindiran</option>
              <option value="love">Cinta</option>
              <option value="wisdom">Kebijaksanaan</option>
              <option value="funny">Lucu</option>
              <option value="other">Lainnya</option>
            </select>
          </div>

          {editingQuote && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">Edit Quote</h2>
                    <button
                      onClick={() => setEditingQuote(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <i className="ri-close-line text-xl"></i>
                    </button>
                  </div>

                  <form onSubmit={handleUpdate} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Quote</label>
                      <textarea
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        rows={4}
                        value={editingQuote.text}
                        onChange={(e) => setEditingQuote({ ...editingQuote, text: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        value={editingQuote.author}
                        onChange={(e) => setEditingQuote({ ...editingQuote, author: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                      <select
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        value={editingQuote.category}
                        onChange={(e) => setEditingQuote({ ...editingQuote, category: e.target.value })}
                      >
                        <option value="motivation">Motivasi</option>
                        <option value="life">Sindiran</option>
                        <option value="love">Cinta</option>
                        <option value="wisdom">Kebijaksanaan</option>
                        <option value="funny">Lucu</option>
                        <option value="other">Lainnya</option>
                      </select>
                    </div>

                    <div className="flex justify-end gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setEditingQuote(null)}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                      >
                        Batal
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      >
                        Simpan Perubahan
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-12 bg-gray-100 p-4 font-medium text-gray-700">
              <div className="col-span-6 md:col-span-5">Quote</div>
              <div className="col-span-3 md:col-span-2">Author</div>
              <div className="col-span-2 hidden md:block">Category</div>
              <div className="col-span-3 md:col-span-2">Status</div>
              <div className="col-span-3 md:col-span-1">Actions</div>
            </div>

            {filteredQuotes.length > 0 ? (
              filteredQuotes.map((quote) => (
                <div key={quote.id} className="grid grid-cols-12 p-4 border-b border-gray-200 hover:bg-gray-50">
                  <div className="col-span-6 md:col-span-5 text-sm text-gray-800 line-clamp-2">
                    "{quote.text}"
                  </div>
                  <div className="col-span-3 md:col-span-2 text-sm text-gray-600">
                    {quote.author}
                  </div>
                  <div className="col-span-2 hidden md:block">
                    <span className={`text-xs px-2 py-1 rounded-[4px] ${quote.category === 'motivation' ? 'bg-blue-100 text-blue-800' :
                      quote.category === 'life' ? 'bg-green-100 text-green-800' :
                        quote.category === 'love' ? 'bg-pink-100 text-pink-800' :
                          quote.category === 'wisdom' ? 'bg-purple-100 text-purple-800' :
                            quote.category === 'funny' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                      }`}>
                      {quote.category === 'motivation' && 'Motivasi'}
                      {quote.category === 'life' && 'Sindiran'}
                      {quote.category === 'love' && 'Cinta'}
                      {quote.category === 'wisdom' && 'Kebijaksanaan'}
                      {quote.category === 'funny' && 'Lucu'}
                      {quote.category === 'other' && 'Lainnya'}
                    </span>
                  </div>
                  <div className="col-span-3 md:col-span-2">
                    <select
                      className={`text-xs px-2 py-1 rounded border ${quote.status === 'pending' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                        quote.status === 'approved' ? 'bg-green-100 text-green-800 border-green-200' :
                          'bg-red-100 text-red-800 border-red-200'
                        }`}
                      value={quote.status}
                      onChange={(e) => handleStatusChange(quote.id, e.target.value)}
                    >
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </div>
                  <div className="col-span-3 md:col-span-1 flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(quote)}
                      className="text-blue-500 hover:text-blue-700"
                      title="Edit"
                    >
                      <i className="ri-edit-line"></i>
                    </button>
                    <button
                      onClick={() => handleDelete(quote.id)}
                      className="text-red-500 hover:text-red-700"
                      title="Delete"
                    >
                      <i className="ri-delete-bin-line"></i>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">
                Tidak ada quotes yang ditemukan
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ManageQuotes;