import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div>
      {/* Bisa tambahkan Sidebar, Topbar, dll di sini */}
      <header>Admin Navbar</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
