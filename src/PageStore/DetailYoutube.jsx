import React, { useState } from "react";
import Navbar from "../Components/NavbarStore";
import Footer from "../Components/Footer";
const pricelist = [
    {
        category: "Fam",
        options: [
            { duration: "1 bulan", price: "7k" },
            { duration: "2 bulan", price: "10k" }
        ]
    },
    {
        category: "Indlpn",
        options: [
            { duration: "1 bulan", price: "10k" },
            { duration: "2 bulan", price: "13k" }
        ]
    }
]
;


export default function Page() {
    const [selected, setSelected] = useState(null);

    const handleSelect = (category, duration, price) => {
        setSelected(`${category} - ${duration} : ${price}`);
    };

    const handleOrder = () => {
        if (!selected) return;
        const phone = "6285179917416";
        const message = `Order APK Youtube Premium ${selected}\n\nApa ada stok kak?`;
        window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    };

    return (
        <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-white transition-colors duration-300 relative">
            <Navbar />
            <section className="max-w-4xl mx-auto px-5 pt-20">
                <h1 className="text-2xl font-bold  text-center text-gray-300 mb-2">YouTube</h1>
                <hr className="mb-2 mt-3 border-0 h-[1px] bg-gradient-to-r from-[#252529] to-[#ffffff]/20 dark:from-[#252529] dark:to-[#ffffff]/10" />
                {/* breadcrumb */}
                <div className="flex justify-between items-center w-full pt-3 pb-3">
                    <h2 className="text-[15px] text-[#d4d4d4] font-sm">
                        <a href="/store">store</a><i class="ri-arrow-drop-right-line"></i>
                        <a href="">youtube</a>
                    </h2>
                </div>
                {pricelist.map((item, index) => (
                    <div key={index} className="mb-6">
                        <h2 className="text-lg text-gray-300 font-semibold mb-2">{item.category}</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
                            {item.options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleSelect(item.category, option.duration, option.price)}
                                    className={`p-3 rounded-md border text-[14px] border-[#252529] bg-[#18181b] text-gray-300 transition ${selected === `${item.category} - ${option.duration} : ${option.price}` ? 'bg-blue-900 text-gray-300' : ''}`}
                                >
                                    {option.duration} → {option.price}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
            {selected && (
                <button
                    onClick={handleOrder}
                    className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-10 py-2 rounded-[12px] shadow-lg hover:bg-green-900 transition"
                >
                    Order Now
                </button>
            )}
            <Footer/>
        </div>
    );
}