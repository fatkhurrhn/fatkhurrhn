import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavCreator = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/creator', icon: 'ri-home-4-line', activeIcon: 'ri-home-4-fill', label: 'Home' },
    { path: '/creator/quotes', icon: 'ri-chat-quote-line', activeIcon: 'ri-chat-quote-fill', label: 'Quotes', isNew: true },
    { path: '/creator/store', icon: 'ri-store-line', activeIcon: 'ri-store-fill', label: 'Store' },
    { path: '/creator/mentahan', icon: 'ri-folders-line', activeIcon: 'ri-folders-fill', label: 'Mentahan', isNew: true },
    { path: '/creator/more', icon: 'ri-apps-line', activeIcon: 'ri-apps-fill', label: 'More' },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto max-w-4xl px-3 py-2">
          <div className="flex items-center justify-between">
            {/* Desktop Logo - Hidden di Mobile */}
            <Link to="/animes" className="hidden md:flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-800">storythur</span>
            </Link>

            {/* Mobile Menu Icon - Kiri */}
            <button className="md:hidden text-gray-800 p-2 rounded-lg hover:bg-gray-100">
              <i className="ri-menu-2-line text-xl"></i>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.path} className="relative">
                  <Link
                    to={item.path}
                    className={`text-black hover:text-gray-600 transition-colors font-medium ${
                      location.pathname === item.path ? 'text-gray-600 font-semibold' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.isNew && (
                    <span className="absolute -top-2 -right-3 text-[10px] bg-red-500 text-white rounded-full px-1.5 py-0.5 leading-none font-bold">
                      NEW
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Resumes Button - Kanan (Mobile & Desktop) */}
            <Link
              to="/resume"
              className="text-gray-800 font-medium rounded-lg text-sm px-4 py-2 bg-white border border-gray-200 hover:bg-gray-100"
            >
              Resumes
            </Link>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-white shadow-lg border-t border-gray-100">
        <div className="grid grid-cols-5 h-16" style={{ height: '55px' }}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <div key={item.path} className="relative flex items-center justify-center">
                <Link
                  to={item.path}
                  className="nav-item flex flex-col items-center justify-center text-[11px] transition-colors"
                >
                  <i
                    className={`${isActive ? item.activeIcon : item.icon} text-[22px] ${
                      isActive ? 'text-gray-600' : 'text-gray-500'
                    }`}
                  ></i>
                  <span className={isActive ? 'text-gray-600 font-medium' : 'text-gray-600'}>
                    {item.label}
                  </span>
                </Link>
                {item.isNew && (
                  <span className="absolute top-1 right-[18%] text-[8px] bg-red-500 text-white rounded-full px-0.5 py-0.5 font-bold leading-none">
                    NEW
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Konten halaman dengan padding biar ga ketiban */}
      <main className="pb-[64px]">{children}</main>
    </>
  );
};

export default NavCreator;