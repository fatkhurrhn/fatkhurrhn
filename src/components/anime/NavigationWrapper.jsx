import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavigationWrapper = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/anime', icon: 'ri-home-4-line', activeIcon: 'ri-home-4-fill', label: 'Home' },
    { path: '/anime/genre', icon: 'ri-bookmark-line', activeIcon: 'ri-bookmark-fill', label: 'Genre' },
    { path: '/anime/search', icon: 'ri-search-line', activeIcon: 'ri-search-fill', label: 'Search' },
    { path: '/anime/status', icon: 'ri-time-line', activeIcon: 'ri-time-fill', label: 'Status' },
    { path: '/anime/more', icon: 'ri-apps-line', activeIcon: 'ri-apps-fill', label: 'More' },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto max-w-[960px] px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <i className="ri-play-circle-line text-2xl text-blue-600"></i>
              <span className="text-xl font-bold text-gray-800">KoleksiAnimeKu</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-gray-600 hover:text-blue-600 transition-colors font-medium ${
                    location.pathname === item.path ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-white shadow-lg border-t border-gray-100">
        <div className="grid grid-cols-5 h-16">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="nav-item flex flex-col items-center justify-center text-[12px] transition-colors"
              >
                <i
                  className={`${isActive ? item.activeIcon : item.icon} text-[18px] ${
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

      {/* Konten halaman dengan padding biar ga ketiban */}
      <main className="pb-[64px]">{children}</main>
    </>
  );
};

export default NavigationWrapper;
