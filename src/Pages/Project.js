import { useState } from "react";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/Footer";

const projects = [
  { id: 1, title: "Landing Page website company lintasarta jakarta selatan", category: "HTML", date: "10 Jan 2024", thumbnail: "https://kazokku.com/blog/wp-content/uploads/2023/12/APA-ITU-PROJECT-1.webp", link: "#" },
  { id: 2, title: "Portfolio Website", category: "HTML", date: "15 Feb 2024", thumbnail: "https://kazokku.com/blog/wp-content/uploads/2023/12/APA-ITU-PROJECT-1.webp", link: "#" },
  { id: 3, title: "Company Profile", category: "HTML", date: "20 Mar 2024", thumbnail: "https://kazokku.com/blog/wp-content/uploads/2023/12/APA-ITU-PROJECT-1.webp", link: "#" },
  { id: 4, title: "E-commerce", category: "Laravel", date: "25 Apr 2024", thumbnail: "https://kazokku.com/blog/wp-content/uploads/2023/12/APA-ITU-PROJECT-1.webp", link: "#" },
  { id: 5, title: "Blog System", category: "Laravel", date: "30 May 2024", thumbnail: "https://kazokku.com/blog/wp-content/uploads/2023/12/APA-ITU-PROJECT-1.webp", link: "#" },
  { id: 6, title: "Admin Panel", category: "Laravel", date: "5 Jun 2024", thumbnail: "https://kazokku.com/blog/wp-content/uploads/2023/12/APA-ITU-PROJECT-1.webp", link: "#" },
  { id: 7, title: "AI Chatbot", category: "Python", date: "10 Jul 2024", thumbnail: "https://kazokku.com/blog/wp-content/uploads/2023/12/APA-ITU-PROJECT-1.webp", link: "#" },
  { id: 8, title: "Data Scraper", category: "Python", date: "15 Aug 2024", thumbnail: "https://kazokku.com/blog/wp-content/uploads/2023/12/APA-ITU-PROJECT-1.webp", link: "#" },
  { id: 9, title: "Machine Learning Model", category: "Python", date: "20 Sep 2024", thumbnail: "https://kazokku.com/blog/wp-content/uploads/2023/12/APA-ITU-PROJECT-1.webp", link: "#" },
  { id: 10, title: "Aplikasi ecommerce", category: "PHP", date: "27 Sep 2025", thumbnail: "https://kazokku.com/blog/wp-content/uploads/2023/12/APA-ITU-PROJECT-1.webp", link: "#" },
];

function Project() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    return (
      (category === "All" || project.category === category) &&
      project.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="relative bg-zinc-900 text-zinc-400 min-h-screen">
      <div className="mx-auto max-w-[850px] px-4 pb-6 pt-6 text-lg sm:px-12 md:px-16">
        <Navbar />
        <h1 className="text-2xl font-bold text-white mb-4">Project List</h1>
        
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <input
            type="text"
            placeholder="Cari project..."
            className="w-full md:w-1/2 px-4 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="w-full md:w-1/3 px-4 py-2 mt-2 md:mt-0 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="HTML">Project HTML</option>
            <option value="Laravel">Project Laravel</option>
            <option value="Python">Project Python</option>
          </select>
        </div>
        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <a href={project.link} key={project.id} className="block bg-zinc-800 rounded-md overflow-hidden hover:bg-zinc-700 transition duration-200">
            <div className="relative">
              <img src={project.thumbnail} alt={project.title} className="w-full h-40 object-cover" />
              <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs font-medium px-3 py-1 rounded-md">
                {project.category}
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-white mt-0 leading-tight line-clamp-2">
                {project.title}
              </h2>
              <hr className="my-2 border-zinc-700" />
              <p className="text-sm text-gray-400">Created: {project.date}</p>
            </div>
          </a>
          ))}
        </div>
=======
        <Navbar /> <br /><br />
        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div className="flex flex-row items-center gap-2 w-full">
            <input
              type="text"
              placeholder="Cari project..."
              className="flex-1 px-3 py-2 text-sm sm:text-base rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-md transition-all duration-300 ease-in-out"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="w-1/3 min-w-[100px] px-3 py-2 text-sm sm:text-base rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-md transition-all duration-300 ease-in-out hover:bg-zinc-700 cursor-pointer"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {/* Opsi untuk Desktop */}
              <option className="hidden sm:block" value="All">All</option>
              <option className="hidden sm:block" value="HTML">Project HTML</option>
              <option className="hidden sm:block" value="Laravel">Project Laravel</option>
              <option className="hidden sm:block" value="Python">Project Python</option>
              <option className="hidden sm:block" value="PHP">Project PHP</option>
              {/* Opsi untuk Mobile */}
              <option className="sm:hidden" value="HTML">HTML</option>
              <option className="sm:hidden" value="Laravel">Laravel</option>
              <option className="sm:hidden" value="Python">Python</option>
              <option className="sm:hidden" value="PHP">PHP</option>
            </select>
          </div>
        </div>
        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredProjects.map((project) => (
              <a href={project.link} key={project.id} className="block bg-zinc-800 rounded-md overflow-hidden hover:bg-zinc-700 transition duration-200">
                <div className="relative">
                  <img src={project.thumbnail} alt={project.title} className="w-full h-40 object-cover" />
                  <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs font-medium px-3 py-1 rounded-md">
                    {project.category}
                  </span>
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-white mt-0 leading-tight line-clamp-2">
                    {project.title}
                  </h2>
                  <hr className="my-2 border-zinc-700" />
                  <p className="text-sm text-gray-400">Created: {project.date}</p>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-4">Coba cari keyword lain...</p>
        )}
      </div>
      <FooterComponent />
    </div>
  );
}

export default Project;
