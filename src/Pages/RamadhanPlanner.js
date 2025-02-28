import { useState } from "react";

function Sample() {
  const [formData, setFormData] = useState({
    nama: "",
    asal: "",
    email: "",
    motivasi: "",
  });
  const [isIntroPopupOpen, setIsIntroPopupOpen] = useState(true);
  const [isGuidePopupOpen, setIsGuidePopupOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Nama: ${formData.nama}%0AAsal: ${formData.asal}%0AEmail: ${formData.email}%0AMotivasi: ${formData.motivasi}`;
    const whatsappUrl = `https://wa.me/6285512813?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="relative bg-zinc-900 text-zinc-400 min-h-screen flex items-center justify-center p-6">
      {isIntroPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-zinc-800 max-w-md w-full p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold text-zinc-200 mb-4">Assalamualaikum 👋</h2>
            <p className="text-zinc-300 mb-4">Pastiin kamu bisa baca dan pahami panduan berikut ini yaa</p>
            <button
              onClick={() => {
                setIsIntroPopupOpen(false);
                setIsGuidePopupOpen(true);
              }}
              className="w-full bg-green-600 text-zinc-300 py-2 rounded-lg hover:bg-green-500 transition duration-300 shadow-md"
            >
              Oke
            </button>
          </div>
        </div>
      )}

      {isGuidePopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-zinc-800 max-w-lg w-full p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-zinc-200 mb-4 text-center">niii bacaa! 😁</h2>
            {/* <p className="text-zinc-300 mb-4 text-justify">
              Berikut ini adalah form untuk mendapatkan Challenge Ramadhan Planner. Setelah mengisi data,
              form akan otomatis terkirim via WhatsApp, dan kamu akan menerima link Challenge
              Ramadhan Planner nya.
            </p> */}
            <ul className="list-none text-zinc-300 space-y-2 mb-4 text-justify">
                {/* <li>Tambahan:</li> */}
              <li>1. Pastiin dulu kamu tau yang namanya Google Spreadsheets wkwk, kalo gatau sih waahh parah, googling dulu yaa :v</li>
              <li>2. Jika kamu mengaksesnya pake HP, kamu tuh wajib punya aplikasi yang namanya Google Spreadsheets, inget (WAJIB), tenang... ini tu udah tersedia di Play Store maupun App Store tinggal download aja</li>
              <li>3. Setelah download, pastiin itu login pake email, dan email itu yang harus kamu daftarkan di form Ramadhan Planner setelah ini.</li>
              <li>4. Tapi kalo kamu aksesnya via laptop, cukup buka dengan email yang kamu daftarkan di form ramadhan planner ini.</li>
            </ul>
            <div className="flex items-center space-x-2 mb-4">
              <input
                type="checkbox"
                id="agree"
                className="w-5 h-5 text-blue-600 bg-gray-700 rounded border-gray-600 focus:ring-2 focus:ring-gray-500"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <label htmlFor="agree" className="text-zinc-300 cursor-pointer">Oke, aku paham</label>
            </div>
            <button
              onClick={() => isChecked && setIsGuidePopupOpen(false)}
              disabled={!isChecked}
              className={`w-full py-2 rounded-lg text-zinc-300 transition duration-300 shadow-md ${isChecked ? "bg-green-600 hover:bg-green-500" : "bg-zinc-700 cursor-not-allowed"}`}
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      <div className="w-full max-w-md px-6 py-8 bg-zinc-800 rounded-2xl shadow-2xl border border-zinc-700">
        <h2 className="text-2xl text-center text-zinc-200 mb-6 font-semibold">Formulir Ramadhan</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-zinc-300 mb-1">Nama</label>
            <input 
              type="text" 
              name="nama" 
              value={formData.nama} 
              onChange={handleChange} 
              className="w-full px-4 py-2 bg-zinc-700 text-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full px-4 py-2 bg-zinc-700 text-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required 
            />
          </div>
          <div>
            <label className="block text-zinc-300 mb-1">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full px-4 py-2 bg-zinc-700 text-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required 
            />
          </div>
          <div>
            <label className="block text-zinc-300 mb-1">Motivasi Ramadhan</label>
            <textarea 
              name="motivasi" 
              value={formData.motivasi} 
              onChange={handleChange} 
              className="w-full px-4 py-2 bg-zinc-700 text-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4" 
              required 
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-green-600 text-zinc-300 py-2 rounded-lg hover:bg-green-500 transition duration-300 shadow-md"
          >
            Kirim ke WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sample;
