import React, { useState, useEffect, useRef } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import Nav from '../../components/anime/NavigationWrapper.jsx';

export default function Story() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStory, setSelectedStory] = useState(null);
  const videoRefs = useRef([]);

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

  // Ambil data dari Firestore
  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        const q = query(collection(db, 'anime-story'), orderBy('uploadDate', 'desc'));
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
  }, []);

  // Handle video click
  const handleVideoClick = (story) => {
    setSelectedStory(story);
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setSelectedStory(null);
    document.body.style.overflow = 'auto';
    // Pause all videos when closing modal
    videoRefs.current.forEach(video => {
      if (video) video.pause();
    });
  };

  // Handle scroll in modal
  const handleScroll = (e) => {
    e.preventDefault();
    const container = e.currentTarget;
    const scrollPosition = container.scrollTop;
    const containerHeight = container.clientHeight;
    
    // Find which video is currently in view
    const videos = container.querySelectorAll('.reel-video-container');
    videos.forEach((videoEl, index) => {
      const rect = videoEl.getBoundingClientRect();
      const videoTop = rect.top - container.getBoundingClientRect().top + scrollPosition;
      const videoBottom = videoTop + rect.height;
      
      // If at least 50% of the video is visible
      if (videoTop <= scrollPosition + containerHeight * 0.5 && 
          videoBottom >= scrollPosition + containerHeight * 0.5) {
        // Play the video that's in view
        const video = videoRefs.current[index];
        if (video) {
          video.play().catch(e => console.log("Autoplay prevented:", e));
        }
      } else {
        // Pause other videos
        const video = videoRefs.current[index];
        if (video) video.pause();
      }
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Nav />
      <div className="container mx-auto px-4 pb-20">
        <h1 className="text-3xl font-bold text-center py-2 pt-3">Anime Stories</h1>

        {/* Stories Grid */}
        {loading ? (
          <div className="text-center py-8">
            <i className="ri-loader-4-line animate-spin text-2xl text-blue-500"></i>
            <p className="mt-2 text-gray-600">Loading stories...</p>
          </div>
        ) : stories.length === 0 ? (
          <div className="text-center py-8 bg-white rounded-lg shadow">
            <i className="ri-emotion-sad-line text-2xl text-gray-400"></i>
            <p className="mt-2 text-gray-600">No stories found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {stories.map((story, index) => (
              <div 
                key={story.id} 
                className="relative aspect-[9/16] cursor-pointer"
                onClick={() => handleVideoClick(story)}
              >
                <video
                  src={story.videoUrl}
                  className="w-full h-full object-cover rounded-lg"
                  muted
                  loop
                  playsInline
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent text-white text-sm">
                  <p className="font-medium truncate">{story.title}</p>
                  <p className="text-xs opacity-80">{formatDate(story.uploadDate)}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Reels Modal */}
        {selectedStory && (
          <div className="fixed inset-0 bg-black z-50 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 text-white">
              <button 
                onClick={closeModal}
                className="text-2xl"
              >
                <i className="ri-close-line"></i>
              </button>
              <h2 className="text-xl font-bold">Anime Stories</h2>
              <div className="w-8"></div> {/* Spacer for balance */}
            </div>

            {/* Reels Container */}
            <div 
              className="flex-1 overflow-y-auto snap-y snap-mandatory"
              onScroll={handleScroll}
            >
              {stories.map((story, index) => (
                <div 
                  key={story.id} 
                  className="h-full w-full snap-start flex items-center justify-center relative reel-video-container"
                >
                  <div className="relative w-full max-w-md mx-auto h-full flex items-center justify-center">
                    {/* Video */}
                    <video
                      ref={el => videoRefs.current[index] = el}
                      src={story.videoUrl}
                      className="max-h-full max-w-full object-contain"
                      controls
                      autoPlay={selectedStory.id === story.id}
                      playsInline
                    />

                    {/* Video Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                      <h3 className="font-bold text-lg">{story.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2 text-sm">
                        <span className="bg-white/20 px-2 py-1 rounded-full">
                          {story.category}
                        </span>
                        {story.characters.map(char => (
                          <span key={char} className="bg-white/20 px-2 py-1 rounded-full">
                            {char}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs mt-2 opacity-80">
                        {formatDate(story.uploadDate)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}