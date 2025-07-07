import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AnimeCard from '../components/AnimeCard.jsx';
import { animeData, genres } from '../data/animeData.js';

const Genre = () => {
  const { genreName } = useParams();
  const [selectedGenre, setSelectedGenre] = useState(genreName || '');
  const [filteredAnime, setFilteredAnime] = useState([]);

  useEffect(() => {
    if (selectedGenre) {
      const filtered = animeData.filter(anime =>
        anime.genres.includes(selectedGenre)
      );
      setFilteredAnime(filtered);
    } else {
      setFilteredAnime([]);
    }
  }, [selectedGenre]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Jelajahi Genre
      </h1>

      {/* Genre Selection */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Pilih Genre
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {genres.map(genre => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`p-3 rounded-lg text-center transition-all ${
                selectedGenre === genre
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="text-sm font-medium">
                {genre}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {selectedGenre && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Anime Genre: {selectedGenre}
          </h2>
          <p className="text-gray-600">
            Ditemukan {filteredAnime.length} anime
          </p>
        </div>
      )}

      {selectedGenre && filteredAnime.length > 0 && (
        <div className="space-y-4">
          {filteredAnime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      )}

      {selectedGenre && filteredAnime.length === 0 && (
        <div className="text-center py-8">
          <i className="ri-bookmark-line text-4xl text-gray-400 mb-4"></i>
          <p className="text-gray-600">Tidak ada anime dengan genre ini</p>
        </div>
      )}

      {!selectedGenre && (
        <div className="text-center py-8">
          <i className="ri-bookmark-line text-4xl text-gray-400 mb-4"></i>
          <p className="text-gray-600">Pilih genre untuk melihat anime</p>
        </div>
      )}
    </div>
  );
};

export default Genre;