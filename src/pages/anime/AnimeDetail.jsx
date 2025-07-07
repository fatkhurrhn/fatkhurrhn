import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { animeData } from '../data/animeData.js';

const AnimeDetail = () => {
  const { id } = useParams();
  const anime = animeData.find(a => a.id === parseInt(id));

  if (!anime) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-gray-600">Anime tidak ditemukan</p>
      </div>
    );
  }

  const getStatusColor = (status) => {
    return status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800';
  };

  const getStatusText = (status) => {
    return status === 'completed' ? 'Selesai' : 'Belum Selesai';
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <img 
              src={anime.thumbnail} 
              alt={anime.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
          <div className="flex-1 p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {anime.title}
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Informasi</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center">
                    <i className="ri-star-line mr-2"></i>
                    Rating: {anime.rating}/10
                  </p>
                  <p className="flex items-center">
                    <i className="ri-bookmark-line mr-2"></i>
                    Genre: {anime.genres.join(', ')}
                  </p>
                  <p className="flex items-center">
                    <i className="ri-film-line mr-2"></i>
                    Episodes: {anime.episodes}
                  </p>
                  <p className="flex items-center">
                    <i className="ri-calendar-line mr-2"></i>
                    Tahun: {anime.year}
                  </p>
                  <p className="flex items-center">
                    <i className="ri-building-line mr-2"></i>
                    Studio: {anime.studio}
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Status</h3>
                <div className="space-y-2">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(anime.status)}`}>
                    {getStatusText(anime.status)}
                  </span>
                  {anime.status === 'watching' && (
                    <p className="text-sm text-blue-600">
                      <i className="ri-time-line mr-1"></i>
                      Episode terakhir: {anime.lastWatchedEpisode}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-2">Deskripsi</h3>
              <p className="text-gray-600 leading-relaxed">
                {anime.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Daftar Episode
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {anime.episodeList.map((episode) => (
            <Link
              key={episode.number}
              to={`/anime/${anime.id}/episode/${episode.number}`}
              className="episode-card p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Episode {episode.number}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {episode.title}
                  </p>
                </div>
                <i className="ri-play-circle-line text-2xl text-blue-600"></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;