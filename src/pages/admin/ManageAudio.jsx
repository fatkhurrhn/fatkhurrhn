import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Link } from 'react-router-dom';

export default function ManageAudio() {
    const [audios, setAudios] = useState([]);
    const [filteredAudios, setFilteredAudios] = useState([]);
    const [newAudio, setNewAudio] = useState({
        title: '',
        audioUrl: '',
        category: 'quote_random'
    });
    const [editingId, setEditingId] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [categoryCounts, setCategoryCounts] = useState({});
    const [activeFilter, setActiveFilter] = useState('all');

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
                setFilteredAudios(audioList);
                
                // Calculate category counts
                const counts = { all: audioList.length };
                audioList.forEach(audio => {
                    counts[audio.category] = (counts[audio.category] || 0) + 1;
                });
                setCategoryCounts(counts);
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
            if (editingId) {
                // Update existing audio
                await updateDoc(doc(db, 'my-audios', editingId), {
                    ...newAudio,
                    updatedAt: new Date()
                });
                setEditingId(null);
            } else {
                // Add new audio
                await addDoc(collection(db, 'my-audios'), {
                    ...newAudio,
                    createdAt: new Date()
                });
            }

            // Refresh the list
            const q = query(collection(db, 'my-audios'), orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            const audioList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setAudios(audioList);
            applyFilter(activeFilter, audioList);
            
            // Update category counts
            const counts = { all: audioList.length };
            audioList.forEach(audio => {
                counts[audio.category] = (counts[audio.category] || 0) + 1;
            });
            setCategoryCounts(counts);

            // Reset form
            setNewAudio({
                title: '',
                audioUrl: '',
                category: 'quote_random'
            });
        } catch (error) {
            console.error('Error saving audio:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEdit = (audio) => {
        setNewAudio({
            title: audio.title,
            audioUrl: audio.audioUrl,
            category: audio.category
        });
        setEditingId(audio.id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCancelEdit = () => {
        setNewAudio({
            title: '',
            audioUrl: '',
            category: 'quote_random'
        });
        setEditingId(null);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this audio?')) {
            try {
                await deleteDoc(doc(db, 'my-audios', id));
                const updatedAudios = audios.filter(audio => audio.id !== id);
                setAudios(updatedAudios);
                applyFilter(activeFilter, updatedAudios);
                
                // Update category counts
                const counts = { all: updatedAudios.length };
                updatedAudios.forEach(audio => {
                    counts[audio.category] = (counts[audio.category] || 0) + 1;
                });
                setCategoryCounts(counts);
            } catch (error) {
                console.error('Error deleting audio:', error);
            }
        }
    };

    const formatCategory = (category) => {
        return category.split('_').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    };

    const applyFilter = (category, audioList = audios) => {
        setActiveFilter(category);
        if (category === 'all') {
            setFilteredAudios(audioList);
        } else {
            setFilteredAudios(audioList.filter(audio => audio.category === category));
        }
    };

    const renderCategoryCounts = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => applyFilter('all')}
                    className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
                        activeFilter === 'all' 
                            ? 'bg-gray-800 text-white' 
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                >
                    All: {categoryCounts.all || 0}
                </button>
                {Object.entries(categoryCounts)
                    .filter(([key]) => key !== 'all')
                    .map(([category, count]) => (
                        <button
                            key={category}
                            onClick={() => applyFilter(category)}
                            className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
                                activeFilter === category 
                                    ? 'bg-gray-800 text-white' 
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            }`}
                        >
                            {formatCategory(category)}: {count}
                        </button>
                    ))}
            </div>
        );
    };

    return (
        <div className="bg-gray-50 min-h-screen p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Kelola Audios</h1>
                    <Link
                        to="/dashboard"
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Dashboard
                    </Link>
                </div>

                {/* Add/Edit Audio Form */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        {editingId ? 'Edit Audio' : 'Add New Audio'}
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-wrap items-end gap-4 mb-4">
                            {/* Title */}
                            <div className="w-[200px]">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Title <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={newAudio.title}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-lg"
                                    required
                                    placeholder="Title"
                                />
                            </div>

                            {/* Category */}
                            <div className="w-[160px]">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Category <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        name="category"
                                        value={newAudio.category}
                                        onChange={handleInputChange}
                                        className="w-full appearance-none px-3 py-2 pr-8 border border-gray-300 rounded-lg bg-white text-gray-800"
                                        required
                                    >
                                        <option value="sound_efect">Sound Efect</option>
                                        <option value="quote_random">Quote Random</option>
                                        <option value="arabic">Arabic</option>
                                        <option value="islamic">Islamic</option>
                                        <option value="jawa">Song Jawa</option>
                                        <option value="india">India</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Audio URL */}
                            <div className="flex-1 min-w-[200px]">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Audio URL <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="url"
                                    name="audioUrl"
                                    value={newAudio.audioUrl}
                                    onChange={handleInputChange}
                                    placeholder="https://example.com/audio.mp3"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-800"
                                    required
                                />
                            </div>

                            {/* Submit/Cancel Buttons */}
                            <div className="flex gap-2 w-[260px]">
                                {editingId && (
                                    <button
                                        type="button"
                                        onClick={handleCancelEdit}
                                        className="w-full h-[42px] bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full h-[42px] text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-70 transition-colors ${
                                        editingId ? 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500' : 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500'
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            {editingId ? 'Updating...' : 'Adding...'}
                                        </span>
                                    ) : (
                                        editingId ? 'Update Audio' : 'Add Audio'
                                    )}
                                </button>
                            </div>
                        </div>

                        <p className="text-xs text-gray-500">
                            Paste direct URL to .mp3 audio file
                        </p>
                    </form>
                </div>

                {/* Audio List */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-800">Audio Library</h2>
                        {renderCategoryCounts()}
                    </div>

                    {filteredAudios.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Title
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Category
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Date Added
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredAudios.map(audio => (
                                        <tr key={audio.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900 truncate max-w-xs">
                                                    {audio.title}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                                    {formatCategory(audio.category)}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {audio.createdAt?.toDate ? audio.createdAt.toDate().toLocaleDateString() : 'N/A'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <div className="flex justify-end space-x-4">
                                                    <a
                                                        href={audio.audioUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-600 hover:text-gray-900"
                                                        title="Preview"
                                                    >
                                                        <i className="ri-external-link-line text-lg"></i>
                                                    </a>
                                                    <button
                                                        onClick={() => handleEdit(audio)}
                                                        className="text-gray-600 hover:text-gray-900"
                                                        title="Edit"
                                                    >
                                                        <i className="ri-pencil-line text-lg"></i>
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(audio.id)}
                                                        className="text-red-600 hover:text-red-900"
                                                        title="Delete"
                                                    >
                                                        <i className="ri-delete-bin-line text-lg"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <div className="mx-auto h-16 w-16 text-gray-400 mb-4">
                                <i className="ri-music-2-line text-4xl"></i>
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-1">
                                {activeFilter === 'all' 
                                    ? 'No audios found' 
                                    : `No audios in ${formatCategory(activeFilter)} category`}
                            </h3>
                            <p className="text-gray-500">Add your first audio using the form above</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}