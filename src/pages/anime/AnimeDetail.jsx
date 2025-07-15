import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import Nav from '../../components/anime/NavigationWrapper.jsx';

const AnimeDetail = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showAllGenres, setShowAllGenres] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const docRef = doc(db, 'animes', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setAnime({ id: docSnap.id, ...docSnap.data() });
        } else {
          setAnime(null);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching anime: ", error);
        setLoading(false);
      }
    };

    fetchAnime();
  }, [id]);

  const getStatusColor = (status) => {
    return status === 'completed' ? 'bg-green-500' : 'bg-orange-500';
  };

  const getStatusText = (status) => {
    return status === 'completed' ? 'selesai ditonton' : 'Ongoing';
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const toggleGenres = () => {
    setShowAllGenres(!showAllGenres);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white px-4 py-8 text-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!anime) {
    return (
      <div className="min-h-screen bg-white px-4 py-8 text-center">
        <p className="text-gray-600">Anime tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Nav />
      <div className="container mx-auto px-4 max-w-4xl pb-[70px]">
        <button onClick={() => navigate(-1)} className="text-gray-600 text-[15px] pb-2 flex items-center hover:text-blue-600 transition-colors">
          <i className="ri-arrow-left-line mr-1"></i> Kembali
        </button>

        {/* Anime Content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Anime Cover - Different handling for mobile and desktop */}
          <div className="block md:hidden w-full relative mb-4">
            {/* Mobile Thumbnail */}
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden">
              <img
                src={anime.thumbnail}
                alt={anime.title}
                className="w-full h-full object-cover"
              />

              {/* Status Badge */}
              <div className="absolute bottom-2 left-2">
                <div className={`${getStatusColor(anime.status)} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                  {getStatusText(anime.status)}
                </div>
              </div>

              {/* Rating Badge */}
              <div className="absolute bottom-2 right-2">
                <div className="bg-blue-500 text-white px-3 py-1 rounded-full flex items-center text-xs font-medium">
                  <i className="ri-star-fill text-yellow-300 mr-1"></i>
                  {anime.rating}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Thumbnail */}
          <div className="hidden md:block md:w-1/3 lg:w-1/4 relative">
            <div className="sticky top-4">
              <div className="aspect-[3/4] w-full rounded-lg overflow-hidden">
                <img
                  src={anime.thumbnail}
                  alt={anime.title}
                  className="w-full h-full object-cover"
                />

                {/* Status Badge */}
                <div className="absolute bottom-2 left-2">
                  <div className={`${getStatusColor(anime.status)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {getStatusText(anime.status)}
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute bottom-2 right-2">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full flex items-center text-sm font-medium">
                    <i className="ri-star-fill text-yellow-300 mr-1"></i>
                    {anime.rating}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Anime Details */}
          <div className="flex-1 w-full">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              {anime.title}
            </h1>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <div className="flex items-start">
                  <i className="ri-film-line text-gray-500 mr-2 mt-1"></i>
                  <div>
                    <p className="text-xs text-gray-500">Episode</p>
                    <p className="text-gray-700 text-[14px]">{anime.episodes}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-calendar-line text-gray-500 mr-2 mt-1"></i>
                  <div>
                    <p className="text-xs text-gray-500">Tahun</p>
                    <p className="text-gray-700 text-[14px]">{anime.year}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start">
                  <i className="ri-building-line text-gray-500 mr-2 mt-1"></i>
                  <div>
                    <p className="text-xs text-gray-500">Studio</p>
                    <p className="text-gray-700 text-[14px]">{anime.studio}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-bookmark-line text-gray-500 mr-2 mt-1"></i>
                  <div>
                    <p className="text-xs text-gray-500">Genre</p>
                    <div className="flex flex-wrap items-center gap-1">
                      {anime.genres.length > 0 && (
                        <>
                          <span className="text-gray-700 text-[14px]">
                            {anime.genres[0]}
                          </span>
                          {anime.genres.length > 1 && (
                            <button
                              onClick={toggleGenres}
                              className="text-blue-600 hover:text-blue-800 text-[14px]"
                            >
                              +{anime.genres.length - 1} more
                            </button>
                          )}
                        </>
                      )}
                    </div>
                    {showAllGenres && (
                      <div className="mt-1 flex flex-wrap gap-1">
                        {anime.genres.slice(1).map((genre, index) => (
                          <span key={index} className="text-gray-700 text-[14px]">
                            {genre}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Sinopsis</h3>
              <div className="text-gray-600 text-justify">
                {showFullDescription ? (
                  <>
                    {anime.description.split('\n').map((paragraph, i) => (
                      <p key={i} className="mb-2">{paragraph}</p>
                    ))}
                    <button
                      onClick={toggleDescription}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Lebih Sedikit
                    </button>
                  </>
                ) : (
                  <>
                    <p className="line-clamp-3 mb-1">
                      {anime.description.split('\n')[0]}
                    </p>
                    <button
                      onClick={toggleDescription}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Selengkapnya...
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Episode List */}
        {anime.episodeList && anime.episodeList.length > 0 && (
          <div className="mt-0">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Daftar Episode</h2>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {anime.episodeList.map((episode) => (
                <Link
                  key={episode.number}
                  to={`/animes/${anime.id}/episode/${episode.number}`}
                  className="p-3 hover:bg-gray-50 rounded transition-colors border border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800 text-sm">
                        Episode {episode.number}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimeDetail;