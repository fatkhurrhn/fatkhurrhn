import React from "react";

const Test = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="p-6 bg-gray-800 text-white text-center rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">Cek Tailwind</h1>
        <p className="mt-2 text-gray-400">Jika ini berada di tengah, Tailwind sudah benar!</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
          Tes Button
        </button>
      </div>
    </div>
  );
};

export default Test;
