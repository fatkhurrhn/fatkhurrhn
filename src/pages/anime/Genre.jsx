import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AnimeCard from '../../components/anime/AnimeCard.jsx';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';
import Nav from '../../components/anime/NavigationWrapper.jsx';

const genres = [
  "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror",
  "Romance", "Seinen", "Sci-Fi", "Supernatural", "Thriller", "School",
  "Martial Arts", "Magic", "Historical", "Psychology", "Military"
];

const Genre = () => {
  const { genreName } = useParams();
  const [selectedGenre, setSelectedGenre] = useState(genreName || '');
  const [filteredAnime, setFilteredAnime] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAnimesByGenre = async () => {
      if (selectedGenre) {
        setLoading(true);
        try {
          const q = query(
            collection(db, 'animes'), 
            where('genres', 'array-contains', selectedGenre)
          );
          const querySnapshot = await getDocs(q);
          const animesData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setFilteredAnime(animesData);
        } catch (error) {
          console.error("Error fetching animes by genre: ", error);
        }
        setLoading(false);
      } else {
        setFilteredAnime([]);
      }
    };

    fetchAnimesByGenre();
  }, [selectedGenre]);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Nav />
      <div className="container mx-auto px-4 max-w-4xl pb-20">
        <div className="mb-3"> 
          <p className="text-gray-600 text-lg">
            Jelajai anime genre favoritmu
          </p>
        </div>

        {/* Genre Selection */}
          
          {/* Mobile Select Dropdown */}
          <div className="md:hidden mb-3"> {/* Mengurangi mb dari 4 ke 3 */}
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="w-full bg-white text-gray-600 p-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">-- Pilih Genre --</option>
              {genres.map(genre => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2"> {/* Mengurangi gap dari 3 ke 2 */}
            {genres.map(genre => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`p-2 rounded-lg text-center transition-all ${
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

        {/* Results - bagian ini tidak diubah kecuali spacing yang berlebihan */}
        {loading ? (
          <div className="text-center py-6"> {/* Mengurangi py dari 8 ke 6 */}
            <p className="text-gray-600">Loading...</p>
          </div>
        ) : (
          <>
            {selectedGenre && (
              <div className="mb-3"> {/* Mengurangi mb dari 4 ke 3 */}
                <h2 className="text-xl font-semibold text-gray-800 mb-1"> {/* Mengurangi mb dari 2 ke 1 */}
                  Anime Genre: {selectedGenre}
                </h2>
                <p className="text-gray-600">
                  Ditemukan {filteredAnime.length} anime
                </p>
              </div>
            )}

            {/* Bagian AnimeCard tidak diubah spacing-nya karena sudah reasonable */}
            {selectedGenre && filteredAnime.length > 0 && (
              <div className="space-y-3"> {/* Mengurangi space-y dari 4 ke 3 */}
                {filteredAnime.map((anime) => (
                  <AnimeCard key={anime.id} anime={anime} />
                ))}
              </div>
            )}

            {selectedGenre && filteredAnime.length === 0 && !loading && (
              <div className="text-center py-6"> {/* Mengurangi py dari 8 ke 6 */}
                <i className="ri-folders-line text-4xl text-gray-400 mb-2"></i> {/* Mengurangi mb dari 4 ke 2 */}
                <p className="text-gray-600">Tidak ada anime dengan genre ini</p>
              </div>
            )}

            {!selectedGenre && (
              <div className="text-center py-6"> {/* Mengurangi py dari 8 ke 6 */}
                <i className="ri-folders-line text-4xl text-gray-400 mb-2"></i> {/* Mengurangi mb dari 4 ke 2 */}
                <p className="text-gray-600">Pilih genre untuk melihat anime</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Genre;