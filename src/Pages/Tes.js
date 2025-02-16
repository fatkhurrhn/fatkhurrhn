import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/data";

function CrudApp() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(API_URL);
    setItems(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = { name, image, link };
    if (editId) {
      await axios.put(`${API_URL}/${editId}`, newItem);
    } else {
      await axios.post(API_URL, newItem);
    }
    setName("");
    setImage("");
    setLink("");
    setEditId(null);
    fetchData();
  };

  const handleEdit = (item) => {
    setName(item.name);
    setImage(item.image);
    setLink(item.link);
    setEditId(item.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchData();
  };

  return (
    <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4 text-center">CRUD with Image</h1>
      <form onSubmit={handleSubmit} className="mb-4 p-4 bg-zinc-800 rounded-lg shadow">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full mb-2 rounded bg-zinc-700 text-white"
          placeholder="Enter Name"
        />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border p-2 w-full mb-2 rounded bg-zinc-700 text-white"
          placeholder="Enter Image URL"
        />
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="border p-2 w-full mb-2 rounded bg-zinc-700 text-white"
          placeholder="Enter Link"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          {editId ? "Update" : "Add"}
        </button>
      </form>
      <table className="w-full border-collapse border border-zinc-700 text-white">
        <thead>
          <tr className="bg-zinc-900">
            <th className="border border-zinc-700 px-4 py-2">Name</th>
            <th className="border border-zinc-700 px-4 py-2">Image</th>
            <th className="border border-zinc-700 px-4 py-2">Link</th>
            <th className="border border-zinc-700 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-zinc-800">
              <td className="border border-zinc-700 px-4 py-2">{item.name}</td>
              <td className="border border-zinc-700 px-4 py-2">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              </td>
              <td className="border border-zinc-700 px-4 py-2">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  Visit
                </a>
              </td>
              <td className="border border-zinc-700 px-4 py-2 flex gap-2">
                <button onClick={() => handleEdit(item)} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
                <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CrudApp;
