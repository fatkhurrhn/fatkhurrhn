import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import Nav from '../../components/anime/NavigationWrapper.jsx';

const EpisodePlayer = () => {
  const { id, episodeNumber } = useParams();
  const navigate = useNavigate();
  const [anime, setAnime] = useState(null);
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const docRef = doc(db, 'animes', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const animeData = { id: docSnap.id, ...docSnap.data() };
          setAnime(animeData);

          if (animeData.episodeList) {
            const episode = animeData.episodeList.find(
              ep => ep.number === parseInt(episodeNumber)
            );
            setCurrentEpisode(episode);
          }
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching anime: ", error);
        setLoading(false);
      }
    };

    fetchAnime();
  }, [id, episodeNumber]);

  const goToEpisode = (episodeNum) => {
    navigate(`/animes/${anime.id}/episode/${episodeNum}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <p className="text-gray-600">Memuat episode...</p>
        </div>
      </div>
    );
  }

  if (!anime || !currentEpisode) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center">
        <div className="bg-red-100 p-4 rounded-full mb-4">
          <i className="ri-error-warning-line text-red-500 text-3xl"></i>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">Episode tidak ditemukan</h2>
        <p className="text-gray-600 mb-4">Episode yang Anda cari tidak tersedia</p>
        <Link
          to={`/animes/${id}`}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Kembali ke Detail Anime
        </Link>
      </div>
    );
  }

  const previousEpisode = currentEpisode.number > 1 ? currentEpisode.number - 1 : null;
  const nextEpisode = currentEpisode.number < anime.episodeList.length ? currentEpisode.number + 1 : null;

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Nav />
      <div className="container mx-auto px-4 max-w-4xl pb-20 pt-2">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <Link
              to={`/animes/${anime.id}`}
              className="flex items-center text-gray-800"
            >
              <i className="ri-arrow-left-line mr-1"></i>
              <span className="text-sm">Kembali</span>
            </Link>

            <div className="flex space-x-3">
              <button
                onClick={() => previousEpisode && goToEpisode(previousEpisode)}
                disabled={!previousEpisode}
                title="Previous Episode"
                className={`px-2 py-0 rounded-lg border transition-all duration-200 text-sm font-medium
                  ${!previousEpisode
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed border-gray-200'
                    : 'bg-black/80 text-white hover:bg-black hover:scale-105 border-gray-700'}
                `}
              >
                <i className="ri-arrow-left-line text-base" />
              </button>

              <button
                onClick={() => nextEpisode && goToEpisode(nextEpisode)}
                disabled={!nextEpisode}
                title="Next Episode"
                className={`px-2 py-0 rounded-lg border transition-all duration-200 text-sm font-medium
                  ${!nextEpisode
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed border-gray-200'
                    : 'bg-black/80 text-white hover:bg-black hover:scale-105 border-gray-700'}
                `}
              >
                <i className="ri-arrow-right-line text-base" />
              </button>
            </div>
          </div>

          {/* Video Player */}
          <div className="rounded-xl overflow-hidden shadow-md bg-black">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
              <div
                className="absolute top-0 left-0 w-full h-full"
                dangerouslySetInnerHTML={{
                  __html: currentEpisode.embedUrl
                    .replace('width="640"', 'width="100%"')
                    .replace('height="360"', 'height="100%"')
                }}
              />
            </div>
          </div>

          <div className="mt-3 px-2">
            <h1 className="text-lg font-bold text-gray-800">{anime.title} Episode ke {currentEpisode.number}</h1>
          </div>
        </div>

        <hr className="my-4 border-t border-gray-200" />

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Daftar Episode</h3>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {anime.episodeList.map((episode) => (
              <button
                key={episode.number}
                onClick={() => goToEpisode(episode.number)}
                className={`p-2 rounded-md text-center transition-all ${episode.number === currentEpisode.number
                  ? 'bg-blue-500 text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                <div className="text-sm font-medium">
                  {episode.number}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodePlayer;