import React, { useState, useEffect } from 'react';
import AnimeCard from '../../components/anime/AnimeCard.jsx';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import Nav from '../../components/anime/NavigationWrapper.jsx';

const Home = () => {
  const [allAnimes, setAllAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAnime, setFilteredAnime] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
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
    if (searchTerm) {
      setIsSearching(true);
      const term = searchTerm.toLowerCase();
      const filtered = allAnimes.filter(anime =>
        anime.title.toLowerCase().includes(term) ||
        (anime.genres && anime.genres.some(genre => genre.toLowerCase().includes(term)))
      );
      setFilteredAnime(filtered);
    } else {
      setIsSearching(false);
      setFilteredAnime([]);
    }
  }, [searchTerm, allAnimes]);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Nav>
        <div className="container mx-auto px-4 pt-[68px] max-w-4xl pb-20">
          {/* Search Input - Always visible */}
          <div className="relative mb-5">
            <i className="ri-search-line absolute left-3 top-3 text-gray-400"></i>
            <input
              type="text"
              placeholder="Cari judul anime atau genre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white text-gray-800 pl-10 pr-2 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {loading ? (
            // Loading state that matches AnimeCard layout
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white min-h-[100px] rounded-[7px] shadow-sm border border-gray-100 overflow-hidden">
                  <div className="flex h-full animate-pulse">
                    {/* Thumbnail placeholder */}
                    <div className="w-[30%] bg-gray-200"></div>
                    
                    {/* Info placeholder */}
                    <div className="w-[70%] py-3 px-4 flex flex-col justify-between">
                      <div>
                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-200 rounded w-full"></div>
                          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        </div>
                      </div>
                      <div className="h-6 bg-gray-200 rounded w-1/2 mt-2"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* Search Results */}
              {isSearching ? (
                <>
                  <div className="mb-4">
                    <p className="text-gray-600">
                      {filteredAnime.length} hasil ditemukan untuk "{searchTerm}"
                    </p>
                  </div>

                  {filteredAnime.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
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
              ) : (
                <>
                  {/* Normal Home View */}
                  <div className="mb-5">
                    <p className="text-gray-600">
                      {allAnimes.length} {allAnimes.length === 1 ? 'anime' : 'animes'} in your collection
                    </p>
                  </div>

                  {/* Grid Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                    {allAnimes.map ((anime) => (
                      <AnimeCard key={anime.id} anime={anime} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </Nav>
    </div>
  );
};

export default Home;