import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, where, addDoc, updateDoc, doc, deleteDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

// Set app element for accessibility
Modal.setAppElement('#root');

export default function DashboardStoryAnime() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    characters: [],
    category: '',
    uploadDate: new Date().toISOString().split('T')[0],
    videoUrl: ''
  });
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Daftar karakter dan kategori
  const allCharacters = [
    { id: 'alya', name: 'Alya' },
    { id: 'yuki', name: 'Yuki' },
    { id: 'mahiru', name: 'Mahiru' },
    { id: 'sikhimori', name: 'Sikhimori' },
    { id: 'kuze', name: 'Kuze' },
    { id: 'elaina', name: 'Elaina' },
    { id: 'wagiru', name: 'Wagiru' },
    { id: 'kuro', name: 'Kuro' },
    { id: 'haruto', name: 'Haruto' },
    { id: 'dennis', name: 'Dennis' },
    { id: 'artielle', name: 'Artielle' },
    { id: 'other', name: 'Other' },
    { id: 'fyp', name: 'foryoupage' }
  ];

  const categories = [
    { id: 'anime', name: 'Anime' },
    { id: 'donghua', name: 'Donghua' },
    { id: 'quote', name: 'Quote' }
  ];

  // Ambil data dari Firestore
  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        let q = query(collection(db, 'anime-story'), orderBy('uploadDate', 'desc'));

        if (searchTerm) {
          q = query(q, where('title', '>=', searchTerm), where('title', '<=', searchTerm + '\uf8ff'));
        }

        const querySnapshot = await getDocs(q);
        const storiesData = [];
        querySnapshot.forEach((doc) => {
          storiesData.push({ id: doc.id, ...doc.data() });
        });
        setStories(storiesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stories:', error);
        setLoading(false);
      }
    };

    fetchStories();
  }, [searchTerm]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Toggle karakter selected
  const toggleCharacter = (characterId) => {
    setFormData({
      ...formData,
      characters: formData.characters.includes(characterId)
        ? formData.characters.filter(id => id !== characterId)
        : [...formData.characters, characterId]
    });
  };

  // Buka modal form
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Tutup modal form
  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  // Buka modal video
  const openVideoModal = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setIsVideoModalOpen(true);
  };

  // Tutup modal video
  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setCurrentVideoUrl('');
  };

  // Handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const storyData = {
        title: formData.title.trim(),
        characters: formData.characters,
        category: formData.category,
        uploadDate: new Date(formData.uploadDate),
        videoUrl: formData.videoUrl.trim(),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };

      if (editId) {
        await updateDoc(doc(db, 'anime-story', editId), {
          ...storyData,
          createdAt: formData.createdAt,
          updatedAt: serverTimestamp()
        });
      } else {
        await addDoc(collection(db, 'anime-story'), storyData);
      }

      const q = query(collection(db, 'anime-story'), orderBy('uploadDate', 'desc'));
      const querySnapshot = await getDocs(q);
      const storiesData = [];
      querySnapshot.forEach((doc) => {
        storiesData.push({ id: doc.id, ...doc.data() });
      });
      setStories(storiesData);

      closeModal();
      setLoading(false);
    } catch (error) {
      console.error('Error saving story:', error);
      setLoading(false);
    }
  };

  // Handle edit story
  const handleEdit = (story) => {
    setFormData({
      title: story.title,
      characters: story.characters || [],
      category: story.category,
      uploadDate: story.uploadDate?.toDate().toISOString().split('T')[0],
      videoUrl: story.videoUrl,
      createdAt: story.createdAt
    });
    setEditId(story.id);
    openModal();
  };

  // Handle delete story
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this story?')) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, 'anime-story', id));
        setStories(stories.filter(story => story.id !== id));
        setLoading(false);
      } catch (error) {
        console.error('Error deleting story:', error);
        setLoading(false);
      }
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      title: '',
      characters: [],
      category: '',
      uploadDate: new Date().toISOString().split('T')[0],
      videoUrl: ''
    });
    setEditId(null);
  };

  // Format tanggal
  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate();
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  // Format karakter
  const formatCharacters = (characterIds) => {
    return characterIds.map(id =>
      allCharacters.find(c => c.id === id)?.name || id
    ).join(', ');
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <div className="container mx-auto px-4 max-w-4xl py-8">
        <Link to="/admin">
          <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <i class="ri-arrow-left-line"></i> Kembali
        </h1>
        </Link>

        {/* Search and Add Button */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search stories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 pl-8 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white text-gray-800"
            />
            <i className="ri-search-line absolute left-2 top-3 text-gray-400"></i>
          </div>
          <button
            onClick={openModal}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-1"
          >
            <i className="ri-add-line"></i> Add New Reels
          </button>
        </div>

        {/* Stories List - Card Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4 animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
                <div className="flex justify-between">
                  <div className="h-8 bg-gray-200 rounded w-16"></div>
                  <div className="h-8 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
            ))
          ) : stories.length === 0 ? (
            <div className="col-span-full text-center py-8 bg-white rounded-lg shadow">
              <i className="ri-emotion-sad-line text-2xl text-gray-400"></i>
              <p className="mt-2 text-gray-600">
                {searchTerm ? 'No stories found matching your search.' : 'No stories found.'}
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-2 text-blue-500 hover:text-blue-700 flex items-center justify-center mx-auto"
                >
                  <i className="ri-arrow-go-back-line mr-1"></i> Clear search
                </button>
              )}
            </div>
          ) : (
            stories.map((story) => (
              <div key={story.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition">
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-1 line-clamp-2">{story.title}</h3>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    UploadDate:
                    <span className="text-sm">
                      {formatDate(story.uploadDate)}
                    </span>
                  </div>

                  <div className="mb-2">
                    <p className="text-sm text-gray-700 line-clamp-2">
                      <span className="font-medium">Characters:</span> {formatCharacters(story.characters || [])}
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => openVideoModal(story.videoUrl)}
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
                    >
                      <i className="ri-play-circle-line"></i> Play Video
                    </button>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(story)}
                        className="text-gray-600 hover:text-blue-600"
                        title="Edit"
                      >
                        <i className="ri-edit-line"></i>
                      </button>
                      <button
                        onClick={() => handleDelete(story.id)}
                        className="text-gray-600 hover:text-red-600"
                        title="Delete"
                      >
                        <i className="ri-delete-bin-line"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Form Modal */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Story Form"
          className="modal-content bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full mx-auto my-8"
          overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            {editId ? (
              <>
                <i className="ri-edit-line"></i> Edit Story
              </>
            ) : (
              <>
                <i className="ri-add-line"></i> Add New Story
              </>
            )}
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Top Row: Title - Upload Date - Category */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-800">Title*</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                  placeholder="Story title"
                />
              </div>

              {/* Upload Date */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-800">Upload Date*</label>
                <input
                  type="date"
                  name="uploadDate"
                  value={formData.uploadDate}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-800">Category*</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Video URL Row */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1 text-gray-800">Video URL (.mp4)*</label>
              <input
                type="url"
                name="videoUrl"
                value={formData.videoUrl}
                onChange={handleInputChange}
                className="w-full p-2 border rounded bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
                placeholder="https://example.com/video.mp4"
                pattern="https?://.+\.mp4"
                title="Please enter a valid .mp4 URL"
              />
              <p className="text-xs text-gray-500 mt-1">Must be a direct link to .mp4 file</p>
            </div>

            {/* Characters */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1 text-gray-800">Characters*</label>
              <div className="flex flex-wrap gap-2">
                {allCharacters.map((char) => (
                  <button
                    key={char.id}
                    type="button"
                    onClick={() => toggleCharacter(char.id)}
                    className={`px-3 py-1 text-sm rounded-full border flex items-center transition ${formData.characters.includes(char.id)
                      ? 'bg-blue-100 border-blue-500 text-blue-700'
                      : 'bg-white border-gray-300 text-gray-800 hover:bg-gray-50'
                      }`}
                  >
                    {char.name}
                  </button>
                ))}
              </div>
              {formData.characters.length === 0 && (
                <p className="text-xs text-red-500 mt-1">Please select at least one character</p>
              )}
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 flex items-center gap-1"
              >
                <i className="ri-close-line"></i> Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-1"
                disabled={loading || formData.characters.length === 0}
              >
                {loading ? (
                  <>
                    <i className="ri-loader-4-line animate-spin"></i> Processing...
                  </>
                ) : (
                  <>
                    {editId ? (
                      <>
                        <i className="ri-save-line"></i> Update Story
                      </>
                    ) : (
                      <>
                        <i className="ri-add-line"></i> Add Story
                      </>
                    )}
                  </>
                )}
              </button>
            </div>
          </form>

        </Modal>

        {/* Video Modal */}
        <Modal
          isOpen={isVideoModalOpen}
          onRequestClose={closeVideoModal}
          contentLabel="Video Player"
          className="modal-content bg-black rounded-lg overflow-hidden max-w-4xl w-full mx-auto my-8"
          overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4"
        >
          <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
            <video
              src={currentVideoUrl}
              controls
              autoPlay
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
          <button
            onClick={closeVideoModal}
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
          >
            <i className="ri-close-line"></i>
          </button>
        </Modal>
      </div>
    </div>
  );
}