// Pagination.jsx
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getVisiblePages = () => {
    const visiblePages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      visiblePages.push(i);
    }

    return visiblePages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 my-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <i className="ri-arrow-left-s-line"></i>
      </button>
      
      {currentPage > 3 && totalPages > 5 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className={`px-3.5 py-2 rounded-lg border ${
              1 === currentPage
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            1
          </button>
          <span className="px-2 text-gray-400">...</span>
        </>
      )}
      
      {getVisiblePages().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3.5 py-2 rounded-lg border ${
            currentPage === page
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
          }`}
        >
          {page}
        </button>
      ))}
      
      {currentPage < totalPages - 2 && totalPages > 5 && (
        <>
          <span className="px-2 text-gray-400">...</span>
          <button
            onClick={() => onPageChange(totalPages)}
            className={`px-3.5 py-2 rounded-lg border ${
              totalPages === currentPage
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {totalPages}
          </button>
        </>
      )}
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <i className="ri-arrow-right-s-line"></i>
      </button>
    </div>
  );
};

export default Pagination;