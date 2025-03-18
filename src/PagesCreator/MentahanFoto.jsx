import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function PhotoGallery() {
  const photoCategories = [
    { id: 1, src: "https://i.pinimg.com/474x/5b/81/d7/5b81d756d1702e41d8b255a8cf859b81.jpg", category: "Nature" },
    { id: 2, src: "https://i.pinimg.com/474x/c9/50/7e/c9507e636a2d3f89ae65e29a18daa9b2.jpg", category: "City" },
    { id: 3, src: "https://i.pinimg.com/474x/40/88/ae/4088ae1e6eca657eaa6b5bf9452b22c4.jpg", category: "Space" },
    { id: 4, src: "https://i.pinimg.com/474x/a3/72/a9/a372a92b2b782719f47e1cd6c563166a.jpg", category: "Ocean" },
    { id: 5, src: "https://i.pinimg.com/474x/56/02/3f/56023fe679a839346840878760136b65.jpg", category: "Nature" },
    { id: 6, src: "https://i.pinimg.com/474x/eb/80/61/eb80613e76b62f314ca9c35cfe414c63.jpg", category: "Nature" },
    { id: 6, src: "https://i.pinimg.com/474x/7a/c2/3a/7ac23a2d3bd64bca7c270015adbb7a6b.jpg", category: "Nature" },
    { id: 6, src: "https://i.pinimg.com/474x/d4/17/44/d417443f85264669398ba0c9e3f5e146.jpg", category: "Nature" },
    { id: 6, src: "https://i.pinimg.com/474x/aa/c9/d1/aac9d1f37c78268bb8d846d44776fd77.jpg", category: "Nature" },
    { id: 6, src: "https://i.pinimg.com/474x/c0/71/9c/c0719c31261693c27908508807ad9a89.jpg", category: "Nature" },
    { id: 6, src: "https://i.pinimg.com/474x/b6/5c/40/b65c401957822553a83bb7e9eb475f83.jpg", category: "Nature" },
  ];

  //   template
  // { id: 6, src: "", category: "Nature" },


  const categories = ["All", "Nature cysid", "City", "Space", "Ocean"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPhotos =
    selectedCategory === "All"
      ? photoCategories
      : photoCategories.filter((photo) => photo.category === selectedCategory);

  return (
    <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <section className="max-w-4xl mx-auto px-5 pt-20">
        {/* breadcrumb */}
        <div className="flex justify-between items-center w-full pt-3 pb-3">
          <h2 className="text-[15px] text-[#d4d4d4] font-sm">
            <a href="/creator">Creator</a><i class="ri-arrow-drop-right-line"></i>
            <a href="/creator/product">Product</a><i class="ri-arrow-drop-right-line"></i>
            <a href="">mentahan foto</a></h2>
        </div>

        <div className="flex overflow-x-auto space-x-3 pt-2 pb-2 scrollbar-hide">
  {categories.map((category) => (
    <button
      key={category}
      className={`inline-flex items-center px-4 py-1 rounded-lg transition border whitespace-nowrap w-auto
        ${selectedCategory === category
          ? "bg-[#1f1f24] border-[#d4d4d4] text-white"
          : "bg-[#18181b] border-[#252529] text-gray-400 hover:bg-[#1f1f24]"
        }`}
      onClick={() => setSelectedCategory(category)}
    >
      {category}
    </button>
  ))}
</div>


        {/* <hr className="my-4 hidden sm:block bg-[#18181b]  dark:bg-gray-600"  /> */}

        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-2 pt-3">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="mb-3 break-inside-avoid flex flex-col items-center">
              <div className="relative w-full">
                <img
                  src={photo.src}
                  alt={photo.category}
                  className="w-full rounded-lg shadow-lg border border-[#252529]"
                />
                <span className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {photo.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-400">Tidak ada foto dalam kategori ini.</p>
          </div>
        )}

      </section>
      <Footer />
    </div>
  );
}
