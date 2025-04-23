import React, { useState } from "react";
import Navbar from "../components/NavbarStore";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    name: "Netflix Premium",
    image: "https://vokasi.unair.ac.id/wp-content/uploads/2023/11/Netflix-A-Legal-Platform-Revolutionizing-Entertainment-varlie-zahrani.jpg",
    price: "Rp 13.000",
    oldPrice: "Rp 15.000",
    category: "Streaming",
    link: "/store/netflix",
    bestSeller: true
  },
  {
    id: 2,
    name: "Diamond ML",
    image: "https://garudavoucher.id/blog/wp-content/uploads/2024/08/dm-ml-1024x573.webp",
    price: "Rp 3.000",
    oldPrice: "Rp 5.000",
    category: "Top Up",
    link: "/store/diamond-ml",
    bestSeller: true
  },
  {
    id: 3,
    name: "Capcut Pro",
    image: "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxtHdRB6xk71KqOPxE23.XPjQ3fO1yhYCgKmfFjEd4Y9pzf.rK5H64foWSuU8wNaVbNrgfWOVi1enpBTmB3rNHc0-&format=source",
    price: "Rp 6.000",
    oldPrice: "Rp 10.000",
    category: "Editing",
    link: "/store/capcut"
  },
  
  {
    id: 4,
    name: "Pulsa All Operator",
    image: "https://satmesin.com/wp-content/uploads/2023/04/pulsa.jpg",
    price: "Rp 4.000",
    oldPrice: "Rp 7.000",
    category: "Top Up",
    link: "/store/pulsa"
  },
  {
    id: 5,
    name: "Alight Motion",
    image: "https://play-lh.googleusercontent.com/OU0BlP8C9-V7ECl2crma7B48nzDbK7liSLjn0j_fpTlyWG6qyEE-mw_KFZ9aOXF0a3w",
    price: "Rp 7.000",
    oldPrice: "Rp 10.000",
    category: "Editing",
    link: "/store/alight-motion"
  },
  
  {
    id: 6,
    name: "Canva Pro",
    image: "https://assets.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p3/66/2024/08/05/fb_cover-1-2061953881.png",
    price: "Rp 10.000",
    oldPrice: "Rp 12.000",
    category: "Design",
    link: "/store/canva"
  },
  {
    id: 7,
    name: "YouTube",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/1200px-YouTube_social_white_square_%282017%29.svg.png",
    price: "Rp 7.000",
    oldPrice: "Rp 10.000",
    category: "Streaming",
    link: "/store/youtube"
  },
  {
    id: 8,
    name: "Bstation",
    image: "https://play-lh.googleusercontent.com/G9s84Cm1TDnKDX2P8nipS_s60cuCnYtjBRRLespF8nivjXmbV9tF1fY37clZhXMLaA=w240-h480-rw",
    price: "Rp 8.000",
    oldPrice: "Rp 13.000",
    category: "Streaming",
    link: "/store/bstation"
  },
  {
    id: 9,
    name: "Viu",
    image: "https://asset.kompas.com/crops/1SCTmFZnjyvTa8DYp1cqgCOu2QA=/141x40:623x361/1200x800/data/photo/2022/12/02/638974d5aa23b.png",
    price: "Rp 6.000",
    oldPrice: "Rp 10.000",
    category: "Editing",
    link: "/store/viu"
  },

  
];


const categories = ["All", "Streaming", "Top Up", "Design", "Editing", "Tools"];

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
              className="relative bg-[#18181b] border border-[#252529] transition-all duration-300 rounded-[10px] shadow-lg overflow-hidden"
            >
              {product.bestSeller && (
                <div className="absolute top-[5px] left-[-19px] bg-red-600 text-white text-xs font-bold px-6 py-1 transform -rotate-45">
                  Best
                </div>
              )}
              <a href={product.link} className="block">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 md:h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-[16px] font-semibold">{product.name}</h2>
                  <p className="text-gray-400 text-[12px]">
                    <span className="text-white font-bold">{product.price}</span>
                    <span className="text-gray-500 line-through ml-2">{product.oldPrice}</span>
                  </p>
                  <button className="mt-3 w-full bg-[#18181b] border border-[#252529] hover:bg-[#1f1f24] text-white py-2   text-[12px] rounded-md transition-all duration-300">
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
