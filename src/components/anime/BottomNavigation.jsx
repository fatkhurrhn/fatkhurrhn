// BottomNavigation.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: 'ri-home-4-line', activeIcon: 'ri-home-4-fill', label: 'Home' },
    { path: '/genre', icon: 'ri-bookmark-line', activeIcon: 'ri-bookmark-fill', label: 'Genre' },
    { path: '/search', icon: 'ri-search-line', activeIcon: 'ri-search-fill', label: 'Search' },
    { path: '/status', icon: 'ri-time-line', activeIcon: 'ri-time-fill', label: 'Status' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-white shadow-lg border-t border-gray-100">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className="nav-item flex flex-col items-center justify-center text-xs transition-colors"
            >
              <i
                className={`${isActive ? item.activeIcon : item.icon} text-xl mb-1 ${
                  isActive ? 'text-blue-600' : 'text-gray-500'
                }`}
              ></i>
              <span className={isActive ? 'text-blue-600 font-medium' : 'text-gray-600'}>
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