import { Link } from "react-router-dom";

export default function ExperienceSection() {
  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <h2 className="text-[18px] font-bold text-gray-800 flex items-center gap-2">
          <i className="ri-briefcase-4-fill"></i> Experience
        </h2>
        <Link to="https://www.linkedin.com/in/fatkhurrhn/" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
          View more
        </Link>
      </div> <br />
      <div className="mt-1 sm:mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="grid gap-4">
          <div className="rounded-xl border border-gray-200 hover:bg-shadow-md bg-white p-3 sm:p-4" >
            <div className="mb-3 sm:mb-4 flex items-center gap-3">
              <img className="h-[40px] w-[40px] rounded-full" src="https://cdn.brandfetch.io/idgzBMD4aG/w/301/h/301/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1746745045982" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 text-left">
                  Fullstack Web Developer 2025
                </h3>
                <p className="text-xs sm:text-sm text-gray-800 text-left">
                  NF Academy Batch 2
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base text-gray-800 text-justify">
                Learning consists of Frontend and Backend. Which Frontend and backend are the two main components in software development
              </p>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">Fullstack</span>
                <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">React JS</span>
                <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">Laravel</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 hover:bg-shadow-md bg-white p-3 sm:p-4" >
            <div className="mb-3 sm:mb-4 flex items-center gap-3" >
              <img className="h-[40px] w-[40px] rounded-full" src="/assets/lintasarta.png"
                alt=" Company Lintasarta" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 text-left">
                  Company Lintasarta 2024
                </h3>
                <p className="text-xs sm:text-sm text-gray-800 text-left">
                  Capstone Project at Bangkit Academy
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base text-gray-800 text-justify">
                Developed an employee recruitment website using React over two months as part of the
                Capstone Project at Lintasarta, focusing on frontend development and user
                experience.
              </p>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">React</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">Tailwind</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">UI/UX</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 hover:bg-shadow-md bg-white p-3 sm:p-4" >
            <div className="mb-3 sm:mb-4 flex items-center gap-3">
              <img className="h-[40px] w-[40px] rounded-full" src="/assets/nf.jpg"
                alt="Assistan Lecturer 2024" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 text-left">
                  Assistan Lecturer 2024
                </h3>
                <p className="text-xs sm:text-sm text-gray-800 text-left">
                  STT Terpadu Nurul Fikri
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base text-gray-800 text-justify">
                Assisted in teaching the Big Data course for one semester, helping students
                understand data processing, analytics, and visualization concepts. Provided guidance
                in practical assignments, facilitated discussions, and supported the lecturer in
                className activities.
              </p>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">Teaching</span>
                <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">Big Data</span>
                <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">Mentoring</span>
              </div>
            </div>
          </div>
          
        </div>

        <div className="grid gap-4" >
          <div className="rounded-xl border border-gray-200 hover:bg-shadow-md bg-white p-3 sm:p-4" >
            <div className="mb-3 sm:mb-4 flex items-center gap-3">
              <img className="h-[40px] w-[40px] rounded-full"
                src="/assets/bangkit.png"
                alt="Bangkit Academy 2024" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 text-left">
                  Bangkit Academy 2024
                </h3>
                <p className="text-xs sm:text-sm text-gray-800 text-left">
                  Cloud Computing Cohort CC-23
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base text-gray-800 text-justify">
                Participated in the Kampus Merdeka program for four months, focusing on the Cloud
                Computing learning path.
              </p>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded">AWS</span>
                <span className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded">Cloud Computing</span>
                <span className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded">Google</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 hover:bg-shadow-md bg-white p-3 sm:p-4" >
            <div className="mb-3 sm:mb-4 flex items-center gap-3">
              <img className="h-[40px] w-[40px] rounded-full" src="/assets/senada.jpg"
                alt="Head of the Quran Program Department" />
              <div>
                <h3 className="text-base sm:text-lg text-left font-semibold">
                  Leader of the PQ
                </h3>
                <p className="text-xs sm:text-sm text-left text-gray-800">
                  LDK Senada STT NF
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base text-gray-800 text-justify">
                an Islamic organization on the STT Nurul Fikri campus
              </p>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">Leadership</span>
                <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">Organization</span>
                <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">Mentoring</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 hover:bg-shadow-md bg-white p-3 sm:p-4" >
            <div className="mb-3 sm:mb-4 flex items-center gap-3">
              <img className="h-[40px] w-[40px] rounded-full" src="/assets/pintar.png"
                alt="Freelance Translator" />
              <div>
                <h3 className="text-base sm:text-lg text-left font-semibold">
                  Freelance Translator
                </h3>
                <p className="text-xs sm:text-sm text-left text-gray-800">
                  Malay translator at PINTAR
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base text-gray-800 text-justify">
                Translated Malay language documents for two months at PINTAR.
              </p>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded">Translation</span>
                <span className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded">Malay</span>
                <span className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded">Freelance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}