import React, { useState } from "react";
import Navbar from "../Components/NavbarStore";
import Footer from "../Components/Footer";

const products = [
  {
    id: 1,
    name: "Netflix Premium",
    image: "https://vokasi.unair.ac.id/wp-content/uploads/2023/11/Netflix-A-Legal-Platform-Revolutionizing-Entertainment-varlie-zahrani.jpg",
    price: "Rp. 13.000",
    oldPrice: "Rp. 15.000",
    category: "Streaming",
    link: "/store/detail-netflix",
  },
  {
    id: 0,
    name: "Pulsa All Operator",
    image: "https://satmesin.com/wp-content/uploads/2023/04/pulsa.jpg",
    price: "Rp. 4.000",
    oldPrice: "Rp. 7.000",
    category: "",
    link: "/store/detail-pulsa",
  },
  {
    id: 0,
    name: "DM Mobile Legends",
    image: "https://garudavoucher.id/blog/wp-content/uploads/2024/08/dm-ml-1024x573.webp",
    price: "Rp. 5.000",
    oldPrice: "Rp. 6.000",
    category: "",
    link: "/store/detail-diamond-ml",
  },
  // {
  //   id: 2,
  //   name: "YouTube Premium",
  //   image: "https://i0.wp.com/tanggal.id/wp-content/uploads/2025/01/Youtube-Premium.jpg",
  //   price: "Rp. 12.000",
  //   oldPrice: "Rp. 14.000",
  //   category: "Streaming",
  //   link: "/store/coming-soon",
  // },
  // {
  //   id: 3,
  //   name: "Canva Pro",
  //   image: "https://assets.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p3/66/2024/08/05/fb_cover-1-2061953881.png",
  //   price: "Rp. 10.000",
  //   oldPrice: "Rp. 12.000",
  //   category: "Design",
  //   link: "/store/coming-soon",
  // },
  // {
  //   id: 4,
  //   name: "CapCut Pro",
  //   image: "https://temanakun.com/wp-content/uploads/2024/11/Capcut-Pro.jpg",
  //   price: "Rp. 11.000",
  //   oldPrice: "Rp. 13.000",
  //   category: "Editing",
  //   link: "/store/coming-soon",
  // },
];

const categories = ["All", "Streaming", "Design", "Editing", "Tools"];

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="bg-[#141417] min-h-screen text-white transition-colors duration-300">
      <Navbar />
      <section className="max-w-4xl mx-auto px-5 pt-20">
        <h2 className="text-2xl font-semibold text-center mb-5">FaStore ID</h2>

        <div className="flex overflow-x-auto space-x-3 pt-2 pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              className={`inline-flex items-center px-4 py-1 rounded-lg transition border whitespace-nowrap w-auto
              ${selectedCategory === category
                ? "bg-[#1f1f24] border-[#d4d4d4] text-white"
                : "bg-[#18181b] border-[#252529] text-gray-400 hover:bg-[#1f1f24]"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#18181b] border border-[#252529] transition-all duration-300 rounded-[10px] shadow-lg overflow-hidden"
            >
              <a href={product.link} className="block">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 md:h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-400 text-sm">
                    <span className="text-white font-bold">{product.price}</span>
                    <span className="text-gray-500 line-through ml-2">{product.oldPrice}</span>
                  </p>
                  <button className="mt-3 w-full bg-[#18181b] border border-[#252529] hover:bg-[#1f1f24] text-white py-2 rounded-md transition-all duration-300">
                    View Detail
                  </button>
                </div>
              </a>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-400">Tidak ada produk dalam kategori ini.</p>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}