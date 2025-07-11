import React, { useState, useEffect, useRef } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import Nav from '../../components/anime/NavigationWrapper.jsx';

export default function Story() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(null);
  const [pausedVideo, setPausedVideo] = useState(null);
  const videoRefs = useRef([]);
  const reelsContainerRef = useRef(null);

  // Format date
  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate();
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Fetch data from Firestore
  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        const q = query(collection(db, 'anime-story'), orderBy('uploadDate', 'desc'));
        const querySnapshot = await getDocs(q);
        const storiesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

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
  const handleVideoClick = (index) => {
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

  // Handle video download
  const handleDownload = async (videoUrl, title) => {
    try {
      const downloadBtn = document.querySelector('.download-btn');
      if (downloadBtn) {
        downloadBtn.innerHTML = '<i class="ri-loader-4-line animate-spin text-xl"></i>';
      }

      const response = await fetch(videoUrl);
      if (!response.ok) throw new Error('Failed to fetch video');

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = title ? `${title.replace(/[^a-z0-9]/gi, '_')}.mp4` : 'anime-story.mp4';
      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(blobUrl);
      document.body.removeChild(a);

      if (downloadBtn) {
        downloadBtn.innerHTML = '<i class="ri-download-line text-xl"></i>';
      }
    } catch (error) {
      console.error('Download error:', error);
      window.open(videoUrl, '_blank');

      const downloadBtn = document.querySelector('.download-btn');
      if (downloadBtn) {
        downloadBtn.innerHTML = '<i class="ri-download-line text-xl"></i>';
      }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Nav />
      <div className="container max-w-4xl mx-auto px-4 pb-20">
        <h1 className="text-3xl font-bold text-center py-2 pt-3">Anime Reels</h1>
        <hr className="pt-2 pb-2" />
        {/* Stories Grid */}
        {loading ? (
          <div className="text-center py-8">
            <i className="ri-loader-4-line animate-spin text-2xl text-blue-500"></i>
            <p className="mt-2 text-gray-600">Loading reels...</p>
          </div>
        ) : stories.length === 0 ? (
          <div className="text-center py-8 bg-white rounded-lg shadow">
            <i className="ri-emotion-sad-line text-2xl text-gray-400"></i>
            <p className="mt-2 text-gray-600">No stories found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {stories.map((story, index) => (
              <div
                key={story.id}
                className="relative aspect-[9/16] cursor-pointer group"
                onClick={() => handleVideoClick(index)}
              >
                {/* Thumbnail container - now using actual thumbnail */}
                <div className="w-full h-full overflow-hidden bg-gray-200 relative">
                  {story.thumbnail ? (
                    <img
                      src={story.thumbnail}
                      alt={story.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x500?text=No+Thumbnail';
                        e.target.className = 'w-full h-full object-contain bg-gray-300 p-4';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                      <i className="ri-film-line text-4xl text-gray-500"></i>
                    </div>
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
          <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            {/* Reels Container */}
            <div
              ref={reelsContainerRef}
              className="h-full w-full overflow-y-auto snap-y snap-mandatory relative"
              onScroll={handleScroll}
            >
              {stories.map((story, index) => (
                <div
                  key={story.id}
                  className="h-screen w-full snap-start relative reel-video-container flex items-center justify-center"
                  onClick={() => togglePlayPause(index)}
                >
                  {/* Video Container - now with dynamic aspect ratio */}
                  <div className="relative flex items-center justify-center h-full w-full">
                    {/* Video with original aspect ratio */}

                    {/* <div className="relative" style={{ width: '100%', maxHeight: '100vh' }}> */}
                    <div className="relative bg-black flex items-center justify-center">
                      {/* <div className="relative w-full aspect-[9/16] max-h-[90vh] bg-black flex items-center justify-center"></div> */}
                      <video
                        ref={el => videoRefs.current[index] = el}
                        src={story.videoUrl}
                        className="max-h-[100vh] max-w-full"
                        autoPlay={selectedStoryIndex === index}
                        playsInline
                        loop
                        muted={false}
                        onLoadedMetadata={(e) => {
                          // This will help position overlays correctly based on video aspect ratio
                          const video = e.target;
                          const aspectRatio = video.videoWidth / video.videoHeight;
                          // You might want to store this aspect ratio in state if needed
                        }}
                      />

                      {/* Header Overlay - positioned relative to video */}
                      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent text-white z-10">
                        <div className="flex justify-end">
                          <button
                            onClick={closeModal}
                            className="text-2xl"
                          >
                            <i className="ri-close-line"></i>
                          </button>
                        </div>
                      </div>

                      {/* Download Button - Floating */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownload(story.videoUrl, story.title);
                        }}
                        className="download-btn absolute bottom-[16px] right-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 z-10 transition-all flex items-center justify-center"
                        title="Download video"
                      >
                        <i className="ri-download-line text-xl"></i>
                      </button>

                      {/* Pause indicator */}
                      {pausedVideo === index && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center">
                            <i className="ri-play-fill text-white text-3xl"></i>
                          </div>
                        </div>
                      )}

                      {/* Video Info - positioned at bottom of video */}
                      <div className="absolute bottom-0 left-0 right-0 px-3 py-3 bg-gradient-to-t from-black/70 to-transparent text-white">
                        <h3 className="font-bold text-[24px]">{story.title}</h3>
                        <div className="flex flex-wrap gap-1 mt-[-2px] text-sm">
                          {story.hastag?.map(tag => (
                            <span key={tag} className="text-[14px]">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-[10px] mt-0 opacity-80">
                          {formatDate(story.uploadDate)}
                        </p>
                      </div>
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