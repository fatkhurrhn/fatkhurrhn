import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function Page() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-white transition-colors duration-300 relative">
            <Navbar />
            <section className="max-w-4xl mx-auto px-5 pt-20">
                {/* hr */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>
            </section>
            <Footer />

            {/* Floating Button */}
            <button 
                className="fixed bottom-4 right-4 bg-[#18181b] border border-[#252529] hover:bg-[#1f1f24] text-white px-3 py-1 text-sm rounded-md shadow-lg"
                onClick={() => setIsPopupOpen(true)}
            >
                How to Download
            </button>

            {/* Popup */}
            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
                    <div className="bg-[#18181b] border border-[#252529] p-4 rounded-lg max-w-sm text-center text-white">
                        <p className="mb-6 leading-relaxed text-sm">
                            Untuk mendownload foto, tahan beberapa detik pada gambar yang ingin disimpan. Setelah itu, pilih opsi "Simpan Gambar", maka gambar akan tersimpan.
                        </p>
                        <button 
                            className="bg-[#252529] hover:bg-[#1f1f24] text-white px-4 py-2 w-full rounded-md"
                            onClick={() => setIsPopupOpen(false)}
                        >
                            Siap, Mengerti
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}