import React, { useState } from "react";
const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdownClick = (menu) => {
        setOpenDropdown((prev) => (prev === menu ? null : menu));
    };

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
        <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
            <div className="max-w-4xl mx-auto flex items-center justify-between px-3 py-3">
                {/* Hamburger Menu Button (Mobile) */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="text-gray-700 dark:text-white text-2xl md:hidden"
                >
                    <i className="ri-menu-2-line text-gray-800"></i>
                </button>

                <div className="relative">
                    <nav className="hidden md:flex space-x-8 font-medium text-gray-800">
                        <a href="/">Home</a>
                        <a href="/projects">Project</a>
                        <a href="/certificates">Certificate</a>
                        <div className="relative dropdown">
                            <button
                                className="flex items-center space-x-1 focus:outline-none"
                                onClick={() => handleDropdownClick("Pages")}
                            >
                                <span>Pages</span>
                                <i className={openDropdown === "Pages" ? "ri-arrow-drop-up-line" : "ri-arrow-drop-down-line"}></i>
                            </button>
                            {openDropdown === "Pages" && (
                                <ul className="absolute left-0 mt-1 w-33 bg-white bg-gray-800 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out">
                                    <li><a href="/creator" className="block px-4 py-2">Creator</a></li>
                                    <li><a href="/store" className="block px-4 py-2">Store</a></li>
                                    <li><a href="/writings" className="block px-4 py-2">Writings</a></li>
                                    <li><a href="/guestbook" className="block px-4 py-2">Guestbook</a></li>
                                </ul>
                            )}
                        </div>
                    </nav>
                </div>

                {/* Contact Me Button */}
                <button
                    type="button"
                    className="text-gray-800 font-medium rounded-lg text-sm px-4 py-2 bg-white border border-gray-200 hover:bg-gray-100"
                >
                    My Project
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-2/4 bg-white text-gray-800 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
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
                <ul className="pt-8 ml-2 mt-16 space-y-3">
                    <li>
                        <a href="/" className="block hover:text-blue-400">Home</a>
                    </li>

                    <li>
                        <button
                            onClick={() => toggleDropdown("frontend")}
                            className="flex items-center hover:text-blue-400 w-full"
                        >
                            <i className={openDropdown === "frontend" ? "ri-arrow-down-s-line mr-2" : "ri-arrow-right-s-line mr-1"}></i>
                            Frontend
                        </button>

                        {openDropdown === "frontend" && (
                            <ul className="mt-2 ml-4 space-y-2 border-l-2 border-gray-600 pl-4">
                                <li><a href="/project" className="block hover:text-blue-400">Project</a></li>
                                <li><a href="/certificate" className="block hover:text-blue-400">Certificate</a></li>
                                <li><a href="/guestbook" className="block hover:text-blue-400">Guestbook</a></li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <a href="/creator" className="block hover:text-blue-400">Creator</a>
                    </li>

                    <li>
                        <a href="/store" className="block hover:text-blue-400">Store</a>
                    </li>

                    {/* <li>
        <button 
          onClick={() => toggleDropdown("creator")}
          className="flex items-center hover:text-blue-400 w-full"
        >
          <i className={openDropdown === "creator" ? "ri-arrow-down-s-line mr-2" : "ri-arrow-right-s-line mr-2"}></i>
          Creator
        </button>
        
        {openDropdown === "creator" && (
          <ul className="mt-2 ml-4 space-y-2 border-l-2 border-gray-600 pl-4">
            <li><a href="/creator" className="block hover:text-blue-400">Home</a></li>
            <li><a href="/creator/product" className="block hover:text-blue-400">Product</a></li>
          </ul>
        )}
      </li>
      
      <li>
        <button 
          onClick={() => toggleDropdown("store")}
          className="flex items-center hover:text-blue-400 w-full"
        >
          <i className={openDropdown === "store" ? "ri-arrow-down-s-line mr-2" : "ri-arrow-right-s-line mr-2"}></i>
          Store
        </button>
        
        {openDropdown === "store" && (
          <ul className="mt-2 ml-4 space-y-2 border-l-2 border-gray-600 pl-4">
            <li><a href="/store" className="block hover:text-blue-400">Home</a></li>
            <li><a href="/store/product" className="block hover:text-blue-400">Product</a></li>
          </ul>
        )}
      </li> */}

                    <li>
                        <a href="/writings" className="block hover:text-blue-400">Writings</a>
                    </li>
                </ul>

                {/* Social Media Icons */}
                <div className="absolute bottom-5 left-0 w-full flex justify-center gap-4 ">
                    <a href="https://youtube.com/fatkhurrhnn" target="_blank" rel="noopener noreferrer">
                        <i className="ri-youtube-fill text-gray-400 text-xl text-gray-800 hover:text-white transition-all"></i>
                    </a>
                    <a href="https://linkedin.com/fatkhurrhn" target="_blank" rel="noopener noreferrer">
                        <i className="ri-linkedin-box-fill text-gray-400 text-xl text-gray-800 hover:text-white transition-all"></i>
                    </a>
                    <a href="https://tiktok.com/fatkhurrhnn" target="_blank" rel="noopener noreferrer">
                        <i className="ri-tiktok-fill text-gray-400 text-xl text-gray-800 hover:text-white transition-all"></i>
                    </a>
                    <a href="https://instagram.com/fatkhurrhn" target="_blank" rel="noopener noreferrer">
                        <i className="ri-instagram-fill text-gray-400 text-xl text-gray-800 hover:text-white transition-all"></i>
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

        </nav>
    );
};

export default Navbar;
