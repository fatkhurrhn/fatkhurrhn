import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar-temp";
import Footer from "../components/Footer";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

const categories = ["project", "template", "components", "design"];

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("project");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder] = useState("newest");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetchProjects();

    // Check if mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchProjects = async () => {
    try {
      const projectsRef = collection(db, "my-project");
      let q = query(projectsRef, orderBy("createdAt", "desc"));
      
      const querySnapshot = await getDocs(q);
      const projectsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setProjects(projectsData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching projects: ", error);
      setLoading(false);
    }
  };

  if (!mounted) return null;

  const filteredProjects = projects.filter(project => {
    const matchesCategory = project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         (project.description && project.description.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    const dateA = a.createdAt?.toDate() || new Date(0);
    const dateB = b.createdAt?.toDate() || new Date(0);
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Navbar />
      <section className="max-w-4xl mx-auto px-5 pt-20 pb-12">
        {/* Search and Category Controls - now in one row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
          
          {/* Mobile Dropdown */}
          {isMobile ? (
            <div className="w-full sm:w-auto">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="capitalize">
                    {category}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
  {categories.map(category => (
    <button
      key={category}
      onClick={() => setActiveCategory(category)}
      className={`px-4 py-2 rounded-md capitalize text-sm font-medium transition-all duration-200 border ${
        activeCategory === category
          ? "bg-indigo-50 border-indigo-300 text-indigo-700 shadow-xs"
          : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300"
      }`}
    >
      {category}
    </button>
  ))}
</div>
          )}
        </div>
        
        {/* Projects Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : sortedProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {sortedProjects.map(project => (
              <div 
                key={project.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative">
                  {project.thumbnail && (
                    <img 
                      src={project.thumbnail} 
                      alt={project.title} 
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <span className="absolute top-2 left-2 bg-white/50 text-black text-xs px-2 py-1 rounded-[5px] capitalize">
                    {project.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-4 truncate">{project.title}</h3>
                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors text-sm"
                      >
                        View
                      </a>
                    )}
                    {project.codeUrl && (
                      <a 
                        href={project.codeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors text-sm"
                      >
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}