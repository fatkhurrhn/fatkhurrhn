import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './NavigationWrapper.jsx';
import BottomNavigation from './BottomNavigation.jsx';

const Layout = ({ children }) => {
  const location = useLocation();
  const isEpisodePage = location.pathname.includes('/episode/');

  return (
    <div className="min-h-screen bg-gray-50">
      {!isEpisodePage && <Navbar />}
      <main className={`${!isEpisodePage ? 'pt-16 pb-20' : 'pb-20'} md:pb-8`}>
        {children}
      </main>
      {!isEpisodePage && <BottomNavigation />}
    </div>
  );
};

export default Layout;