import React, { useState } from 'react';
import NavNavigate from '../../components/frontdev/NavNavigate';
import Footer from '../../components/frontdev/Footer';

export default function WhatsAppTextConverter() {
  const [inputText, setInputText] = useState('');
  const [encodedText, setEncodedText] = useState('');
  const [decodedText, setDecodedText] = useState('');
  const [activeTab, setActiveTab] = useState('encode');

  const handleEncode = () => {
    const encoded = encodeURIComponent(inputText)
      .replace(/'/g, "%27")
      .replace(/"/g, "%22");
    setEncodedText(encoded);
    setActiveTab('encode');
  };

  const handleDecode = () => {
    try {
      const decoded = decodeURIComponent(inputText.replace(/\+/g, " "));
      setDecodedText(decoded);
      setActiveTab('decode');
    } catch {
      setDecodedText('Error: Invalid encoded text');
    }
  };

  const copyToClipboard = (text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    // Bisa ditambahkan notifikasi/toast
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 transition-colors duration-300">
      <NavNavigate />
      <section className="max-w-4xl mx-auto px-5 pt-[15px] pb-10">
        <h1 className="text-2xl font-bold mb-2">WhatsApp Text Converter</h1>
        <p className="text-gray-600 mb-6">Encode/Decode teks untuk link WhatsApp (spasi menjadi %20)</p>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-200">
          <label htmlFor="input-text" className="block text-sm font-medium text-gray-700 mb-2">
            Input Text
          </label>
          <textarea
            id="input-text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent bg-white text-gray-800"
            rows={4}
            placeholder="Masukkan teks di sini..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={handleEncode}
              className={`px-4 py-2 rounded-md flex items-center ${activeTab === 'encode' ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              <i className="ri-lock-2-line mr-2"></i> Encode
            </button>
            <button
              onClick={handleDecode}
              className={`px-4 py-2 rounded-md flex items-center ${activeTab === 'decode' ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              <i className="ri-lock-unlock-line mr-2"></i> Decode
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="output-text" className="block text-sm font-medium text-gray-700">
              {activeTab === 'encode' ? 'Encoded Text' : 'Decoded Text'}
            </label>
            {((activeTab === 'encode' && encodedText) || (activeTab === 'decode' && decodedText)) && (
              <button
                onClick={() => copyToClipboard(activeTab === 'encode' ? encodedText : decodedText)}
                className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
              >
                <i className="ri-clipboard-line mr-1"></i> Copy
              </button>
            )}
          </div>
          
          <div className="relative">
            <textarea
              id="output-text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent bg-white text-gray-800"
              rows={4}
              readOnly
              value={activeTab === 'encode' ? encodedText : decodedText}
              placeholder={activeTab === 'encode' 
                ? 'Hasil encode akan muncul di sini...' 
                : 'Hasil decode akan muncul di sini...'}
            />
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-600">
          <h3 className="font-bold text-gray-800 mb-2">Cara Penggunaan:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-medium">Encode</span>: Mengubah teks biasa menjadi format URL (spasi menjadi %20)</li>
            <li><span className="font-medium">Decode</span>: Mengembalikan teks ter-encode ke format normal</li>
            <li>Berguna untuk membuat link WhatsApp dengan teks yang sudah diisi</li>
            <li>Contoh: <code className="bg-gray-200 px-1 rounded">https://wa.me/?text=Halo%20dunia</code></li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}