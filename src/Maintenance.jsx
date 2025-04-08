import React, { useState, useEffect } from 'react';

const MaintenancePage = () => {
  // Set maintenance end time (1 week from now)
  const [endTime] = useState(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = endTime - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        total: difference
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  // Calculate progress percentage (from 100% to 0%)
  const progressPercentage = Math.max(0, Math.min(100, 100 - (timeLeft.total / (7 * 24 * 60 * 60 * 1000)) * 100));

  return (
    <div className="fixed inset-0 bg-gray-50 flex flex-col justify-center items-center p-5 overflow-auto">
      <div className="max-w-2xl w-full bg-white p-8 md:p-12 rounded-xl shadow-lg text-center mx-auto my-auto">
        {/* Icon */}
        <div className="mx-auto w-16 h-16 md:w-20 md:h-20 text-yellow-400 mb-4 md:mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
        </div>
        
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">Situs Sedang Dalam Pemeliharaan</h1>
        
        {/* Message */}
        <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
          Kami sedang melakukan peningkatan sistem untuk pengalaman yang lebih baik. 
          Perkiraan waktu selesai dalam:
        </p>
        
        {/* Countdown */}
        <div className="mb-6 md:mb-8 p-4 bg-blue-50 rounded-lg">
          <div className="flex justify-center space-x-2 md:space-x-4">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-4xl font-bold text-blue-800">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="text-xs text-blue-600 mt-1">Hari</span>
            </div>
            <span className="text-2xl md:text-4xl font-bold text-blue-800">:</span>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-4xl font-bold text-blue-800">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-xs text-blue-600 mt-1">Jam</span>
            </div>
            <span className="text-2xl md:text-4xl font-bold text-blue-800">:</span>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-4xl font-bold text-blue-800">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-xs text-blue-600 mt-1">Menit</span>
            </div>
            <span className="text-2xl md:text-4xl font-bold text-blue-800">:</span>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-4xl font-bold text-blue-800">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-xs text-blue-600 mt-1">Detik</span>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-6 md:mb-8">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
            <div 
              className="h-full bg-green-500 rounded-full transition-all duration-300" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <span className="text-green-500 font-medium">{Math.round(progressPercentage)}% selesai</span>
        </div>
        
        {/* Additional Info */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-600 mb-4 text-sm md:text-base">
            Maintenance ini diperkirakan akan selesai pada:
          </p>
          <p className="text-blue-600 font-medium mb-4">
            {endTime.toLocaleDateString('id-ID', { 
              weekday: 'long', 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
          <p className="text-gray-500 text-xs md:text-sm">
            Untuk pertanyaan mendesak, hubungi: {' '}
            <a href="mailto:support@fatkhurrhn.com" className="text-blue-500 hover:underline">
              support@fatkhurrhn.com
            </a>
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-auto py-4 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} fatkhurrhn. All rights reserved.
      </div>
    </div>
  );
};

export default MaintenancePage;