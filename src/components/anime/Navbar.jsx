import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <i className="ri-tv-2-line text-2xl text-blue-600"></i>
            <span className="text-xl font-bold text-gray-800">AnimeVault</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/genre" className="text-gray-600 hover:text-blue-600 transition-colors">
              Genre
            </Link>
            <Link to="/search" className="text-gray-600 hover:text-blue-600 transition-colors">
              Search
            </Link>
            <Link to="/status" className="text-gray-600 hover:text-blue-600 transition-colors">
              Status
            </Link>
            <Link to="/more" className="text-gray-600 hover:text-blue-600 transition-colors">
              More
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;