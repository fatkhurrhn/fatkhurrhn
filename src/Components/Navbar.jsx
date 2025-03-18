import React, { useState } from "react";
import MenuSidebar from "./MenuSidebar";
import MenuAtas from "./MenuAtas";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const contacts = [
        { icon: "ri-mail-line", text: "Email", link: "mailto:muhammadthursina123@email.com" },
        { icon: "ri-instagram-line", text: "Instagram", link: "https://ig.me/m/story.thur" },
        { icon: "ri-whatsapp-line", text: "WhatsApp", link: "https://wa.me/6282285512813" }
    ];

    return (
        <nav className="bg-[#141417] fixed w-full z-20 top-0 start-0 border-b border-[#252529]">
            <div className="max-w-4xl mx-auto flex items-center justify-between px-3 py-4">
                {/* Hamburger Menu Button (Mobile) */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="text-gray-700 dark:text-white text-2xl md:hidden"
                >
                    <i className="ri-menu-2-line"></i>
                </button>

                {/* menu atas */}
                <MenuAtas/>

                {/* Contact Me Button */}
                <button onClick={() => setIsOpen(true)}
                    type="button"
                    className="text-[#d4d4d4] font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#18181b] border border-[#252529] dark:hover:bg-[#1f1f24]"
                >
                    Contact Me
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-2/4 bg-[#141417] text-[#d4d4d4] transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out z-30 px-6`}
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="absolute top-4 right-4 text-2xl"
                >
                    <i className="ri-close-line"></i>
                </button>

                {/* Sidebar Menu */}
                <MenuSidebar/>

                {/* Social Media Icons */}
                <div className="absolute bottom-5 left-0 w-full flex justify-center gap-4">
                    <a href="https://youtube.com/fatkhurrhnn" target="_blank" rel="noopener noreferrer">
                        <i className="ri-youtube-fill text-gray-400 text-xl hover:text-white transition-all"></i>
                    </a>
                    <a href="https://linkedin.com/fatkhurrhn" target="_blank" rel="noopener noreferrer">
                        <i className="ri-linkedin-box-fill text-gray-400 text-xl hover:text-white transition-all"></i>
                    </a>
                    <a href="https://tiktok.com/fatkhurrhnn" target="_blank" rel="noopener noreferrer">
                        <i className="ri-tiktok-fill text-gray-400 text-xl hover:text-white transition-all"></i>
                    </a>
                    <a href="https://instagram.com/fatkhurrhn" target="_blank" rel="noopener noreferrer">
                        <i className="ri-instagram-fill text-gray-400 text-xl hover:text-white transition-all"></i>
                    </a>
                </div>
            </div>

            {/* Overlay Background */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            {/* Popup */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 px-4">
                    <div className="p-4 sm:p-6 bg-[#141417] text-[#d4d4d4] rounded-lg shadow-lg border border-[#252529] text-center max-w-[90%] w-full sm:max-w-sm">
                        <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Get in Touch</h2>

                        {/* Kontainer tombol - agar tetap sejajar ke samping */}
                        <div className="flex flex-row flex-wrap justify-center gap-2 sm:gap-3">
                            {contacts.map(({ icon, text, link }, index) => (
                                <a
                                    key={index}
                                    href={link}
                                    className="inline-flex items-center gap-2 bg-[#18181b] border border-[#252529] hover:bg-[#1f1f24] px-3 py-2 rounded-md transition text-xs sm:text-sm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className={`${icon} text-sm sm:text-base shrink-0`}></i>
                                    <span className="whitespace-nowrap">{text}</span>
                                </a>
                            ))}
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-3 sm:mt-4 px-3 sm:px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded w-full text-xs sm:text-sm"
                        >
                            Close
                        </button>

                        {/* Teks kecil untuk CV */}
                        <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-400">
                            Want to see my CV?{" "}
                            <a
                                href="https://drive.google.com/file/d/1TBEdUYvG6KvhNQfQBz6gwXFTxWvTe5_g/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline"
                            >
                                Click here
                            </a>
                        </p>
                    </div>
                </div>
            )}

        </nav>
    );
};

export default Navbar;
