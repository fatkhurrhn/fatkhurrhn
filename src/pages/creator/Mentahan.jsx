import React, { useState, useEffect } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase';
import NavWrapper from '../../components/creator/NavCreator';
import Footer from '../../components/creator/Footer';

export default function Mentahan() {
  const [audios, setAudios] = useState([]);
  const [filteredAudios, setFilteredAudios] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAudios = async () => {
      try {
        const q = query(collection(db, 'my-audios'));
        const querySnapshot = await getDocs(q);
        const audioList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setAudios(audioList);
        setFilteredAudios(audioList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching audios:', error);
        setLoading(false);
      }
    };

    fetchAudios();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredAudios(audios);
    } else {
      const filtered = audios.filter(audio => audio.category === selectedCategory);
      setFilteredAudios(filtered);
    }
  }, [selectedCategory, audios]);

  const handlePlay = (audioId) => {
    if (currentlyPlaying === audioId) {
      setCurrentlyPlaying(null);
    } else {
      setCurrentlyPlaying(audioId);
    }
  };

  const handleDownload = async (audioUrl, title) => {
    try {
      const response = await fetch(audioUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${title || 'audio'}.mp3`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading audio:', error);
      alert('Download failed. Please try again or check the audio URL.');
    }
  };

  const getCategoryName = (category) => {
    switch (category) {
      case 'quote_random':
        return 'Quote Random';
      case 'islamic':
        return 'Islamic';
      case 'india':
        return 'India';
      case 'arabic':
        return 'Arabic';
      default:
        return category;
    }
  };

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
        <NavWrapper />
        <section className="max-w-4xl mx-auto px-5 pt-[15px] pb-10 text-center py-20">
          <i className="ri-music-2-line text-4xl animate-pulse"></i>
          <p className="mt-3">Loading audio library...</p>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      <NavWrapper />
      <section className="max-w-4xl mx-auto px-5 pt-[15px] pb-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Audio Library</h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-sm ${selectedCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory('quote_random')}
            className={`px-4 py-2 rounded-full text-sm ${selectedCategory === 'quote_random' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            Quote Random
          </button>
          <button
            onClick={() => setSelectedCategory('islamic')}
            className={`px-4 py-2 rounded-full text-sm ${selectedCategory === 'islamic' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            Islamic
          </button>
          <button
            onClick={() => setSelectedCategory('india')}
            className={`px-4 py-2 rounded-full text-sm ${selectedCategory === 'india' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            India
          </button>
          <button
            onClick={() => setSelectedCategory('arabic')}
            className={`px-4 py-2 rounded-full text-sm ${selectedCategory === 'arabic' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            Arabic
          </button>
        </div>

        {/* Audio List */}
        <div className="grid gap-4">
          {filteredAudios.length > 0 ? (
            filteredAudios.map((audio) => (
              <div 
                key={audio.id} 
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg truncate">{audio.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="inline-block px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                        {getCategoryName(audio.category)}
                      </span>
                      {audio.createdAt && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(audio.createdAt.seconds * 1000).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2 ml-3">
                    <button
                      onClick={() => handlePlay(audio.id)}
                      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      aria-label={currentlyPlaying === audio.id ? 'Pause' : 'Play'}
                    >
                      {currentlyPlaying === audio.id ? (
                        <i className="ri-pause-line"></i>
                      ) : (
                        <i className="ri-play-line"></i>
                      )}
                    </button>
                    <button
                      onClick={() => handleDownload(audio.audioUrl, audio.title)}
                      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      aria-label="Download"
                    >
                      <i className="ri-download-line"></i>
                    </button>
                  </div>
                </div>
                
                {/* Audio Player */}
                {currentlyPlaying === audio.id && (
                  <div className="mt-3">
                    <audio
                      controls
                      autoPlay
                      onEnded={() => setCurrentlyPlaying(null)}
                      className="w-full"
                    >
                      <source src={audio.audioUrl} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <i className="ri-music-2-line text-5xl text-gray-400 mb-3"></i>
              <p>No audios found in this category</p>
              {selectedCategory !== 'all' && (
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Show all audios
                </button>
              )}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}