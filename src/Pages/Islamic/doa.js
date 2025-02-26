import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar-islamic";
import FooterComponent from "../../components/Footer-islamic";

function Doa() {
  const doaCategories = [
    { id: 1, title: "Wirid Harian", readings: 6, route: "/wirid-home" },
    { id: 2, title: "Shalawat", readings: 34, route: "/shalawat" },
    { id: 3, title: "Asmaul Husna", readings: 3, route: "/asmaul-husna" },
    { id: 4, title: "Istighotsah & Mujahadah", readings: 7, route: "/istighotsah" },
    { id: 5, title: "Ratib", readings: 6, route: "/ratib" },
    { id: 6, title: "Hizib", readings: 9, route: "/hizib" },
    { id: 7, title: "Dalailul Khairat", readings: 12, route: "/dalailul-khairat" },
    { id: 8, title: "Manaqib Syekh Abdul Qadir", readings: 9, route: "/manaqib" }
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

        <div className="mt-12">
          {/* Search Bar */}
          {/* <div className="relative mb-4">
            <div className="bg-zinc-100/10 rounded-lg p-2 flex items-center">
              <i className="ri-search-line text-zinc-400 mx-2"></i>
              <input
                type="text"
                placeholder="Cari Wirid/Doa"
                className="bg-transparent w-full text-zinc-300 outline-none p-2"
              />
            </div>
          </div> */}

          {/* Doa Categories */}
          <div className="space-y-2">
  {doaCategories.map((category) => (
    <Link key={category.id} to={category.route}>
      <div className="bg-zinc-100/5 hover:bg-zinc-100/10 rounded-md p-2 cursor-pointer transition mb-2"> 
        <div className="flex items-center">
          <div className="flex-shrink-0 w-12 h-12 bg-green-100/20 rounded-md flex items-center justify-center text-green-400 text-lg font-semibold">
            {category.id}
          </div>
          <div className="ml-3 flex-1">
            <h3 className="text-zinc-200 text-base font-medium">{category.title}</h3>
            <p className="text-zinc-400 text-xs mt-0.5">{category.readings} Bacaan</p>
          </div>
        </div>
      </div>
    </Link>
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