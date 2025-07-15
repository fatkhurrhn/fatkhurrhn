import React, { useState, useEffect } from "react";
import Navbar from "../../components/BottomNavbar";

export default function Page() {
    const [form, setForm] = useState({
        nama: "",
        no_tlpn: "",
        tanggal: "",
        waktu: "",
        yang_dipesan: "",
        jenis: "",
        harga: ""
    });

    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(true);
    const [showData, setShowData] = useState(false);
    const [dataCustomer, setDataCustomer] = useState([]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const date_time = `${form.tanggal} ${form.waktu}`;
        const newData = { ...form, date_time };
        delete newData.tanggal;
        delete newData.waktu;

        const url = "https://script.google.com/macros/s/AKfycbwqM1KQMJ3HjZmoqPFCbVgRDAgP-Zy9zkBa-SPjBAXaL9ZDs9BQsWdv6eCisvUwW_EZ/exec";

        try {
            await fetch(url, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newData)
            });

            alert("Data berhasil dikirim ke Google Sheets!");
            setForm({ nama: "", no_tlpn: "", tanggal: "", waktu: "", yang_dipesan: "", jenis: "", harga: "" });
            fetchData();
        } catch (error) {
            console.error("Error:", error);
            alert("Terjadi kesalahan saat mengirim data.");
        } finally {
            setLoading(false);
        }
    };

    const fetchData = async () => {
        const url = "https://script.google.com/macros/s/AKfycbwDHu_0Uuww4VL5VFessKwB8ZSufe4nPYmXSOY8hleUy_82NKG7rk3LVm_5Xi_rXF79/exec";
        try {
            const response = await fetch(url);
            const data = await response.json();
            setDataCustomer(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-[#18181b] transition-colors duration-300 relative">
            <Navbar />
            <section className="max-w-4xl mx-auto px-5 pt-20">
            <h1 className="text-2xl font-bold  text-center text-gray-300 mb-2">Recap Data Customer</h1>
                <hr className="mb-2 mt-3 border-0 h-[1px] bg-gradient-to-r from-[#252529] to-[#ffffff]/20 dark:from-[#252529] dark:to-[#ffffff]/10" />
                {/* breadcrumb */}
                <div className="flex justify-between items-center w-full pt-3 pb-3">
                    <h2 className="text-[15px] text-[#d4d4d4] font-sm">
                        <a href="/store">store</a><i class="ri-arrow-drop-right-line"></i>
                        <a href="">data customer</a>
                    </h2>
                </div>
                <div className="flex gap-3 mb-4">
    <button 
        className={`px-3 py-1 text-sm rounded-[5px] text-white border border-[#252529] transition-colors ${
            showForm ? 'bg-blue-600 hover:bg-blue-700' : 'bg-[#18181b] hover:bg-[#1f1f24]'
        }`} 
        onClick={() => { setShowForm(true); setShowData(false); }}
    >
        Isi Data Customer
    </button>
    <button 
        className={`px-3 py-1 text-sm rounded-[5px] text-white border border-[#252529] transition-colors ${
            showData ? 'bg-blue-600 hover:bg-blue-700' : 'bg-[#18181b] hover:bg-[#1f1f24]'
        }`} 
        onClick={() => { setShowForm(false); setShowData(true); }}
    >
        Lihat Data Customer
    </button>
</div>


                {showForm && (
                    <form onSubmit={handleSubmit} className="bg-[#18181b] border border-[#252529] p-6 rounded-lg shadow-md space-y-4">
                    <input type="text" name="nama" placeholder="Nama" value={form.nama} onChange={handleChange} className="w-full p-2 rounded border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] text-white" required />
                    <input type="tel" name="no_tlpn" placeholder="No. Telepon" value={form.no_tlpn} onChange={handleChange} className="w-full p-2 rounded border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] text-white" required />
                
                    {/* Grid untuk tanggal dan waktu */}
                    <div className="grid grid-cols-2 gap-4">
                        <input type="date" name="tanggal" value={form.tanggal} onChange={handleChange} className="w-full p-2 rounded border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] text-white" required />
                        <input type="time" name="waktu" value={form.waktu} onChange={handleChange} className="w-full p-2 rounded border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] text-white" required />
                    </div>
                
                    <input type="text" name="yang_dipesan" placeholder="Yang Dipesan" value={form.yang_dipesan} onChange={handleChange} className="w-full p-2 rounded border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] text-white" required />
                    <input type="text" name="jenis" placeholder="Jenis" value={form.jenis} onChange={handleChange} className="w-full p-2 rounded border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] text-white" required />
                    <input type="number" name="harga" placeholder="Harga" value={form.harga} onChange={handleChange} className="w-full p-2 rounded border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] text-white" required />
                
                    <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded w-full" disabled={loading}>
                        {loading ? "Mengirim..." : "Kirim"}
                    </button>
                </form>
                
                )}

{showData && (
    <div className="overflow-x-auto mt-4">
        <table className="w-full min-w-[1000px] border border-gray-700">
            <thead>
                <tr className="bg-gray-800 text-white">
                    <th className="p-2 border border-gray-600 whitespace-nowrap">Nama</th>
                    <th className="p-2 border border-gray-600 whitespace-nowrap">No. Telepon</th>
                    <th className="p-2 border border-gray-600 whitespace-nowrap">Tanggal</th>
                    <th className="p-2 border border-gray-600 whitespace-nowrap">Yang Dipesan</th>
                    <th className="p-2 border border-gray-600 whitespace-nowrap">Jenis</th>
                    <th className="p-2 border border-gray-600 whitespace-nowrap">Harga</th>
                </tr>
            </thead>
            <tbody>
                {dataCustomer.map((item, index) => {
                    const [date] = item.date_time.split(" ");
                    return (
                        <tr key={index} className="border-t border-gray-600 text-white text-left">
                            <td className="p-2 border border-gray-600 whitespace-nowrap">{item.nama}</td>
                            <td className="p-2 border border-gray-600 whitespace-nowrap">{item.no_tlpn}</td>
                            <td className="p-2 border border-gray-600 whitespace-nowrap">{date}</td>
                            <td className="p-2 border border-gray-600 whitespace-nowrap">{item.yang_dipesan}</td>
                            <td className="p-2 border border-gray-600 whitespace-nowrap">{item.jenis}</td>
                            <td className="p-2 border border-gray-600 whitespace-nowrap">{item.harga}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
)}

            </section>
        </div>
    );
}