import { useState } from "react";

function Sample() {
  const [formData, setFormData] = useState({
    nama: "",
    asal: "",
    email: "",
    motivasi: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Nama: ${formData.nama}%0AAsal: ${formData.asal}%0AEmail: ${formData.email}%0AMotivasi: ${formData.motivasi}`;
    const whatsappUrl = `https://wa.me/6282285512813?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="relative bg-zinc-900 text-zinc-400 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md px-6 py-8 bg-zinc-800 rounded-2xl shadow-2xl border border-zinc-700">
        <h2 className="text-2xl text-center text-zinc-200 mb-6 font-semibold">Formulir Challenge</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-zinc-300 mb-1">Nama Panggilan</label>
            <input 
              type="text" 
              name="nama" 
              value={formData.nama} 
              onChange={handleChange} 
              className="w-full px-4 py-2 bg-zinc-700 text-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required 
            />
          </div>
          <div>
            <label className="block text-zinc-300 mb-1">Asal</label>
            <input 
              type="text" 
              name="asal" 
              value={formData.asal} 
              onChange={handleChange} 
              className="w-full px-4 py-2 bg-zinc-700 text-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required 
            />
          </div>
          <div>
            <label className="block text-zinc-300 mb-1">Email Aktif</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full px-4 py-2 bg-zinc-700 text-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required 
            />
          </div>
          <div>
            <label className="block text-zinc-300 mb-1">Motivasi</label>
            <textarea 
              name="motivasi" 
              value={formData.motivasi} 
              onChange={handleChange} 
              className="w-full px-4 py-2 bg-zinc-700 text-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              rows="4" 
              required 
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-zinc-600 text-zinc-300 py-2 rounded-lg hover:bg-zinc-500 transition duration-300 shadow-md"
          >
            Kirim ke WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sample;
