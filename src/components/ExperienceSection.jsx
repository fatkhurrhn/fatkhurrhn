import { Link } from "react-router-dom";

export default function ExperienceSection() {
  return (
    <div>
      {/* Header (untouched) */}
      <div className="flex justify-between items-center w-full mb-4">
        <h2 className="text-[18px] font-bold text-gray-800 flex items-center gap-2">
          <i className="ri-briefcase-4-fill"></i> Experience
        </h2>
        <Link to="https://www.linkedin.com/in/fatkhurrhn/" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
          View more
        </Link>
      </div>

      {/* Content - Two column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

        {/* Column 1 */}
        <div className="space-y-2">
          {/* Fullstack */}
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex items-center gap-3 mb-3">
              <img className="h-10 w-10 rounded-full" src="https://cdn.brandfetch.io/idgzBMD4aG/w/301/h/301/theme/dark/icon.jpeg" alt="NF Academy" />
              <div>
                <h3 className="text-base font-semibold text-gray-800">Fullstack Web Developer 2025</h3>
                <p className="text-xs text-gray-600">NF Academy Batch 2</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Mastering fullstack development with React.js and Laravel, building end-to-end web applications with modern architecture.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Fullstack</span>
              <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">React</span>
              <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Laravel</span>
            </div>
          </div>

          {/* Capstone */}
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex items-center gap-3 mb-3">
              <img className="h-10 w-10 rounded-full" src="/assets/lintasarta.png" alt="Lintasarta" />
              <div>
                <h3 className="text-base font-semibold text-gray-800">Capstone Project 2024</h3>
                <p className="text-xs text-gray-600">Lintasarta x Bangkit Academy</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Developed a recruitment platform with React and Tailwind CSS, focusing on responsive design and candidate experience.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">React</span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Tailwind</span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">UI/UX</span>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-2">
          {/* Bangkit */}
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex items-center gap-3 mb-3">
              <img className="h-10 w-10 rounded-full" src="/assets/bangkit.png" alt="Bangkit Academy" />
              <div>
                <h3 className="text-base font-semibold text-gray-800">Bangkit Academy 2024</h3>
                <p className="text-xs text-gray-600">Cloud Computing Cohort</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Developed an employee recruitment website using React over two months as part of the
              Capstone Project at Lintasarta, focusing on frontend development and user
              experience.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">AWS</span>
              <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">GCP</span>
              <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Cloud</span>
            </div>
          </div>

          {/* Assistant Lecturer */}
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex items-center gap-3 mb-3">
              <img className="h-10 w-10 rounded-full" src="/assets/nf.jpg" alt="STT NF" />
              <div>
                <h3 className="text-base font-semibold text-gray-800">Assistant Lecturer 2024</h3>
                <p className="text-xs text-gray-600">STT Terpadu Nurul Fikri</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Assisted in teaching Big Data course, guiding students through data processing and analysis concepts.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Teaching</span>
              <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Big Data</span>
              <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">Mentoring</span>
            </div>
          </div>
        </div>

        {/* PQ Leader + Translator (Combined) */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* PQ Leader */}
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex items-center gap-3 mb-3">
              <img className="h-10 w-10 rounded-full" src="/assets/senada.jpg" alt="LDK Senada" />
              <div>
                <h3 className="text-base font-semibold text-gray-800">PQ Leader 2023-2024</h3>
                <p className="text-xs text-gray-600">LDK Senada STT NF</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Led Quranic programs and managed 30+ participants in tahfizh activities at campus Islamic organization.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Leadership</span>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Organization</span>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Islamic Studies</span>
            </div>
          </div>

          {/* Translator */}
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex items-center gap-3 mb-3">
              <img className="h-10 w-10 rounded-full" src="/assets/pintar.png" alt="PINTAR" />
              <div>
                <h3 className="text-base font-semibold text-gray-800">Translator 2024</h3>
                <p className="text-xs text-gray-600">Malay Language Specialist</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Provided professional Malay-English translation services for educational materials and documents.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs bg-rose-100 text-rose-800 px-2 py-1 rounded">Translation</span>
              <span className="text-xs bg-rose-100 text-rose-800 px-2 py-1 rounded">Malay</span>
              <span className="text-xs bg-rose-100 text-rose-800 px-2 py-1 rounded">Freelance</span>
            </div>
          </div>
        </div>

        {/* Web Developer (Full width) */}
        <div className="md:col-span-2 rounded-xl border border-gray-200 bg-white p-4">
          <div className="flex items-center gap-3 mb-3">
            <img className="h-10 w-10 rounded-full" src="https://res.cloudinary.com/dbssvz2pe/image/upload/v1752819612/assets-gallery/me5pmofbx0bic1zys6328oc6h.png" alt="PT Petani Global" />
            <div>
              <h3 className="text-base font-semibold text-gray-800">Web Developer 2023</h3>
              <p className="text-xs text-gray-600">PT Petani Global</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Redesigned and developed company website with improved UI/UX using PHP and MySQL, implementing responsive design principles.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">Web Development</span>
            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">PHP</span>
            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">MySQL</span>
          </div>
        </div>
      </div>
    </div>
  );
}