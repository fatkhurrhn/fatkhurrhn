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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Manage Projects</h1>
          <Link 
            to="/admin" 
            className="text-indigo-600 hover:text-indigo-800"
          >
            Back to Dashboard
          </Link>
        </div>

        {/* Project Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {editId ? "Edit Project" : "Add New Project"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title*
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category*
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="project">Project</option>
                  <option value="template">Template</option>
                  <option value="components">Components</option>
                  <option value="design">Design</option>
                </select>
              </div>

              {/* <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div> */}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Thumbnail URL
                </label>
                <input
                  type="url"
                  name="thumbnail"
                  value={formData.thumbnail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border bg-white text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Demo URL
                </label>
                <input
                  type="url"
                  name="demoUrl"
                  value={formData.demoUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border bg-white text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Code URL
                </label>
                <input
                  type="url"
                  name="codeUrl"
                  value={formData.codeUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border bg-white text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="featured"
                  id="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-indigo-600 bg-white text-gray-800 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="featured" className="ml-2 block text-sm text-gray-700">
                  Featured Project
                </label>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              {editId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {isSubmitting ? "Saving..." : editId ? "Update Project" : "Add Project"}
              </button>
            </div>
          </form>
        </div>

        {/* Projects List */}
<div className="bg-white rounded-lg shadow-md overflow-hidden">
  <div className="px-6 py-4 border-b border-gray-200">
    <h2 className="text-xl font-semibold">All Projects</h2>
  </div>
  {loading ? (
    <div className="p-6 text-center">
      <p>Loading projects...</p>
    </div>
  ) : projects.length === 0 ? (
    <div className="p-6 text-center">
      <p>No projects found. Add your first project!</p>
    </div>
  ) : (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Thumbnail
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Created
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {projects
            .sort((a, b) => b.createdAt?.toMillis() - a.createdAt?.toMillis()) // Urutkan terbaru ke atas
            .map((project) => (
              <tr key={project.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  {project.thumbnail ? (
                    <div className="flex-shrink-0 h-10 w-10">
                      <img 
                        className="h-10 w-10 rounded-md object-cover" 
                        src={project.thumbnail} 
                        alt={project.title}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/100';
                        }}
                      />
                    </div>
                  ) : (
                    <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center">
                      <span className="text-gray-500 text-xs">No Image</span>
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{project.title}</div>
                  <div className="text-sm text-gray-500 line-clamp-1">{project.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${
                      project.category === 'project' ? 'bg-green-100 text-green-800' :
                      project.category === 'template' ? 'bg-blue-100 text-blue-800' :
                      project.category === 'components' ? 'bg-purple-100 text-purple-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                    {project.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {project.createdAt?.toDate().toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${project.featured ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-800'}`}>
                    {project.featured ? 'Featured' : 'Regular'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleEdit(project)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )}
</div>
      </div>
    </div>
  );
}