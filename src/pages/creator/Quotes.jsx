import { useState, useEffect } from 'react';
import { myQuotesCollection } from '../../firebase';
import { getDocs, query, orderBy, addDoc, serverTimestamp } from 'firebase/firestore';
import NavWrapper from '../../components/creator/NavCreator';
import Footer from '../../components/creator/Footer';

// Helper function to highlight search terms
const highlightText = (text, highlight) => {
    if (!highlight.trim()) return text;

    const regex = new RegExp(`(${highlight})`, 'gi');
    return text.split(regex).map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ?
            <mark key={i} className="bg-yellow-200">{part}</mark> :
            part
    );
};

// AddQuoteModal Component
const AddQuoteModal = ({ onClose, onQuoteAdded }) => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('motivation');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await addDoc(myQuotesCollection, {
                text: quote,
                author: author,
                category: category,
                status: 'approved',
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
                likes: 0,
                views: 0
            });
            onQuoteAdded();
            onClose();
        } catch (error) {
            console.error("Error adding quote: ", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
                <div className="p-4">
                    <div className="text-center mb-6">
                        <div className='text-center'>
                            <p className="text-[15px] text-gray-500">berikan quote terbaik mu yaa 🥹</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="space-y-0">
                            <textarea
                                placeholder="Tulis quotenya di sini..."
                                id="quote"
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-800"
                                value={quote}
                                onChange={(e) => setQuote(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-0">
                            <input
                                placeholder="Username instagram tanpa '@'"
                                type="text"
                                id="author"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-800"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-0">
                            <select
                                id="category"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-800"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="motivation">Motivasi</option>
                                <option value="life">Sindiran</option>
                                <option value="love">Cinta</option>
                                <option value="funny">Lucu</option>
                                <option value="other">Lainnya</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-2">
                            <button
                                type="button"
                                onClick={onClose}
                                disabled={isLoading}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center justify-center"
                            >
                                Batal
                            </button>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full px-4 py-2.5 bg-black text-white rounded-lg flex items-center justify-center disabled:opacity-70"
                            >
                                {isLoading ? 'Menyimpan...' : 'Simpan'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

// QuoteCard Component
const QuoteCard = ({ quote, author, category, searchTerm }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(`${quote} — ${author}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    const getCategoryColor = (cat) => {
        switch (cat) {
            case 'motivation': return 'bg-blue-100 text-blue-800';
            case 'life': return 'bg-green-100 text-green-800';
            case 'love': return 'bg-pink-100 text-pink-800';
            case 'wisdom': return 'bg-purple-100 text-purple-800';
            case 'funny': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="relative p-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-start mb-0">
                <span className={`text-[10px] px-1 py-0 rounded-[3px] ${getCategoryColor(category)}`}>
                    {category === 'motivation' && 'Motivasi'}
                    {category === 'life' && 'Sindiran'}
                    {category === 'love' && 'Cinta'}
                    {category === 'wisdom' && 'Sindiran'}
                    {category === 'funny' && 'Lucu'}
                    {category === 'other' && 'Lainnya'}
                </span>
                <button
                    onClick={handleCopy}
                    className="text-gray-400 hover:text-gray-600"
                    title="Salin kutipan"
                >
                    <i className="ri-clipboard-line"></i>
                </button>
            </div>

            <p
                className="text-gray-700 text-base text-justify cursor-pointer mb-1"
                onClick={handleCopy}
            >
                "{highlightText(quote, searchTerm)}"
            </p>

            <div className="flex justify-between items-center mt-1">
                <p className="text-gray-600 text-[12px] font-medium">
                    — {highlightText(author, searchTerm)}
                </p>
                {copied && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                        Disalin!
                    </span>
                )}
            </div>
        </div>
    );
};

// Main Quotes Component
const Quotes = () => {
    const [quotes, setQuotes] = useState([]);
    const [filteredQuotes, setFilteredQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Fetch quotes on component mount
    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                const q = query(myQuotesCollection, orderBy('createdAt', 'desc'));
                const querySnapshot = await getDocs(q);
                const quotesData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                const approvedQuotes = quotesData.filter(quote => quote.status === 'approved');
                setQuotes(approvedQuotes);
                setFilteredQuotes(approvedQuotes);
            } catch (error) {
                console.error("Error fetching quotes: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchQuotes();
    }, []);

    // Filter quotes based on search and category
    useEffect(() => {
        let filtered = [...quotes];

        if (searchTerm.trim() !== '') {
            filtered = filtered.filter(quote =>
                quote.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                quote.author.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategory !== 'all') {
            filtered = filtered.filter(quote => quote.category === selectedCategory);
        }

        setFilteredQuotes(filtered);
    }, [searchTerm, selectedCategory, quotes]);

    const handleQuoteAdded = () => {
        const fetchQuotes = async () => {
            const q = query(myQuotesCollection, orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            const quotesData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            const approvedQuotes = quotesData.filter(quote => quote.status === 'approved');
            setQuotes(approvedQuotes);
            setFilteredQuotes(approvedQuotes);
        };
        fetchQuotes();
    };

    // Get display message based on current filters
    const getDisplayMessage = () => {
        if (loading) return "Memuat quotes...";

        if (searchTerm || selectedCategory !== 'all') {
            if (filteredQuotes.length === 0) return "Tidak ada quote yang ditemukan";
            return `Menampilkan ${filteredQuotes.length} dari ${quotes.length} quotes`;
        }

        return `Total ${quotes.length} quotes tersedia`;
    };

    return (
        <div className="bg-gray-50 min-h-screen text-gray-800">
            <NavWrapper />
            <div className="max-w-4xl mx-auto px-4 pt-4 pb-10">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2 text-gray-900">Quotes</h1>
                    <p className="text-gray-600">Here the best quotes are available</p>
                </div>
                {/* Search and Filter Section */}
                <div className="p-2 mb-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
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
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                                >
                                    <i className="ri-close-line"></i>
                                </button>
                            )}
                        </div>

                        <select
                            className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="all">Semua Kategori</option>
                            <option value="motivation">Motivasi</option>
                            <option value="wisdom">Sindiran</option>
                            <option value="love">Cinta</option>
                            <option value="funny">Lucu</option>
                            <option value="other">Lainnya</option>
                        </select>
                        <button
                            onClick={() => setShowModal(true)}
                            className="w-full md:w-auto px-4 py-2 bg-black text-white rounded-lg flex items-center justify-center gap-2"
                        >
                            <i className="ri-add-line"></i>
                            <span>Tambah Quote Baru</span>
                        </button>
                    </div>

                    {/* Quote count information */}
                    <div className="text-sm text-gray-500 mb-2 px-1">
                        {getDisplayMessage()}
                    </div>
                </div>

                {/* Quotes List */}
                {loading ? (
                    <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                        <div className="animate-pulse">
                            <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
                            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        {filteredQuotes.length > 0 ? (
                            filteredQuotes.map((quote) => (
                                <QuoteCard
                                    key={quote.id}
                                    quote={quote.text}
                                    author={quote.author}
                                    category={quote.category}
                                    searchTerm={searchTerm}
                                />
                            ))
                        ) : (
                            <div className="p-8 text-center text-gray-500">
                                {searchTerm || selectedCategory !== 'all' ?
                                    "Quote tidak ditemukan" :
                                    "Belum ada quote yang tersedia"}
                            </div>
                        )}
                    </div>
                )}

                {/* Add Quote Modal */}
                {showModal && (
                    <AddQuoteModal
                        onClose={() => setShowModal(false)}
                        onQuoteAdded={handleQuoteAdded}
                    />
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Quotes;