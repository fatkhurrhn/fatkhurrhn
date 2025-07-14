// src/pages/frontdev/DetailBlog.jsx
import React, { useState, useEffect } from "react";
import NavNavigate from "../../components/NavNavigate";
import Footer from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function Page() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const q = query(collection(db, "my-blogs"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            setBlog({
              id: doc.id,
              ...doc.data()
            });
          });
        } else {
          setBlog(null);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog: ", error);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const date = timestamp.toDate();
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen text-gray-900">
        <NavNavigate />
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="bg-white min-h-screen text-gray-900">
        <NavNavigate />
        <section className="max-w-4xl mx-auto px-5 pt-20 text-center">
          <i className="ri-article-line text-5xl text-gray-300 mb-4"></i>
          <h1 className="text-2xl font-bold mb-2">Blog Not Found</h1>
          <p className="text-gray-500 mb-4">The blog you're looking for doesn't exist or may have been removed.</p>
          <Link 
            to="/blogs" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Blogs
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      <NavNavigate />
      <section className="max-w-4xl mx-auto px-5 pt-20 text-gray-800">
        {/* breadcrumb */}
        <div className="flex justify-between items-center w-full pt-3">
          <h2 className="text-[15px] text-gray-800 font-sm">
            <Link to="/">home</Link><i className="ri-arrow-drop-right-line"></i>
            <Link to="/blogs">blogs</Link><i className="ri-arrow-drop-right-line"></i>
            {blog.slug}
          </h2>
        </div>

        {/* Title & Metadata */}
        <div className="mt-5 text-center">
          <h1 className="text-4xl font-bold">{blog.title}</h1>
          <p className="text-sm text-gray-400 mt-2">
            Published on {formatDate(blog.publishedAt)} • {blog.readingTime || 1} min read
          </p>
        </div>

        {/* Thumbnail */}
        {blog.thumbnail && (
          <div className="mt-5">
            <img 
              src={blog.thumbnail} 
              alt={blog.title} 
              className="w-full rounded-lg shadow-lg" 
            />
          </div>
        )}

        {/* Article Content */}
        <article 
          className="mt-10 text-[16px] text-justify leading-8 text-gray-800 prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </section>
      <Footer />
    </div>
  );
}