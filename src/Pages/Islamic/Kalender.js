import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar-islamic";
import FooterComponent from "../../components/Footer-islamic";

function SholatCalendar() {
  const [calendar, setCalendar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const locationRef = useRef(null);
  const d = new Date();

  useEffect(() => {
    // Cek apakah ada lokasi yang tersimpan di localStorage
    const savedLocation = localStorage.getItem("userLocation");
    if (savedLocation) {
      const { latitude, longitude } = JSON.parse(savedLocation);
      fetchPrayerTimes({ coords: { latitude, longitude } });
    }
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(saveAndFetchLocation, showError);
    } else {
      locationRef.current.innerHTML =
        "Geolocation tidak didukung di browser ini.";
    }
  };

  const saveAndFetchLocation = (position) => {
    const { latitude, longitude } = position.coords;

    // Simpan ke localStorage agar tidak hilang saat refresh
    localStorage.setItem(
      "userLocation",
      JSON.stringify({ latitude, longitude })
    );

    fetchPrayerTimes(position);
  };

  const fetchPrayerTimes = async (position) => {
    const { latitude, longitude } = position.coords;
    locationRef.current.innerHTML = `Latitude: ${latitude} | Longitude: ${longitude}`;

    const query = `latitude=${latitude}&longitude=${longitude}&method=2&month=${
      d.getMonth() + 1
    }&year=${d.getFullYear()}`;
    const url = `https://api.aladhan.com/v1/calendar?${query}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.code === 200) {
        setCalendar(data.data);
        setError(null);
      } else {
        setError("Gagal mengambil data dari API.");
      }
    } catch (err) {
      setError("Terjadi kesalahan dalam mengambil data.");
    } finally {
      setLoading(false);
    }
  };

  const showError = (error) => {
    setLoading(false);
    switch (error.code) {
      case error.PERMISSION_DENIED:
        locationRef.current.innerHTML =
          "Akses lokasi ditolak. Silakan izinkan lokasi di browser.";
        break;
      case error.POSITION_UNAVAILABLE:
        locationRef.current.innerHTML = "Informasi lokasi tidak tersedia.";
        break;
      case error.TIMEOUT:
        locationRef.current.innerHTML = "Permintaan lokasi terlalu lama.";
        break;
      default:
        locationRef.current.innerHTML =
          "Terjadi kesalahan saat mengambil lokasi.";
    }
  };

  return (
    <div className="relative bg-zinc-900 text-zinc-400 min-h-screen">
      <div className="mx-auto max-w-[850px] px-4 pb-6 pt-6 text-lg sm:px-12 md:px-16">
        <Navbar />
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 flex items-center justify-between gap-5 bg-zinc-800 px-5 text-base sm:px-5 py-1">
            <div className="relative block sm:hidden">
                <button type="button" className="flex items-center gap-2 py-3 text-sm transition-colors hover:text-zinc-300 sm:hidden sm:text-base" onClick={() => window.history.back()}>
                    <i class="ri-arrow-left-line"></i>Kalender Sholat
                </button>
            </div>
        </div>
        {/* Header Kalender */}
        <div className="text-center mt-12">
          <p>
            Sekarang tanggal <strong>{d.toLocaleDateString("id-ID")}</strong>
          </p>

          {/* Tombol Atur Lokasi */}
          <button
            onClick={getLocation}
            className="mt-2 px-2 py-1 bg-rose-500 hover:bg-rose-600 text-sm text-white rounded-[5px] transition"
          >
            Atur Lokasi Otomatis
          </button>

          {/* Tempat untuk menampilkan lokasi */}
          <p
            ref={locationRef}
            className="mt-4 text-sm text-zinc-300 bg-zinc-800 p-3 rounded-md border border-zinc-600"
          >
            {localStorage.getItem("userLocation")
              ? "Lokasi sudah diatur. Jika ingin mengganti lokasi, tekan tombol di atas."
              : "Tekan tombol untuk mendapatkan lokasi Anda."}
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <p className="mt-4 text-center text-rose-500">
            Memuat kalender sholat...
          </p>
        )}

        {/* Error */}
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}

        {/* Kalender Sholat */}
        {calendar && (
          <div className="overflow-x-auto mx-auto max-w-max mt-6">
            <table className="table-auto border border-zinc-700 w-full text-sm">
              <thead>
                <tr className="bg-rose-500 text-white">
                  <th className="p-3 border border-zinc-700">Tanggal</th>
                  {Object.keys(calendar[0].timings).map((name, index) => (
                    <th key={index} className="p-3 border border-zinc-700">
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {calendar.map(({ timings, date }, i) => (
                  <tr
                    key={i}
                    className={`whitespace-nowrap text-center ${
                      date.gregorian.day === String(d.getDate()).padStart(2, "0")
                        ? "bg-rose-600 text-white"
                        : "odd:bg-zinc-800"
                    }`}
                  >
                    <td className="p-3 border border-zinc-700">
                      {date.gregorian.day}/{date.gregorian.month.number}/
                      {date.gregorian.year}
                    </td>
                    {Object.values(timings).map((time, index) => (
                      <td key={index} className="p-3 border border-zinc-700">
                        {time.slice(0, 5)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="bg-transparent p-4 mt-6 rounded-lg border border-zinc-500/50 shadow-lg w-full flex items-center justify-center text-center">
            <p className="text-[17px] text-zinc-300 flex items-center gap-2">
                <i className="ri-hand-heart-line"></i> Dukung kami untuk terus berkembang
            </p>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default SholatCalendar;
