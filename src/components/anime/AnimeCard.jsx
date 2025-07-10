// AnimeCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AnimeCard = ({ anime }) => {
  const getStatusColor = (status) => {
    return status === 'completed'
      ? 'bg-green-100 text-green-800'
      : status === 'watching'
      ? 'bg-blue-100 text-blue-800'
      : 'bg-purple-100 text-purple-800';
  };

  const getStatusText = (status, lastEp) => {
  return status === 'completed'
? `completed ${anime.episodes} eps`
    : status === 'watching'
    ? `watching - episode ${lastEp}`
    : 'Planned for Tomorrow';
};

  return (
    <Link to={`/anime/${anime.id}`} className="block transition-transform hover:scale-[1.01]">
      <div className="bg-white min-h-[100px] rounded-[7px] shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-all duration-200">
        <div className="flex h-full">
          {/* Thumbnail */}
          <div className="w-[30%] relative bg-gray-100 overflow-hidden">
            {/* Rating badge */}
            <div className="absolute top-1 left-1 bg-black/70 text-white text-[10px] px-1 py-[1px] rounded-[3px] z-10 flex items-center">
              ⭐ {anime.rating}
            </div>
            <img
              src={anime.thumbnail}
              alt={anime.title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/200x300?text=No+Image';
              }}
            />
          </div>

          {/* Info */}
          <div className="w-[70%] py-3 px-4 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-[18px] md:text-xl mb-1 text-gray-900 line-clamp-1">
                {anime.title}
              </h3>
              <div className="space-y-1 text-[13px] text-gray-600">
                <p className="flex items-center">
                  <i className="ri-bookmark-line mr-2 text-gray-400"></i>
                  {anime.genres?.slice(0, 3).join(', ')}
                </p>
                <p className="flex items-center">
                  <i className="ri-film-line mr-2 text-gray-400"></i>
                  {anime.episodes} episodes
                </p>
                <p className="flex items-center">
                  <i className="ri-calendar-line mr-2 text-gray-400"></i>
                  {anime.year} • {anime.studio}
                </p>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center justify-between mt-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(anime.status)}`}>
                {getStatusText(anime.status, anime.lastWatchedEpisode)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;