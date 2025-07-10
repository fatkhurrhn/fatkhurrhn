import React, { useState, useEffect } from 'react';
import AnimeCard from '../../components/anime/AnimeCard.jsx';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';
import Nav from '../../components/anime/NavigationWrapper.jsx';

const Status = () => {
  const [activeTab, setActiveTab] = useState('completed');
  const [filteredAnime, setFilteredAnime] = useState([]);
  const [completedCount, setCompletedCount] = useState(0);
  const [watchingCount, setWatchingCount] = useState(0);
  const [planningCount, setPlanningCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        // Fetch completed count
        const completedQuery = query(
          collection(db, 'animes'),
          where('status', '==', 'completed')
        );
        const completedSnapshot = await getDocs(completedQuery);
        setCompletedCount(completedSnapshot.size);

        // Fetch watching count
        const watchingQuery = query(
          collection(db, 'animes'),
          where('status', '==', 'watching')
        );
        const watchingSnapshot = await getDocs(watchingQuery);
        setWatchingCount(watchingSnapshot.size);

        // Fetch planning count
        const planningQuery = query(
          collection(db, 'animes'),
          where('status', '==', 'planning')
        );
        const planningSnapshot = await getDocs(planningQuery);
        setPlanningCount(planningSnapshot.size);

        // Fetch initial data based on active tab
        const initialQuery = query(
          collection(db, 'animes'),
          where('status', '==', activeTab)
        );
        const initialSnapshot = await getDocs(initialQuery);
        const animesData = initialSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setFilteredAnime(animesData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching animes: ", error);
        setLoading(false);
      }
    };

    fetchAnimes();
  }, []);

  useEffect(() => {
    const fetchAnimesByStatus = async () => {
      setLoading(true);
      try {
        const q = query(
          collection(db, 'animes'),
          where('status', '==', activeTab)
        );
        const querySnapshot = await getDocs(q);
        const animesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setFilteredAnime(animesData);
      } catch (error) {
        console.error("Error fetching animes by status: ", error);
      }
      setLoading(false);
    };

    fetchAnimesByStatus();
  }, [activeTab]);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Nav />
      <div className="container mx-auto px-4 max-w-4xl pb-20">
        <div className="mb-3">
          <p className="text-gray-600 text-lg">
            Status Menonton
          </p>
        </div>
        {/* Statistics */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <i className="ri-checkbox-circle-line text-2xl text-green-600 mr-3"></i>
              <div>
                <h3 className="font-semibold text-green-800">Selesai Ditonton</h3>
                <p className="text-green-600">{completedCount} anime</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center">
              <i className="ri-time-line text-2xl text-blue-600 mr-3"></i>
              <div>
                <h3 className="font-semibold text-blue-800">Sedang Ditonton</h3>
                <p className="text-blue-600">{watchingCount} anime</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="flex items-center">
              <i className="ri-calendar-todo-line text-2xl text-purple-600 mr-3"></i>
              <div>
                <h3 className="font-semibold text-purple-800">Rencana Nonton</h3>
                <p className="text-purple-600">{planningCount} anime</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('completed')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${activeTab === 'completed'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              {completedCount} Completed
            </button>
            <button
              onClick={() => setActiveTab('watching')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${activeTab === 'watching'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              {watchingCount} Watching
            </button>
            <button
              onClick={() => setActiveTab('planning')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${activeTab === 'planning'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              {planningCount} Planned
            </button>
          </div>
        </div>

        {/* Results */}
        {loading ? (
          <div className="text-center py-8">
            <p className="text-gray-600">Loading...</p>
          </div>
        ) : filteredAnime.length > 0 ? (
          <div className="space-y-4">
            {filteredAnime.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <i className="ri-tv-line text-4xl text-gray-400 mb-4"></i>
            <p className="text-gray-600">
              Tidak ada anime dengan status ini
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Status;