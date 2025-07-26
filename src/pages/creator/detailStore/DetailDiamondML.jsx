import React, { useState } from "react";
import NavCreator from "../../../components/creator/NavNavigate";

// const pricelist
const pricelist = [
    {
        category: "👑Quest Misi Top Up Event",
        options: [
            { Jumlah: "56💎", price: "17k" },
            { Jumlah: "110💎", price: "32k" },
            { Jumlah: "277💎", price: "78k" },
            { Jumlah: "568 💎", price: "152k" },
            { Jumlah: "1136 💎", price: "303k" },
        ]
    },
    {
        category: "✨Weekly Diamond Pass", options: [
            { Jumlah: "1x WDP", price: "29k" },
            { Jumlah: "2x WDP", price: "57k" },
            { Jumlah: "3x WDP", price: "84k" },
            { Jumlah: "4x WDP", price: "113k" },
            { Jumlah: "5x WDP", price: "139k" },
        ]
    },
    {
        category: "💎Top Up Instant",
        options: [
            { Jumlah: "5💎", price: "3k" },
            { Jumlah: "10💎", price: "4k" },
            { Jumlah: "12💎", price: "5k" },
            { Jumlah: "22💎", price: "7k" },
            { Jumlah: "28💎", price: "9k" },
            { Jumlah: "30💎", price: "9k" },
            { Jumlah: "46💎", price: "14k" },
            { Jumlah: "54💎", price: "16k" },
            { Jumlah: "60💎", price: "18k" },
            { Jumlah: "74💎", price: "21k" },
            { Jumlah: "100💎", price: "29k" },
            { Jumlah: "129💎", price: "36k" },
            { Jumlah: "148💎", price: "42k" },
            { Jumlah: "170💎", price: "48k" },
            { Jumlah: "176💎", price: "51k" },
            { Jumlah: "222💎", price: "63k" },
            { Jumlah: "240💎", price: "67k" },
            { Jumlah: "241💎", price: "68k" },
            { Jumlah: "284💎", price: "79k" },
            { Jumlah: "296💎", price: "82k" },
            { Jumlah: "305💎", price: "86k" },
            { Jumlah: "370💎", price: "103k" },
            { Jumlah: "384💎", price: "107k" },
            { Jumlah: "408💎", price: "111k" },
            { Jumlah: "406💎", price: "113k" },
            { Jumlah: "518💎", price: "143k" },
            { Jumlah: "554💎", price: "153k" },
            { Jumlah: "716💎", price: "190k" },
            { Jumlah: "750💎", price: "199k" },
            { Jumlah: "790💎", price: "210k" },
            { Jumlah: "875💎", price: "229k" },
            { Jumlah: "874💎", price: "233k" },
            { Jumlah: "966💎", price: "252k" },
            { Jumlah: "1048💎", price: "280k" },
            { Jumlah: "1067💎", price: "285k" },
            { Jumlah: "1358💎", price: "358k" },
            { Jumlah: "1506💎", price: "398k" },
            { Jumlah: "1704💎", price: "445k" },
            { Jumlah: "2010💎", price: "494k" },
            { Jumlah: "2380💎", price: "594k" },
            { Jumlah: "2578💎", price: "642k" },
            { Jumlah: "2855💎", price: "716k" },
            { Jumlah: "3146💎", price: "789k" },
            { Jumlah: "3423💎", price: "864k" },
            { Jumlah: "3738💎", price: "949k" },
            { Jumlah: "4020💎", price: "985k" },
            { Jumlah: "4830💎", price: "1.182k" },
            { Jumlah: "4856💎", price: "1.189k" },
            { Jumlah: "4958💎", price: "1.232k" },
            { Jumlah: "5052💎", price: "1.241k" }
        ]
    }
];

export default function StoreMl() {
    const [selected, setSelected] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showQRIS, setShowQRIS] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        whatsapp: "",
        device: ""
    });

    const handleSelect = (category, Jumlah, price) => {
        setSelected({ category, Jumlah, price });
    };

    const handleCheckout = () => {
        if (!selected) return;
        setShowModal(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.whatsapp || !formData.device) {
            alert("Harap isi semua field!");
            return;
        }

        const phone = "6282285512813";
        const message = `*Detail Pesanan Diamond ML*\n\n` +
            `Paket: ${selected.category} - ${selected.Jumlah}\n` +
            `Harga: Rp ${selected.price}\n\n` +
            `*Data Pemesan*\n` +
            `Nama: ${formData.name}\n` +
            `No WhatsApp: ${formData.whatsapp}\n` +
            `Saya sudah memilih paket di atas dan ingin memesan. *Berikut dibawah bukti pembayarannya*`;

        window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    };

    const toggleQRIS = () => {
        setShowQRIS(!showQRIS);
    };

    return (
        <div className="font-sans bg-white min-h-screen">
            <NavCreator />
            <main className="max-w-4xl mx-auto px-4 py-2 pb-[110px]">

                <div className="text-center">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Diamond Pricelist</h1>
                    <p className='pb-2 text-gray-800'>murah kok, di gasskeeeunnlah skuyy</p>
                    <hr className="border-gray-200" />
                </div>

                {pricelist.map((item, index) => (
                    <div key={index} className="mb-6">
                        <h2 className="text-lg text-black font-semibold mb-2">{item.category}</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
                            {item.options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleSelect(item.category, option.Jumlah, option.price)}
                                    className={`p-3 rounded-md border bg-green text-gray-800 border-blue-300 text-black transition ${selected?.category === item.category && selected?.Jumlah === option.Jumlah ? 'bg-blue-900 text-white' : ''}`}
                                >
                                    {option.Jumlah} → Rp {option.price}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}

                {selected && (
                    <button
                        onClick={handleCheckout}
                        className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-black text-white px-8 py-2 rounded-[6px] shadow-lg hover:bg-green-600 transition-colors flex items-center"
                    >
                        <i className="ri-shopping-cart-2-line mr-2"></i> Checkout
                    </button>
                )}

                {/* Modal Form */}
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-lg p-5 w-full max-w-md">
                            <div className="mb-4 p-3 bg-gray-100 rounded text-gray-800">
                                <p className="font-semibold">Detail Pesanan:</p>
                                <p>{selected.category} {selected.Jumlah}</p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border bg-white text-gray-800 border-gray-300 rounded"
                                        placeholder="fatkhurrhn"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="tel"
                                        name="whatsapp"
                                        value={formData.whatsapp}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border bg-white text-gray-800 border-gray-300 rounded"
                                        placeholder="no whatsapp '628123456789'"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <button
                                        type="button"
                                        onClick={toggleQRIS}
                                        className="w-full bg-blue-600 text-white py-2 rounded mb-2"
                                    >
                                        {showQRIS ? 'Sembunyikan QRIS' : 'Tampilkan QRIS'}
                                    </button>

                                    {showQRIS && (
                                        <div className="text-center">
                                            <p className="mb-2 text-sm text-gray-600">
                                                Harap melakukan pembayaran via QRIS sebesar:
                                                <span className="font-bold"> Rp {selected.price} </span>
                                            </p>
                                            <div className="bg-gray-200 p-4 rounded mb-2">
                                                {/* Placeholder for QRIS image - replace with your actual QRIS image */}
                                                <div className="bg-white p-2 mx-auto max-w-[200px]">
                                                    {/* <p className="text-center py-10">[QRIS IMAGE]</p> */}
                                                    <img src="https://res.cloudinary.com/dbssvz2pe/image/upload/v1752581882/assets-gallery/uouve3sujoqjgiywrw3hrks78.jpg" alt="" />
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                Setelah klik Order, jangan lupa kirim bukti pembayaran ke nomor yang tersedia.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        className="flex-1 bg-gray-300 text-gray-800 py-2 rounded"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 bg-green-600 text-white py-2 rounded"
                                    >
                                        Order
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}