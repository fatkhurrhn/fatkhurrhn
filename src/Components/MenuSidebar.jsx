import { useState } from "react";

const Menu = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  
  return (
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

      {/* <li>
        <a href="/store" className="block hover:text-blue-400">Store</a>
      </li> */}
      
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
  );
};

export default Menu;