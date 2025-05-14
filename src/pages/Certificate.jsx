import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function Certificate() {
  const [certificates, setCertificates] = useState([]);
  const [filteredCertificates, setFilteredCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("certificate");

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "my-certificate"));
        const certificatesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCertificates(certificatesData);
        setFilteredCertificates(certificatesData.filter(c => c.category === "certificate"));
      } catch (error) {
        console.error("Error fetching certificates: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  useEffect(() => {
    const filtered = certificates.filter(cert => {
      const matchesCategory = cert.category === activeCategory;
      const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (cert.description && cert.description.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
    setFilteredCertificates(filtered);
  }, [searchTerm, activeCategory, certificates]);

  return (
    <div className="bg-white min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <section className="max-w-4xl mx-auto px-5 pt-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 mb-6">
          {/* Search Input - Left Side with Search Icon and Clear Button */}
          <div className="w-full sm:w-72">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search certificates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-2.5 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Category Selector - Right Side */}
          <div className="w-full sm:w-auto">
            {/* Desktop View - Button Group */}
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => setActiveCategory("certificate")}
                className={`px-4 py-2 text-sm rounded-md font-medium transition-colors border ${activeCategory === "certificate"
                  ? "bg-indigo-50 border-indigo-200 text-indigo-600 shadow-sm"
                  : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
              >
                Certificate
              </button>
              <button
                onClick={() => setActiveCategory("badge")}
                className={`px-4 py-2 text-sm rounded-md font-medium transition-colors border ${activeCategory === "badge"
                  ? "bg-indigo-50 border-indigo-200 text-indigo-600 shadow-sm"
                  : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
              >
                Badges
              </button>
            </div>

            {/* Mobile View - Dropdown */}
            <div className="sm:hidden w-full">
              <div className="relative">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm appearance-none"
                >
                  <option value="certificate">Certificates</option>
                  <option value="badge">Badges</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : filteredCertificates.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-800">
              No {activeCategory === "certificate" ? "certificates" : "badges"} found
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>
        ) : (
          <div className="grid gap-3 text-gray-800 dark:text-gray-200">
            <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCertificates.map((certificate) => (
                <div
                  key={certificate.id}
                  className={`w-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 ${certificate.category === "badge" ? "border-2 border-gray-200" : ""
                    }`}
                >
                  <div className="sertif-image h-48 overflow-hidden relative">
                    <img
                      src={certificate.imageUrl}
                      alt={certificate.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300?text=Certificate+Image';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-800 text-left mb-2">
                      {certificate.title}
                    </h3>
                    {certificate.description && (
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                        {certificate.description}
                      </p>
                    )}
                    <a
                      href={certificate.courseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-2 inline-block w-full text-gray-800 border ${certificate.category === "badge"
                        ? "border-gray-200 hover:bg-gray-100"
                        : "border-gray-200 hover:bg-gray-100"
                        } bg-white font-medium py-2 px-3 rounded-md transition duration-200 text-center text-xs`}
                    >
                      View {certificate.category === "badge" ? "Details" : "Course"}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}