import { useState, useEffect } from "react";
import FooterIslamic from "../../components/Footer-islamic";
import NavbarIslamic from "../../components/Navbar-islamic";
// import Back from "../../components/back";
// import { Link } from "react-router-dom";


function JadwalSholat() {
  const [idKota, setIdKota] = useState(localStorage.getItem("idkota") || null);
  const [namaKota, setNamaKota] = useState(localStorage.getItem("judulkota") || "Pilih Kota");
  const [jadwal, setJadwal] = useState(null);
  const [listKota, setListKota] = useState([]);
  const [search, setSearch] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [nextPrayer, setNextPrayer] = useState("");
  const [nextPrayerTime, setNextPrayerTime] = useState("");
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    async function fetchKota() {
      const response = await fetch("https://api.myquran.com/v2/sholat/kota/semua");
      const data = await response.json();
      setListKota(data.data);
    }
    fetchKota();
  }, []);

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

  function determineNextPrayer(jadwal) {
    const prayerTimes = [
      { name: "Subuh", time: jadwal.subuh },
      { name: "Dzuhur", time: jadwal.dzuhur },
      { name: "Ashar", time: jadwal.ashar },
      { name: "Maghrib", time: jadwal.maghrib },
      { name: "Isya", time: jadwal.isya },
    ];

    const now = new Date();
    for (let prayer of prayerTimes) {
      const [hours, minutes] = prayer.time.split(":").map(Number);
      const prayerTime = new Date();
      prayerTime.setHours(hours, minutes, 0, 0);
      
      if (now < prayerTime) {
        setNextPrayer(prayer.name);
        setNextPrayerTime(prayer.time);
        startCountdown(prayerTime);
        return;
      }
    }
  }

  function startCountdown(targetTime) {
    const updateCountdown = () => {
      const now = new Date();
      const diff = Math.max((targetTime - now) / 1000, 0);
      const hours = String(Math.floor(diff / 3600)).padStart(2, '0');
      const minutes = String(Math.floor((diff % 3600) / 60)).padStart(2, '0');
      const seconds = String(Math.floor(diff % 60)).padStart(2, '0');
      setCountdown(`${hours}:${minutes}:${seconds}`);
    };
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  return (
    <div className="bg-zinc-900 text-zinc-400 min-h-screen">
      <div className="mx-auto max-w-[880px] px-4 pb-1 pt-6 text-lg sm:px-12 md:px-16">
        <NavbarIslamic />
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 flex items-center justify-between gap-5 bg-zinc-800 px-5 text-base sm:px-5 py-1">
            <div className="relative block sm:hidden">
                <button type="button" className="flex items-center gap-2 py-3 text-sm transition-colors hover:text-zinc-300 sm:hidden sm:text-base" onClick={() => window.history.back()}>
                    <i class="ri-arrow-left-line"></i>Jadwal Sholat
                </button>
            </div>
        </div>
        <div className="pt-[10px] text-center">
          <section className="py-6 relative">
            <h2 className="text-sm text-gray-400 cursor-pointer mt-3" onClick={() => setShowPopup(true)}>
              <i className="ri-map-pin-2-line"></i> {namaKota} (Ganti)
            </h2>
            <h1 className="text-2xl font-bold mt-0">{nextPrayer} {nextPrayerTime} WIB</h1>
            <p className="text-lg text-gray-400">- {countdown}</p>
            <p className="text-sm">{new Date().toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-4 text-white">
              {jadwal && Object.entries(jadwal).filter(([sholat]) => ["imsak", "subuh", "dzuhur", "ashar", "maghrib", "isya"].includes(sholat.toLowerCase())).map(([sholat, waktu]) => (
                <div key={sholat} className="p-3 bg-zinc-800 rounded-md text-center">
                  <span className="block font-semibold">{sholat}</span>
                  <span className="text-lg">{waktu}</span>
                </div>
              ))}
            </div>

            <div className="bg-transparent p-4 mt-6 rounded-lg border border-zinc-500/50 shadow-lg w-full flex items-center justify-center text-center">
                <p className="text-[17px] text-zinc-300 flex items-center gap-2">
                    <i className="ri-hand-heart-line"></i> Dukung kami untuk terus berkembang
                </p>
            </div>
          </section>
        </div>
      </div>
      
      <FooterIslamic />
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={() => setShowPopup(false)}>
          <div className="bg-zinc-800 text-white p-4 rounded-lg w-80 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" onClick={(e) => e.stopPropagation()}>
            <input type="text" className="w-full px-3 py-2 bg-zinc-800 rounded-md" placeholder="Cari kota..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <ul className="mt-2 max-h-60 overflow-auto">
              {listKota.filter(kota => kota.lokasi.toLowerCase().includes(search.toLowerCase())).map((kota) => (
                <li key={kota.id} className="cursor-pointer p-2 hover:bg-zinc-700" onClick={() => {
                  setIdKota(kota.id);
                  setNamaKota(kota.lokasi);
                  localStorage.setItem("idkota", kota.id);
                  localStorage.setItem("judulkota", kota.lokasi);
                  setShowPopup(false);
                }}>
                  {kota.lokasi}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default JadwalSholat;
