import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DarkVibes from "../assets/mentahan-video/dark-vibes1.mp4";
import Landscape from "../assets/mentahan-video/pemandangan1.mp4";
import Sky from "../assets/mentahan-video/sky1.mp4";
import Sky2 from "../assets/mentahan-video/sky2.mp4";

export default function Page() {
  const videoCategories = [
    { id: 1, src: DarkVibes, category: "Dark Vibes" },
    { id: 2, src: Sky2, category: "Sky" },
    { id: 3, src: Landscape, category: "Natural" },
    { id: 4, src: Sky, category: "Sky" },
  ];

  const categories = ["All", "Natural", "Dark Vibes", "Sky"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVideos =
    selectedCategory === "All"
      ? videoCategories
      : videoCategories.filter((video) => video.category === selectedCategory);

  return (
    <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <section className="max-w-4xl mx-auto px-5 pt-20">
        <div className="flex justify-between items-center w-full pt-2">
          <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-1 rounded-lg transition border ${
                  selectedCategory === category
                    ? "bg-[#1f1f24] border-[#d4d4d4] text-white"
                    : "bg-[#18181b] border-[#252529] text-gray-400 hover:bg-[#1f1f24]"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-3">
          {filteredVideos.map((video) => (
            <div key={video.id} className="relative flex flex-col items-center gap-2 w-full">
              <div className="relative w-full max-w-xs">
                <video
                  controls
                  className="w-full h-auto rounded-lg shadow-lg border border-[#252529]"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <span className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {video.category}
                </span>
              </div>

              <a
                href={video.src}
                download
                className="w-full px-4 py-2 bg-[#18181b] border border-[#252529] hover:bg-[#1f1f24] text-white rounded-lg transition text-center"
              >
                ⬇️ Download Video
              </a>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-400">Tidak ada video dalam kategori ini.</p>
          </div>
        )}

        <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>
      </section>
      <Footer />
    </div>
  );
}
