import { Link } from "react-router-dom";

export default function EducationSection() {
  return (
    <div>
      <div className="flex justify-between items-center w-full mb-4">
        <h2 className="text-[18px] font-bold text-gray-800 flex items-center gap-2">
          <i className="ri-graduation-cap-fill"></i> Education
        </h2>
        <Link to="https://nurulfikri.ac.id/" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
          View more
        </Link>
      </div>

      <div className="border border-gray-200 bg-white rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        {/* Logo */}
        <div className="flex-shrink-0 hidden sm:block w-full sm:w-auto flex justify-center sm:justify-start">
          <img
            src="https://res.cloudinary.com/dbssvz2pe/image/upload/v1752797379/assets-gallery/c4pj6i26cqzrs9rsdvyys7tdj.png"
            alt="STT Nurul Fikri Logo"
            className="w-20 h-20 object-contain border border-gray-200 rounded-lg"
          />
        </div>

        {/* Info */}
        <div className="w-full">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full mb-2">
            <h3 className="text-lg font-bold text-gray-800 leading-snug">
              Sekolah Tinggi Teknologi Terpadu Nurul Fikri
            </h3>
            <span className="text-sm text-gray-500 mt-1 sm:mt-0">
              2022 - 2026
            </span>
          </div>

          <div className="mb-2">
            <p className="text-sm text-zinc-500 font-mono bg-gray-50 border border-gray-200 rounded px-2 py-1 w-fit">
              🎓 Bachelor's Degree - Information Systems (S.Kom)
            </p>
          </div>

          <p className="text-[15px] text-gray-700 text-justify leading-relaxed">
            Currently studying Information Systems with a focus on software development, data management, and system analysis at STT Terpadu Nurul Fikri. Bridging business and technology for modern digital solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
