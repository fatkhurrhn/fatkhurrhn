import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp
} from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    thumbnail: "",
    demoUrl: "",
    codeUrl: "",
    category: "project",
    featured: false
  });
  const [editId, setEditId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "my-project"));
      const projectsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProjects(projectsData);
    } catch (error) {
      console.error("Error fetching projects: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const projectData = {
        ...formData,
        createdAt: editId ? formData.createdAt : serverTimestamp(),
        updatedAt: serverTimestamp()
      };

      if (editId) {
        await updateDoc(doc(db, "my-project", editId), projectData);
      } else {
        await addDoc(collection(db, "my-project"), projectData);
      }

      resetForm();
      fetchProjects();
    } catch (error) {
      console.error("Error saving project: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (project) => {
    setFormData({
      title: project.title,
      description: project.description,
      thumbnail: project.thumbnail || "",
      demoUrl: project.demoUrl || "",
      codeUrl: project.codeUrl || "",
      category: project.category || "project",
      featured: project.featured || false,
      createdAt: project.createdAt
    });
    setEditId(project.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteDoc(doc(db, "my-project", id));
        fetchProjects();
      } catch (error) {
        console.error("Error deleting project: ", error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      thumbnail: "",
      demoUrl: "",
      codeUrl: "",
      category: "project",
      featured: false
    });
    setEditId(null);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-full mx-auto">

          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col md:flex-row md:items-end md:gap-4 flex-wrap">
              {/* Title */}
              <div className="w-full md:w-[270px]">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title*
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100"
                />
              </div>

              {/* Category */}
              <div className="w-full md:w-[120px]">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category*
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100"
                >
                  <option value="project">Project</option>
                  <option value="template">Template</option>
                  <option value="components">Components</option>
                  <option value="design">Design</option>
                </select>
              </div>

              {/* Thumbnail */}
              <div className="w-full md:w-[170px]">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Thumbnail URL
                </label>
                <input
                  type="url"
                  name="thumbnail"
                  value={formData.thumbnail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border bg-white text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100"
                />
              </div>

              {/* Github */}
              <div className="w-full md:w-[170px]">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Github
                </label>
                <input
                  type="url"
                  name="codeUrl"
                  value={formData.codeUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border bg-white text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-4 md:mt-0 md:w-[200px] justify-end">
                {editId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 w-full"
                  >
                    Cancel
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 disabled:opacity-50 w-full"
                >
                  {isSubmitting ? "Saving..." : editId ? "Update Project" : "Add Project"}
                </button>
              </div>
            </div>
          </form>

          {/* Projects List */}
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold">All Projects</h2>
          </div>

          {loading ? (
            <div className=" text-center">
              <p>Loading projects...</p>
            </div>
          ) : projects.length === 0 ? (
            <div className="p-6 text-center">
              <p>No projects found. Add your first project!</p>
            </div>
          ) : (
            <div className=" pt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {projects
                .sort((a, b) => b.createdAt?.toMillis() - a.createdAt?.toMillis())
                .map((project) => (
                  <div
                    key={project.id}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition flex flex-col overflow-hidden"
                  >
                    {/* Thumbnail */}
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-40 object-cover" // full, no padding
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/300";
                        }}
                      />
                    ) : (
                      <div className="h-40 w-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">No Image</span>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-4 flex flex-col flex-1">
                      {/* Title */}
                      <h3 className="text-sm font-semibold text-gray-900 truncate">
                        {project.title}
                      </h3>

                      {/* Meta Info */}
                      <div className="mt-1 flex flex-wrap items-center gap-3 text-xs">
                        <span
                          className={`px-2 py-0.5 rounded-full font-medium 
          ${project.category === "project"
                              ? "bg-green-100 text-green-800"
                              : project.category === "template"
                                ? "bg-gray-100 text-gray-800"
                                : project.category === "components"
                                  ? "bg-purple-100 text-purple-800"
                                  : "bg-yellow-100 text-yellow-800"
                            }`}
                        >
                          {project.category}
                        </span>

                        <span className="text-gray-500">
                          {project.createdAt?.toDate().toLocaleDateString()}
                        </span>

                        <div className="ml-auto flex gap-2">
                          <button
                            onClick={() => handleEdit(project)}
                            className="p-1 rounded hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition"
                          >
                            <i className="ri-edit-line text-lg"></i>
                          </button>
                          <button
                            onClick={() => handleDelete(project.id)}
                            className="p-1 rounded hover:bg-red-50 text-red-600 hover:text-red-800 transition"
                          >
                            <i className="ri-delete-bin-line text-lg"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                ))}
            </div>
          )}

        </div>
      </div>
    </Layout>
  );
}