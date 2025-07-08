import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db, serverTimestamp } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const genres = [
  "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror",
  "Romance", "Sci-Fi", "Supernatural", "Thriller", "School",
  "Martial Arts", "Magic", "Historical", "Psychology", "Military"
];

const DashboardAnime = () => {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    genres: [],
    episodes: '',
    year: '',
    studio: '',
    status: 'completed',
    rating: '',
    lastWatchedEpisode: '',
    thumbnail: '',
    description: '',
    episodeList: []
  });
  const [currentEpisode, setCurrentEpisode] = useState({
    number: '',
    title: '',
    videoUrl: ''
  });
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [animeToDelete, setAnimeToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'animes'));
        const animesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setAnimes(animesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching animes: ", error);
        setLoading(false);
      }
    };

    fetchAnimes();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleGenreChange = (genre) => {
    const updatedGenres = formData.genres.includes(genre)
      ? formData.genres.filter(g => g !== genre)
      : [...formData.genres, genre];
    
    setFormData({
      ...formData,
      genres: updatedGenres
    });
  };

  const handleEpisodeInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentEpisode({
      ...currentEpisode,
      [name]: value
    });
  };

  const addEpisode = () => {
    if (currentEpisode.number && currentEpisode.title && currentEpisode.videoUrl) {
      setFormData({
        ...formData,
        episodeList: [
          ...formData.episodeList,
          {
            number: parseInt(currentEpisode.number),
            title: currentEpisode.title,
            videoUrl: currentEpisode.videoUrl
          }
        ].sort((a, b) => a.number - b.number)
      });
      setCurrentEpisode({
        number: '',
        title: '',
        videoUrl: ''
      });
    }
  };

  const removeEpisode = (index) => {
    const updatedEpisodes = [...formData.episodeList];
    updatedEpisodes.splice(index, 1);
    setFormData({
      ...formData,
      episodeList: updatedEpisodes
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editMode) {
        const animeRef = doc(db, 'animes', currentId);
        await updateDoc(animeRef, {
          ...formData,
          updatedAt: serverTimestamp()
        });
      } else {
        await addDoc(collection(db, 'animes'), {
          ...formData,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
      }

      resetForm();
      const querySnapshot = await getDocs(collection(db, 'animes'));
      const animesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setAnimes(animesData);
      setLoading(false);
      setShowModal(false);
    } catch (error) {
      console.error("Error adding/updating anime: ", error);
      setLoading(false);
    }
  };

  const editAnime = (anime) => {
    setFormData({
      title: anime.title,
      genres: anime.genres,
      episodes: anime.episodes,
      year: anime.year,
      studio: anime.studio,
      status: anime.status,
      rating: anime.rating,
      lastWatchedEpisode: anime.lastWatchedEpisode || '',
      thumbnail: anime.thumbnail,
      description: anime.description,
      episodeList: anime.episodeList || []
    });
    setCurrentId(anime.id);
    setEditMode(true);
    setShowModal(true);
  };

  const confirmDelete = (anime) => {
    setAnimeToDelete(anime);
    setShowDeleteModal(true);
  };

  const deleteAnime = async () => {
    try {
      await deleteDoc(doc(db, 'animes', animeToDelete.id));
      setAnimes(animes.filter(anime => anime.id !== animeToDelete.id));
      setShowDeleteModal(false);
      setAnimeToDelete(null);
    } catch (error) {
      console.error("Error deleting anime: ", error);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      genres: [],
      episodes: '',
      year: '',
      studio: '',
      status: 'completed',
      rating: '',
      lastWatchedEpisode: '',
      thumbnail: '',
      description: '',
      episodeList: []
    });
    setCurrentEpisode({
      number: '',
      title: '',
      videoUrl: ''
    });
    setEditMode(false);
    setCurrentId('');
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Anime Management</h1>
          <div className="flex space-x-2">
            <button
              onClick={() => navigate('/admin')}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
            >
              Back to Admin
            </button>
            <button
              onClick={() => {
                resetForm();
                setShowModal(true);
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Add New Anime
            </button>
          </div>
        </div>

        {/* Anime List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {loading && !animes.length ? (
            <div className="p-8 text-center">
              <p className="text-gray-500">Loading...</p>
            </div>
          ) : animes.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-500">No animes found</p>
            </div>
          ) : (
            <div className="divide-y">
              {animes.map(anime => (
                <div key={anime.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div className="mb-2 sm:mb-0">
                      <h3 className="font-medium text-gray-800">{anime.title}</h3>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {anime.genres.slice(0, 3).map(genre => (
                          <span key={genre} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                            {genre}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">{anime.episodes} eps • {anime.year}</span>
                      <button
                        onClick={() => editAnime(anime)}
                        className="text-blue-500 hover:text-blue-700 p-1"
                        title="Edit"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => confirmDelete(anime)}
                        className="text-red-500 hover:text-red-700 p-1"
                        title="Delete"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add/Edit Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {editMode ? 'Edit Anime' : 'Add New Anime'}
                  </h2>
                  <button
                    onClick={resetForm}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title*</label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Studio*</label>
                      <input
                        type="text"
                        name="studio"
                        value={formData.studio}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Year*</label>
                      <input
                        type="number"
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Episodes*</label>
                      <input
                        type="number"
                        name="episodes"
                        value={formData.episodes}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Rating*</label>
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="10"
                        name="rating"
                        value={formData.rating}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status*</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="completed">Completed</option>
                      <option value="watching">Watching</option>
                    </select>
                  </div>

                  {formData.status === 'watching' && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Watched Episode</label>
                      <input
                        type="number"
                        name="lastWatchedEpisode"
                        value={formData.lastWatchedEpisode}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  )}

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Thumbnail URL*</label>
                    <input
                      type="url"
                      name="thumbnail"
                      value={formData.thumbnail}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    {formData.thumbnail && (
                      <div className="mt-2">
                        <img 
                          src={formData.thumbnail} 
                          alt="Thumbnail preview" 
                          className="h-24 object-cover rounded border"
                        />
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description*</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    ></textarea>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Genres*</label>
                    <div className="flex flex-wrap gap-2">
                      {genres.map(genre => (
                        <button
                          key={genre}
                          type="button"
                          onClick={() => handleGenreChange(genre)}
                          className={`px-3 py-1 rounded-full text-sm transition-colors ${
                            formData.genres.includes(genre)
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                        >
                          {genre}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-700 mb-3">Episodes</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Episode Number</label>
                        <input
                          type="number"
                          name="number"
                          value={currentEpisode.number}
                          onChange={handleEpisodeInputChange}
                          className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Episode Title</label>
                        <input
                          type="text"
                          name="title"
                          value={currentEpisode.title}
                          onChange={handleEpisodeInputChange}
                          className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Video URL</label>
                        <input
                          type="url"
                          name="videoUrl"
                          value={currentEpisode.videoUrl}
                          onChange={handleEpisodeInputChange}
                          className="w-full px-3 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    
                    <button
                      type="button"
                      onClick={addEpisode}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mb-4 transition-colors disabled:opacity-50"
                      disabled={!currentEpisode.number || !currentEpisode.title || !currentEpisode.videoUrl}
                    >
                      Add Episode
                    </button>
                    
                    {formData.episodeList.length > 0 && (
                      <div className="border rounded-md divide-y">
                        {formData.episodeList.map((episode, index) => (
                          <div key={index} className="p-3 flex justify-between items-center">
                            <div className="truncate text-gray-800">
                              <span className="font-medium">Episode {episode.number}:</span> {episode.title}
                            </div>
                            <button
                              type="button"
                              onClick={() => removeEpisode(index)}
                              className="text-red-500 hover:text-red-700 ml-2"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end space-x-3 pt-4 border-t">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50"
                    >
                      {loading ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : editMode ? 'Update Anime' : 'Add Anime'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">Confirm Delete</h2>
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <p className="mb-6 text-gray-600">
                  Are you sure you want to delete <span className="font-semibold">{animeToDelete?.title}</span>? This action cannot be undone.
                </p>
                
                <div className="flex justify-end space-x-3 pt-4 border-t">
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={deleteAnime}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardAnime;