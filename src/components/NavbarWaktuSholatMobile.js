import { useState, useEffect } from "react";

const NavbarWaktuSholat = ({ nextPrayer, nextPrayerTime, countdown }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY === 0) {
        setIsVisible(false); // Sembunyikan saat di paling atas
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(true); // Muncul saat scroll ke bawah
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
<div className={`fixed top-0 left-0 w-full bg-zinc-800 backdrop-blur-md text-white py-3 px-5 shadow-md rounded-b-lg transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"} block md:hidden`}>
<div className="flex justify-between items-center">
    <h2 className="text-lg font-bold flex items-center">
      🕌 <span className="ml-2">Waktu Sholat</span>
    </h2>
    <div className="text-right">
      <p className="text-sm font-semibold text-gray-100">{nextPrayer} - {nextPrayerTime} WIB</p>
      <p className="text-xs text-gray-400">{countdown}</p>
    </div>
  </div>
</div>

  );
};

export default NavbarWaktuSholat;
