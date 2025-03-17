import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Thumbnail1 from "../assets/thumbnail01.png"

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
];

export default function Page() {
    return (
        <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />
            <section className="max-w-4xl mx-auto px-5 pt-20">

                {/* project */}
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-[20px] text-[#d4d4d4] font-bold">🛠 My Projects</h2>
                </div>
                <p className="text-justify pt-2 text-[#d4d4d4]">
                    I have worked on a variety of projects over the years; some of them as a hobby, some as a proof of concept and others to solve my own pain points. Here are some of the projects that I have worked on.
                </p>
                <br />
                <div className="grid gap-2">
                    <div className="border border-[#252529] bg-[#141417] rounded-xl sm:flex items-center">
                        <div className="p-2">
                            <img
                                src={Thumbnail1}
                                alt="Personal Website Mockup"
                                width={500}
                                height={100}
                                className="border border-[#202024] rounded-lg"
                            />
                        </div>
                        <div className="p-3 w-full">
                            <div className="flex justify-between items-center">
                                <h1 className="text-[18px] text-[#d4d4d4] font-black">Personal Website</h1>
                                <a
                                    target="_blank"
                                    href="https://fatkhurrhn.vercel.app/"
                                    className="border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] duration-200 px-5 py-2 flex items-center rounded-lg text-zinc-400 gap-2"
                                >
                                    <i className="ri-a-m" /> Preview
                                </a>
                            </div>
                            <hr className="border-1 border-[#252529] border-dashed my-3" />
                            <div className="flex items-center gap-5">
                                <ul className="flex gap-2">
                                    <li className="text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500 font-mono w-fit">
                                        # JavaScript
                                    </li>
                                    <li className="text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500 font-mono w-fit">
                                        # Tailwindv3
                                    </li>
                                    <li className="text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500 font-mono w-fit">
                                        # ReactJS
                                    </li>
                                </ul>
                            </div>
                            <hr className="border-1 border-[#252529] border-dashed my-3 text-justify" />
                            <p className="text-[#d4d4d4]">
                                Personal portfolio built with React.js and Tailwind, showcasing my skills, projects, and experience in front-end development.
                            </p>
                        </div>
                    </div>
                </div>

                {/* hr */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

                <div className="flex flex-col gap-1.5 text-[#d4d4d4]">
                    {projects.map(project => (
                        <a key={project.id} href={project.link} className="flex flex-col flex-wrap items-start rounded-md bg-[#18181b] border border-[#252529] px-2 py-2 transition-colors hover:bg-[#1f1f24] sm:flex-row sm:items-center" target="_blank" rel="noreferrer">
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
                            <span className="text-base sm:text-md">{project.deskripsi}</span>
                        </a>
                    ))}
                </div>

                {/* hr */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

            </section>
            <Footer />
        </div>
    );
}
