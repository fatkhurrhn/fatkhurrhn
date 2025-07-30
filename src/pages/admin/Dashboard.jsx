import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const collectionInfo = [
  { label: "Animes", path: "/dashboard/manage-animes", collection: "animes" },
  { label: "Anime Reels", path: "/dashboard/animes/manage-reels", collection: "anime-story" },
  { label: "Projects", path: "/dashboard/frontdev/manage-projects", collection: "my-projects" },
  { label: "Certificates", path: "/dashboard/frontdev/manage-certificates", collection: "my-certificates" },
  { label: "Blogs", path: "/dashboard/frontdev/manage-blogs", collection: "my-blogs" },
  { label: "Quotes", path: "/dashboard/creator/manage-quotes", collection: "my-quotes" },
  { label: "Audio", path: "/dashboard/creator/manage-audio", collection: "my-audios" },
];

export default function Dashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const fetchStats = async () => {
      const result = {};
      for (const item of collectionInfo) {
        const snapshot = await getDocs(collection(db, item.collection));
        result[item.collection] = snapshot.size;
      }
      setStats(result);
    };

    fetchStats();
  }, []);

  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {collectionInfo.map((item) => (
          <Link
            key={item.collection}
            to={item.path}
            className="bg-white border border-gray-200 hover:shadow-md p-6 rounded-lg transition-all"
          >
            <h2 className="text-lg font-semibold mb-1">{item.label}</h2>
            <p className="text-sm text-gray-500">Total: <span className="font-bold text-indigo-600">{stats[item.collection] ?? "-"}</span></p>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
