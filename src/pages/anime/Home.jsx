import React, { useState, useEffect } from 'react';
import AnimeCard from '../../components/anime/AnimeCard.jsx';
import Pagination from '../../components/anime/Pagination.jsx';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [animeList, setAnimeList] = useState([]);
  const [allAnimes, setAllAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const q = query(collection(db, 'animes'), orderBy('title'));
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
      <div className="container mx-auto px-4 py-6 text-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Koleksi Anime
        </h1>
        <p className="text-gray-600">
          {allAnimes.length} anime dalam koleksi
        </p>
      </div>

      <div className="space-y-4">
        {animeList.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Home;