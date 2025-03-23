import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Page() {
    const [form, setForm] = useState({
        nama: "",
        no_tlpn: "",
        date_time: "",
        yang_dipesan: "",
        jenis: "",
        harga: ""
    });

    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(true);
    const [showData, setShowData] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const url = "https://script.google.com/macros/s/AKfycbx2MzcmJG7J-NJnLZyD2FuaTI_XBlcP-7JHwBWKRCgIpbBGnOPNaetQ7bAJ6nJEKoXK/exec";

        try {
            const response = await fetch(url, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            alert("Data berhasil dikirim ke Google Sheets!");
            setForm({
                nama: "",
                no_tlpn: "",
                date_time: "",
                yang_dipesan: "",
                jenis: "",
                harga: ""
            });
        } catch (error) {
            console.error("Error:", error);
            alert("Terjadi kesalahan saat mengirim data.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-[#18181b] transition-colors duration-300 relative">
            <Navbar />
            <section className="max-w-4xl mx-auto px-5 pt-20">
                <div className="flex gap-4 mb-6">
                    <button 
                        className={`px-4 py-2 rounded text-white ${showForm ? 'bg-blue-600' : 'bg-gray-600'}`} 
                        onClick={() => { setShowForm(true); setShowData(false); }}
                    >
                        Isi Data Customer
                    </button>
                    <button 
                        className={`px-4 py-2 rounded text-white ${showData ? 'bg-blue-600' : 'bg-gray-600'}`} 
                        onClick={() => { setShowForm(false); setShowData(true); }}
                    >
                        Lihat Data Customer
                    </button>
                </div>

                {showForm && (
                    <form onSubmit={handleSubmit} className="bg-[#18181b] border border-[#252529] p-6 rounded-lg shadow-md space-y-4">
                        <input type="text" name="nama" placeholder="Nama" value={form.nama} onChange={handleChange} className="w-full p-2 rounded border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] text-white" required />
                        <input type="tel" name="no_tlpn" placeholder="No. Telepon" value={form.no_tlpn} onChange={handleChange} className="w-full p-2 rounded border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] text-white" required />
                        <input type="datetime-local" name="date_time" value={form.date_time} onChange={handleChange} className="w-full p-2 rounded border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] text-white" required />
                        <input type="text" name="yang_dipesan" placeholder="Yang Dipesan" value={form.yang_dipesan} onChange={handleChange} className="w-full p-2 rounded border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] text-white" required />
                        <input type="text" name="jenis" placeholder="Jenis" value={form.jenis} onChange={handleChange} className="w-full p-2 rounded border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] text-white" required />
                        <input type="number" name="harga" placeholder="Harga" value={form.harga} onChange={handleChange} className="w-full p-2 rounded border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] text-white" required />
                        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded w-full" disabled={loading}>
                            {loading ? "Mengirim..." : "Kirim"}
                        </button>
                    </form>
                )}

                {showData && (
                    <h3 className="text-white text-lg">Disini halaman data customer</h3>
                )}
            </section>
            <Footer />
        </div>
    );
}
