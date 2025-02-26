import { useState, useEffect } from "react";
import NavbarMobile from "../components/FooterIslamicMobile"; 
import NavbarWaktuSholat from "../components/NavbarWaktuSholatMobile"; 
import NavbarIslamic from "../components/Navbar-islamic"; 
import FooterIslamic from "../components/Footer-islamic"; 
import Headline from "../components/headline";
import { Link } from "react-router-dom";


import { FaBook, FaPray, FaClock, FaCompass, FaCalendar, FaNewspaper, FaStar } from "react-icons/fa";

export default function JadwalSholat() {
  const [popup, setPopup] = useState("initial");
  const [showPopupAl, setShowPopupAl] = useState(true);

  const [showPopuppp, setShowPopuppp] = useState(false);

  const [idKota, setIdKota] = useState(localStorage.getItem("idkota") || "");
  const [namaKota, setNamaKota] = useState(localStorage.getItem("judulkota") || "");
  const [jadwal, setJadwal] = useState(null);
  const [listKota, setListKota] = useState([]);
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [nextPrayer, setNextPrayer] = useState("");
  const [nextPrayerTime, setNextPrayerTime] = useState("");
  const [countdown, setCountdown] = useState("");
  const [nextPrayerDate, setNextPrayerDate] = useState(null);

  useEffect(() => {
    async function fetchJadwal() {
      if (!idKota) return;
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      const response = await fetch(`https://api.myquran.com/v2/sholat/jadwal/${idKota}/${year}/${month}/${day}`);
      const data = await response.json();
      if (data?.data?.jadwal) {
        setJadwal(data.data.jadwal);
        determineNextPrayer(data.data.jadwal);
      }
    }
    fetchJadwal();
  }, [idKota]);

  useEffect(() => {
    async function fetchKota() {
      const response = await fetch("https://api.myquran.com/v2/sholat/kota/semua");
      const data = await response.json();
      setListKota(data.data);
      }
    fetchKota();
    }, []);

  useEffect(() => {
    if (nextPrayerDate) {
      const interval = setInterval(updateCountdown, 1000);
      return () => clearInterval(interval);
    }
  }, [nextPrayerDate]);

  const handleSelectKota = (id, nama) => {
    setIdKota(id);
    setNamaKota(nama);
    localStorage.setItem("idkota", id);
    localStorage.setItem("judulkota", nama);
    setSearch(""); // Reset input setelah memilih kota
    setShowDropdown(false); // Sembunyikan dropdown
  };
  

  function determineNextPrayer(jadwal) {
    const prayerTimes = [
      ["Imsak", jadwal.imsak],
      ["Subuh", jadwal.subuh],
      ["Zuhur", jadwal.dzuhur],
      ["Ashar", jadwal.ashar],
      ["Maghrib", jadwal.maghrib],
      ["Isya", jadwal.isya],
    ];

    const now = new Date();
    for (let [name, time] of prayerTimes) {
      const [hour, minute] = time.split(":");
      const prayerTime = new Date();
      prayerTime.setHours(hour, minute, 0, 0);
      if (prayerTime > now) {
        setNextPrayer(name);
        setNextPrayerTime(time);
        setNextPrayerDate(prayerTime);
        return;
      }
    }
  }

  useEffect(() => {
    if (popup === "belum") {
      setTimeout(() => {
        window.location.href = "https://quran.com/";
      }, 2000); // Redirect setelah 2 detik
    } else if (popup === "sudah") {
      setTimeout(() => {
        setShowPopupAl(false);
      }, 1500); // Tutup popup setelah 1.5 detik
    }
  }, [popup]);

  function updateCountdown() {
    if (!nextPrayerDate) return;
    const now = new Date();
    const diff = Math.max(0, (nextPrayerDate - now) / 1000);
    const hours = String(Math.floor(diff / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((diff % 3600) / 60)).padStart(2, '0');
    const seconds = String(Math.floor(diff % 60)).padStart(2, '0');
    setCountdown(`${hours}:${minutes}:${seconds}`);
  }

  return (
    <div className="relative bg-zinc-900 text-white min-h-screen">
      <div className="hidden md:block mx-auto max-w-[800px] px-4 pt-6 text-lg sm:px-6 md:px-8 lg:px-16">
      <NavbarIslamic/> <br/><br/>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
          <div className="text-white text-center md:text-left">
            <h2 className="text-lg md:text-xl font-semibold">{nextPrayer} {nextPrayerTime} WIB</h2>
            <p className="text-gray-400">- {countdown}</p>
          </div>
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Cari kota..."
              className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setShowDropdown(true)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // Delay biar dropdown nggak langsung hilang
            />
            {showDropdown && (
              <div className="absolute w-full bg-zinc-800 mt-1 rounded-md shadow-lg max-h-60 overflow-auto">
                {listKota
                  .filter((kota) => kota.lokasi.toLowerCase().includes(search.toLowerCase()))
                  .map((kota) => (
                    <div
                      key={kota.id}
                      onClick={() => handleSelectKota(kota.id, kota.lokasi)}
                      className="px-4 py-2 cursor-pointer hover:bg-zinc-700"
                    >
                      {kota.lokasi}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
        <div className="bg-[#1E1E20] p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-white">Jadwal Sholat - {namaKota}</h2>
          <p className="text-sm text-gray-400 mt-2">{jadwal?.tanggal || "Memuat..."}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-4 text-white">
            {jadwal && Object.entries(jadwal).filter(([sholat]) => ["imsak", "subuh", "dzuhur", "ashar", "maghrib", "isya"].includes(sholat.toLowerCase())).map(([sholat, waktu]) => (
              <div key={sholat} className="p-3 bg-zinc-800 rounded-md text-center">
                <span className="block font-semibold">{sholat}</span>
                <span className="text-lg">{waktu}</span>
              </div>
            ))}
          </div>
        </div>
        <Headline/>
      </div>

      {/* Versi Mobile */}
      <NavbarMobile />
      <NavbarWaktuSholat nextPrayer={nextPrayer} nextPrayerTime={nextPrayerTime} countdown={countdown} />
      <div className="block md:hidden flex flex-col items-center justify-center text-center mt-0 pt-5">
        <h2 className="text-sm text-gray-400 cursor-pointer mt-1" onClick={() => setShowPopup(true)}><i class="ri-map-pin-2-line"></i> {namaKota} (Ganti)</h2>
        <h1 className="text-2xl font-bold mt-0">{nextPrayer} {nextPrayerTime} WIB</h1>
        <p className="text-lg text-gray-400">{countdown}</p>
        <p className="text-sm">{new Date().toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</p>
        <div className="p-4 mt-0 rounded-lg shadow-lg w-[380px]"> {/* Bungkus menu */}
          <hr className="my-5 border-zinc-700" />
          <div className="grid grid-cols-4 gap-4">
            {[
              { name: "Quran", icon: <FaBook />, link: "/quran" },
              { name: "Doa", icon: <FaPray />, link: "/doa" },
              { name: "Jadwal", icon: <FaClock />, link: "/jadwal-sholat" },
              { name: "Kiblat", icon: <FaCompass />, link: "/kiblat" },
              { name: "Tahlil", icon: <FaStar />, link: "/tahlil" },
              { name: "Kalender", icon: <FaCalendar />, link: "/kalender" },
              { name: "News", icon: <FaNewspaper />, link: "/news-islamic" },
              { name: "Kalam", icon: <FaBook />, link: "/kalam" },
            ].map((menu, index) => (
              <a key={index} href={menu.link} className="flex flex-col items-center p-3 bg-zinc-700 rounded-md">
                {menu.icon}
                <span className="text-sm mt-1">{menu.name}</span>
              </a>
            ))}
          </div>
        </div>
        {/* Countdown Ramadhan */}
        <div className="bg-zinc-800 p-4 mt-6 rounded-lg shadow-lg w-[370px] text-center">
          <h2 className="text-lg font-semibold">🕌 Countdown Ramadhan-1446 H</h2>
          <p className="text-2xl font-bold mt-2">
            {(() => {
              const today = new Date();
              const ramadhanDate = new Date(2025, 2, 1);
              // Hitung selisih dalam UTC untuk menghindari masalah zona waktu
              const diffTime = Math.ceil((ramadhanDate.setUTCHours(0, 0, 0, 0) - today.setUTCHours(0, 0, 0, 0)) / (1000 * 60 * 60 * 24));
              return Math.max(0, diffTime);
            })()} Hari Lagi
          </p>
          <p className="text-sm mt-2 text-gray-400">Ramadhan dimulai pada 1 Maret</p>
        </div>
        <Headline/>
        <br /><br /><br />
      </div>
      
      {/* popup baca quran */}
      {/* {showPopupAl && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50 animate-fadeIn">
          <div className={`bg-[#1E1E20] p-6 rounded-lg shadow-lg w-80 text-center transition-all duration-300 transform ${popup !== 'initial' ? 'scale-105 opacity-100' : 'scale-100 opacity-100'}`}>
            {popup === "initial" && (
              <>
                <h2 className="text-white text-lg font-semibold animate-fadeUp">Sudah baca Al-Qur'an hari ini?</h2>
                <div className="mt-4 flex justify-center gap-6">
                  <button onClick={() => setPopup("sudah")} className="px-3 py-1 text-sm bg-green-600 text-white rounded-md hover:bg-green-500 transition-all">Sudah</button>
                  <button onClick={() => setPopup("belum")} className="px-3 py-1 text-sm bg-red-600 text-white rounded-md hover:bg-red-500 transition-all">Belum</button>
                </div>
              </>
            )}
            {popup === "belum" && <h2 className="text-white text-lg font-semibold animate-fadeUp">Astagfirullah bro... istighfar</h2>}
            {popup === "sudah" && <h2 className="text-white text-lg font-semibold animate-fadeUp">MasyaAllah Tabarakallah</h2>}
          </div>
        </div>
      )} */}
      {/* popup kota */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setShowPopup(false)} // Klik luar popup => hide
        >
          <div
            className="bg-zinc-800 text-white p-4 rounded-lg w-80 
                  fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            onClick={(e) => e.stopPropagation()} // Supaya klik di dalam popup tidak hide
          >
            <input
              type="text"
              className="w-full px-3 py-2 bg-zinc-800 rounded-md"
              placeholder="Cari kota..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <ul className="mt-2 max-h-60 overflow-auto">
              {listKota.filter(kota => kota.lokasi.toLowerCase().includes(search.toLowerCase())).map((kota) => (
                <li
                  key={kota.id}
                  className="cursor-pointer p-2 hover:bg-zinc-700"
                  onClick={() => {
                    setIdKota(kota.id);
                    setNamaKota(kota.lokasi);
                    localStorage.setItem("idkota", kota.id);
                    localStorage.setItem("judulkota", kota.lokasi);
                    setShowPopup(false);
                  }}
                >
                  {kota.lokasi}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {/* Popup Peringatan */}
      {showPopuppp && (
        <div 
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          onClick={() => setShowPopuppp(false)}
        >
          <div 
            className="bg-zinc-800 p-6 rounded-lg shadow-lg text-center relative w-[90%] max-w-sm"
            onClick={(e) => e.stopPropagation()} // Mencegah close saat klik di dalam popup
          >
            {/* Tombol X di pojok kanan atas */}
            <button 
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
              onClick={() => setShowPopuppp(false)}
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
      <FooterIslamic/>
    </div>
  );
}
