// src/components/CrudApp.js
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/data";

function CrudApp() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(API_URL);
    setItems(response.data);
  };

  return (
    <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4 text-center">CRUD with Image</h1>
      <table className="w-full border-collapse border border-zinc-700 text-white">
        <thead>
          <tr className="bg-zinc-900">
            <th className="border border-zinc-700 px-4 py-2">Name</th>
            <th className="border border-zinc-700 px-4 py-2">Image</th>
            <th className="border border-zinc-700 px-4 py-2">Link</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CrudApp;
