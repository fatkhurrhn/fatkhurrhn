import React, { useState } from 'react';
import { videoCategories } from '../../data/VidMentahan';

export default function Mentahan() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isDownloading, setIsDownloading] = useState(null);

  const downloadVideo = async (videoUrl, videoId) => {
    setIsDownloading(videoId);
    try {
      const response = await fetch(videoUrl);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `mentahan-${videoId}.mp4`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download error:', error);
    } finally {
      setIsDownloading(null);
    }
  };

  const allCategories = ['All Categories', ...videoCategories.map(cat => cat.name)];
  const filteredVideos = selectedCategory === 'All Categories' 
    ? videoCategories.flatMap(cat => cat.videos)
    : videoCategories.find(cat => cat.name === selectedCategory)?.videos || [];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Video Mentahan</h1>
            <p className="text-gray-600">Koleksi video mentahan berkualitas tinggi</p>
          </div>
          
          {/* Category Filter */}
          <div className="relative w-full sm:w-64">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {allCategories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <i className="ri-arrow-down-s-line"></i>
            </div>
          </div>
        </div>

        {/* Video Player Modal */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-2xl">
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <i className="ri-close-circle-fill text-2xl"></i>
              </button>
              <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden shadow-xl">
                <video 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain"
                  src={activeVideo}
                />
              </div>
            </div>
          </div>
        )}

        {/* Video Grid */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredVideos.map(video => (
              <div 
                key={video.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[9/16] bg-gray-100">
                  <video
                    src={video.url}
                    muted
                    loop
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => setActiveVideo(video.url)}
                  />
                  
                  {/* Overlay Controls */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
                    <div className="flex justify-center mt-16">
                      <button
                        onClick={() => setActiveVideo(video.url)}
                        className="text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors"
                        aria-label="Play video"
                      >
                        <i className="ri-play-fill text-xl"></i>
                      </button>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          downloadVideo(video.url, video.id);
                        }}
                        disabled={isDownloading === video.id}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-colors ${
                          isDownloading === video.id 
                            ? 'bg-gray-400 text-white' 
                            : 'bg-white text-gray-800 hover:bg-gray-100'
                        }`}
                      >
                        {isDownloading === video.id ? (
                          <>
                            <i className="ri-loader-4-line animate-spin"></i>
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <i className="ri-download-line"></i>
                            <span>Download</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <i className="ri-video-line text-4xl text-gray-300 mb-3"></i>
            <h3 className="text-lg font-medium text-gray-700">No videos found</h3>
            <p className="text-gray-500 mt-1">Try selecting a different category</p>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Video Mentahan Collsection</p>
        </footer>
      </div>
    </div>
  );
}