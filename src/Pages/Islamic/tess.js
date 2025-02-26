import React from "react";
import Navbar from "../../components/Navbar-islamic";
import FooterComponent from "../../components/Footer-islamic";

function Doa() {
  const doaCategories = [
    { id: 1, title: "Wirid Harian", readings: 6 },
    { id: 2, title: "Shalawat", readings: 34 },
    { id: 3, title: "Asmaul Husna", readings: 3 },
    { id: 4, title: "Istighotsah & Mujahadah", readings: 7 },
    { id: 5, title: "Ratib", readings: 6 },
    { id: 6, title: "Hizib", readings: 9 },
    { id: 7, title: "Dalailul Khairat", readings: 12 },
    { id: 8, title: "Manaqib Syekh Abdul Qadir", readings: 9 }
  ];

  return (
    <div className="relative bg-zinc-900 text-zinc-400 min-h-screen">
      <div className="mx-auto max-w-[850px] px-4 pb-6 pt-6 text-lg sm:px-12 md:px-16">
        <Navbar />
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 flex items-center justify-between gap-5 bg-zinc-800 px-5 text-base sm:px-5 py-1">
          <div className="relative block sm:hidden">
            <button
              type="button"
              className="flex items-center gap-2 py-3 text-sm transition-colors hover:text-zinc-300 sm:hidden sm:text-base"
              onClick={() => window.history.back()}
            >
              <i className="ri-arrow-left-line"></i>Kumpulan doa
            </button>
          </div>
        </div>

        <div className="mt-16">
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="bg-zinc-100/10 rounded-lg p-2 flex items-center">
              <i className="ri-search-line text-zinc-400 mx-2"></i>
              <input
                type="text"
                placeholder="Cari Wirid/Doa"
                className="bg-transparent w-full text-zinc-300 outline-none p-2"
              />
            </div>
          </div>

          {/* Doa Categories */}
          <div className="space-y-4">
            {doaCategories.map((category) => (
              <div
                key={category.id}
                className="bg-zinc-100/5 hover:bg-zinc-100/10 rounded-lg p-4 cursor-pointer transition-all"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-100/20 rounded-lg flex items-center justify-center text-green-400 text-2xl font-semibold">
                    {category.id}
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-zinc-200 text-xl font-medium">{category.title}</h3>
                    <p className="text-zinc-400 mt-1">{category.readings} Bacaan</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-transparent p-4 mt-6 rounded-lg border border-zinc-500/50 shadow-lg w-full flex items-center justify-center text-center">
          <p className="text-[17px] text-zinc-300 flex items-center gap-2">
            <i className="ri-hand-heart-line"></i> Dukung kami untuk terus berkembang
          </p>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default Doa;