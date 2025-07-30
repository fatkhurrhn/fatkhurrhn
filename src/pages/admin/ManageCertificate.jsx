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
import Modal from 'react-modal';
import Layout from "../../components/Layout";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default function AdminCertificates() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    imageUrl: "",
    title: "",
    description: "",
    courseUrl: "",
    category: "certificate"
  });
  const [editId, setEditId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [certificateToDelete, setCertificateToDelete] = useState(null);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "my-certificate"));
      const certificatesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      // Sort by createdAt in descending order (newest first)
      certificatesData.sort((a, b) => {
        const aTime = a.createdAt?.seconds || 0;
        const bTime = b.createdAt?.seconds || 0;
        return bTime - aTime;
      });
      setCertificates(certificatesData);
    } catch (error) {
      console.error("Error fetching certificates: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const certificateData = {
        ...formData,
        createdAt: editId ? formData.createdAt : serverTimestamp(),
        updatedAt: serverTimestamp()
      };

      if (editId) {
        await updateDoc(doc(db, "my-certificate", editId), certificateData);
      } else {
        await addDoc(collection(db, "my-certificate"), certificateData);
      }

      resetForm();
      fetchCertificates();
      closeModal();
    } catch (error) {
      console.error("Error saving certificate: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (certificate) => {
    setFormData({
      imageUrl: certificate.imageUrl,
      title: certificate.title,
      description: certificate.description,
      courseUrl: certificate.courseUrl,
      category: certificate.category || "certificate",
      createdAt: certificate.createdAt
    });
    setEditId(certificate.id);
    openModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const openDeleteModal = (id) => {
    setCertificateToDelete(id);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setCertificateToDelete(null);
  };

  const handleDelete = async () => {
    if (certificateToDelete) {
      try {
        await deleteDoc(doc(db, "my-certificate", certificateToDelete));
        fetchCertificates();
      } catch (error) {
        console.error("Error deleting certificate: ", error);
      } finally {
        closeDeleteModal();
      }
    }
  };

  const resetForm = () => {
    setFormData({
      imageUrl: "",
      title: "",
      description: "",
      courseUrl: "",
      category: "certificate"
    });
    setEditId(null);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-full mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Manage Certificates</h1>
            <div className="flex gap-4">
              <button
                onClick={openModal}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Add New Certificate
              </button>
              <Link
                to="/admin"
                className="px-4 py-2 text-indigo-600 hover:text-indigo-800 border border-indigo-600 rounded-md"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>

          {/* Certificates List */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold">All Certificates</h2>
            </div>
            {loading ? (
              <div className="p-6 text-center">
                <p>Loading certificates...</p>
              </div>
            ) : certificates.length === 0 ? (
              <div className="p-6 text-center">
                <p>No certificates found. Add your first certificate!</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Preview
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Earned
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {certificates.map((certificate) => (
                      <tr key={certificate.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex-shrink-0 h-16 w-16">
                            <img
                              className="h-16 w-16 object-contain rounded-md"
                              src={certificate.imageUrl}
                              alt={certificate.title}
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/100';
                              }}
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{certificate.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {certificate.category || "certificate"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => handleEdit(certificate)}
                            className="text-indigo-600 hover:text-indigo-900 mr-4"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => openDeleteModal(certificate.id)}
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

        {/* Add/Edit Modal */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel={editId ? "Edit Certificate" : "Add Certificate"}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {editId ? "Edit Certificate" : "Add New Certificate"}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
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
                    placeholder="Earned..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Certificate Image URL*
                  </label>
                  <input
                    type="url"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="https://example.com/certificate.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Course URL*
                  </label>
                  <input
                    type="url"
                    name="courseUrl"
                    value={formData.courseUrl}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="https://example.com/course"
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
                    <option value="certificate">Certificate</option>
                    <option value="badge">Badge</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 border bg-white text-gray-800 border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  {isSubmitting ? "Saving..." : editId ? "Update Certificate" : "Add Certificate"}
                </button>
              </div>
            </form>
          </div>
        </Modal>

        {/* Delete Confirmation Modal */}
        <Modal
          isOpen={deleteModalOpen}
          onRequestClose={closeDeleteModal}
          contentLabel="Delete Confirmation"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-red-600">Delete Certificate</h2>
              <button
                onClick={closeDeleteModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="mb-6 text-gray-800">Are you sure you want to delete this certificate? This action cannot be undone.</p>

            <div className="flex justify-end gap-3">
              <button
                onClick={closeDeleteModal}
                className="px-4 py-2 border bg-white text-gray-800 border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        </Modal>

        {/* Add some CSS for the modal */}
        <style jsx global>{`
        .modal {
          position: fixed;
          top: 50%;
          left: 50%;
          right: auto;
          bottom: auto;
          margin-right: -50%;
          transform: translate(-50%, -50%);
          width: 90%;
          max-width: 500px;
          outline: none;
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1000;
        }
      `}</style>
      </div>
    </Layout>
  );
}