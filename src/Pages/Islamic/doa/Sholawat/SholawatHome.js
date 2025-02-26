import React from "react";
import Navbar from "../../../../components/Navbar-islamic";
import FooterComponent from "../../../../components/Footer-islamic";

function WiridHarianDetail() {
  const wiridList = [
    { id: 1, title: "Wirid Bakda Shalat Fardhu" },
    { id: 2, title: "Wirid Sebelum Shalat Subuh" },
    { id: 3, title: "Wirdul Lathif (Dzikir Pagi)" },
    { id: 4, title: "Wirdul Lathif (Dzikir Petang)" },
    { id: 5, title: "Wirid Menjelang Tidur" },
    { id: 6, title: "Wirid Setelah Shalat Jumat" },
  ];

  return (
    <div className="relative bg-zinc-900 text-zinc-400 min-h-screen">
      <Navbar />
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50 bg-zinc-800 text-zinc-200 p-4">
        <div className="flex items-center">
          <button
            type="button"
            className="mr-4"
            onClick={() => window.history.back()}
          >
            <i className="ri-arrow-left-line text-2xl"></i>
          </button>
          <h1 className="text-2xl font-medium">Wirid Harian</h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mt-20 px-4 py-2">
        <div className="bg-zinc-800/50 rounded-lg flex items-center px-4 py-3">
          <i className="ri-search-line text-zinc-400 mr-2 text-xl"></i>
          <input
            type="text"
            placeholder="Cari"
            className="bg-transparent w-full outline-none text-zinc-300"
          />
        </div>
      </div>

      {/* Wirid List */}
      <div className="mt-2">
        {wiridList.map((wirid, index) => (
          <React.Fragment key={wirid.id}>
            <div className="px-4 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-green-400 font-semibold text-xl mr-4">
                  {wirid.id}
                </span>
                <span className="text-zinc-200 text-lg">{wirid.title}</span>
              </div>
              <i className="ri-arrow-right-s-line text-zinc-500 text-2xl"></i>
            </div>
            {index < wiridList.length - 1 && (
              <div className="h-px bg-zinc-700 mx-4"></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <FooterComponent/>
    </div>
  );
}

export default WiridHarianDetail;