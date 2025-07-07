import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: 'ri-home-line', label: 'Home' },
    { path: '/genre', icon: 'ri-bookmark-line', label: 'Genre' },
    { path: '/search', icon: 'ri-search-line', label: 'Search' },
    { path: '/status', icon: 'ri-time-line', label: 'Status' },
    { path: '/more', icon: 'ri-more-line', label: 'More' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bottom-nav z-50">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item flex flex-col items-center justify-center text-xs ${
              location.pathname === item.path ? 'active' : 'text-gray-600'
            }`}
          >
            <i className={`${item.icon} text-xl mb-1`}></i>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;