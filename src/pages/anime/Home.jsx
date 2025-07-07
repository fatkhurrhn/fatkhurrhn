import React, { useState, useEffect } from 'react';
import AnimeCard from '../components/AnimeCard.jsx';
import Pagination from '../components/Pagination.jsx';
import { animeData } from '../data/animeData.js';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [animeList, setAnimeList] = useState([]);
  const itemsPerPage = 10;

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setAnimeList(animeData.slice(startIndex, endIndex));
  }, [currentPage]);

  const totalPages = Math.ceil(animeData.length / itemsPerPage);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Koleksi Anime
        </h1>
        <p className="text-gray-600">
          {animeData.length} anime dalam koleksi
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