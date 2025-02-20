import Navbar from "../components/Navbar";
import FooterComponent from "../components/Footer";

function App() {
  return (
    <div>
      <div className="bg-zinc-900 text-zinc-400 min-h-screen">
        <div className="mx-auto max-w-[800px] px-4 pb-1 pt-6 text-lg sm:px-12 md:px-16">
          <Navbar />
          <div>
            <div id="about" className="pt-[10px] mb-6 mt-8 flex items-center gap-4 sm:mb-8 sm:mt-16 sm:gap-5">
              <img src="https://media.licdn.com/dms/image/v2/D5603AQFSeewLSkNWqw/profile-displayphoto-shrink_400_400/B56ZOsnbZfGgAo-/0/1733767838340?e=1744243200&v=beta&t=UxHXMMALF5Qc2QZ4dhi3Ers-M-nP6NjBjaPPcrgHLY8"
                className="h-[65px] w-[65px] rounded-full sm:h-[80px] sm:w-[80px]" alt="Fatkhurrhn" />
              <div className="flex flex-col gap-0.5">
                <h1 className="text-xl font-semibold text-white sm:text-3xl sm:font-bold">
                  Fatkhurrhn
                </h1>
                <span className="hidden text-base sm:block sm:text-lg">
                  Frontend Developer | Passionate About UX/UI
                </span>
                <span className="block text-base sm:hidden">Frontend Developer</span>
              </div>
            </div>

            <div
              className="flex flex-col gap-3 text-base leading-7 sm:gap-4 sm:text-lg sm:leading-8"
              style={{ textAlign: "justify" }}
            >
              <p>I'm an Information Systems student passionate about Front-End Development, turning ideas into
                interactive and user-friendly experiences with clean and efficient code. Always exploring new web
                technologies, I love building innovative projects and crafting seamless user experiences.
                <astro-island uid="Malun" prefix="r13"
                  component-url="https://kamranahmed.info/_astro/ExpandButton.BcanAUof.js"
                  component-export="ExpandButton" renderer-url="https://kamranahmed.info/_astro/client.BStqXOaq.js"
                  props="{}" ssr="" client="load" opts='{"name":"ExpandButton","value":true}' await-children="">
                  <button type="button"
                    className="cursor-pointer rounded-md bg-zinc-700 px-1 py-[0.5] text-sm font-normal text-zinc-400 transition-colors hover:bg-zinc-500 hover:text-zinc-50 hover:opacity-100 relative -top-[2px] ml-1.5 opacity-80">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      className="lucide lucide-chevrons-left-right relative -top-[1.35px] inline-block">
                      <path d="m9 7-5 5 5 5"></path>
                      <path d="m15 7 5 5-5 5"></path>
                    </svg>
                  </button>
                  <span className="hidden animate-fade-appear text-green-400">
                    <astro-slot>Check out my repos and let's create something awesome together! </astro-slot>
                  </span>
                </astro-island>
                😎🔥
              </p>

              <p className="my-3 flex flex-wrap gap-2 sm:gap-6 sm:flex sm:space-x-4 hidden sm:flex">
                <a className="flex items-center gap-2 font-normal transition-colors hover:text-zinc-200 sm:bg-transparent bg-zinc-800 rounded-lg py-1.5 sm:py-0 sm:px-0 px-3"
                  href="https://github.com/fatkhurrhn">
                  <svg role="img" class="h-[20px] w-[20px]" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                      fill="currentColor"></path>
                  </svg>
                  GitHub
                </a>
                <a className="flex items-center gap-2 font-normal transition-colors hover:text-zinc-200 sm:bg-transparent bg-zinc-800 rounded-lg py-1.5 sm:py-0 sm:px-0 px-3"
                  href="https://linkedin.com/in/fatkhurrhn">
                  <svg role="img" class="h-[20px] w-[20px]" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>LinkedIn</title>
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                      fill="currentColor"></path>
                  </svg>
                  LinkedIn
                </a>
                <a className="flex items-center gap-2 font-normal transition-colors hover:text-zinc-200 sm:bg-transparent bg-zinc-800 rounded-lg py-1.5 sm:py-0 sm:px-0 px-3"
                  href="https://github.com/fatkhurrhn">
                  <svg class="h-[20px] w-[20px]" role="img" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>X</title>
                    <path
                      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                      fill="currentColor"></path>
                  </svg>
                  Twitter
                </a>
                <a className="flex items-center gap-2 font-normal transition-colors hover:text-zinc-200 sm:bg-transparent bg-zinc-800 rounded-lg py-1.5 sm:py-0 sm:px-0 px-3"
                  href="https://youtube.com/@fatkhurrhnn">
                  <svg role="img" class="h-[20px] w-[20px]" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>YouTube</title>
                    <path
                      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                      fill="currentColor"></path>
                  </svg>
                  YouTube
                </a>
                <a className="flex items-center gap-2 font-normal transition-colors hover:text-zinc-200 sm:bg-transparent bg-zinc-800 rounded-lg py-1.5 sm:py-0 sm:px-0 px-3"
                  href="https://github.com/fatkhurrhn">
                  <svg class="h-[20px] w-[20px]" xmlns="http://www.w3.org/2000/svg" width="200" height="200"
                    viewBox="0 0 20 20">
                    <path fill="currentColor"
                      d="M3.87 4h13.25C18.37 4 19 4.59 19 5.79v8.42c0 1.19-.63 1.79-1.88 1.79H3.87c-1.25 0-1.88-.6-1.88-1.79V5.79c0-1.2.63-1.79 1.88-1.79zm6.62 8.6l6.74-5.53c.24-.2.43-.66.13-1.07c-.29-.41-.82-.42-1.17-.17l-5.7 3.86L4.8 5.83c-.35-.25-.88-.24-1.17.17c-.3.41-.11.87.13 1.07z">
                    </path>
                  </svg>
                  Email
                </a>
              </p>

              <section id="skills" className="skills-section">
                <h1 className="text-xl font-semibold text-zinc-100 sm:text-2xl">
                  Skills
                </h1>
                <br />
                <ul className="skills-list" id="skillsContainer">
                  <li className="skill-item">HTML</li>
                  <li className="skill-item">CSS</li>
                  <li className="skill-item">JavaScript</li>
                  <li className="skill-item">React</li>
                  <li className="skill-item">Bootstrap</li>
                  <li className="skill-item">Next.js</li>
                  <li className="skill-item">Node.js</li>
                  <li className="skill-item">Git</li>
                  <li className="skill-item">Tailwind</li>
                  <li className="skill-item">REST API</li>
                  <li className="skill-item">GraphQL</li>
                </ul>
              </section>

              <section className="skills-section">
                <h1 className="text-xl font-semibold text-zinc-100 sm:text-2xl">
                  My Project
                </h1>
                <br />
                <div className="projects-container">
                  <article className="project" >
                    <div className="project-content">
                      <h3>Portfolio Using Next.js</h3>
                      <p>
                        Created a portfolio website using Next.js to showcase projects and skills with a
                        responsive design.
                      </p>
                      <div className="project-buttons">
                        <a href="https://github.com/fatkhurrhn/portfolio-next.js" className="btn view-project"
                          target="">Demo</a>
                        <a href="https://github.com/fatkhurrhn/portfolio-next.js" className="btn github-link"
                          target="">GitHub</a>
                      </div>
                    </div>
                    <div className="project-image">
                      <img src="https://fatkhurrhn.github.io/assets/img/nextjs.png" alt="CarHub" />
                    </div>
                  </article>

                  <article className="project">
                    <div className="project-content">
                      <h3>Laundry Go Apps Design</h3>
                      <p>
                        Designed the system for Laundry Go app, optimizing order management, payments, and user
                        experience.</p>
                      <div className="project-buttons">
                        <a href="https://www.linkedin.com/in/fatkhurrhn/details/projects/" className="btn view-project"
                          target="">Detail</a>
                        <a href="https://www.figma.com/file/kgs4VB6hegAEifEfGHS7un/RPL-Tugas-8"
                          className="btn github-link" target="">Figma</a>
                      </div>
                    </div>
                    <div className="project-image">
                      <img src="https://media.licdn.com/dms/image/v2/D562DAQGlmvnW4ZjKxg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1728626490441?e=1740027600&v=beta&t=CLJxHIV9VCPW12-USQuz2LOZqN2amWm9Ig5KjzqsImM"
                        alt="Realtor" />
                    </div>
                  </article>
                </div>
              </section>

              <section id="experiences" className="skills-section">
                <h1 className="text-xl font-semibold text-zinc-100 sm:text-2xl">
                  My Experience
                </h1>
                <br />
                <div className="mt-1 sm:mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="grid gap-4">
                    <div className="rounded-xl bg-zinc-800 p-3 sm:p-4" >
                      <div className="mb-3 sm:mb-4 flex items-center gap-3" >
                        <img className="h-[40px] w-[40px] rounded-full" src="/assets/lintasarta.png"
                          alt=" Company Lintasarta" />
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-left">
                            Company Lintasarta
                          </h3>
                          <p className="text-xs sm:text-sm text-zinc-400 text-left">
                            Capstone Project Bangkit Academy
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <p className="text-sm sm:text-base text-justify">
                          Developed an employee recruitment website using React over two months as part of the
                          Capstone Project at Lintasarta, focusing on frontend development and user
                          experience.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl bg-zinc-800 p-3 sm:p-4" >
                      <div className="mb-3 sm:mb-4 flex items-center gap-3">
                        <img className="h-[40px] w-[40px] rounded-full" src="/assets/nf.jpg"
                          alt="Assistan Lecturer 2024" />
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-left">
                            Assistan Lecturer 2024
                          </h3>
                          <p className="text-xs sm:text-sm text-zinc-400 text-left">
                            STT Terpadu Nurul Fikri
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <p className="text-sm sm:text-base text-justify">
                          Assisted in teaching the Big Data course for one semester, helping students
                          understand data processing, analytics, and visualization concepts. Provided guidance
                          in practical assignments, facilitated discussions, and supported the lecturer in
                          className activities.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4" >
                    <div className="rounded-xl bg-zinc-800 p-3 sm:p-4" >
                      <div className="mb-3 sm:mb-4 flex items-center gap-3">
                        <img className="h-[40px] w-[40px] rounded-full"
                          src="https://files.klob.id/public/mig01/l32ovhf5/channels4_profile.jpg"
                          alt="Bangkit Academy 2024" />
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-left">
                            Bangkit Academy 2024
                          </h3>
                          <p className="text-xs sm:text-sm text-zinc-400 text-left">
                            Cloud Computing Cohort CC-23
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <p className="text-sm sm:text-base text-justify">
                          Participated in the Kampus Merdeka program for four months, focusing on the Cloud
                          Computing learning path.
                        </p>
                      </div>
                    </div>
                    <div className="rounded-xl bg-zinc-800 p-3 sm:p-4" >
                      <div className="mb-3 sm:mb-4 flex items-center gap-3">
                        <img className="h-[40px] w-[40px] rounded-full" src="/assets/senada.jpg"
                          alt="Head of the Quran Program Department" />
                        <div>
                          <h3 className="text-base sm:text-lg text-left font-semibold">
                            Leader of the PQ
                          </h3>
                          <p className="text-xs sm:text-sm text-left text-zinc-400">
                            LDK Senada STT NF
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <p className="text-sm sm:text-base text-justify">
                          an Islamic organization on the STT Nurul Fikri campus
                        </p>
                      </div>
                    </div>
                    <div className="rounded-xl bg-zinc-800 p-3 sm:p-4" >
                      <div className="mb-3 sm:mb-4 flex items-center gap-3">
                        <img className="h-[40px] w-[40px] rounded-full" src="/assets/pintar.png"
                          alt="Freelance Translator" />
                        <div>
                          <h3 className="text-base sm:text-lg text-left font-semibold">
                            Freelance Translator
                          </h3>
                          <p className="text-xs sm:text-sm text-left text-zinc-400">
                            Malay translator at PINTAR
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <p className="text-sm sm:text-base text-justify">
                          Translated Malay language documents for two months at PINTAR.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="skills-section">
                <h1 className="text-xl font-semibold text-zinc-100 sm:text-2xl">
                  Github Activity Graph
                </h1>
                <br />
                <div className="projects-container">
                  <article className="graph">
                    <div className="graph-image">
                      <img src="/assets/github-contribution-grid-snake-dark.svg" alt="" />
                      <img src="https://github-readme-activity-graph.vercel.app/graph?username=fatkhurrhn&theme=github-compact&hide_border=true"
                        className="border-none" height="auto" alt="by fatkhurhhn" />
                    </div>
                  </article>
                </div>
              </section>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
