import React, { useState } from "react";
import Navbar from "../Components/NavbarStore";
import Footer from "../Components/Footer";

const pricelist = [
    {
        category: "👑Quest Misi Top Up Event",
        options: [
            { Jumlah: "56💎", price: "16.500" },
            { Jumlah: "110💎", price: "31.500" },
            { Jumlah: "277💎", price: "77.500" },
            { Jumlah: "568 💎", price: "151.500" },
            { Jumlah: "1136 💎", price: "302.500" },
        ]
    },
    {
        category: "✨Weekly Diamond Pass", options: [
            { Jumlah: "1x WDP", price: "28.500" },
            { Jumlah: "2x WDP", price: "56.500" },
            { Jumlah: "3x WDP", price: "83.500" },
            { Jumlah: "4x WDP", price: "112.500" },
            { Jumlah: "5x WDP", price: "138.500" },
        ]
    },
    {
        category: "💎Top Up Instant",
        options: [
            { Jumlah: "5💎", price: "3.000" },
            { Jumlah: "10💎", price: "4.000" },
            { Jumlah: "12💎", price: "5.000" },
            { Jumlah: "22💎", price: "7.000" },
            { Jumlah: "28💎", price: "9.000" },
            { Jumlah: "30💎", price: "9.000" },
            { Jumlah: "46💎", price: "14.000" },
            { Jumlah: "54💎", price: "16.000" },
            { Jumlah: "60💎", price: "18.000" },
            { Jumlah: "74💎", price: "21.000" },
            { Jumlah: "100💎", price: "29.000" },
            { Jumlah: "129💎", price: "36.000" },
            { Jumlah: "148💎", price: "42.000" },
            { Jumlah: "170💎", price: "48.000" },
            { Jumlah: "176💎", price: "51.000" },
            { Jumlah: "222💎", price: "63.000" },
            { Jumlah: "240💎", price: "67.000" },
            { Jumlah: "241💎", price: "68.000" },
            { Jumlah: "284💎", price: "79.000" },
            { Jumlah: "296💎", price: "82.000" },
            { Jumlah: "305💎", price: "86.000" },
            { Jumlah: "370💎", price: "103.000" },
            { Jumlah: "384💎", price: "107.000" },
            { Jumlah: "408💎", price: "111.000" },
            { Jumlah: "406💎", price: "113.000" },
            { Jumlah: "518💎", price: "143.000" },
            { Jumlah: "554💎", price: "153.000" },
            { Jumlah: "716💎", price: "190.000" },
            { Jumlah: "750💎", price: "199.000" },
            { Jumlah: "790💎", price: "210.000" },
            { Jumlah: "875💎", price: "229.000" },
            { Jumlah: "874💎", price: "233.000" },
            { Jumlah: "966💎", price: "252.000" },
            { Jumlah: "1048💎", price: "280.000" },
            { Jumlah: "1067💎", price: "285.000" },
            { Jumlah: "1358💎", price: "358.000" },
            { Jumlah: "1506💎", price: "398.000" },
            { Jumlah: "1704💎", price: "445.000" },
            { Jumlah: "2010💎", price: "494.000" },
            { Jumlah: "2380💎", price: "594.000" },
            { Jumlah: "2578💎", price: "642.000" },
            { Jumlah: "2855💎", price: "716.000" },
            { Jumlah: "3146💎", price: "789.000" },
            { Jumlah: "3423💎", price: "864.000" },
            { Jumlah: "3738💎", price: "949.000" },
            { Jumlah: "4020💎", price: "985.000" },
            { Jumlah: "4830💎", price: "1.182.000" },
            { Jumlah: "4856💎", price: "1.189.000" },
            { Jumlah: "4958💎", price: "1.232.000" },
            { Jumlah: "5052💎", price: "1.241.000" }
        ]
    }
    
];

export default function Page() {
    const [selected, setSelected] = useState(null);

    const handleSelect = (category, Jumlah, price) => {
        setSelected(`Order ${category} - Diamond ${Jumlah} Harga Rp ${price}`);
    };

    const handleOrder = () => {
        if (!selected) return;

        // Ambil waktu sekarang
        const now = new Date();

        // Format hari dalam bahasa Indonesia
        const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
        const dayName = days[now.getDay()];

        // Format tanggal (dd MM yyyy)
        const formattedDate = now.toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });

        // Format waktu (hh:mm:ss)
        const formattedTime = now.toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

        // Gabungkan format tanggal dan waktu
        const timestamp = `> ${dayName}, ${formattedDate} | ${formattedTime}`;

        // Format pesan
        const phone = "6285179917416";
        const message = `${timestamp}\n${selected}\n\nApa ada stok kak?`;

        // Kirim ke WhatsApp
        window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    };

    return (
        <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-white transition-colors duration-300 relative">
            <Navbar />
            <section className="max-w-4xl mx-auto px-5 pt-20">
                <h1 className="text-2xl font-bold text-center text-gray-300 mb-2">Diamond Montoon</h1>
                <hr className="mb-2 mt-3 border-0 h-[1px] bg-gradient-to-r from-[#252529] to-[#ffffff]/20 dark:from-[#252529] dark:to-[#ffffff]/10" />

                {/* breadcrumb */}
                <div className="flex justify-between items-center w-full pt-3 pb-3">
                    <h2 className="text-[15px] text-[#d4d4d4] font-sm">
                        <a href="/store">store</a>
                        <i className="ri-arrow-drop-right-line"></i>
                        <a href="">diamond ml</a>
                    </h2>
                </div>

                {pricelist.map((item, index) => (
                    <div key={index} className="mb-6">
                        <h2 className="text-lg text-gray-300 font-semibold mb-2">{item.category}</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
                            {item.options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleSelect(item.category, option.Jumlah, option.price)}
                                    className={`p-2 rounded-md text-[14px] border border-[#252529] bg-[#18181b] text-gray-300 transition ${
                                        selected === `Order ${item.category} - Diamond ${option.Jumlah} Harga Rp ${option.price}` 
                                            ? 'bg-blue-900 text-gray-300' 
                                            : ''
                                    }`}
                                >
                                    {option.Jumlah} → Rp {option.price}
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

            <Footer />
        </div>
    );
}
