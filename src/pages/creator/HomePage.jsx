import React, { useState } from 'react';
import NavCreator from '../../components/creator/NavCreator';
import Footer from '../../components/creator/Footer';

export default function StorythurMinimalist() {
  const [activeTab, setActiveTab] = useState('home');
  const [showContactModal, setShowContactModal] = useState(false);

  // Data konten
  const contentHighlights = [
    {
      id: 1,
      platform: 'Instagram',
      username: '@storythur',
      followers: '90.3K',
      posts: [
        {
          id: 1,
          title: "Berhenti Membandingkan Perjalananmu",
          excerpt: "Setiap orang punya timeline berbeda...",
          date: "15 Jul 2023",
          likes: "1.2k"
        },
        {
          id: 2,
          title: "Seni Menerima Ketidakpastian",
          excerpt: "Hidup ini terlalu singkat untuk...",
          date: "10 Jul 2023",
          likes: "2.4k"
        }
      ]
    },
    {
      id: 2,
      platform: 'TikTok',
      username: '@storythurr',
      followers: '3K+',
      posts: [
        {
          id: 1,
          title: "Self-Talk yang Membangun",
          excerpt: "Cara kamu berbicara pada diri sendiri...",
          date: "12 Jul 2023",
          likes: "542"
        }
      ]
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Konten @storythur selalu bikin hari-hariku lebih bermakna. Ga cuma scroll doang, tapi dapet insight berharga.",
      author: "Rina, 22",
      platform: "Instagram"
    },
    {
      id: 2,
      quote: "Video-videomu di TikTok singkat tapi padat banget isinya!",
      author: "Dito, 27",
      platform: "TikTok"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* Navigation */}
      <NavCreator />
      
      {/* Main Content */}
      <main className="pb-20 lg:pb-10">
        {/* Profile Header */}
        <section className="bg-gray-900 text-white py-12">
          <div className="max-w-4xl mx-auto px-5">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden mb-4 md:mb-0 md:mr-6">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                  alt="Fathur Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-2xl font-bold">Fathur Rahman</h1>
                <p className="text-gray-300 mt-1">Content Creator</p>
                <div className="flex justify-center md:justify-start space-x-4 mt-3">
                  <span className="text-sm bg-gray-800 px-3 py-1 rounded-full">
                    <i className="ri-user-follow-line mr-1"></i> 90.3K IG
                  </span>
                  <span className="text-sm bg-gray-800 px-3 py-1 rounded-full">
                    <i className="ri-user-smile-line mr-1"></i> 3K+ TikTok
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="max-w-4xl mx-auto px-5 -mt-8">
          <div className="bg-white rounded-lg shadow-sm p-4 grid grid-cols-4 gap-2">
            <a 
              href="https://instagram.com/storythur" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center group"
            >
              <div className="bg-gray-100 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-200 transition">
                <i className="ri-instagram-line text-2xl"></i>
              </div>
              <span className="text-xs font-medium">Instagram</span>
            </a>
            <a 
              href="https://tiktok.com/@storythurr" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center group"
            >
              <div className="bg-gray-100 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-200 transition">
                <i className="ri-tiktok-line text-2xl"></i>
              </div>
              <span className="text-xs font-medium">TikTok</span>
            </a>
            <button 
              onClick={() => setShowContactModal(true)}
              className="flex flex-col items-center justify-center group"
            >
              <div className="bg-gray-100 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-200 transition">
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
              <div className="bg-gray-100 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-200 transition">
                <i className="ri-lightbulb-flash-line text-2xl"></i>
              </div>
              <span className="text-xs font-medium">Quotes</span>
            </a>
          </div>
        </section>

        {/* Bio Section */}
        <section className="max-w-4xl mx-auto px-5 mt-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="font-bold text-lg mb-3 flex items-center">
              <i className="ri-user-3-line mr-2"></i> Tentang Saya
            </h2>
            <p className="text-gray-700 mb-4">
              Kreator konten digital yang fokus pada refleksi harian, motivasi, dan pengembangan diri. 
              Membantu generasi muda menemukan kedamaian pikiran dan kejelasan spiritual melalui konten 
              yang relatable dan mudah dicerna.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Fokus Konten</p>
                <p className="font-medium">Self-growth & Spiritual clarity</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Tujuan</p>
                <p className="font-medium">Biar kamu nggak overthinking terus</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Highlights */}
        {contentHighlights.map(platform => (
          <section key={platform.id} className="max-w-4xl mx-auto px-5 mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg flex items-center">
                {platform.platform === 'Instagram' ? (
                  <i className="ri-instagram-line mr-2"></i>
                ) : (
                  <i className="ri-tiktok-line mr-2"></i>
                )}
                {platform.platform} • {platform.username}
              </h2>
              <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                {platform.followers} followers
              </span>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {platform.posts.map(post => (
                <a
                  key={post.id}
                  href={`https://${platform.platform.toLowerCase()}.com/${platform.username.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <div className="bg-gray-100 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    {platform.platform === 'Instagram' ? (
                      <i className="ri-image-line"></i>
                    ) : (
                      <i className="ri-video-line"></i>
                    )}
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
              <a
                href={`https://${platform.platform.toLowerCase()}.com/${platform.username.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                Lihat semua di {platform.platform} <i className="ri-arrow-right-line ml-1"></i>
              </a>
            </div>
          </section>
        ))}

        {/* Testimonials */}
        <section className="max-w-4xl mx-auto px-5 mt-8">
          <h2 className="font-bold text-lg mb-4 flex items-center">
            <i className="ri-chat-quote-line mr-2"></i> Apa Kata Mereka?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center mr-2">
                    <i className="ri-user-line"></i>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-xs text-gray-500 flex items-center">
                      <i className={
                        testimonial.platform === 'Instagram' 
                          ? "ri-instagram-line mr-1" 
                          : "ri-tiktok-line mr-1"
                      }></i>
                      {testimonial.platform}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-5 mt-8">
          <div className="bg-gray-900 rounded-lg p-6 text-white">
            <h3 className="font-bold text-lg mb-2 flex items-center">
              <i className="ri-sparkling-line mr-2"></i> Mulai Perjalanan Self-Growth-mu
            </h3>
            <p className="text-gray-300 mb-4">Ikuti aku di platform favoritmu untuk konten harian</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://instagram.com/storythur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition flex items-center justify-center"
              >
                <i className="ri-instagram-line mr-2"></i> Instagram
              </a>
              <a
                href="https://tiktok.com/@storythurr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition flex items-center justify-center"
              >
                <i className="ri-tiktok-line mr-2"></i> TikTok
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation (Mobile Only) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-20">
        <div className="flex justify-around py-3">
          <button 
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center ${activeTab === 'home' ? 'text-gray-900' : 'text-gray-500'}`}
          >
            <i className={`ri-home-4-${activeTab === 'home' ? 'fill' : 'line'} text-xl`}></i>
            <span className="text-xs mt-1">Home</span>
          </button>
          <button 
            onClick={() => setActiveTab('content')}
            className={`flex flex-col items-center ${activeTab === 'content' ? 'text-gray-900' : 'text-gray-500'}`}
          >
            <i className={`ri-play-large-${activeTab === 'content' ? 'fill' : 'line'} text-xl`}></i>
            <span className="text-xs mt-1">Content</span>
          </button>
          <button 
            onClick={() => setActiveTab('about')}
            className={`flex flex-col items-center ${activeTab === 'about' ? 'text-gray-900' : 'text-gray-500'}`}
          >
            <i className={`ri-information-${activeTab === 'about' ? 'fill' : 'line'} text-xl`}></i>
            <span className="text-xs mt-1">About</span>
          </button>
          <button 
            onClick={() => setShowContactModal(true)}
            className={`flex flex-col items-center ${activeTab === 'contact' ? 'text-gray-900' : 'text-gray-500'}`}
          >
            <i className={`ri-customer-service-${activeTab === 'contact' ? 'fill' : 'line'} text-xl`}></i>
            <span className="text-xs mt-1">Contact</span>
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30 p-4">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center border-b border-gray-200 p-4">
              <h3 className="font-bold text-lg">Hubungi Saya</h3>
              <button 
                onClick={() => setShowContactModal(false)} 
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="p-4 space-y-3">
              <a
                href="https://wa.me/6281234567890?text=Hai%20Fathur,%20aku%20penggemar%20kontenmu!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center mr-3">
                  <i className="ri-whatsapp-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium">WhatsApp</h4>
                  <p className="text-xs text-gray-500">Chat langsung dengan saya</p>
                </div>
                <i className="ri-arrow-right-s-line ml-auto text-gray-400"></i>
              </a>
              
              <a
                href="https://instagram.com/storythur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center mr-3">
                  <i className="ri-instagram-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium">Instagram DM</h4>
                  <p className="text-xs text-gray-500">Kirim pesan ke @storythur</p>
                </div>
                <i className="ri-arrow-right-s-line ml-auto text-gray-400"></i>
              </a>
              
              <a
                href="https://tiktok.com/@storythurr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center mr-3">
                  <i className="ri-tiktok-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium">TikTok</h4>
                  <p className="text-xs text-gray-500">Komentar di @storythurr</p>
                </div>
                <i className="ri-arrow-right-s-line ml-auto text-gray-400"></i>
              </a>
              
              <a
                href="mailto:fathur@storythur.com"
                className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center mr-3">
                  <i className="ri-mail-line text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-xs text-gray-500">fathur@storythur.com</p>
                </div>
                <i className="ri-arrow-right-s-line ml-auto text-gray-400"></i>
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}