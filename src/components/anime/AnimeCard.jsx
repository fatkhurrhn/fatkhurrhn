// AnimeCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AnimeCard = ({ anime }) => {
  const getStatusColor = (status) => {
    return status === 'completed'
      ? 'bg-green-100 text-green-800'
      : 'bg-amber-100 text-amber-800';
  };

  const getStatusText = (status) => {
    return status === 'completed' ? 'Completed' : 'Watching';
  };

  return (
<Link to={`/anime/${anime.id}`} className="block transition-transform hover:scale-[1.01]">
  <div className="bg-white min-h-[100px] rounded-xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-all duration-200">
    <div className="flex h-full">
      <div className="w-24 md:w-32 aspect-[3/4] md:aspect-[4/5] flex-shrink-0 relative bg-gray-100 overflow-hidden">
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
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-900 line-clamp-1">
            {anime.title}
          </h3>
          <div className="space-y-1.5 text-sm text-gray-600">
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
        <div className="flex items-center justify-between mt-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(anime.status)}`}>
            {getStatusText(anime.status)}
          </span>
          {anime.status === 'watching' && (
            <span className="text-sm text-blue-600 font-medium">
              Episode {anime.lastWatchedEpisode}
            </span>
          )}
        </div>
      </div>
    </div>
  </div>
</Link>
  );
};

export default AnimeCard;