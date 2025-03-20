import React, { useState } from "react";
import MenuSidebar from "./MenuSidebar";
import MenuAtas from "./MenuAtas";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
                <a href="https://wa.me/6285179917416" target="_blank"
                    type="button"
                    className="text-[#d4d4d4] font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#18181b] border border-[#252529] dark:hover:bg-[#1f1f24]"
                >
                    FaStore ID
                </a>
            </div>


            

        </nav>
    );
};

export default Navbar;
