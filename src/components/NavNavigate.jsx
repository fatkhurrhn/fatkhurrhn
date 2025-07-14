import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';

const NavNavigate = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const location = useLocation();

    const handleDropdownClick = (menu) => {
        setOpenDropdown((prev) => (prev === menu ? null : menu));
    };

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    const navItems = [
        {
            path: '/',
            icon: 'ri-home-3-line',
            activeIcon: 'ri-home-3-fill',
            label: 'Home',
            exact: true
        },
        {
            path: '/projects',
            icon: 'ri-code-s-slash-line',
            activeIcon: 'ri-code-s-slash-fill',
            label: 'Projects'
        },
        {
            path: '/certificates',
            icon: 'ri-folders-line',
            activeIcon: 'ri-folders-fill',
            label: 'certificates'
        },
        {
            path: '/blogs',
            icon: 'ri-news-line',
            activeIcon: 'ri-news-fill',
            label: 'Blogs',
            activePaths: ['/writings/tailwind-ui-is-now-tailwind-plus', '/blogs' ]
        },
        {
            path: '/others',
            icon: 'ri-apps-line',
            activeIcon: 'ri-apps-fill',
            label: 'Others',
            activePaths: ['/others', '/resume', '/paid-promote', '/xixi']
        }
    ];

    return (
        <>
            {/* Main NavNavigate */}
            <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
                <div className="max-w-4xl mx-auto flex items-center justify-between px-2 py-2 sm:mt-0">
                    {/* Hamburger Menu Button (Mobile) */}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="text-gray-700 dark:text-white text-2xl md:hidden"
                    >
                        <i className="ri-menu-2-line text-gray-800"></i>
                    </button>

                    <div className="relative">
                        <nav className="hidden md:flex space-x-8 font-medium text-gray-800">
                            <Link to="/">Home</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/certificates">Certificates</Link>
                            <Link to="/blogs">Blogs</Link>
                            <Link to="/guestbook">Guestbook</Link>
                            <Link to="/others">Others</Link>
                            {/* <div className="relative dropdown">
                                <button
                                    className="flex items-center space-x-1 focus:outline-none"
                                    onClick={() => handleDropdownClick("Pages")}
                                >
                                    <span>Pages</span>
                                    <i className={openDropdown === "Pages" ? "ri-arrow-drop-up-line" : "ri-arrow-drop-down-line"}></i>
                                </button>
                                {openDropdown === "Pages" && (
                                    <ul className="absolute left-0 mt-1 w-33 bg-white bg-gray-800 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out">
                                        <li><Link to="/creator" className="block px-4 py-2">Creator</Link></li>
                                        <li><Link to="/store" className="block px-4 py-2">Store</Link></li>
                                        <li><Link to="/blogs" className="block px-4 py-2">blogs</Link></li>
                                        <li><Link to="/guestbook" className="block px-4 py-2">Guestbook</Link></li>
                                    </ul>
                                )}
                            </div> */}
                        </nav>
                    </div>

                    {/* page to resume */}
                    <Link
                        to="/resume"
                        className="text-gray-800 font-medium rounded-lg text-sm px-4 py-2 bg-white border border-gray-200 hover:bg-gray-100"
                    >
                        Resumes
                    </Link>
                </div>

                {/* Sidebar */}
                <div
                    className={`fixed top-0 left-0 h-full w-2/4 bg-white text-gray-800 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                        } transition-transform duration-300 ease-in-out z-30 px-6`}
                >
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Fatkhurrhn</h3>
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="text-2xl"
                        >
                            <i className="ri-close-line"></i>
                        </button>
                    </div>

                    {/* Sidebar Menu */}
                    <ul className="pt-8 ml-[-7px] mt-6 space-y-2">
                        <li>
                            <Link to="/" className="block hover:text-blue-400">Home</Link>
                        </li>
                        <li>
                            <button onClick={() => toggleDropdown("frontend")} className="flex items-center hover:text-blue-400 w-full">
                                <i className={openDropdown === "frontend" ? "ri-arrow-down-s-line mr-2" : "ri-arrow-right-s-line mr-1"}></i>
                                Frontdev
                            </button>
                            {openDropdown === "frontend" && (
                                <ul className="mt-2 ml-4 space-y-2 border-l-2 border-gray-600 pl-4">
                                    <li><Link to="/projects" className="block hover:text-blue-400">Projects</Link></li>
                                    <li><Link to="/certificates" className="block hover:text-blue-400">Certificates</Link></li>
                                    <li><Link to="/blogs" className="block hover:text-blue-400">Blogs</Link></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link to="/storythur" className="block hover:text-blue-400">Creator</Link>
                        </li>
                        <li>
                            <button
                                onClick={() => toggleDropdown("islamic")}
                                className="flex items-center hover:text-blue-400 w-full"
                            >
                                <i className={openDropdown === "islamic" ? "ri-arrow-down-s-line mr-2" : "ri-arrow-right-s-line mr-1"}></i>
                                Islamic
                            </button>

                            {openDropdown === "islamic" && (
                                <ul className="mt-2 ml-4 space-y-2 border-l-2 border-gray-600 pl-4">
                                    <li><Link to="/#" className="block hover:text-blue-400">#</Link></li>
                                    <li><Link to="/#" className="block hover:text-blue-400">#</Link></li>
                                    <li><Link to="/#" className="block hover:text-blue-400">#</Link></li>
                                </ul>
                            )}
                        </li>
                    </ul>

                    <div className="absolute bottom-12 left-6 right-4 flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Follow for more</h3>
                    </div>

                    {/* Social Media Icons */}
                    <div className="absolute bottom-5 left-0 w-full flex justify-center gap-4 ">
                        <Link to="https://youtube.com/fatkhurrhnn" target="_blank" rel="noopener noreferrer">
                            <i className="ri-youtube-fill text-gray-400 text-xl text-gray-800 hover:text-white transition-all"></i>
                        </Link>
                        <Link to="https://linkedin.com/fatkhurrhn" target="_blank" rel="noopener noreferrer">
                            <i className="ri-linkedin-box-fill text-gray-400 text-xl text-gray-800 hover:text-white transition-all"></i>
                        </Link>
                        <Link to="https://tiktok.com/fatkhurrhnn" target="_blank" rel="noopener noreferrer">
                            <i className="ri-tiktok-fill text-gray-400 text-xl text-gray-800 hover:text-white transition-all"></i>
                        </Link>
                        <Link to="https://instagram.com/fatkhurrhn" target="_blank" rel="noopener noreferrer">
                            <i className="ri-instagram-fill text-gray-400 text-xl text-gray-800 hover:text-white transition-all"></i>
                        </Link>
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

            {/* Bottom Navigation (Mobile) */}
            <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-10">
                <div className="flex justify-around items-stretch py-1">
                    {navItems.map((item) => {
                        let isActive = false;

                        if (item.exact) {
                            isActive = location.pathname === item.path;
                        } else if (item.activePaths && item.activePaths.length > 0) {
                            isActive = item.activePaths.some((path) => location.pathname.startsWith(path));
                        } else {
                            isActive = location.pathname.startsWith(item.path);
                        }

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex-1 flex flex-col items-center justify-center p-1 transition-colors ${isActive ? 'text-black' : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                <i className={`text-lg ${isActive ? item.activeIcon : item.icon}`}></i>
                                <span className="text-[10px] leading-tight mt-0.5">{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default NavNavigate;