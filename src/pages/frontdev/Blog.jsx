// src/pages/frontdev/Blog.jsx
import React, { useState, useEffect } from "react";
import NavNavigate from "../../components/NavNavigate";
import Footer from "../../components/Footer";
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

  return (
    <div className="bg-white min-h-screen text-gray-900 transition-colors duration-300">
      <NavNavigate />
      <section className="max-w-4xl mx-auto px-5 pt-20">
        {/* Blog Section */}
        <div>
          <div className="flex justify-between items-center w-full">
            <h2 className="text-[20px] text-text-gray-800 font-bold">✍️ Blogs</h2>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-10">
              <i className="ri-article-line text-5xl text-gray-300 mb-4"></i>
              <p className="text-gray-500">No blogs published yet. Check back later!</p>
            </div>
          ) : (
            <div className="space-y-5 mt-5">
              {blogs.map((blog) => (
                <div key={blog.id} className="w-full">
                  <div className="border border-[#252529] bg-white p-5 rounded-xl hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row justify-between gap-5">
                      <div className="flex gap-3">
                        <div className="mt-1">
                          <Link 
                            to={`/blogs/${blog.slug}`} 
                            className="text-lg text-text-gray-800 font-black flex gap-2 hover:text-blue-600"
                          >
                            {blog.title}
                          </Link>
                          <ul className="text-zinc-400 flex items-center gap-2 text-sm">
                            <li>{blog.readingTime || 2} min read</li>
                            <div className="bg-zinc-400 rounded-full h-[3px] w-[3px] aspect-square"></div>
                            <li>{formatDate(blog.publishedAt)}</li>
                          </ul>
                          {blog.excerpt && (
                            <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                          )}
                        </div>
                      </div>
                      {blog.thumbnail && (
                        <div className="sm:w-32 h-24 overflow-hidden rounded-md">
                          <img 
                            src={blog.thumbnail} 
                            alt={blog.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}