import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/anime/NavigationWrapper.jsx';

const More = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Nav />
      <div className="container mx-auto px-4 max-w-4xl pb-20 pt-4">

        <div className="space-y-4">
          {/* About Section */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Tentang KoleksiAnimeKu
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
              KoleksiAnimeKu adalah aplikasi untuk mengelola koleksi anime pribadi yang telah Fathur tonton hhe.
              Dengan fitur yang lengkap, seperti dapat mencatat anime favorit, melacak progress menonton,
              dan mengorganisir koleksi berdasarkan genre dan status.
            </p>
            <div className="flex items-center text-blue-600">
              <i className="ri-tv-2-line text-2xl mr-2"></i>
              <span className="font-medium">Version 1.0.0</span>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-lg shadow-md p-4">
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
          <div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;