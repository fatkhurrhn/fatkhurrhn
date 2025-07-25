import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';

export default function ManageAudio() {
  const [audios, setAudios] = useState([]);
  const [newAudio, setNewAudio] = useState({
    title: '',
    audioUrl: '',
    category: 'quote_random'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchAudios = async () => {
      try {
        const q = query(collection(db, 'my-audios'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const audioList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setAudios(audioList);
      } catch (error) {
        console.error('Error fetching audios:', error);
      }
    };

    fetchAudios();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAudio(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!newAudio.title || !newAudio.audioUrl) {
      alert('Please fill all required fields');
      setIsSubmitting(false);
      return;
    }

    try {
      await addDoc(collection(db, 'my-audios'), {
        ...newAudio,
        createdAt: new Date()
      });
      
      // Refresh the list
      const q = query(collection(db, 'my-audios'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const audioList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setAudios(audioList);
      
      // Reset form
      setNewAudio({
        title: '',
        audioUrl: '',
        category: 'quote_random'
      });
    } catch (error) {
      console.error('Error adding audio:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this audio?')) {
      try {
        await deleteDoc(doc(db, 'my-audios', id));
        setAudios(audios.filter(audio => audio.id !== id));
      } catch (error) {
        console.error('Error deleting audio:', error);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-2xl font-bold mb-6">Manage Audio Library</h1>
      
      {/* Add New Audio Form */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Audio</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Title *</label>
              <input
                type="text"
                name="title"
                value={newAudio.title}
                onChange={handleInputChange}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                required
                placeholder="Audio title"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Category *</label>
              <select
                name="category"
                value={newAudio.category}
                onChange={handleInputChange}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                required
              >
                <option value="quote_random">Quote Random</option>
                <option value="islamic">Islamic</option>
                <option value="india">India</option>
                <option value="arabic">Arabic</option>
              </select>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Audio URL *</label>
            <input
              type="url"
              name="audioUrl"
              value={newAudio.audioUrl}
              onChange={handleInputChange}
              placeholder="https://example.com/audio.mp3"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Paste direct URL to .mp3 audio file
            </p>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-green-400"
          >
            {isSubmitting ? 'Adding...' : 'Add Audio'}
          </button>
        </form>
      </div>
      
      {/* Audio List */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Audio List ({audios.length})</h2>
        {audios.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="text-left p-3">Title</th>
                  <th className="text-left p-3">Category</th>
                  <th className="text-left p-3">Date Added</th>
                  <th className="text-left p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {audios.map(audio => (
                  <tr key={audio.id} className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="p-3 max-w-xs truncate">{audio.title}</td>
                    <td className="p-3">
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                        {audio.category.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="p-3 text-sm">
                      {audio.createdAt?.toDate ? audio.createdAt.toDate().toLocaleDateString() : 'N/A'}
                    </td>
                    <td className="p-3">
                      <div className="flex gap-3">
                        <a 
                          href={audio.audioUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                          title="Preview"
                        >
                          <i className="ri-external-link-line"></i>
                        </a>
                        <button
                          onClick={() => handleDelete(audio.id)}
                          className="text-red-600 hover:text-red-800 dark:hover:text-red-400"
                          title="Delete"
                        >
                          <i className="ri-delete-bin-line"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-10">
            <i className="ri-music-2-line text-5xl text-gray-400 mb-3"></i>
            <p>No audios found. Add your first audio above.</p>
          </div>
        )}
      </div>
    </div>
  );
}