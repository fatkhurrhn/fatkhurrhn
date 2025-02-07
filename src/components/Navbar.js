import { useState } from "react"; // Pastikan ini ada!
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // Sidebar
    const [showPopup, setShowPopup] = useState(false); // Popup Say Hi
    const [message, setMessage] = useState(""); // State untuk pesan

    // Fungsi Kirim ke WhatsApp
    const sendMessageToWhatsApp = (e) => {
        e.preventDefault();
        if (!message.trim()) return; // Cegah kirim jika kosong

        const phoneNumber = "6282285512813"; // Ganti dengan nomor WhatsApp
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank"); // Buka di tab baru
        setMessage(""); // Reset input setelah dikirim
        setShowPopup(false); // Tutup popup setelah kirim
    };

    return (
        <>
            {/* Navbar Utama */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[750px] sm:w-[85%] z-50 flex items-center justify-between gap-5 border border-zinc-700/40 bg-zinc-800 px-5 text-base sm:px-5 py-1 shadow-md rounded-none sm:rounded-b-2xl">
            {/* Tombol Menu untuk Mobile */}
                <div className="relative block sm:hidden">
                    <button
                        type="button"
                        className="flex items-center py-3 text-sm transition-colors hover:text-zinc-300 sm:hidden sm:text-base"
                        onClick={() => setIsOpen(true)} // Buka Sidebar
                    >
                        <i className="ri-menu-2-line"></i>
                    </button>
                </div>

                {/* Navbar untuk Desktop */}
                <div className="hidden items-center gap-6 sm:flex">
                    <a className="relative flex items-center gap-1 py-3 pr-1 text-sm transition-colors hover:text-zinc-300 sm:text-base"
                        href="/" target="_self">
                        <i className="ri-home-3-line"></i> Home
                    </a>
                    <Link to="/certificate" className="relative flex items-center gap-1 py-3 pr-1 text-sm transition-colors hover:text-zinc-300 sm:text-base">
                        <i className="ri-article-line"></i> Certificate
                    </Link>
                    <a className="relative flex items-center gap-1 py-3 pr-1 text-sm transition-colors hover:text-zinc-300 sm:text-base"
                        href="/project" target="_self">
                        <i className="ri-tools-fill"></i> Projects
                    </a>
                </div>

                {/* Tombol Say Hi */}
                <button
                    className="relative flex items-center gap-2 py-3 pr-1 text-sm transition-colors hover:text-zinc-300 sm:text-base"
                    onClick={() => setShowPopup(true)} // Tampilkan Popup
                >
                    <i className="ri-chat-3-line"></i> Say Hi
                </button>
            </div>

            {/* Overlay Background Blur */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md transition-opacity duration-300"
                    onClick={() => setIsOpen(false)} // Klik luar untuk close
                />
            )}

            {/* Sidebar Mobile */}
            <div className={`fixed top-0 left-0 h-full w-48 bg-[#1E1E20] shadow-2xl rounded-r-lg transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {/* Tombol Close */}
                <button className="absolute top-4 right-4 text-zinc-300 hover:text-white text-xl" onClick={() => setIsOpen(false)}>
                    ✕
                </button>

                {/* Menu Sidebar */}
                <nav className="flex flex-col mt-16 p-4 text-left">
                    <a href="/" className="text-zinc-300 hover:text-white text-base flex items-center gap-3 py-2 px-3 rounded-md transition-all duration-200 hover:bg-[#27272a]">
                        Home
                    </a>
                    <Link to="/certificate" className="text-zinc-300 hover:text-white text-base flex items-center gap-3 py-2 px-3 rounded-md transition-all duration-200 hover:bg-[#27272a]">
                        Certificate
                    </Link>
                    <a href="/project" className="text-zinc-300 hover:text-white text-base flex items-center gap-3 py-2 px-3 rounded-md transition-all duration-200 hover:bg-[#27272a]">
                        Projects
                    </a>
                </nav>
            </div>


            {/* Popup "Say Hi" */}
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
                    <div className="bg-[#1E1E20] p-6 rounded-lg shadow-lg w-80 relative">
                        {/* Tombol Close */}
                        <button
                            className="absolute top-2 right-3 text-xl text-gray-400 hover:text-white"
                            onClick={() => setShowPopup(false)}
                        >
                            ✕
                        </button>

                        {/* Konten Popup */}
                        <div className="text-center">
                            <div className="wave mb-4 text-4xl">👋</div>
                            <h2 className="text-lg font-semibold text-white">Hi, how can I help you?</h2>
                            <form className="mt-4" onSubmit={sendMessageToWhatsApp}>
                                <textarea
                                    placeholder="Type your message..."
                                    rows="2"
                                    className="w-full px-3 py-2 bg-[#3a3a3c] border border-[#4a4a4d] rounded-lg text-white text-sm placeholder:text-xs placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6c6c6e] focus:border-[#6c6c6e] transition-all"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full py-2 bg-[#4c4f56] text-white rounded-lg font-semibold text-sm hover:bg-[#393c42] focus:ring-2 focus:ring-[#6c6c6e] transition-all mt-3"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}
