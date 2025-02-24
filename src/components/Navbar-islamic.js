import { useState, useRef, useEffect } from "react"; // Tambah useRef, useEffect
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // Sidebar
    const [showPopup, setShowPopup] = useState(false); // Popup Say Hi
    const [message, setMessage] = useState(""); // State untuk pesan
    const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown Pages
    const dropdownRef = useRef(null);

    // Tutup dropdown saat klik di luar
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
            <div className="hidden sm:flex fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[750px] sm:w-[85%] z-50 flex items-center justify-between gap-5 border border-zinc-700/40 bg-zinc-800 px-5 text-base sm:px-5 py-1 shadow-md rounded-none sm:rounded-b-2xl">
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
                    <Link to="/" className="relative flex items-center gap-1 py-3 pr-1 text-sm transition-colors hover:text-zinc-300 sm:text-base">Home</Link>
                    <Link to="/project" className="relative flex items-center gap-1 py-3 pr-1 text-sm transition-colors hover:text-zinc-300 sm:text-base">Project</Link>
                    <Link to="/certificate" className="relative flex items-center gap-1 py-3 pr-1 text-sm transition-colors hover:text-zinc-300 sm:text-base">Certificate</Link>
                    <Link to="/blog" className="relative flex items-center gap-1 py-3 pr-1 text-sm transition-colors hover:text-zinc-300 sm:text-base">Blog</Link>

                    {/* Dropdown Pages */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="relative flex items-center gap-1 py-3 pr-1 text-sm transition-colors hover:text-zinc-300 sm:text-base"> Pages
                            <i className={`ri-arrow-down-s-line transition-transform ${dropdownOpen ? "rotate-180" : ""}`}></i>
                        </button>

                        {/* Dropdown Content */}
                        {dropdownOpen && (
                            <div className="absolute left-0 mt-2 w-40 bg-zinc-800 border border-zinc-700 rounded-lg shadow-lg overflow-hidden">
                                <Link to="/islamic" className="block px-4 py-2 text-sm text-gray-300 hover:bg-zinc-700">
                                    Islamic
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Tombol Say Hi */}
                <button
                    className="relative flex items-center gap-2 py-3 pr-1 text-sm transition-colors hover:text-zinc-300 sm:text-base"
                    onClick={() => setShowPopup(true)}
                >
                    <i className="ri-chat-3-line"></i> Say Hi
                </button>
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
                    <Link to="/" className="text-zinc-300 hover:text-white text-base flex items-center gap-3 py-1 px-3 rounded-md transition-all duration-200 hover:bg-[#27272a]">
                        Home
                    </Link>
                    <Link to="/islamic" className="text-zinc-300 hover:text-white text-base flex items-center gap-3 py-1 px-3 rounded-md transition-all duration-200 hover:bg-[#27272a]">
                        Islamic
                    </Link>
                    <Link to="/project" className="text-zinc-300 hover:text-white text-base flex items-center gap-3 py-1 px-3 rounded-md transition-all duration-200 hover:bg-[#27272a]">
                        Projects
                    </Link>
                    <Link to="/certificate" className="text-zinc-300 hover:text-white text-base flex items-center gap-3 py-1 px-3 rounded-md transition-all duration-200 hover:bg-[#27272a]">
                        Certificate
                    </Link>
                    <Link to="/blog" className="text-zinc-300 hover:text-white text-base flex items-center gap-3 py-1 px-3 rounded-md transition-all duration-200 hover:bg-[#27272a]">
                        Blog
                    </Link>
                </nav>

                {/* Garis (Separator) di atas ikon sosial media */}
                <div className="absolute bottom-14 left-0 w-full px-6">
                    <hr className="border-t border-zinc-700 my-2" />
                </div>

                {/* Social Media Icons */}
                <div className="absolute bottom-5 left-0 w-full flex justify-center gap-4">
                    <a href="https://youtube.com/fatkhurrhnn" target="_blank" rel="noopener noreferrer">
                        <i className="ri-youtube-fill text-gray-400 text-xl hover:text-white transition-all"></i>
                    </a>
                    <a href="https://linkedin.com/fatkhurrhn" target="_blank" rel="noopener noreferrer">
                        <i className="ri-linkedin-box-fill text-gray-400 text-xl hover:text-white transition-all"></i>
                    </a>
                    <a href="https://tiktok.com//fatkhurrhnn" target="_blank" rel="noopener noreferrer">
                        <i className="ri-tiktok-fill text-gray-400 text-xl hover:text-white transition-all"></i>
                    </a>
                    <a href="https://instagram.com/fatkhurrhn" target="_blank" rel="noopener noreferrer">
                        <i className="ri-instagram-fill text-gray-400 text-xl hover:text-white transition-all"></i>
                    </a>
                </div>
            </div>
        </>
    );
}
