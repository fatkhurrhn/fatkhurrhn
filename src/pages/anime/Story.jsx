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
  const reelsContainerRef = useRef(null);
  const thumbnailPromises = useRef({});

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

  // Generate thumbnail from video
  const generateThumbnail = (videoUrl, id) => {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      video.crossOrigin = 'anonymous';
      video.src = videoUrl;
      video.preload = 'metadata';

      let timeout;

      const cleanup = () => {
        video.removeEventListener('seeked', onSeeked);
        video.removeEventListener('error', onError);
        clearTimeout(timeout);
      };

      const onSeeked = () => {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 360;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const thumbnailUrl = canvas.toDataURL('image/jpeg');
        if (thumbnailUrl && !thumbnailUrl.includes('data:,')) {
          cleanup();
          resolve(thumbnailUrl);
        } else {
          // Try fallback to first frame
          video.currentTime = 0;
          video.addEventListener('seeked', () => {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            cleanup();
            resolve(canvas.toDataURL('image/jpeg'));
          }, { once: true });
        }
      };

      const onError = () => {
        cleanup();
        resolve(null);
      };

      video.addEventListener('seeked', onSeeked, { once: true });
      video.addEventListener('error', onError, { once: true });

      // Set timeout if video doesn't load
      timeout = setTimeout(() => {
        cleanup();
        resolve(null);
      }, 5000);

      video.currentTime = Math.min(5, video.duration || 5);
    });
  };

  // Fetch data from Firestore
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

        // Generate thumbnails in parallel with concurrency control
        const thumbnailResults = {};
        const MAX_CONCURRENT = 3;
        const batches = [];

        for (let i = 0; i < storiesData.length; i += MAX_CONCURRENT) {
          batches.push(storiesData.slice(i, i + MAX_CONCURRENT));
        }

        for (const batch of batches) {
          await Promise.all(
            batch.map(async (story) => {
              try {
                if (!thumbnailPromises.current[story.id]) {
                  thumbnailPromises.current[story.id] = generateThumbnail(story.videoUrl, story.id);
                }
                thumbnailResults[story.id] = await thumbnailPromises.current[story.id];
                setThumbnails(prev => ({ ...prev, [story.id]: thumbnailResults[story.id] }));
              } catch (error) {
                console.error('Error generating thumbnail:', error);
                thumbnailResults[story.id] = null;
              }
            })
          );
        }

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
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {stories.map((story, index) => (
              <div
                key={story.id}
                className="relative aspect-[9/16] cursor-pointer group"
                onClick={() => handleVideoClick(index)}
              >
                {/* Thumbnail container */}
                <div className="w-full h-full overflow-hidden rounded-lg bg-gray-200 relative">
                  {thumbnails[story.id] ? (
                    <img
                      src={thumbnails[story.id]}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/default-thumbnail.jpg';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 animate-pulse flex items-center justify-center">
                      <i className="ri-film-line text-4xl text-gray-500"></i>
                    </div>
                  )}

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                      <i className="ri-play-fill text-2xl text-black"></i>
                    </div>
                  </div>

                  {/* Duration badge */}
                  {story.duration && (
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                      {story.duration}
                    </div>
                  )}
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
          <div className="fixed inset-0 bg-black z-50">
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
                  {/* Video Container */}
                  <div className="relative w-full h-full max-w-md mx-auto flex items-center justify-center">
                    {/* Video - maintains original aspect ratio */}
                    <video
                      ref={el => videoRefs.current[index] = el}
                      src={story.videoUrl}
                      className={`max-h-full ${story.aspectRatio === '1:1' ? 'max-w-[80%] aspect-square' : 'max-w-full'} object-contain`}
                      autoPlay={selectedStoryIndex === index}
                      playsInline
                      loop
                      muted={false}
                    />

                    {/* Header Overlay */}
                    <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent text-white z-10">
                      <div className="flex items-center justify-between">
                        <button
                          onClick={closeModal}
                          className="text-2xl"
                        >
                          <i className="ri-close-line"></i>
                        </button>
                        <h2 className="text-xl font-bold">Anime Reels</h2>
                        <div className="w-8"></div>
                      </div>
                    </div>

                    {/* Pause indicator */}
                    {pausedVideo === index && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center">
                          <i className="ri-play-fill text-white text-3xl"></i>
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
                        {story.characters?.map(char => (
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