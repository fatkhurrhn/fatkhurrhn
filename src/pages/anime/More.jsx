import React from 'react';
import { Link } from 'react-router-dom';

const More = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Lainnya
      </h1>

      <div className="space-y-4">
        {/* About Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Tentang AnimeVault
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AnimeVault adalah aplikasi untuk mengelola koleksi anime yang telah Anda tonton. 
            Dengan fitur yang lengkap, Anda dapat mencatat anime favorit, melacak progress menonton, 
            dan mengorganisir koleksi berdasarkan genre dan status.
          </p>
          <div className="flex items-center text-blue-600">
            <i className="ri-tv-2-line text-2xl mr-2"></i>
            <span className="font-medium">Version 1.0.0</span>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Fitur Utama
          </h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <i className="ri-checkbox-circle-line text-green-500 mr-3"></i>
              <span className="text-gray-700">Pencatatan koleksi anime</span>
            </div>
            <div className="flex items-center">
              <i className="ri-search-line text-blue-500 mr-3"></i>
              <span className="text-gray-700">Pencarian dan filter canggih</span>
            </div>
            <div className="flex items-center">
              <i className="ri-bookmark-line text-purple-500 mr-3"></i>
              <span className="text-gray-700">Kategorisasi berdasarkan genre</span>
            </div>
            <div className="flex items-center">
              <i className="ri-time-line text-orange-500 mr-3"></i>
              <span className="text-gray-700">Pelacakan status menonton</span>
            </div>
            <div className="flex items-center">
              <i className="ri-play-circle-line text-red-500 mr-3"></i>
              <span className="text-gray-700">Video player terintegrasi</span>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Statistik
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">12</div>
              <div className="text-gray-600">Total Anime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">7</div>
              <div className="text-gray-600">Selesai Ditonton</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">5</div>
              <div className="text-gray-600">Sedang Ditonton</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Aksi Cepat
          </h2>
          <div className="space-y-3">
            <Link 
              to="/search" 
              className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <i className="ri-search-line text-xl text-gray-600 mr-3"></i>
              <span className="text-gray-700">Cari Anime</span>
              <i className="ri-arrow-right-line text-gray-400 ml-auto"></i>
            </Link>
            <Link 
              to="/genre" 
              className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <i className="ri-bookmark-line text-xl text-gray-600 mr-3"></i>
              <span className="text-gray-700">Jelajahi Genre</span>
              <i className="ri-arrow-right-line text-gray-400 ml-auto"></i>
            </Link>
            <Link 
              to="/status" 
              className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <i className="ri-time-line text-xl text-gray-600 mr-3"></i>
              <span className="text-gray-700">Status Menonton</span>
              <i className="ri-arrow-right-line text-gray-400 ml-auto"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;