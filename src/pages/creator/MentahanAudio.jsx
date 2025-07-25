import React, { useState, useEffect } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase';
import NavWrapper from '../../components/creator/NavCreator';
import Footer from '../../components/creator/Footer';

export default function MentahanAudio() {
  const [audios, setAudios] = useState([]);
  const [filteredAudios, setFilteredAudios] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [loading, setLoading] = useState(true);
  const [categoryCounts, setCategoryCounts] = useState({});

  // Function to shuffle array (only used once when loading data)
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    const fetchAudios = async () => {
      try {
        const q = query(collection(db, 'my-audios'));
        const querySnapshot = await getDocs(q);
        const audioList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        // Calculate category counts
        const counts = {};
        audioList.forEach(audio => {
          counts[audio.category] = (counts[audio.category] || 0) + 1;
        });
        setCategoryCounts(counts);

        // Shuffle only once when first loading
        const shuffledAudios = shuffleArray(audioList);
        setAudios(shuffledAudios);
        setFilteredAudios(shuffledAudios);
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
      setFilteredAudios([...audios]); // Show all without reshuffling
    } else {
      const filtered = audios.filter(audio => audio.category === selectedCategory);
      setFilteredAudios(filtered); // Show filtered without reshuffling
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
      case 'jawa':
        return 'Song Jawa';
      case 'sound_efect':
        return 'Sound Effect';
      default:
        return category;
    }
  };

  return (
    <div className="bg-white min-h-screen text-gray-800">
      <NavWrapper />
      <section className="max-w-4xl mx-auto px-4 pt-4 pb-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">Audio Library</h1>
          <p className="text-gray-600">Browse and download your favorite audio clips</p>
        </div>

        {/* Category Filter - Horizontal Scroll for Mobile */}
        <div className="mb-8 overflow-x-auto pb-0">
          <div className="flex space-x-2 w-max mx-auto px-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${selectedCategory === 'all' ? 'bg-gray-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              All ({audios.length})
            </button>
            <button
              onClick={() => setSelectedCategory('sound_efect')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${selectedCategory === 'sound_efect' ? 'bg-gray-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Sound Effect ({categoryCounts['sound_efect'] || 0})
            </button>
            <button
              onClick={() => setSelectedCategory('quote_random')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${selectedCategory === 'quote_random' ? 'bg-gray-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Quote Random ({categoryCounts['quote_random'] || 0})
            </button>
            <button
              onClick={() => setSelectedCategory('arabic')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${selectedCategory === 'arabic' ? 'bg-gray-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Arabic ({categoryCounts['arabic'] || 0})
            </button>
            <button
              onClick={() => setSelectedCategory('islamic')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${selectedCategory === 'islamic' ? 'bg-gray-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Islamic ({categoryCounts['islamic'] || 0})
            </button>
            <button
              onClick={() => setSelectedCategory('jawa')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${selectedCategory === 'jawa' ? 'bg-gray-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Song Jawa ({categoryCounts['jawa'] || 0})
            </button>
            <button
              onClick={() => setSelectedCategory('india')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${selectedCategory === 'india' ? 'bg-gray-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              India ({categoryCounts['india'] || 0})
            </button>
          </div>
        </div>

        {/* Audio List */}
        <div className="space-y-2">
          {loading ? (
            <div className="text-center py-12">
              <div className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-600">Loading audio list...</p>
              </div>
            </div>
          ) : filteredAudios.length > 0 ? (
            filteredAudios.map((audio) => (
              <div
                key={audio.id}
                className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between flex-wrap gap-2 sm:gap-4">
                  {/* Left: Title + Category + Date */}
                  <div className="flex items-center gap-1 min-w-0 overflow-hidden">
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900 truncate">
                      {audio.title.split(' ').slice(0, 2).join(' ')}{audio.title.split(' ').length > 2 ? '...' : ''} /
                    </h3>

                    {/* Category */}
                    <div className="flex items-center text-xs text-gray-500 flex-shrink-0">
                      <span className="px-2 py-1 rounded-[5px] bg-gray-100 text-gray-800 font-medium text-xs">
                        {getCategoryName(audio.category)}
                      </span>
                    </div>
                  </div>

                  {/* Right: Buttons */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => handlePlay(audio.id)}
                      className="w-10 h-10 rounded-full bg-gray-600 text-white hover:bg-gray-700 transition-colors flex items-center justify-center"
                      aria-label={currentlyPlaying === audio.id ? 'Pause' : 'Play'}
                    >
                      {currentlyPlaying === audio.id ? (
                        <i className="ri-pause-fill text-xl"></i>
                      ) : (
                        <i className="ri-play-fill text-xl"></i>
                      )}
                    </button>
                    <button
                      onClick={() => handleDownload(audio.audioUrl, audio.title)}
                      className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors flex items-center justify-center"
                      aria-label="Download"
                    >
                      <i className="ri-download-2-line text-xl"></i>
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
                      className="w-full h-10 rounded-[5px]"
                    >
                      <source src={audio.audioUrl} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <i className="ri-music-2-line text-5xl text-gray-400 mb-4"></i>
              <p className="text-gray-600 mb-4">No audios found in this category</p>
              {selectedCategory !== 'all' && (
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="px-5 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-sm"
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