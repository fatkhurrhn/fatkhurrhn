import React from 'react';
import { Link } from 'react-router-dom';

const AnimeCard = ({ anime }) => {
  const getStatusColor = (status) => {
    return status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800';
  };

  const getStatusText = (status) => {
    return status === 'completed' ? 'Selesai' : 'Belum Selesai';
  };

  return (
    <Link to={`/anime/${anime.id}`} className="block">
      <div className="anime-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg">
        <div className="flex">
          <div className="w-24 h-36 md:w-32 md:h-48 flex-shrink-0">
            <img 
              src={anime.thumbnail} 
              alt={anime.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 p-4">
            <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-2">
              {anime.title}
            </h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p className="flex items-center">
                <i className="ri-bookmark-line mr-2"></i>
                {anime.genres.slice(0, 2).join(', ')}
              </p>
              <p className="flex items-center">
                <i className="ri-film-line mr-2"></i>
                {anime.episodes} episodes
              </p>
              <p className="flex items-center">
                <i className="ri-calendar-line mr-2"></i>
                {anime.year} • {anime.studio}
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(anime.status)}`}>
                  {getStatusText(anime.status)}
                </span>
                {anime.status === 'watching' && (
                  <span className="text-xs text-blue-600">
                    Episode {anime.lastWatchedEpisode}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;