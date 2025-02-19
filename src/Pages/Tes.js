import { useState } from "react";

import Navbar from "../components/Navbar";
import FooterComponent from "../components/Footer";

function Project() {
  const [showImage, setShowImage] = useState(false);


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
                <div>
                  <h2 className="flex items-center justify-between">
                    <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-2">
                      <a href="#link-project" className="text-lg font-medium text-zinc-50 sm:text-xl"
                      >roadmap.sh</a>
                    </div>
                    <div className="absolute right-4 top-4 hidden sm:block">
                      <img alt="roadmap.sh" src="https://kamranahmed.info/projects/roadmap-logo.svg"
                        className="h-12 w-12" />
                    </div>
                  </h2>
                  <p className="my-3 text-sm sm:text-base pr-0 sm:pr-14">
                    Learning paths for different roles and skills. Also features
                    an AI roadmap generator, custom roadmap editor, teams usage
                    and more.
                  </p>
                </div>
                <div className="-mx-3 -mb-3 -mt-3 p-3">
                  <div className="flex items-center justify-between">
                    <button onClick={() => setShowImage(!showImage)} className="flex items-center gap-1 rounded-lg bg-zinc-700 py-2 pl-2 pr-2 text-sm hover:text-zinc-300 sm:py-1 sm:pr-3 hover:bg-zinc-600">
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
                        className={`lucide lucide-chevron-down transition-transform duration-300 ${showImage ? "rotate-180" : ""}`}
                        >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <span>View Page</span>
                    </button>
                  </div>

                  {/* Menampilkan gambar jika showImage bernilai true */}
                  {showImage && (
                    <div className="mt-4">
                      <img
                        src="https://wartapelatihan.com/wp-content/uploads/2016/11/Training-Project-Cost-Management-2.jpg"
                        alt="Project Roadmap"
                        className="w-full rounded-lg"
                      />
                    </div>
                  )}

                  {/* Disini untuk link visit web & github */}
                </div>

              </div>
              <p className="my-3">Here are some more projects that I have worked on. You can find the complete list of projects on my 
                <a href="https://github.com/fatkhurrhn" className="font-medium underline decoration-2 underline-offset-2 transition-colors hover:text-zinc-200"> GitHub profile</a>.
              </p>
              <div className="flex flex-col gap-1.5">
                <a href="#link-github"
                  className="flex flex-col flex-wrap items-start rounded-md bg-zinc-800 px-2 py-2 transition-colors hover:bg-zinc-700/80 sm:flex-row sm:items-center">
                  <span className="flex items-center gap-0.5 font-medium text-zinc-50 sm:gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                      stroke-linejoin="round" className="lucide lucide-arrow-up-right mr-1 inline-block">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                    nama-project
                  </span>
                  <span className="mx-2 hidden sm:inline-block">-</span>
                  <span className="text-base sm:text-lg">deskripsi-project</span>
                </a>
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