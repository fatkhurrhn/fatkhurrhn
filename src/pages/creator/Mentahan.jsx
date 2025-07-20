import React, { useState } from 'react';
import { videoCategories } from '../../data/VidMentahan';

export default function Mentahan() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Fungsi untuk mendownload video
  const downloadVideo = async (videoUrl, videoTitle) => {
    try {
      const response = await fetch(videoUrl);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `${videoTitle}.mp4`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error downloading video:', error);
    }
  };

  // Filter video berdasarkan kategori dan pencarian
  const filteredCategories = videoCategories.filter(category => {
    return selectedCategory === 'Semua' || category.name === selectedCategory;
  });

  const filteredVideos = filteredCategories.flatMap(category => {
    return category.videos.filter(video => {
      return video.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  });

  // Daftar kategori unik
  const allCategories = ['Semua', ...new Set(videoCategories.map(cat => cat.name))];

  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Video Mentahan</h1>
        
        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Cari video..."
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <i className="ri-search-line absolute left-3 top-3.5 text-gray-400"></i>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {allCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      {/* Video Player Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-md">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              aria-label="Tutup video"
            >
              <i className="ri-close-circle-line text-3xl"></i>
            </button>
            <div className="aspect-w-9 aspect-h-16">
              <video 
                controls 
                autoPlay 
                className="w-full h-full object-cover rounded-lg"
                src={activeVideo}
              >
                Browser Anda tidak mendukung pemutaran video.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredVideos.map(video => (
          <div 
            key={video.id} 
            className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
          >
            {/* Video Preview */}
            <div className="relative aspect-w-9 aspect-h-16 bg-gray-100">
              <button
                onClick={() => setActiveVideo(video.url)}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Putar video"
              >
                <video 
                  src={video.url}
                  muted
                  loop
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all"></div>
                <i className="ri-play-circle-line text-5xl text-white opacity-80 group-hover:opacity-100 transition-opacity absolute"></i>
              </button>
            </div>
            
            {/* Video Info */}
            <div className="p-4">
              <h3 className="font-medium mb-2 line-clamp-1">{video.title}</h3>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">9:16</span>
                <button
                  onClick={() => downloadVideo(video.url, video.title)}
                  className="flex items-center gap-1 px-3 py-1.5 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition-colors"
                >
                  <i className="ri-download-line"></i>
                  <span>Unduh</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <i className="ri-video-line text-5xl text-gray-300 mb-4"></i>
          <p className="text-gray-500">Tidak ada video yang ditemukan</p>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Koleksi Video Mentahan. Semua video gratis untuk digunakan.</p>
      </footer>
    </div>
  );
}