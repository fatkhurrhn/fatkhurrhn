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
      {/* Sidebar Desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Sidebar Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setSidebarOpen(false)}
          />
          {/* Sidebar */}
          <div className="relative z-50">
            <Sidebar onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Konten */}
      <div className="flex-1 flex flex-col w-full">
        {/* Topbar */}
        <div className="flex items-center justify-between px-4 md:px-6 py-4 bg-white border-b border-gray-200 sticky top-0 z-30">
          {/* Tombol menu untuk mobile */}
          <button
            className="md:hidden text-xl text-gray-700"
            onClick={() => setSidebarOpen(true)}
          >
            <i className="ri-menu-2-line"></i>
          </button>

          <h1 className="hidden md:block text-xl font-semibold">{currentTitle}</h1>

          <button
            onClick={() => setShowLogoutModal(true)}
            className="text-sm text-red-600 bg-red-100 hover:bg-red-200 px-4 py-2 rounded-md transition"
          >
            Logout
          </button>
        </div>

        <LogoutConfirmModal
          isOpen={showLogoutModal}
          onClose={() => setShowLogoutModal(false)}
          onConfirm={handleLogout}
        />

        <main className="p-4 md:p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
