import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../../../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import NavNavigate from '../../../components/frontdev/NavNavigate';
import Footer from '../../../components/frontdev/Footer';

export default function ShortlinkPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(!slug);
  const [showModal, setShowModal] = useState(false);

  // Handle redirection
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
        await setDoc(docRef, {
          ...data,
          clicks: (data.clicks || 0) + 1
        }, { merge: true });
        window.location.href = data.originalUrl;
      } else {
        setError('Shortlink not found');
      }
    } catch (err) {
      setError('Error processing shortlink');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!originalUrl) {
      setError('Please enter a URL');
      return;
    }

    try {
      setLoading(true);

      const slug = generateRandomSlug(6);
      const shortUrl = `${window.location.origin}/${slug}`;

      await setDoc(doc(db, 'shortlinks', slug), {
        originalUrl: originalUrl.startsWith('http') ? originalUrl : `https://${originalUrl}`,
        createdAt: new Date().toISOString(),
        clicks: 0,
      });

      setShortUrl(shortUrl);
    } catch (err) {
      setError('Error creating shortlink');
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
    setShowModal(true);
    setTimeout(() => setShowModal(false), 1000);
  };

  if (!isCreating) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-gray-50 min-h-screen text-gray-800 transition-colors duration-300">
        <NavNavigate />
        <section className="max-w-4xl mx-auto px-5 pt-[95px] min-h-[60vh] flex items-center justify-center">
          {loading ? (
            <div className="text-center">
              <div className="inline-flex items-center">
                <i className="ri-loader-4-line animate-spin text-4xl text-gray-500"></i>
              </div>
              <p className="mt-4 text-gray-600">Redirecting to destination...</p>
            </div>
          ) : error ? (
            <div className="text-center p-6 bg-white rounded-xl shadow-sm max-w-md w-full">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <i className="ri-error-warning-line text-3xl text-red-500"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Oops!</h3>
              <p className="text-gray-600 mb-6">{error}</p>
              <button
                onClick={() => navigate('/')}
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors shadow-md hover:shadow-lg"
              >
                Create New Shortlink
              </button>
            </div>
          ) : null}
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-50 min-h-screen text-gray-800 transition-colors duration-300 relative">
      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="animate-fade-in-up animate-fade-out-down bg-white p-4 rounded-lg shadow-xl border border-gray-200 flex items-center">
            <i className="ri-checkbox-circle-fill text-2xl text-gray-500 mr-2"></i>
            <span className="font-medium">Link copied successfully!</span>
          </div>
        </div>
      )}

      <NavNavigate />
      <section className="max-w-4xl mx-auto px-5 pt-[95px] pb-10">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Shorten Your Link</h1>
            <p className="text-gray-600">Convert long URLs into short, easy-to-share links</p>
          </div>

          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={originalUrl}
                  onChange={(e) => setOriginalUrl(e.target.value)}
                  placeholder="https://example.com/very-long-url"
                  className="w-full px-5 py-3 border bg-white text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent transition-all"
                />
                {originalUrl && (
                  <button
                    type="button"
                    onClick={() => setOriginalUrl('')}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    <i className="ri-close-line"></i>
                  </button>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 disabled:bg-gray-300 transition-colors shadow-md hover:shadow-lg flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Processing...
                  </>
                ) : (
                  <>
                    <i className="ri-links-line mr-2"></i>
                    Shorten
                  </>
                )}
              </button>
            </div>
            {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
          </form>

          {shortUrl && (
            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100 transition-all animate-fade-in">
              <h2 className="text-lg font-semibold mb-3 text-gray-700">Your Shortlink:</h2>
              <div className="flex flex-col md:flex-row gap-3 items-stretch">
                <div className="flex-1 bg-white p-3 rounded-lg border border-gray-200 overflow-x-auto">
                  <a
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-600 break-all"
                  >
                    {shortUrl}
                  </a>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="px-5 py-3 bg-white text-gray-500 rounded-lg hover:bg-gray-50 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-md transition-all"
                >
                  <i className="ri-file-copy-line mr-2"></i> Copy
                </button>
                <button
                  onClick={() => window.open(shortUrl, '_blank')}
                  className="px-5 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                >
                  <i className="ri-external-link-line mr-2"></i> Open
                </button>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                <i className="ri-information-line mr-1"></i> Copy the link above and share it with others
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />

      {/* Animation styles */}
      <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out;
        }
        .animate-fade-out-down {
          animation: fadeOutDown 0.3s ease-out 0.7s forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOutDown {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(10px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}