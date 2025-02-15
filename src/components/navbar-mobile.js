import { FaHome, FaBook, FaNewspaper, FaCalendar, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarMobile = () => {
  const menuItems = [
    { name: "Home", icon: <FaHome className="text-xl" />, link: "/" },
    { name: "Al-Quran", icon: <FaBook className="text-xl" />, external: "https://quran.com/" },
    { name: "Artikel", icon: <FaNewspaper className="text-xl" />, link: "/news-islamic" },
    { name: "Kalender", icon: <FaCalendar className="text-xl" />, link: "/kalender" },
    { name: "Pengaturan", icon: <FaCog className="text-xl" />, link: "/pengaturan" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-zinc-800 text-white py-3 shadow-[0_-3px_10px_rgba(0,0,0,0.3)] flex justify-around md:hidden border-t border-zinc-700">
      {menuItems.map((menu, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-sm text-gray-300 hover:text-white transition duration-200 cursor-pointer"
        >
          {menu.external ? (
            <a href={menu.external} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              {menu.icon}
              <span>{menu.name}</span>
            </a>
          ) : (
            <Link to={menu.link} className="flex flex-col items-center">
              {menu.icon}
              <span>{menu.name}</span>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavbarMobile;
