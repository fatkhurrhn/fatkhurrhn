import {  } from "react";

const Navbar = () => {
  // const [openDropdown, setOpenDropdown] = useState(null);

  // const handleDropdownClick = (menu) => {
  //   setOpenDropdown((prev) => (prev === menu ? null : menu));
  // };

  // const handleClickOutside = (event) => {
  //   if (!event.target.closest(".dropdown")) {
  //     setOpenDropdown(null);
  //   }
  // };

  return (
    <div className="relative">
      <nav className="hidden md:flex space-x-8 font-medium dark:text-[#d4d4d4]">
        <a href="/">Home</a>
        <a href="https://facodes.vercel.app/">Project</a>
        <a href="/certificate">Certificate</a>
        <a href="/guestbook">Guestbook</a>
        
        {/* <div className="relative dropdown">
          <button
            className="flex items-center space-x-1 focus:outline-none"
            onClick={() => handleDropdownClick("frontend")}
          >
            <span>Frontend</span>
            <i className={openDropdown === "frontend" ? "ri-arrow-drop-up-line" : "ri-arrow-drop-down-line"}></i>
          </button>
          {openDropdown === "frontend" && (
            <ul className="absolute left-0 mt-1 w-33 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out">
              <li><a href="/project" className="block px-4 py-2">Project</a></li>
              <li><a href="/certificate" className="block px-4 py-2">Certificate</a></li>
              <li><a href="/guestbook" className="block px-4 py-2">Guestbook</a></li>
            </ul>
          )}
        </div> */}
        
        <a href="/creator">Creator</a>
        <a href="/store">Store</a>
        <a href="/writings">Writings</a>
      </nav>
    </div>
  );
};

export default Navbar;
