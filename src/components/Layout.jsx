import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import LogoutConfirmModal from "./LogoutConfirmModal";

// Matching path ke nama judul
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
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
          <h1 className="text-xl font-semibold">{currentTitle}</h1>
          <button
            onClick={() => setShowLogoutModal(true)}
            className="text-sm text-red-600 bg-red-100 hover:bg-red-200 px-4 py-2 rounded-md transition"
          >
            Logout
          </button>
        </div>

        {/* Modal Konfirmasi Logout */}
        <LogoutConfirmModal
          isOpen={showLogoutModal}
          onClose={() => setShowLogoutModal(false)}
          onConfirm={handleLogout}
        />

        {/* Konten */}
        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
