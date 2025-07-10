import React, { useState, useEffect, useRef } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import Nav from '../../components/anime/NavigationWrapper.jsx';

export default function Story() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(null);
  const [pausedVideo, setPausedVideo] = useState(null);
  const [thumbnails, setThumbnails] = useState({});
  const videoRefs = useRef([]);
  const thumbnailVideoRefs = useRef([]);
  const reelsContainerRef = useRef(null);

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

  // Generate thumbnail dari video
  const generateThumbnail = (videoElement, id) => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      const ctx = canvas.getContext('2d');
      
      // Coba ambil frame di detik ke-5
      videoElement.currentTime = 7;
      
      videoElement.onseeked = () => {
        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        const thumbnailUrl = canvas.toDataURL('image/jpeg');
        resolve(thumbnailUrl);
      };
      
      videoElement.onerror = () => {
        // Fallback ke frame pertama jika gagal
        videoElement.currentTime = 0;
        videoElement.onseeked = () => {
          ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
          const thumbnailUrl = canvas.toDataURL('image/jpeg');
          resolve(thumbnailUrl);
        };
      };
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
        
        // Generate thumbnails setelah video siap
        setTimeout(() => {
          const newThumbnails = {};
          thumbnailVideoRefs.current.forEach(async (video, index) => {
            if (video && storiesData[index]) {
              try {
                const thumbnail = await generateThumbnail(video, storiesData[index].id);
                newThumbnails[storiesData[index].id] = thumbnail;
                setThumbnails({...newThumbnails});
              } catch (error) {
                console.error('Error generating thumbnail:', error);
              }
            }
          });
        }, 500);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stories:', error);
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  // Handle video click
  const handleVideoClick = (story, index) => {
    setSelectedStoryIndex(index);
    document.body.style.overflow = 'hidden';
  };

  // Scroll to selected video when modal opens
  useEffect(() => {
    if (selectedStoryIndex !== null && reelsContainerRef.current) {
      const container = reelsContainerRef.current;
      const videoElement = container.children[selectedStoryIndex];
      
      if (videoElement) {
        requestAnimationFrame(() => {
          container.scrollTo({
            top: videoElement.offsetTop,
            behavior: 'instant'
          });
          
          const video = videoRefs.current[selectedStoryIndex];
          if (video) {
            video.play().catch(e => console.log("Autoplay prevented:", e));
          }
        });
      }
    }
  }, [selectedStoryIndex]);

  // Close modal
  const closeModal = () => {
    setSelectedStoryIndex(null);
    setPausedVideo(null);
    document.body.style.overflow = 'auto';
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
    
    const videos = container.querySelectorAll('.reel-video-container');
    videos.forEach((videoEl, index) => {
      const rect = videoEl.getBoundingClientRect();
      const videoTop = rect.top - container.getBoundingClientRect().top + scrollPosition;
      const videoBottom = videoTop + rect.height;
      
      if (videoTop <= scrollPosition + containerHeight * 0.5 && 
          videoBottom >= scrollPosition + containerHeight * 0.5) {
        const video = videoRefs.current[index];
        if (video && pausedVideo !== index) {
          video.play().catch(e => console.log("Autoplay prevented:", e));
        }
      } else {
        const video = videoRefs.current[index];
        if (video) video.pause();
      }
    });
  };

  // Toggle play/pause on video click
  const togglePlayPause = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play();
      setPausedVideo(null);
    } else {
      video.pause();
      setPausedVideo(index);
    }
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
                className="relative aspect-[9/16] cursor-pointer group"
                onClick={() => handleVideoClick(story, index)}
              >
                {/* Hidden video element for thumbnail generation */}
                <video
                  ref={el => thumbnailVideoRefs.current[index] = el}
                  src={story.videoUrl}
                  className="hidden"
                  crossOrigin="anonymous"
                />
                
                {/* Thumbnail container */}
                <div className="w-full h-full overflow-hidden rounded-lg bg-gray-200 relative">
                  {thumbnails[story.id] ? (
                    <img 
                      src={thumbnails[story.id]} 
                      alt="Thumbnail" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-300 animate-pulse"></div>
                  )}
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                      <i className="ri-play-fill text-2xl text-black"></i>
                    </div>
                  </div>
                </div>
                
                {/* Video info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent text-white text-sm">
                  <p className="font-medium truncate">{story.title}</p>
                  <p className="text-xs opacity-80">{formatDate(story.uploadDate)}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Reels Modal */}
        {selectedStoryIndex !== null && (
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
              <div className="w-8"></div>
            </div>

            {/* Reels Container */}
            <div 
              ref={reelsContainerRef}
              className="flex-1 overflow-y-auto snap-y snap-mandatory"
              onScroll={handleScroll}
            >
              {stories.map((story, index) => (
                <div 
                  key={story.id} 
                  className="h-full w-full snap-start flex items-center justify-center relative reel-video-container"
                  onClick={() => togglePlayPause(index)}
                >
                  <div className="relative w-full max-w-md mx-auto h-full flex items-center justify-center">
                    {/* Video */}
                    <video
                      ref={el => videoRefs.current[index] = el}
                      src={story.videoUrl}
                      className="max-h-full max-w-full object-contain"
                      autoPlay={selectedStoryIndex === index}
                      playsInline
                      loop
                      muted={false}
                    />

                    {/* Pause indicator */}
                    {pausedVideo === index && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center">
                          <i className="ri-pause-fill text-white text-3xl"></i>
                        </div>
                      </div>
                    )}

                    {/* Video Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                      <h3 className="font-bold text-lg">{story.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2 text-sm">
                        <span className="bg-white/20 px-2 py-1 rounded-full">
                          {story.category}
                        </span>
                        {story.characters.map(char => (
                          <span key={char} className="bg-white/20 px-2 py-1 rounded-full">
                            #{char}
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