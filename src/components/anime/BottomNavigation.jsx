import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/anime', icon: 'ri-home-line', label: 'Home' },
    { path: '/anime/genre', icon: 'ri-bookmark-line', label: 'Genre' },
    { path: '/anime/search', icon: 'ri-search-line', label: 'Search' },
    { path: '/anime/status', icon: 'ri-time-line', label: 'Status' },
    { path: '/anime/more', icon: 'ri-more-line', label: 'More' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-white shadow-lg border-t border-gray-200">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className="nav-item flex flex-col items-center justify-center text-xs"
            >
              <i
                className={`${item.icon} text-xl mb-1 ${
                  isActive ? 'text-blue-500' : 'text-gray-600'
                }`}
              ></i>
              <span className={isActive ? 'text-blue-500' : 'text-gray-600'}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
