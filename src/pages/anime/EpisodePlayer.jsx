import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';
import { animeData } from '../data/animeData.js';

const EpisodePlayer = () => {
  const { id, episodeNumber } = useParams();
  const navigate = useNavigate();
  const [anime, setAnime] = useState(null);
  const [currentEpisode, setCurrentEpisode] = useState(null);

  useEffect(() => {
    const animeFound = animeData.find(a => a.id === parseInt(id));
    if (animeFound) {
      setAnime(animeFound);
      const episode = animeFound.episodeList.find(ep => ep.number === parseInt(episodeNumber));
      setCurrentEpisode(episode);
    }
  }, [id, episodeNumber]);

  if (!anime || !currentEpisode) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-gray-600">Episode tidak ditemukan</p>
      </div>
    );
  }

  const goToEpisode = (episodeNum) => {
    navigate(`/anime/${anime.id}/episode/${episodeNum}`);
  };

  const previousEpisode = currentEpisode.number > 1 ? currentEpisode.number - 1 : null;
  const nextEpisode = currentEpisode.number < anime.episodeList.length ? currentEpisode.number + 1 : null;

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <Link 
            to={`/anime/${anime.id}`}
            className="flex items-center text-white hover:text-blue-400 transition-colors"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            Kembali
          </Link>
          <div className="text-white text-center">
            <h1 className="text-lg font-bold">{anime.title}</h1>
            <p className="text-sm text-gray-400">Episode {currentEpisode.number}</p>
          </div>
          <div className="w-16"></div>
        </div>

        {/* Video Player */}
        <div className="mb-6">
          <Plyr
            source={{
              type: 'video',
              sources: [
                {
                  src: currentEpisode.videoUrl,
                  type: 'video/mp4',
                },
              ],
            }}
            options={{
              controls: [
                'play-large',
                'play',
                'progress',
                'current-time',
                'mute',
                'volume',
                'settings',
                'fullscreen',
              ],
            }}
          />
        </div>

        {/* Episode Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => previousEpisode && goToEpisode(previousEpisode)}
            disabled={!previousEpisode}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            Previous
          </button>

          <div className="text-white text-center">
            <h2 className="font-semibold">{currentEpisode.title}</h2>
            <p className="text-sm text-gray-400">
              Episode {currentEpisode.number} of {anime.episodeList.length}
            </p>
          </div>

          <button
            onClick={() => nextEpisode && goToEpisode(nextEpisode)}
            disabled={!nextEpisode}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <i className="ri-arrow-right-line ml-2"></i>
          </button>
        </div>

        {/* Episode List */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-white text-lg font-semibold mb-4">Semua Episode</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {anime.episodeList.map((episode) => (
              <button
                key={episode.number}
                onClick={() => goToEpisode(episode.number)}
                className={`p-3 rounded-lg text-center transition-all ${
                  episode.number === currentEpisode.number
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
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