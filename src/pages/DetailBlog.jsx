// src/pages/frontdev/DetailBlog.jsx
import React, { useState, useEffect } from "react";
import NavNavigate from "../components/NavNavigate";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import ChatRoomComponents from "../components/ChatRoom";

// Fungsi untuk mengubah markdown menjadi HTML
const renderMarkdown = (content) => {
  if (!content) return '';

  // Ganti **bold** dengan <strong>
  let html = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Ganti _italic_ dengan <em>
  html = html.replace(/_(.*?)_/g, '<em>$1</em>');
  // Ganti ## heading dengan <h2>
  html = html.replace(/## (.*?)(\n|$)/g, '<h2 class="text-2xl font-bold mt-6 mb-4">$1</h2>');
  // Ganti ```code blocks``` dengan <pre><code>
  html = html.replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 p-4 rounded-md overflow-x-auto"><code>$1</code></pre>');
  // Ganti [link](url) dengan <a>
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');
  // Ganti line breaks dengan <br> dan paragraphs dengan <p>
  html = html.split('\n\n').map(paragraph => {
    if (paragraph.trim() === '') return '';
    return `<p class="mb-4">${paragraph.replace(/\n/g, '<br>')}</p>`;
  }).join('');

  return html;
};

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
      <ChatRoomComponents />
      <section className="max-w-4xl mx-auto px-5 pt-4 text-gray-800">
        {/* breadcrumb */}
        <div className="flex justify-between items-center w-full pt-3">
          <h2 className="text-[15px] text-gray-800 font-sm">
            <Link to="/" className="hover:text-blue-600">home</Link>
            <i className="ri-arrow-drop-right-line mx-1"></i>
            <Link to="/blogs" className="hover:text-blue-600">blogs</Link>
            <i className="ri-arrow-drop-right-line mx-1"></i>
            <span className="text-gray-600">{blog.slug}</span>
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
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
        )}

        {/* Article Content */}
        <article
          className="mt-10 text-[16px] leading-relaxed text-gray-800 text-justify prose max-w-none"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(blog.content) }}
        />
      </section>
      <Footer />
    </div>
  );
}