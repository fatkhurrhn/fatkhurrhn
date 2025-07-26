import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import NavNavigate from '../components/frontdev/NavNavigate';
import Footer from '../components/frontdev/Footer';

export default function ShortlinkPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(!slug);

  // Handle redirection if this is a shortlink URL
  useEffect(() => {
    if (slug) {
      setIsCreating(false);
      redirectToOriginalUrl(slug);
    }
  }, [slug]);

  const redirectToOriginalUrl = async (slug) => {
    try {
      setLoading(true);
      const docRef = doc(db, 'shortlinks', slug);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        // Update click count
        await setDoc(docRef, {
          ...data,
          clicks: (data.clicks || 0) + 1
        }, { merge: true });
        window.location.href = data.originalUrl;
      } else {
        setError('Shortlink tidak ditemukan');
      }
    } catch (err) {
      setError('Error saat memproses shortlink');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!originalUrl) {
      setError('Harap masukkan URL');
      return;
    }

    try {
      setLoading(true);
      
      // Generate random 6-character slug
      const slug = generateRandomSlug(6);
      const shortUrl = `${window.location.origin}/shortlink/${slug}`;
      
      // Save to Firestore
      await setDoc(doc(db, 'shortlinks', slug), {
        originalUrl: originalUrl.startsWith('http') ? originalUrl : `https://${originalUrl}`,
        createdAt: new Date().toISOString(),
        clicks: 0,
      });
      
      setShortUrl(shortUrl);
    } catch (err) {
      setError('Error saat membuat shortlink');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const generateRandomSlug = (length) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    alert('Tersalin ke clipboard!');
  };

  if (!isCreating) {
    return (
      <div className="bg-gray-50 min-h-screen text-gray-800 transition-colors duration-300">
        <NavNavigate />
        <section className="max-w-4xl mx-auto px-5 pt-[95px] min-h-[60vh] flex items-center justify-center">
          {loading ? (
            <div className="text-center">
              <i className="ri-loader-4-line animate-spin text-4xl text-gray-500"></i>
              <p className="mt-4">Mengarahkan...</p>
            </div>
          ) : error ? (
            <div className="text-center">
              <i className="ri-error-warning-line text-4xl text-red-500"></i>
              <p className="mt-4 text-red-600">{error}</p>
              <button 
                onClick={() => navigate('/shortlink')}
                className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Buat Shortlink
              </button>
            </div>
          ) : null}
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 transition-colors duration-300">
      <NavNavigate />
      <section className="max-w-4xl mx-auto px-5 pt-[95px] min-h-[60vh]">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6">Buat Shortlink</h1>
          
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={originalUrl}
                onChange={(e) => setOriginalUrl(e.target.value)}
                placeholder="Masukkan URL panjang Anda"
                className="flex-1 px-4 py-2 bg-white text-gray-800 border rounded focus:outline-none focus:ring-2 focus:ring-gray-100"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:bg-gray-300"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Memproses...
                  </span>
                ) : 'Buat Pendek'}
              </button>
            </div>
            {error && <p className="mt-2 text-red-500">{error}</p>}
          </form>
          
          {shortUrl && (
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Shortlink Anda:</h2>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <a 
                  href={shortUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 break-all"
                >
                  {shortUrl}
                </a>
                <button
                  onClick={copyToClipboard}
                  className="px-4 py-1 bg-gray-200 rounded hover:bg-gray-300 flex items-center"
                >
                  <i className="ri-file-copy-line mr-2"></i> Salin
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Salin link di atas dan bagikan ke orang lain
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}