import { useState } from "react";

import Navbar from "../components/Navbar";
import FooterComponent from "../components/FooterUtama";

const projects = [
  {
    id: 0,
    nama: "quote generator",
    deskripsi: "Inspire and share easily with the Quote Generator",
    link: "https://github.com/fatkhurrhn/quote-generator"
  },
  {
    id: 0,
    nama: "multi image upload",
    deskripsi: "Preview multiple images before uploading",
    link: "https://github.com/fatkhurrhn/multple-image-upload"
  },
  {
    id: 0,
    nama: "hex code color generator",
    deskripsi: "Generate HEX codes easily for your projects",
    link: "https://github.com/fatkhurrhn/hex-code-color-generator"
  },
  {
    id: 0,
    nama: "simple crud nodejs",
    deskripsi: "Node.js and Express-based CRUD application",
    link: "https://github.com/fatkhurrhn/simple-crud-nodejs"
  },
  {
    id: 0,
    nama: "svg to image",
    deskripsi: "Web app for converting SVG to image formats",
    link: "https://github.com/fatkhurrhn/svg-to-image"
  },
  {
    id: 0,
    nama: "png to pdf",
    deskripsi: "Easily combine PNGs into one PDF online",
    link: "https://github.com/fatkhurrhn/png-to-pdf"
  },
  {
    id: 0,
    nama: "dompetqu",
    deskripsi: "Simple web app for managing your finances (walletqu)",
    link: "https://github.com/fatkhurrhn/dompetqu"
  },
  {
    id: 0,
    nama: "javascript-code",
    deskripsi: "JavaScript code examples for learning",
    link: "https://github.com/fatkhurrhn/javascript-code"
  },
  {
    id: 0,
    nama: "simple crud react",
    deskripsi: "Simple GPT-powered React CRUD project",
    link: "https://github.com/fatkhurrhn/simple-crud-react"
  },
  {
    id: 0,
    nama: "my app with GPT",
    deskripsi: "React site fully integrated with GPT",
    link: "https://github.com/fatkhurrhn/my-app-with-GPT"
  },
  {
    id: 0,
    nama: "portfolio wiht nextjs",
    deskripsi: "earn to create a Next.js portfolio (all skill levels)",
    link: "https://github.com/fatkhurrhn/portfolio-next.js"
  },
  {
    id: 0,
    nama: "id card generator",
    deskripsi: "Ideal for events and organizations: ID Card Generator",
    link: "https://github.com/fatkhurrhn/idcard-generator"
  },
  {
    id: 0,
    nama: "repo sync",
    deskripsi: "Track your GitHub repos automatically",
    link: "https://github.com/fatkhurrhn/repo-sync"
  },
  {
    id: 0,
    nama: "simple search engine",
    deskripsi: "Streamlined Google search interface",
    link: "https://github.com/fatkhurrhn/simple-search-engine"
  },
  {
    id: 0,
    nama: "personal finance",
    deskripsi: "Simple personal finance tracker (Python & SQLite)",
    link: "https://github.com/fatkhurrhn/personal-finance"
  },
  {
    id: 0,
    nama: "floral suprise",
    deskripsi: "Develop interactive flower graphics using web technologies",
    link: "https://github.com/fatkhurrhn/floral-surprise"
  },
  {
    id: 0,
    nama: "todo list with ES6",
    deskripsi: "Modern JavaScript Todo List",
    link: "https://github.com/fatkhurrhn/todo-list-with-ES6"
  },
  {
    id: 0,
    nama: "dream LMS",
    deskripsi: "The DreamLMS application uses Laravel10",
    link: "https://github.com/fatkhurrhn/Projek_UAS_DreamsLMS"
  },
  {
    id: 0,
    nama: "kalkulator istighfar",
    deskripsi: "Web calculator 9 + 4 = astaghfirullah",
    link: "https://github.com/fatkhurrhn/kalkulator-istighfar"
  },
  {
    id: 0,
    nama: "shop thur",
    link: "https://github.com/fatkhurrhn/Project_ShopThur",
    deskripsi: "project UTS PemWeb E-Commerce Application"
  },
]

function Project() {
  const [showImage, setShowImage] = useState(false);
  const [showImagee, setShowImagee] = useState(false);

  return (
    <div className="relative bg-zinc-900 text-zinc-400 min-h-screen">
      <div className="mx-auto max-w-[850px] px-4 pb-6 pt-6 text-lg sm:px-12 md:px-16">
        <Navbar />
        <div className="mt-6"> {/* Tambahkan margin atas */}
          <div>
            <div className="mt-8 sm:mt-16">
              <h1 className="text-xl font-semibold text-zinc-100 sm:text-2xl">
                Projects
              </h1>
              <div className="mt-2 text-base sm:mt-7 sm:text-lg">
                I have worked on a variety of projects over the years; some of
                them as a hobby, some as a proof of concept and others to solve my
                own pain points. Here are some of the projects that I have worked
                on.
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-5 sm:mt-7">
              <div className="relative overflow-hidden rounded-lg bg-zinc-800 p-3">
                <div className="">
                  <h2 className="flex items-center justify-between">
                    <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-2">
                      <a href="#link-project" className="text-lg font-medium text-zinc-50 sm:text-xl"
                      >Portfolio</a>
                    </div>
                    <div className="absolute right-4 top-4 hidden sm:block">
                      <img alt="roadmap.sh" src="https://flowbite.com/docs/images/logo.svg"
                        className="h-12 w-12" />
                    </div>
                  </h2>
                  <p className="my-3 text-sm sm:text-base pr-0 sm:pr-14 text-justify">
                  A modern, dark-mode personal portfolio built with React.js, showcasing projects, skills, and experience. This portfolio is designed to be visually appealing and easy to navigate, highlighting your key accomplishments and abilities
                  </p>
                </div>
                <div className="mb-1 mt-3">
                  {/* Container untuk tombol View Page dan link Visit */}
                  <div className="flex items-center justify-between w-full">
                    {/* Tombol View Page */}
                    <button
                      onClick={() => setShowImage(!showImage)}
                      className="flex items-center gap-1 rounded-lg bg-zinc-700 py-2 px-3 text-sm hover:text-zinc-300 sm:py-1 hover:bg-zinc-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`lucide lucide-chevron-down transition-transform duration-300 ${showImage ? "rotate-180" : ""
                          }`}
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <span>View Page</span>
                    </button>

                    {/* Link Visit Website & GitHub */}
                    <div className="flex items-center gap-2 text-zinc-500">
                      <a
                        href="https://fatkhurrhn.vercel.app/"
                        className="flex items-center gap-1.5 rounded-lg py-1 text-base transition-colors hover:text-zinc-300 sm:text-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-globe h-4 w-4 sm:h-4 sm:w-4"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                        <span className="hidden sm:inline-block">Visit </span>Website
                      </a>
                      <a
                        href="https://github.com/fatkhurrhn/fatkhurrhn"
                        className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-base transition-colors hover:text-zinc-300 sm:text-sm"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          focusable="false"
                          className="h-4 w-4 sm:h-4 sm:w-4"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 0.3C5.4 0.3 0 5.7 0 12.3C0 17.6 3.4 22.1 8.2 23.7C8.8 23.8 9 23.4 9 23.1C9 22.8 9 22.1 9 21.1C5.7 21.8 5 19.5 5 19.5C4.5 18.1 3.7 17.7 3.7 17.7C2.5 17 3.7 17 3.7 17C4.9 17.1 5.5 18.2 5.5 18.2C6.6 20 8.3 19.5 9 19.2C9.1 18.4 9.4 17.9 9.8 17.6C7.1 17.3 4.3 16.3 4.3 11.7C4.3 10.4 4.8 9.3 5.5 8.5C5.5 8.1 5 6.9 5.7 5.3C5.7 5.3 6.7 5 9 6.5C10 6.2 11 6.1 12 6.1C13 6.1 14 6.2 15 6.5C17.3 4.9 18.3 5.3 18.3 5.3C19 7 18.5 8.2 18.4 8.5C19.2 9.3 19.6 10.4 19.6 11.7C19.6 16.3 16.8 17.3 14.1 17.6C14.5 18 14.9 18.7 14.9 19.8C14.9 21.4 14.9 22.7 14.9 23.1C14.9 23.4 15.1 23.8 15.7 23.7C20.5 22.1 23.9 17.6 23.9 12.3C24 5.7 18.6 0.3 12 0.3Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span className="hidden sm:inline-block">Visit </span>GitHub
                      </a>
                    </div>
                  </div>

                  {/* Gambar muncul di bawah semua elemen */}
                  {/* {showImage && (
                    <div className="mt-4 w-full">
                      <a href="https://fatkhurrhn.vercel.app/">
                      <img src="https://seaconsulting.asia/wp-content/uploads/2023/05/project-portfolio-management-Important-660x400.jpg" alt="Project Roadmap" className="w-full rounded-lg"/>
                      </a>
                    </div>
                  )} */}
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg bg-zinc-800 p-3">
                <div className="">
                  <h2 className="flex items-center justify-between">
                    <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-2">
                      <a href="#link-project" className="text-lg font-medium text-zinc-50 sm:text-xl"
                      >Github Explorer</a>
                    </div>
                    <div className="absolute right-4 top-4 hidden sm:block">
                      <img alt="roadmap.sh" src="https://i.ibb.co.com/CpCthJ9b/feed-story-thur-1.png"
                        className="h-12 w-12" />
                    </div>
                  </h2>
                  <p className="my-3 text-sm sm:text-base pr-0 sm:pr-14 text-justify">
                  In conclusion, the GitHub Profile Searcher seamlessly blends functionality and design to create a user-friendly.</p>
                </div>
                <div className="mb-1 mt-3">
                  {/* Container untuk tombol View Page dan link Visit */}
                  <div className="flex items-center justify-between w-full">
                    {/* Tombol View Page */}
                    <button
                      onClick={() => setShowImagee(!showImagee)}
                      className="flex items-center gap-1 rounded-lg bg-zinc-700 py-2 px-3 text-sm hover:text-zinc-300 sm:py-1 hover:bg-zinc-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`lucide lucide-chevron-down transition-transform duration-300 ${showImagee ? "rotate-180" : ""
                          }`}
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <span>View Page</span>
                    </button>

                    {/* Link Visit Website & GitHub */}
                    <div className="flex items-center gap-2 text-zinc-500">
                      <a
                        href="https://github-explorer-rust-ten.vercel.app/"
                        className="flex items-center gap-1.5 rounded-lg py-1 text-base transition-colors hover:text-zinc-300 sm:text-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-globe h-4 w-4 sm:h-4 sm:w-4"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                        <span className="hidden sm:inline-block">Visit </span>Website
                      </a>
                      <a
                        href="https://github.com/fatkhurrhn/github-explorer"
                        className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-base transition-colors hover:text-zinc-300 sm:text-sm"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          focusable="false"
                          className="h-4 w-4 sm:h-4 sm:w-4"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 0.3C5.4 0.3 0 5.7 0 12.3C0 17.6 3.4 22.1 8.2 23.7C8.8 23.8 9 23.4 9 23.1C9 22.8 9 22.1 9 21.1C5.7 21.8 5 19.5 5 19.5C4.5 18.1 3.7 17.7 3.7 17.7C2.5 17 3.7 17 3.7 17C4.9 17.1 5.5 18.2 5.5 18.2C6.6 20 8.3 19.5 9 19.2C9.1 18.4 9.4 17.9 9.8 17.6C7.1 17.3 4.3 16.3 4.3 11.7C4.3 10.4 4.8 9.3 5.5 8.5C5.5 8.1 5 6.9 5.7 5.3C5.7 5.3 6.7 5 9 6.5C10 6.2 11 6.1 12 6.1C13 6.1 14 6.2 15 6.5C17.3 4.9 18.3 5.3 18.3 5.3C19 7 18.5 8.2 18.4 8.5C19.2 9.3 19.6 10.4 19.6 11.7C19.6 16.3 16.8 17.3 14.1 17.6C14.5 18 14.9 18.7 14.9 19.8C14.9 21.4 14.9 22.7 14.9 23.1C14.9 23.4 15.1 23.8 15.7 23.7C20.5 22.1 23.9 17.6 23.9 12.3C24 5.7 18.6 0.3 12 0.3Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span className="hidden sm:inline-block">Visit </span>GitHub
                      </a>
                    </div>
                  </div>

                  {/* Gambar muncul di bawah semua elemen */}
                  {/* {showImagee && (
                    <div className="mt-4 w-full">
                      <a href="https://github-explorer-rust-ten.vercel.app/">
                      <img src="https://seaconsulting.asia/wp-content/uploads/2023/05/project-portfolio-management-Important-660x400.jpg" alt="Project Roadmap" className="w-full rounded-lg"/>
                      </a>
                    </div>
                  )} */}
                </div>
              </div>

              <p className="my-3">Here are some more projects that I have worked on. You can find the complete list of projects on my
                <a href="https://github.com/fatkhurrhn" className="font-medium underline decoration-2 underline-offset-2 transition-colors hover:text-zinc-200"> GitHub profile</a>.
              </p>
              <div className="flex flex-col gap-1.5">
              {projects.map(project => (
                <a key={project.id} href={project.link} className="flex flex-col flex-wrap items-start rounded-md bg-zinc-800 px-2 py-2 transition-colors hover:bg-zinc-700/80 sm:flex-row sm:items-center" target="_blank" rel="noreferrer">
                  <span className="flex items-center gap-0.5 font-medium text-zinc-50 sm:gap-1" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                      stroke-linejoin="round" className="lucide lucide-arrow-up-right mr-1 inline-block">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                    {project.nama}
                  </span>
                  <span className="mx-2 hidden sm:inline-block">-</span>
                  <span className="text-base sm:text-lg">{project.deskripsi}</span>
                </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default Project;