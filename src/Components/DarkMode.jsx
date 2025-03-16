import React, { useEffect, useState } from "react";

export default function DarkMode() {
  // Baca mode langsung dari localStorage
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    // Sinkronisasi langsung dengan <html> sebelum komponen lain membaca state
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-5 right-5 w-12 h-12 flex items-center justify-center 
                 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
    >
      {darkMode ? (
        <i className="ri-moon-fill text-xl"></i>
      ) : (
        <i className="ri-sun-fill text-xl"></i>
      )}
    </button>
  );
  
}
