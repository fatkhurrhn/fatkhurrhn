import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import LogoutConfirmModal from "./LogoutConfirmModal";

const pageTitles = {
  "/dashboard": "Dashboard",
  "/dashboard/manage-animes": "Manage Animes",
  "/dashboard/animes/manage-reels": "Manage Reels",
  "/dashboard/frontdev/manage-projects": "Manage Projects",
  "/dashboard/frontdev/manage-certificates": "Manage Certificates",
  "/dashboard/frontdev/manage-blogs": "Manage Blogs",
  "/dashboard/creator/manage-quotes": "Manage Quotes",
  "/dashboard/creator/manage-audio": "Manage Audio",
};

export default function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      alert("Logout gagal: " + error.message);
    }
  };

  const currentTitle = pageTitles[location.pathname] || "Dashboard";

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800 relative">
      {/* Sidebar Desktop - FIXED */}
      <div className="hidden md:block fixed left-0 top-0 h-screen z-40">
        <Sidebar />
      </div>

      {/* Sidebar Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay dengan animasi */}
          <div
            className="absolute inset-0 bg-black transition-opacity duration-300"
            style={{
              opacity: sidebarOpen ? 0.5 : 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}
            onClick={() => setSidebarOpen(false)}
          />
          {/* Sidebar Mobile dengan animasi slide */}
          <div className="relative z-50 h-full">
            <div
              className="absolute left-0 top-0 h-full w-64 transform transition-transform duration-300 ease-in-out"
              style={{
                transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)'
              }}
            >
              <Sidebar onClose={() => setSidebarOpen(false)} />
            </div>
          </div>
        </div>
      )}

      {/* Konten dengan margin untuk sidebar desktop */}
      <div className="flex-1 flex flex-col w-full md:ml-64 transition-all duration-300">
        {/* Topbar - Sticky dengan shadow untuk efek depth */}
        <div className="flex items-center justify-between px-4 md:px-6 py-4 bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
          {/* Tombol menu untuk mobile */}
          <button
            className="md:hidden text-xl text-gray-700 hover:text-gray-900 transition-colors duration-200"
            onClick={() => setSidebarOpen(true)}
          >
            <i className="ri-menu-2-line"></i>
          </button>

          <h1 className="text-lg md:text-xl font-semibold text-gray-800">
            {currentTitle}
          </h1>

          <button
            onClick={() => setShowLogoutModal(true)}
            className="text-sm text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 hover:border-red-300 px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-sm flex items-center space-x-2"
          >
            <i className="ri-logout-box-r-line"></i>
            <span>Logout</span>
          </button>
        </div>

        <LogoutConfirmModal
          isOpen={showLogoutModal}
          onClose={() => setShowLogoutModal(false)}
          onConfirm={handleLogout}
        />

        {/* Main Content dengan smooth scroll */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}