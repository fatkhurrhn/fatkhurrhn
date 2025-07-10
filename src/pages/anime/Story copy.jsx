import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';
import Nav from '../../components/anime/NavigationWrapper.jsx';

export default function Story() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCharacters, setSelectedCharacters] = useState(['all']);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('desc');

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
    { id: 'haruto', name: 'Haruto' }
  ];

  // Format tanggal
  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate();
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Format karakter
  const formatCharacters = (characterIds) => {
    return characterIds.map(id =>
      allCharacters.find(c => c.id === id)?.name || id
    ).join(', ');
  };

  // Ambil data dari Firestore
  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        let q = query(collection(db, 'anime-story'), orderBy('uploadDate', sortOrder));

        // Filter kategori
        if (selectedCategory !== 'all') {
          q = query(q, where('category', '==', selectedCategory));
        }

        const querySnapshot = await getDocs(q);
        let storiesData = [];
        querySnapshot.forEach((doc) => {
          storiesData.push({ id: doc.id, ...doc.data() });
        });

        // Filter karakter di client side
        if (!selectedCharacters.includes('all')) {
          storiesData = storiesData.filter(story =>
            story.characters.some(char => selectedCharacters.includes(char))
          );
        }

        setStories(storiesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stories:', error);
        setLoading(false);
      }
    };

    fetchStories();
  }, [selectedCharacters, selectedCategory, sortOrder]);

  // Toggle karakter selected
  const toggleCharacter = (characterId) => {
    if (characterId === 'all') {
      setSelectedCharacters(['all']);
    } else {
      const newSelected = selectedCharacters.includes('all')
        ? [characterId]
        : selectedCharacters.includes(characterId)
          ? selectedCharacters.filter(id => id !== characterId)
          : [...selectedCharacters, characterId];

      setSelectedCharacters(newSelected.length === 0 ? ['all'] : newSelected);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Nav />
      <div className="container mx-auto px-4 max-w-4xl pb-20">
        <h1 className="text-3xl font-bold text-center py-2 pt-3">Anime Stories</h1>
        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex flex-wrap gap-4 mb-4">
            {/* Filter Karakter */}
            <div className="w-full">
              <label className="block text-sm font-medium mb-2">Characters</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCharacters(['all'])}
                  className={`px-3 py-1 text-sm rounded-full border flex items-center ${selectedCharacters.includes('all')
                    ? 'bg-blue-100 border-blue-500 text-blue-700'
                    : 'bg-white hover:bg-gray-50'
                    }`}
                >
                  All Characters
                </button>
                {allCharacters.map((char) => (
                  <button
                    key={char.id}
                    onClick={() => toggleCharacter(char.id)}
                    className={`px-3 py-1 text-sm rounded-full border flex items-center ${selectedCharacters.includes(char.id)
                      ? 'bg-blue-100 border-blue-500 text-blue-700'
                      : 'bg-white hover:bg-gray-50'
                      }`}
                  >
                    {char.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Order */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium mb-1">Sort Order</label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSortOrder('desc')}
                  className={`p-2 border rounded flex items-center gap-1 ${sortOrder === 'desc'
                    ? 'bg-blue-100 border-blue-500 text-blue-700'
                    : 'bg-white hover:bg-gray-50'
                    }`}
                >
                  <i className="ri-sort-desc"></i> Newest
                </button>
                <button
                  onClick={() => setSortOrder('asc')}
                  className={`p-2 border rounded flex items-center gap-1 ${sortOrder === 'asc'
                    ? 'bg-blue-100 border-blue-500 text-blue-700'
                    : 'bg-white hover:bg-gray-50'
                    }`}
                >
                  <i className="ri-sort-asc"></i> Oldest
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stories List */}
        {loading ? (
          <div className="text-center py-8">
            <i className="ri-loader-4-line animate-spin text-2xl text-blue-500"></i>
            <p className="mt-2 text-gray-600">Loading stories...</p>
          </div>
        ) : stories.length === 0 ? (
          <div className="text-center py-8 bg-white rounded-lg shadow">
            <i className="ri-emotion-sad-line text-2xl text-gray-400"></i>
            <p className="mt-2 text-gray-600">No stories found with the selected filters.</p>
            <button
              onClick={() => {
                setSelectedCharacters(['all']);
                setSelectedCategory('all');
              }}
              className="mt-2 text-blue-500 hover:text-blue-700 flex items-center justify-center mx-auto"
            >
              <i className="ri-arrow-go-back-line mr-1"></i> Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stories.map((story) => (
              <div key={story.id} className="relative">
                {/* Upload Date Overlay */}
                <div className="absolute top-1 left-1 bg-white/80 text-[10px] text-gray-800 px-1 py-0 rounded-[3px] shadow z-10">
                  <i className="ri-calendar-line mr-1"></i>
                  {formatDate(story.uploadDate)}
                </div>

                {/* Native Video */}
                <video
                  controls
                  src={story.videoUrl}
                  className="w-full h-auto block"
                />
              </div>
            ))}
          </div>


        )}
      </div>
    </div>
  );
}