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

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-8">Admin Panel</h2>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
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
