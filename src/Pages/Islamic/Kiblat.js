import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import FooterComponent from "../../components/FooterUtama";

function Kiblat() {
  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate();

  // Fungsi untuk menutup popup dan kembali ke halaman sebelumnya
  const closePopup = () => {
    setShowPopup(false);
    navigate(-1); // Kembali ke halaman sebelumnya
  };

  useEffect(() => {
    // Jika user menekan tombol ESC, popup akan tertutup dan kembali
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative">
      <div className="bg-zinc-900 text-zinc-400 min-h-screen">
        <div className="mx-auto max-w-[750px] px-4 pb-1 pt-6 text-lg sm:px-12 md:px-16">
          <Navbar />
          <div>
            <br />
            <br />
            <h1>ini halaman Kiblat</h1>
            <br />
          </div>
        </div>
        <FooterComponent />
      </div>
      {/* Popup Peringatan */}
      {showPopup && (
        <div 
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          onClick={closePopup} // Klik luar popup akan menutup
        >
          <div 
            className="bg-zinc-800 p-6 rounded-lg shadow-lg text-center relative w-[90%] max-w-sm"
            onClick={(e) => e.stopPropagation()} // Supaya klik di dalam popup tidak menutup
          >
            {/* Tombol X di pojok kanan atas */}
            <button 
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
              onClick={closePopup}
            >
              ✕
            </button>

            <img 
              src="https://media.tenor.com/EnDdF3poLccAAAAj/sseeyall-bubu-dudu.gif"
              alt="Under Development"
              className="w-40 mx-auto mb-4"
            />
            <h2 className="text-white text-lg font-semibold">Maap yaa</h2>
            <p className="text-gray-300 text-sm mt-2">Halaman ini sedang dalam tahap pengembangan</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Kiblat;
