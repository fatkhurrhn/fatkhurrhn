import { Link } from "react-router-dom";

export default function ProfileSection() {
  return (
    <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
      {/* Foto */}
      <div className="flex items-center space-x-4 md:block">
        <img
          src="https://res.cloudinary.com/dbssvz2pe/image/upload/v1751663102/assets-gallery/ajdtk56lv99fjeg8ofy94pkvo.jpg"
          alt="profile pic"
          className="rounded-full duration-150 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 border-2 border-white shadow-md"
        />
        {/* Nama & Role (Mobile) */}
        <div className="md:hidden">
          <h1 className="text-xl sm:text-[18px] font-bold text-gray-800">M. Fatkhurrohman</h1>
          <p className="text-xs sm:text-sm font-mono text-gray-600">
            Frontdev & Creator
          </p>
        </div>
      </div>

      {/* Deskripsi Profil */}
      <div className="text-center md:text-left md:flex-1">
        <div className="hidden md:block">
          <h1 className="text-[18px] font-bold text-gray-800">M. Fatkhurrohman</h1>
          <p className="text-sm font-mono text-gray-600">
            Frontend Developer & Content Creator
          </p>
        </div>
        <p className="mt-2 text-gray-700 text-justify">
          I'm an Information Systems student with a strong passion for Front-End Development. I specialize in crafting responsive, user-friendly websites using React, Tailwind CSS, and modern tech stacks—combining functionality with clean design.
          <br />
          Beyond tech, I’m also a content creator with 80K+ followers across Instagram. I share motivational quotes and personal stories to inspire and engage audiences—shaping how I communicate, empathize, and build user-focused digital experiences.
          <Link to="https://creator-fatkhurrhn.vercel.app/">
            <span className="font-bold ml-1 text-blue-600 hover:underline">
              → Check out my creator side
            </span>
          </Link>
        </p>

        {/* Social Links */}
        <div className="hidden md:flex gap-4 mt-4 justify-center md:justify-start text-xl text-gray-600">
          <a href="https://github.com/fatkhurrhn" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
            <i className="ri-github-fill"></i>
          </a>
          <a href="https://linkedin.com/in/fatkhurrhn" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077B5] transition-colors">
            <i className="ri-linkedin-fill"></i>
          </a>
          <a href="mailto:nuhammadthursina123@gmail.com" className="hover:text-red-500 transition-colors">
            <i className="ri-mail-fill"></i>
          </a>
          <a href="https://instagram.com/storythur" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="https://www.tiktok.com/@storythurr" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
            <i className="ri-tiktok-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
