// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <i className="ri-play-circle-line text-2xl text-blue-600"></i>
            <span className="text-xl font-bold text-gray-800">AnineVault</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/genre" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Genre
            </Link>
            <Link to="/search" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Search
            </Link>
            <Link to="/status" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Status
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;