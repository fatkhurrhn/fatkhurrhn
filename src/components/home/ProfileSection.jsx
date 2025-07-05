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
        {/* Nama & Role di sebelah foto (Mobile) */}
        <div className="md:hidden">
          <h1 className="text-xl sm:text-[18px] font-bold text-gray-800">M. Fatkhurrohman</h1>
          <p className="text-xs sm:text-sm font-mono text-gray-600">
            Frontend Dev & Content Creator
          </p>
        </div>
      </div>

      {/* Nama & Paragraf (Desktop), Paragraf (Mobile) */}
      <div className="text-center md:text-left md:flex-1">
        <div className="hidden md:block">
          <h1 className="text-[18px] font-bold text-gray-800">M. Fatkhurrohman</h1>
          <p className="text-sm font-mono text-gray-600">
            Frontend Developer & Content Creator
          </p>
        </div>
        <p className="mt-2 text-gray-700 text-justify">
          I'm an Information Systems student passionate about Front-End Development. I enjoy turning ideas into interactive, user-friendly websites using React, with a focus on clean design and efficient code.
          <br />
          Outside of coding, I'm also a content creator with 90K+ followers on Instagram, where I share motivational quotes and personal storytelling to inspire and connect with others. This has shaped my ability to communicate clearly, understand audiences, and bring empathy into every project I build. 🚀✨
        </p>

        {/* Social Links */}
        <div className="flex gap-3 mt-4 justify-center md:justify-start">
          <a href="https://github.com/fatkhurrhn" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
            <i className="ri-github-fill text-xl"></i>
          </a>
          <a href="https://linkedin.com/in/fatkhurrhn" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
            <i className="ri-linkedin-fill text-xl"></i>
          </a>
          <a href="mailto:nuhammadthursina123@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
            <i className="ri-mail-fill text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
}