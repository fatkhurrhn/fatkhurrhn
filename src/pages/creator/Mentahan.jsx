import React, { useState, useEffect } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase';
import NavWrapper from '../../components/creator/NavCreator';
import Footer from '../../components/creator/Footer';
import ReactPlayer from 'react-player'; // For better audio player

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
      <div className="bg-white min-h-screen text-black">
        <NavWrapper />
        <section className="max-w-4xl mx-auto px-5 pt-[15px] pb-10 text-center py-20">
          <div className="animate-bounce">
            <i className="ri-music-2-line text-4xl"></i>
          </div>
          <p className="mt-3 font-mono">Loading audio library...</p>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen text-black">
      <NavWrapper />
      <section className="max-w-4xl mx-auto px-5 pt-[15px] pb-10">
        <h1 className="text-3xl font-bold mb-6 text-center font-serif">Audio Library</h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-sm border border-black ${selectedCategory === 'all' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory('quote_random')}
            className={`px-4 py-2 rounded-full text-sm border border-black ${selectedCategory === 'quote_random' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
          >
            Quote Random
          </button>
          <button
            onClick={() => setSelectedCategory('islamic')}
            className={`px-4 py-2 rounded-full text-sm border border-black ${selectedCategory === 'islamic' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
          >
            Islamic
          </button>
          <button
            onClick={() => setSelectedCategory('india')}
            className={`px-4 py-2 rounded-full text-sm border border-black ${selectedCategory === 'india' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
          >
            India
          </button>
          <button
            onClick={() => setSelectedCategory('arabic')}
            className={`px-4 py-2 rounded-full text-sm border border-black ${selectedCategory === 'arabic' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
          >
            Arabic
          </button>
        </div>

        {/* Audio List */}
        <div className="grid gap-6">
          {filteredAudios.length > 0 ? (
            filteredAudios.map((audio) => (
              <div 
                key={audio.id} 
                className="bg-white p-5 rounded-xl border border-gray-200 hover:border-black transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg font-mono">{audio.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="inline-block px-2 py-1 text-xs rounded-full border border-black">
                        {getCategoryName(audio.category)}
                      </span>
                      {audio.createdAt && (
                        <span className="text-xs text-gray-500">
                          {new Date(audio.createdAt.seconds * 1000).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2 ml-3">
                    <button
                      onClick={() => handlePlay(audio.id)}
                      className="p-2 rounded-full border border-black hover:bg-black hover:text-white transition-colors"
                      aria-label={currentlyPlaying === audio.id ? 'Pause' : 'Play'}
                    >
                      {currentlyPlaying === audio.id ? (
                        <i className="ri-pause-fill"></i>
                      ) : (
                        <i className="ri-play-fill"></i>
                      )}
                    </button>
                    <button
                      onClick={() => handleDownload(audio.audioUrl, audio.title)}
                      className="p-2 rounded-full border border-black hover:bg-black hover:text-white transition-colors"
                      aria-label="Download"
                    >
                      <i className="ri-download-2-fill"></i>
                    </button>
                  </div>
                </div>
                
                {/* Custom Audio Player */}
                {currentlyPlaying === audio.id && (
                  <div className="mt-4">
                    <ReactPlayer
                      url={audio.audioUrl}
                      playing={true}
                      controls={true}
                      width="100%"
                      height="40px"
                      onEnded={() => setCurrentlyPlaying(null)}
                      config={{
                        file: {
                          attributes: {
                            controlsList: 'nodownload' // Hide download button
                          }
                        }
                      }}
                    />
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="animate-pulse">
                <i className="ri-music-2-line text-5xl mb-3"></i>
              </div>
              <p className="font-mono">No audios found in this category</p>
              {selectedCategory !== 'all' && (
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 font-mono"
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