import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/data";

function CrudApp() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
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
    if (editId) {
      await axios.put(`${API_URL}/${editId}`, { text });
    } else {
      await axios.post(API_URL, { text });
    }
    setText("");
    setEditId(null);
    fetchData();
  };

  const handleEdit = (item) => {
    setText(item.text);
    setEditId(item.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchData();
  };

  return (
    <div className="p-5 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-3">CRUD with .txt Storage</h1>
      <form onSubmit={handleSubmit} className="mb-3">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 w-full mb-2"
          placeholder="Enter text"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          {editId ? "Update" : "Add"}
        </button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="flex justify-between mb-2">
            <span>{item.text}</span>
            <div>
              <button onClick={() => handleEdit(item)} className="bg-yellow-500 text-white px-2 py-1 mr-2">Edit</button>
              <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white px-2 py-1">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudApp;
