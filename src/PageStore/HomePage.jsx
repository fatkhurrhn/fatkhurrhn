import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const products = [
  { name: "Netflix Premium", Link: "", price: "Mulai dari Rp50.000", image: "https://vokasi.unair.ac.id/wp-content/uploads/2023/11/Netflix-A-Legal-Platform-Revolutionizing-Entertainment-varlie-zahrani.jpg" },
  { name: "YouTube Premium", Link: "", price: "Mulai dari Rp40.000", image: "https://statik.tempo.co/data/2023/04/14/id_1197124/1197124_720.jpg" },
  { name: "Canva Pro", Link: "", price: "Mulai dari Rp35.000", image: "https://assets.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p3/66/2024/08/05/fb_cover-1-2061953881.png" },
  { name: "VIU Premium", Link: "", price: "Mulai dari Rp30.000", image: "https://www.blibli.com/friends-backend/wp-content/uploads/2023/12/B1200101-Cover-cara-langganan-viu-1-scaled.jpg" },
];

export default function StorePage() {
  return (
    <div className="bg-[#141417] min-h-screen text-white">
      <Navbar />
      <section className="max-w-4xl mx-auto px-5 pt-20">
      <h1 className="text-2xl font-bold text-center mb-6">Produk Premium</h1>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-[#18181b] border border-[#252529] transition-all duration-300 rounded-[10px] shadow-lg overflow-hidden"
            >
              <a href={product.Link} className="block">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-40 md:h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-400 text-sm">{product.price}</p>
                  <button 
                    className="mt-3 w-full bg-[#18181b] border border-[#252529] hover:bg-[#1f1f24] text-white py-2 rounded-md transition-all duration-300"
                  >
                    View Detail
                  </button>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
