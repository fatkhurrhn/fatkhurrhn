import React, { useState } from "react";
import NavCreator from "../../../components/creator/NavCreator";

// const pricelist
const pricelist = [
    {
        category: "Canva",
        options: [
            { duration: "7 hari", price: "3k" },
            { duration: "1 bulan", price: "6k" },
            { duration: "3 bulan", price: "9k" },
            { duration: "5 bulan", price: "12k" },
            { duration: "6 bulan", price: "15k" },
            { duration: "1 tahun", price: "25k" }
        ]
    }
];

export default function StoreNetflix() {
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showQRIS, setShowQRIS] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    device: ""
  });

  const handleSelect = (category, duration, price) => {
    setSelected({ category, duration, price });
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
    const message = `*Detail Pesanan Netflix*\n\n` +
      `Paket: ${selected.category} - ${selected.duration}\n` +
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
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Netflix Pricelist</h1>
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
                  onClick={() => handleSelect(item.category, option.duration, option.price)}
                  className={`p-3 rounded-md border bg-green text-gray-800 border-blue-300 text-black transition ${selected?.category === item.category && selected?.duration === option.duration ? 'bg-blue-900 text-white' : ''}`}
                >
                  {option.duration} → Rp {option.price}
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
                <p>Netflix {selected.category} {selected.duration}</p>
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