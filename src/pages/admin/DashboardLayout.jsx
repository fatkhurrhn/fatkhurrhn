import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import LogoutConfirmModal from "../../components/LogoutConfirmModal";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  const navItems = [
    { to: "manage-animes", label: "Manage Animes" },
    { to: "animes/manage-reels", label: "Manage Reels" },
    { to: "frontdev/manage-projects", label: "Manage Projects" },
    { to: "frontdev/manage-certificates", label: "Manage Certificates" },
    { to: "frontdev/manage-blogs", label: "Manage Blogs" },
    { to: "creator/manage-quotes", label: "Manage Quotes" },
    { to: "creator/manage-audio", label: "Manage Audio" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <LogoutConfirmModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />

      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-sm">
        <div className="p-6 font-bold text-xl">Admin Panel</div>
        <nav className="flex flex-col gap-2 px-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `py-2 px-4 rounded hover:bg-gray-100 ${
                  isActive ? "bg-gray-200 font-semibold" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <button
            onClick={() => setShowLogoutModal(true)}
            className="mt-4 text-left py-2 px-4 text-red-600 hover:bg-red-50 rounded"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
