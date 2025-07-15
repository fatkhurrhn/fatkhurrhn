// src/pages/frontdev/Blog.jsx
import React, { useState, useEffect } from "react";
import NavNavigate from "../../components/frontdev/NavNavigate";
import Footer from "../../components/frontdev/Footer";
import { Link } from "react-router-dom";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";

export default function Page() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(collection(db, "my-blogs"), orderBy("publishedAt", "desc"));
        const querySnapshot = await getDocs(q);
        const blogsData = querySnapshot.docs
          .map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
          .filter(blog => blog.status === 'published');

        setBlogs(blogsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs: ", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const date = timestamp.toDate();
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Versi 1: Card Grid Layout
  const GridLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
        >
          <Link to={`/frontdev/blogs/${blog.slug}`} className="block h-full">
            {blog.thumbnail && (
              <div className="h-32 overflow-hidden">
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            )}
            <div className="p-4">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <span>{formatDate(blog.publishedAt)}</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>{blog.readingTime || 2} min read</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-1 line-clamp-1">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {blog.description || blog.content}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white min-h-screen text-gray-900">
      <NavNavigate />
      <section className="max-w-4xl mx-auto px-5 pt-20 pb-16">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20">
            <i className="ri-article-line text-5xl text-gray-300 mb-4"></i>
            <p className="text-gray-500">No blogs published yet. Check back later!</p>
          </div>
        ) : (
          <>
            <GridLayout />
          </>
        )}
      </section>
      <Footer />
    </div>
  );
}