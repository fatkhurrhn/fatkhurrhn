// src/pages/admin/ManageBlogs.jsx
import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc, addDoc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

export default function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const [blogToDelete, setBlogToDelete] = useState(null);
  const [currentBlog, setCurrentBlog] = useState({
    title: '',
    slug: '',
    content: '',
    thumbnail: '',
    readingTime: 2,
    publishedAt: null,
    status: 'draft',
    excerpt: '',
    tags: []
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "my-blogs"));
        const blogsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(blogsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs: ", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  };

  const handleDeleteClick = (blog) => {
    setBlogToDelete(blog);
    setShowDeleteModal(true);
  };

  const handleEditClick = (blog) => {
    setCurrentBlog({
      ...blog,
      publishedAt: blog.publishedAt?.toDate() || new Date()
    });
    setModalMode('edit');
    setShowBlogModal(true);
  };

  const handleCreateClick = () => {
    setCurrentBlog({
      title: '',
      slug: '',
      content: '',
      thumbnail: '',
      readingTime: 2,
      publishedAt: new Date(),
      status: 'published',
      excerpt: '',
      tags: []
    });
    setModalMode('create');
    setShowBlogModal(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteDoc(doc(db, "my-blogs", blogToDelete.id));
      setBlogs(blogs.filter(blog => blog.id !== blogToDelete.id));
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Error deleting blog: ", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'title' && modalMode === 'create') {
      setCurrentBlog(prev => ({
        ...prev,
        title: value,
        slug: generateSlug(value)
      }));
    } else {
      setCurrentBlog(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Rich text editor handlers
  const handleContentChange = (e) => {
    setCurrentBlog(prev => ({
      ...prev,
      content: e.target.value
    }));
  };

  const applyFormat = (format) => {
    const textarea = document.querySelector('textarea[name="content"]');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = currentBlog.content.substring(start, end);
    let newText = currentBlog.content;

    switch (format) {
      case 'bold':
        newText = currentBlog.content.substring(0, start) +
          `**${selectedText}**` +
          currentBlog.content.substring(end);
        break;
      case 'italic':
        newText = currentBlog.content.substring(0, start) +
          `_${selectedText}_` +
          currentBlog.content.substring(end);
        break;
      case 'heading':
        newText = currentBlog.content.substring(0, start) +
          `\n## ${selectedText}\n` +
          currentBlog.content.substring(end);
        break;
      case 'link':
        newText = currentBlog.content.substring(0, start) +
          `[${selectedText}](url)` +
          currentBlog.content.substring(end);
        break;
      case 'code':
        newText = currentBlog.content.substring(0, start) +
          "```\n" + selectedText + "\n```\n" +
          currentBlog.content.substring(end);
        break;
      default:
        break;
    }

    setCurrentBlog(prev => ({
      ...prev,
      content: newText
    }));
  };

  const handleDateChange = (e) => {
    setCurrentBlog(prev => ({
      ...prev,
      publishedAt: new Date(e.target.value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const blogData = {
        ...currentBlog,
        publishedAt: currentBlog.publishedAt ? Timestamp.fromDate(new Date(currentBlog.publishedAt)) : Timestamp.now(),
        readingTime: parseInt(currentBlog.readingTime) || 2,
        tags: currentBlog.tags.length > 0 ?
          (Array.isArray(currentBlog.tags) ? currentBlog.tags : currentBlog.tags.split(',').map(tag => tag.trim()))
          : []
      };

      if (modalMode === 'create') {
        const docRef = await addDoc(collection(db, "my-blogs"), blogData);
        setBlogs([{ id: docRef.id, ...blogData }, ...blogs]);
      } else {
        await updateDoc(doc(db, "my-blogs", currentBlog.id), blogData);
        setBlogs(blogs.map(blog =>
          blog.id === currentBlog.id ? { ...blog, ...blogData } : blog
        ));
      }

      setShowBlogModal(false);
    } catch (error) {
      console.error("Error saving blog: ", error);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const date = timestamp.toDate();
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatDateForInput = (date) => {
    if (!date) return '';
    const d = new Date(date);
    const pad = num => num.toString().padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  };

  return (
    <Layout>
      <div className="bg-white min-h-screen text-gray-900">
        <section className="max-w-full mx-auto">

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <button
                onClick={handleCreateClick}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <i className="ri-add-line"></i> Create New
              </button>
            </div>

          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-500"></div>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-16 border-2 border-dashed border-gray-200 rounded-lg">
              <i className="ri-article-line text-5xl text-gray-300 mb-4"></i>
              <h3 className="text-lg font-medium text-gray-700">No blogs yet</h3>
              <p className="text-gray-500 mt-1">Get started by creating your first blog post</p>
              <button
                onClick={handleCreateClick}
                className="mt-4 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 transition-colors"
              >
                <i className="ri-add-line"></i> Create Blog
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Blog Post
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Published
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Read Time
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {blogs.map((blog) => (
                    <tr key={blog.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          {blog.thumbnail && (
                            <div className="flex-shrink-0 h-12 w-12 rounded-md overflow-hidden">
                              <img
                                className="h-full w-full object-cover"
                                src={blog.thumbnail}
                                alt={blog.title}
                                onError={(e) => e.target.style.display = 'none'}
                              />
                            </div>
                          )}
                          <div>
                            <div className="font-medium text-gray-900 line-clamp-1">{blog.title}</div>
                            <div className="text-xs text-gray-600 mt-1 line-clamp-1">/{blog.slug}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                          ${blog.status === 'published'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'}`}>
                          {blog.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(blog.publishedAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <i className="ri-time-line text-gray-400"></i>
                          <span className="text-sm text-gray-500">{blog.readingTime} min</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end gap-3">
                          <button
                            onClick={() => handleEditClick(blog)}
                            className="text-gray-600 hover:text-gray-900 p-1 rounded-full hover:bg-gray-50 transition-colors"
                            title="Edit"
                          >
                            <i className="ri-pencil-line text-lg"></i>
                          </button>
                          <button
                            onClick={() => handleDeleteClick(blog)}
                            className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50 transition-colors"
                            title="Delete"
                          >
                            <i className="ri-delete-bin-line text-lg"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Confirm Deletion
                </h3>
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete "<strong>{blogToDelete?.title}</strong>"? This action cannot be undone.
              </p>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Blog Create/Edit Modal */}
        {showBlogModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {modalMode === 'create' ? 'Create New Blog' : 'Edit Blog'}
                </h3>
                <button
                  onClick={() => setShowBlogModal(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title*</label>
                    <input
                      type="text"
                      name="title"
                      value={currentBlog.title}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-800"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Thumbnail URL</label>
                    <input
                      type="url"
                      name="thumbnail"
                      value={currentBlog.thumbnail}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-800"
                      placeholder="https://example.com/image.jpg"
                    />
                    {currentBlog.thumbnail && (
                      <div className="mt-2">
                        <p className="text-xs text-gray-500 mb-1">Thumbnails Preview:</p>
                        <img
                          src={currentBlog.thumbnail}
                          alt="Thumbnail preview"
                          className="h-32 object-contain rounded border border-gray-200"
                          onError={(e) => e.target.style.display = 'none'}
                        />
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Reading Time (minutes)*</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="readingTime"
                          value={currentBlog.readingTime}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-800"
                          min="1"

                        />
                        <div className="absolute right-3 top-2 text-gray-400">
                          <i className="ri-time-line"></i>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status*</label>
                      <select
                        name="status"
                        value={currentBlog.status}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-800"

                      >
                        <option value="published">Published</option>
                        <option value="draft">Draft</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Publish Date & Time*</label>
                      <input
                        type="datetime-local"
                        value={formatDateForInput(currentBlog.publishedAt)}
                        onChange={handleDateChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Content*</label>
                    <div className="mb-2 flex gap-2 flex-wrap">
                      <button
                        type="button"
                        onClick={() => applyFormat('bold')}
                        className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
                        title="Bold"
                      >
                        <i className="ri-bold"></i>
                      </button>
                      <button
                        type="button"
                        onClick={() => applyFormat('italic')}
                        className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
                        title="Italic"
                      >
                        <i className="ri-italic"></i>
                      </button>
                      <button
                        type="button"
                        onClick={() => applyFormat('heading')}
                        className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
                        title="Heading"
                      >
                        <i className="ri-heading"></i>
                      </button>
                      <button
                        type="button"
                        onClick={() => applyFormat('link')}
                        className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
                        title="Link"
                      >
                        <i className="ri-link"></i>
                      </button>
                      <button
                        type="button"
                        onClick={() => applyFormat('code')}
                        className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
                        title="Code Block"
                      >
                        <i className="ri-code-line"></i>
                      </button>
                    </div>
                    <textarea
                      name="content"
                      value={currentBlog.content}
                      onChange={handleContentChange}
                      rows="12"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-800 font-mono"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Tips: Use **bold**, _italic_, ## heading, [link](url), and ```code blocks```
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowBlogModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors flex items-center gap-2"
                  >
                    <i className={modalMode === 'create' ? 'ri-save-line' : 'ri-edit-line'}></i>
                    {modalMode === 'create' ? 'Create Blog' : 'Update Blog'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}