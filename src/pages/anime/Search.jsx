import React, { useState, useEffect } from 'react';
import AnimeCard from '../../components/anime/AnimeCard.jsx';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import Nav from '../../components/anime/NavigationWrapper.jsx';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAnime, setFilteredAnime] = useState([]);
  const [allAnimes, setAllAnimes] = useState([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'animes'));
        const animesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setAllAnimes(animesData);
      } catch (error) {
        console.error("Error fetching animes: ", error);
      }
    };

    fetchAnimes();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      const filtered = allAnimes.filter(anime =>
        anime.title.toLowerCase().includes(term) ||
        anime.genres.some(genre => genre.toLowerCase().includes(term))
      );
      setFilteredAnime(filtered);
    } else {
      setFilteredAnime([]);
    }
  }, [searchTerm, allAnimes]);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Nav />
      <div className="container mx-auto px-4 max-w-4xl pb-20 pt-4">
        {/* Search Input Only */}
          <div className="relative">
            <i className="ri-search-line absolute left-3 top-3 text-gray-400"></i>
            <input
              type="text"
              placeholder="Cari judul anime atau genre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white text-gray-800 pl-10 pr-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoFocus
            />
        </div>

        {/* Results - Only shown when searching */}
        {searchTerm && (
          <>
            <div className="mb-4 pt-2">
              <p className="text-gray-600">
                {filteredAnime.length} hasil ditemukan untuk "{searchTerm}"
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
                <i className="ri-search-line text-3xl text-gray-400 mb-4"></i>
                <p className="text-gray-600">Tidak ada anime yang cocok</p>
                <p className="text-gray-500 text-sm mt-2">Coba kata kunci lain</p>
              </div>
            )}
          </>
        )}

        {/* Empty State - When not searching */}
        {!searchTerm && (
          <div className="text-center py-12">
            <i className="ri-search-line text-3xl text-gray-300 mb-4"></i>
            <p className="text-gray-500">Masukkan kata kunci untuk mencari anime</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;