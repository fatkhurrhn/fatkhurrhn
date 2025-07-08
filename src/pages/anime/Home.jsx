import React, { useState, useEffect } from 'react';
import AnimeCard from '../../components/anime/AnimeCard.jsx';
import Pagination from '../../components/anime/Pagination.jsx';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import Nav from '../../components/anime/NavigationWrapper.jsx';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [animeList, setAnimeList] = useState([]);
  const [allAnimes, setAllAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        // Sort by createdAt DESC so newest is first
        const q = query(collection(db, 'animes'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const animesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setAllAnimes(animesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching animes: ", error);
        setLoading(false);
      }
    };

    fetchAnimes();
  }, []);

  useEffect(() => {
    if (allAnimes.length > 0) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setAnimeList(allAnimes.slice(startIndex, endIndex));
    }
  }, [currentPage, allAnimes]);

  const totalPages = Math.ceil(allAnimes.length / itemsPerPage);

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen text-gray-800">
          <div className="container mx-auto px-4 py-6 max-w-4xl">
            <div className="mb-8">
              <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="animate-pulse">
                    <div className="bg-gray-200 h-40 w-full"></div>
                    <div className="p-4">
                      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Nav>
        <div className="container mx-auto px-4 pt-[68px] max-w-4xl">
          <div className="mb-5">
            <p className="text-gray-600 text-lg">
              {allAnimes.length} {allAnimes.length === 1 ? 'anime' : 'animes'} in your collection
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {animeList.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-8">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </div>
      </Nav>
    </div>
  );
};

export default Home;
