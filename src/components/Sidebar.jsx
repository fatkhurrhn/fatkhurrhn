import React from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Manage Animes", path: "/dashboard/manage-animes" },
  { label: "Manage Reels", path: "/dashboard/animes/manage-reels" },
  { label: "Manage Projects", path: "/dashboard/frontdev/manage-projects" },
  { label: "Manage Certificates", path: "/dashboard/frontdev/manage-certificates" },
  { label: "Manage Blogs", path: "/dashboard/frontdev/manage-blogs" },
  { label: "Manage Quotes", path: "/dashboard/creator/manage-quotes" },
  { label: "Manage Audio", path: "/dashboard/creator/manage-audio" },
];

export default function Sidebar({ onClose }) {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full p-6 z-50 shadow-md fixed md:static md:translate-x-0 transition-transform">
      {/* Header Admin Panel + Close Button */}
      <div className="flex items-center justify-between mb-6 md:block">
        <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
        {onClose && (
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl md:hidden"
          >
            &times;
          </button>
        )}
      </div>

      <ul className="space-y-1">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              onClick={onClose} // Tutup sidebar jika mobile
              className={`block px-4 py-2 rounded-lg transition ${
                location.pathname === item.path
                  ? "bg-gray-200 text-gray-900 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
