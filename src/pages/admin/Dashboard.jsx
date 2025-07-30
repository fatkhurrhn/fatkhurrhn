import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

// Define the dashboard sections with their details
const dashboardSections = [
  { label: "Animes", path: "/dashboard/manage-animes", collectionName: "animes", icon: "🎬" },
  { label: "Anime Reels", path: "/dashboard/animes/manage-reels", collectionName: "anime-story", icon: "🎞️" },
  { label: "Projects", path: "/dashboard/frontdev/manage-projects", collectionName: "my-project", icon: "💡" },
  { label: "Certificates", path: "/dashboard/frontdev/manage-certificates", collectionName: "my-certificate", icon: "📄" },
  { label: "Blogs", path: "/dashboard/frontdev/manage-blogs", collectionName: "my-blogs", icon: "✍️" },
  { label: "Quotes", path: "/dashboard/creator/manage-quotes", collectionName: "my-quotes", icon: "💬" },
  { label: "Audio", path: "/dashboard/creator/manage-audio", collectionName: "my-audios", icon: "🎧" },
];

export default function Dashboard() {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      setError(null);
      const newStats = {};
      for (const item of dashboardSections) {
        try {
          const snapshot = await getDocs(collection(db, item.collectionName));
          newStats[item.collectionName] = snapshot.size;
        } catch (err) {
          console.error(`Gagal mengambil data untuk ${item.collectionName}:`, err);
          setError("Gagal memuat beberapa data dashboard. Silakan coba lagi.");
          newStats[item.collectionName] = 0; // Setel ke 0 atau 'N/A' saat error
        }
      }
      setStats(newStats);
      setLoading(false);
    };

    fetchStats();
  }, []); // Array dependensi kosong memastikan ini berjalan sekali saat komponen dimuat

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">

        {/* Quick Links Section */}
        <div className="mb-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Tautan Cepat</h2>
          <div className="flex flex-wrap gap-4 justify-start">
            {dashboardSections.map((item) => (
              <Link
                key={item.collectionName}
                to={item.path}
                className="flex items-center space-x-2 px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-full hover:bg-indigo-100 hover:border-indigo-400 transition-all duration-200 text-sm font-medium"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {loading && (
          <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md mb-8">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-gray-700">Memuat data dashboard...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-8" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Overview Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {dashboardSections.map((item) => (
                <div
                  key={item.collectionName}
                  className="bg-white border border-gray-200 p-6 rounded-lg flex flex-col items-start space-y-3 shadow-sm"
                >
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.label}
                  </h2>
                  <p className="text-md text-gray-600">
                    Total Item:{" "}
                    <span className="font-bold text-indigo-700">
                      {stats[item.collectionName] !== undefined ? stats[item.collectionName] : "N/A"}
                    </span>
                  </p>
                </div>
              ))}
            </div>

            {/* Analytics and Recent Activities Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Analytics Overview */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Ringkasan Analitik</h2>
                <div className="w-full h-48 bg-gray-100 rounded-md flex items-center justify-center text-gray-500 border border-dashed border-gray-300">
                  {/* Ini adalah placeholder untuk grafik */}
                  <p>Placeholder Grafik (misalnya, Grafik Kunjungan Halaman)</p>
                </div>
                <p className="text-gray-600 mt-4 text-sm">
                  Data analitik akan ditampilkan di sini untuk memberikan wawasan tentang kinerja situs atau aplikasi Anda.
                  Anda dapat mengintegrasikan pustaka grafik seperti Chart.js atau Recharts di sini.
                </p>
              </div>

              {/* Recent Activities */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Aktivitas Terbaru</h2>
                <ul className="divide-y divide-gray-200">
                  <li className="py-2 text-gray-700">
                    <span className="font-medium text-indigo-600">Anime:</span> "One Piece" ditambahkan oleh Admin (2 jam lalu)
                  </li>
                  <li className="py-2 text-gray-700">
                    <span className="font-medium text-indigo-600">Blog:</span> Artikel "Memulai React" diperbarui (1 hari lalu)
                  </li>
                  <li className="py-2 text-gray-700">
                    <span className="font-medium text-indigo-600">Proyek:</span> "Portofolio V2" diunggah (3 hari lalu)
                  </li>
                  <li className="py-2 text-gray-700">
                    <span className="font-medium text-indigo-600">Kutipan:</span> Kutipan baru ditambahkan (1 minggu lalu)
                  </li>
                  <li className="py-2 text-gray-700">
                    <span className="font-medium text-indigo-600">Sertifikat:</span> Sertifikat "React Advanced" ditambahkan (2 minggu lalu)
                  </li>
                </ul>
                <p className="text-gray-600 mt-4 text-sm">
                  Bagian ini dapat menampilkan log aktivitas terbaru seperti penambahan/pengeditan konten, login pengguna, dll.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}