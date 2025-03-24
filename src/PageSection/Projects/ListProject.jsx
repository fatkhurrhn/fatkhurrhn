import React from "react";

export default function Page() {
    const projects = [
        {
            "id": 1,
            "nama": "repo sync",
            "deskripsi": "Track your GitHub repos automatically",
            "link": "https://github.com/fatkhurrhn/repo-sync"
        },
        {
            "id": 2,
            "nama": "hex code color generator",
            "deskripsi": "Generate HEX codes easily for your projects",
            "link": "https://github.com/fatkhurrhn/hex-code-color-generator"
        },
        {
            "id": 3,
            "nama": "todo list with ES6",
            "deskripsi": "Modern JavaScript Todo List",
            "link": "https://github.com/fatkhurrhn/todo-list-with-ES6"
        },
        {
            "id": 4,
            "nama": "web playground",
            "deskripsi": "A simple online code editor with real-time preview",
            "link": "https://github.com/fatkhurrhn/web-playground"
        },
        {
            "id": 5,
            "nama": "simple crud nodejs",
            "deskripsi": "Node.js and Express-based CRUD application",
            "link": "https://github.com/fatkhurrhn/simple-crud-nodejs"
        },
        {
            "id": 6,
            "nama": "floral suprise",
            "deskripsi": "Develop interactive flower graphics using web technologies",
            "link": "https://github.com/fatkhurrhn/floral-surprise"
        },
        {
            "id": 7,
            "nama": "portfolio with nextjs",
            "deskripsi": "Learn to create a Next.js portfolio (all skill levels)",
            "link": "https://github.com/fatkhurrhn/portfolio-next.js"
        },
        {
            "id": 8,
            "nama": "dream LMS",
            "deskripsi": "The DreamLMS application uses Laravel10",
            "link": "https://github.com/fatkhurrhn/Projek_UAS_DreamsLMS"
        },
        {
            "id": 9,
            "nama": "quote generator",
            "deskripsi": "Inspire and share easily with the Quote Generator",
            "link": "https://github.com/fatkhurrhn/quote-generator"
        },
        {
            "id": 10,
            "nama": "shop thur",
            "deskripsi": "Project UTS PemWeb E-Commerce Application",
            "link": "https://github.com/fatkhurrhn/Project_ShopThur"
        },
        {
            "id": 11,
            "nama": "kalkulator istighfar",
            "deskripsi": "Web calculator 9 + 4 = astaghfirullah",
            "link": "https://github.com/fatkhurrhn/kalkulator-istighfar"
        },
        {
            "id": 12,
            "nama": "multi image upload",
            "deskripsi": "Preview multiple images before uploading",
            "link": "https://github.com/fatkhurrhn/multple-image-upload"
        },
        {
            "id": 13,
            "nama": "javascript-code",
            "deskripsi": "JavaScript code examples for learning",
            "link": "https://github.com/fatkhurrhn/javascript-code"
        },
        {
            "id": 14,
            "nama": "svg to image",
            "deskripsi": "Web app for converting SVG to image formats",
            "link": "https://github.com/fatkhurrhn/svg-to-image"
        },
        {
            "id": 15,
            "nama": "personal finance",
            "deskripsi": "Simple personal finance tracker (Python & SQLite)",
            "link": "https://github.com/fatkhurrhn/personal-finance"
        },
        {
            "id": 16,
            "nama": "png to pdf",
            "deskripsi": "Easily combine PNGs into one PDF online",
            "link": "https://github.com/fatkhurrhn/png-to-pdf"
        },
        {
            "id": 17,
            "nama": "simple search engine",
            "deskripsi": "Streamlined Google search interface",
            "link": "https://github.com/fatkhurrhn/simple-search-engine"
        },
        {
            "id": 18,
            "nama": "dompetqu",
            "deskripsi": "Simple web app for managing your finances (walletqu)",
            "link": "https://github.com/fatkhurrhn/dompetqu"
        },
        {
            "id": 19,
            "nama": "simple crud react",
            "deskripsi": "Simple GPT-powered React CRUD project",
            "link": "https://github.com/fatkhurrhn/simple-crud-react"
        },
        {
            "id": 20,
            "nama": "id card generator",
            "deskripsi": "Ideal for events and organizations: ID Card Generator",
            "link": "https://github.com/fatkhurrhn/idcard-generator"
        },
        {
            "id": 21,
            "nama": "my app with GPT",
            "deskripsi": "React site fully integrated with GPT",
            "link": "https://github.com/fatkhurrhn/my-app-with-GPT"
        }
    ];

    return (
        <div>
            <div className="flex flex-col gap-1.5 text-[#d4d4d4] pt-[15px]">
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
        </div>
    );
}