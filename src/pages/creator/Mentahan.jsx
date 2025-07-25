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
          {['all', 'quote_random', 'islamic', 'india', 'arabic'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm border border-black transition-all ${
                selectedCategory === category 
                  ? 'bg-black text-white shadow-md' 
                  : 'hover:bg-gray-100'
              }`}
            >
              {category === 'all' ? 'All' : getCategoryName(category)}
            </button>
          ))}
        </div>

        {/* Audio List */}
        <div className="grid gap-6">
          {filteredAudios.length > 0 ? (
            filteredAudios.map((audio) => (
              <div 
                key={audio.id} 
                className={`bg-white p-5 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all ${
                  currentlyPlaying === audio.id ? 'ring-2 ring-black' : ''
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                        <i className="ri-music-2-line"></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg truncate font-mono">{audio.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="inline-block px-2 py-1 text-xs rounded-full bg-black text-white">
                            {getCategoryName(audio.category)}
                          </span>
                          {audio.createdAt && (
                            <span className="text-xs text-gray-500">
                              {new Date(audio.createdAt.seconds * 1000).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => handlePlay(audio.id)}
                      className={`p-3 rounded-full border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all ${
                        currentlyPlaying === audio.id ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
                      }`}
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
                      className="p-3 rounded-full border border-black bg-white hover:bg-gray-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                      aria-label="Download"
                    >
                      <i className="ri-download-2-fill"></i>
                    </button>
                  </div>
                </div>
                
                {/* Custom Audio Player */}
                {currentlyPlaying === audio.id && (
                  <div className="mt-4">
                    <div className="relative pt-1">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-black h-2 rounded-full" 
                            style={{ width: '0%' }} // You can add progress tracking here
                          ></div>
                        </div>
                        <span className="text-xs font-mono">0:00</span>
                      </div>
                    </div>
                    <audio
                      controls
                      autoPlay
                      onEnded={() => setCurrentlyPlaying(null)}
                      className="w-full mt-3 hidden" // Hide default controls
                    >
                      <source src={audio.audioUrl} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                    <div className="flex items-center justify-between mt-2">
                      <button className="text-sm font-mono hover:underline">
                        <i className="ri-skip-back-line mr-1"></i> 15s
                      </button>
                      <div className="flex items-center gap-3">
                        <button className="p-2 rounded-full hover:bg-gray-100">
                          <i className="ri-volume-up-line"></i>
                        </button>
                        <button className="p-2 rounded-full hover:bg-gray-100">
                          <i className="ri-speed-line"></i>
                        </button>
                      </div>
                      <button className="text-sm font-mono hover:underline">
                        15s <i className="ri-skip-forward-line ml-1"></i>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-16 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4">
                <i className="ri-music-2-line text-2xl"></i>
              </div>
              <p className="font-mono">No audios found in this category</p>
              {selectedCategory !== 'all' && (
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="mt-4 px-4 py-2 bg-black text-white rounded-lg border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
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