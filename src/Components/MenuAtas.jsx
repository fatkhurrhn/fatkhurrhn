import { useState } from "react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownClick = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <div className="relative">
      <nav className="hidden md:flex space-x-8 font-medium text-gray-800">
        <a href="/">Home</a>
        <a href="/projects">Project</a>
        <a href="/certificate">Certificate</a>        
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
              <li><a href="/wtirings" className="block px-4 py-2">Writings</a></li>
              <li><a href="/guestbook" className="block px-4 py-2">Guestbook</a></li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
