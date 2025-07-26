import React, { useState } from 'react';
import NavNavigate from '../../components/frontdev/NavNavigate';
import Footer from '../../components/frontdev/Footer';

export default function StorythurDanaStyle() {
  const [activeTab, setActiveTab] = useState('home');
  const [showContactModal, setShowContactModal] = useState(false);

  // Data konten
  const dailyReflections = [
    {
      id: 1,
      title: "Berhenti Membandingkan Perjalananmu",
      excerpt: "Setiap orang punya timeline berbeda. Fokus pada growth-mu sendiri.",
      date: "15 Jul 2023",
      likes: "1.2k"
    },
    {
      id: 2,
      title: "Seni Menerima Ketidakpastian",
      excerpt: "Hidup ini terlalu singkat untuk terus mengkhawatirkan apa yang belum terjadi.",
      date: "10 Jul 2023",
      likes: "2.4k"
    },
    {
      id: 3,
      title: "Self-Talk yang Membangun",
      excerpt: "Cara kamu berbicara pada diri sendiri menentukan kualitas hidupmu.",
      date: "5 Jul 2023",
      likes: "3.1k"
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Konten @storythur selalu bikin hari-hariku lebih bermakna.",
      author: "Rina, 22",
      role: "Mahasiswa"
    },
    {
      id: 2,
      quote: "Aku yang overthinker berat jadi lebih tenang baca refleksi harian dari Fathur.",
      author: "Dito, 27",
      role: "Freelancer"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Header/Navbar */}
      <NavNavigate />
      
      {/* Main Content */}
      <main className="pb-20 lg:pb-0">
        {/* Profile Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white pb-6">
          <div className="max-w-4xl mx-auto px-5 pt-6">
            <div className="flex items-center py-4">
              <div className="w-16 h-16 rounded-full border-2 border-white overflow-hidden mr-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                  alt="Fathur Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold">@storythur</h1>
                <p className="text-sm opacity-90">Daily Reflections & Peace</p>
                <p className="text-xs mt-1 flex items-center">
                  <i className="ri-user-follow-line mr-1"></i> 90.3k followers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="max-w-4xl mx-auto px-5 -mt-6">
          <div className="bg-white rounded-xl shadow-sm p-4 grid grid-cols-4 gap-4">
            <a 
              href="https://instagram.com/storythur" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center group"
            >
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-200 transition">
                <i className="ri-instagram-line text-2xl"></i>
              </div>
              <span className="text-xs font-medium">Instagram</span>
            </a>
            <button 
              onClick={() => setShowContactModal(true)}
              className="flex flex-col items-center justify-center group"
            >
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-200 transition">
                <i className="ri-mail-line text-2xl"></i>
              </div>
              <span className="text-xs font-medium">Contact</span>
            </button>
            <a 
              href="https://instagram.com/fatkhurrhn" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center group"
            >
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-200 transition">
                <i className="ri-lightbulb-flash-line text-2xl"></i>
              </div>
              <span className="text-xs font-medium">Quotes</span>
            </a>
            <button className="flex flex-col items-center justify-center group">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-200 transition">
                <i className="ri-more-line text-2xl"></i>
              </div>
              <span className="text-xs font-medium">More</span>
            </button>
          </div>
        </section>

        {/* Bio Section */}
        <section className="max-w-4xl mx-auto px-5 mt-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="font-bold text-lg mb-3">Tentang Saya</h2>
            <p className="text-gray-600 mb-4">
              Fathur | Kreator digital yang membantu generasi muda menemukan kedamaian pikiran 
              melalui konten refleksi harian dan motivasi.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-xs text-gray-500">Fokus Konten</p>
                <p className="font-medium">Self-growth & Spiritual clarity</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-xs text-gray-500">Tujuan</p>
                <p className="font-medium">Biar kamu nggak overthinking</p>
              </div>
            </div>
          </div>
        </section>

        {/* Daily Reflections */}
        <section className="max-w-4xl mx-auto px-5 mt-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-lg">Daily Reflections</h2>
            <a 
              href="https://instagram.com/storythur" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm font-medium"
            >
              Lihat Semua
            </a>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {dailyReflections.map((post) => (
              <a
                key={post.id}
                href={`https://instagram.com/storythur`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 border-b border-gray-100 hover:bg-gray-50 transition"
              >
                <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-book-read-line"></i>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{post.title}</h4>
                  <p className="text-sm text-gray-500">{post.excerpt}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">{post.date}</p>
                  <p className="text-xs text-gray-500 flex items-center justify-end">
                    <i className="ri-heart-line mr-1"></i> {post.likes}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-4xl mx-auto px-5 mt-6">
          <h2 className="font-bold text-lg mb-3">Apa Kata Mereka?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">
                    <i className="ri-user-line"></i>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-5 mt-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-6 text-white">
            <h3 className="font-bold text-lg mb-2">Mulai Perjalanan Self-Growth-mu</h3>
            <p className="text-sm mb-4">Ikuti @storythur untuk refleksi harian</p>
            <a
              href="https://instagram.com/storythur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Follow Sekarang
            </a>
          </div>
        </section>
      </main>

      {/* Bottom Navigation (Mobile Only) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-20">
        <div className="flex justify-around py-3">
          <button 
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            <i className={`ri-home-4-${activeTab === 'home' ? 'fill' : 'line'} text-xl`}></i>
            <span className="text-xs mt-1">Home</span>
          </button>
          <button 
            onClick={() => setActiveTab('content')}
            className={`flex flex-col items-center ${activeTab === 'content' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            <i className={`ri-book-mark-${activeTab === 'content' ? 'fill' : 'line'} text-xl`}></i>
            <span className="text-xs mt-1">Content</span>
          </button>
          <button 
            onClick={() => setActiveTab('about')}
            className={`flex flex-col items-center ${activeTab === 'about' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            <i className={`ri-user-3-${activeTab === 'about' ? 'fill' : 'line'} text-xl`}></i>
            <span className="text-xs mt-1">About</span>
          </button>
          <button 
            onClick={() => setActiveTab('contact')}
            className={`flex flex-col items-center ${activeTab === 'contact' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            <i className={`ri-customer-service-${activeTab === 'contact' ? 'fill' : 'line'} text-xl`}></i>
            <span className="text-xs mt-1">Contact</span>
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Hubungi Saya</h3>
              <button 
                onClick={() => setShowContactModal(false)} 
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="space-y-4">
              <a
                href="https://wa.me/6281234567890?text=Hai%20Fathur,%20aku%20penggemar%20kontenmu!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                  <i className="ri-whatsapp-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium">WhatsApp</h4>
                  <p className="text-xs text-gray-500">Chat langsung dengan saya</p>
                </div>
              </a>
              
              <a
                href="https://instagram.com/storythur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3">
                  <i className="ri-instagram-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium">Instagram</h4>
                  <p className="text-xs text-gray-500">DM @storythur</p>
                </div>
              </a>
              
              <a
                href="mailto:fathur@storythur.com"
                className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                  <i className="ri-mail-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-xs text-gray-500">fathur@storythur.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}