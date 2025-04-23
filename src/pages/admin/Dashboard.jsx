import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link 
            to="/admin/projects" 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">Manage Projects</h2>
            <p className="text-gray-600">Add, edit, or delete projects</p>
          </Link>
          
          {/* Add more dashboard cards as needed */}
        </div>
      </div>
    </div>
  );
}