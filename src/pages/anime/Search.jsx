import React, { useState, useEffect } from 'react';
import AnimeCard from '../components/AnimeCard.jsx';
import { animeData, genres } from '../data/animeData.js';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [filteredAnime, setFilteredAnime] = useState(animeData);

  useEffect(() => {
    let filtered = animeData;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(anime =>
        anime.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        anime.genres.some(genre => genre.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by genre
    if (selectedGenre) {
      filtered = filtered.filter(anime =>
        anime.genres.includes(selectedGenre)
      );
    }

    // Filter by status
    if (selectedStatus) {
      filtered = filtered.filter(anime =>
        anime.status === selectedStatus
      );
    }

    setFilteredAnime(filtered);
  }, [searchTerm, selectedGenre, selectedStatus]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Pencarian Anime
      </h1>

      {/* Search Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="space-y-4">
          {/* Search Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cari Anime
            </label>
            <div className="relative">
              <i className="ri-search-line absolute left-3 top-3 text-gray-400"></i>
              <input
                type="text"
                placeholder="Masukkan judul anime..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Genre
              </label>
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Semua Genre</option>
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Semua Status</option>
                <option value="completed">Selesai</option>
                <option value="watching">Sedang Ditonton</option>
              </select>
            </div>
          </div>

          {/* Clear Filters */}
          <div className="flex justify-end">
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedGenre('');
                setSelectedStatus('');
              }}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <i className="ri-refresh-line mr-1"></i>
              Reset Filter
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mb-4">
        <p className="text-gray-600">
          Ditemukan {filteredAnime.length} anime
        </p>
      </div>

      {filteredAnime.length > 0 ? (
        <div className="space-y-4">
          {filteredAnime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <i className="ri-search-line text-4xl text-gray-400 mb-4"></i>
          <p className="text-gray-600">Tidak ada anime yang ditemukan</p>
        </div>
      )}
    </div>
  );
};

export default Search;