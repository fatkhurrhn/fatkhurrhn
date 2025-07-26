import React, { useState } from 'react';
import NavCreator from '../../components/creator/NavCreator';
import Footer from '../../components/creator/Footer';
import { Link } from 'react-router-dom';
import ChatRoomComponents from '../../components/ChatRoom';

export default function StorythurPremium() {
  const [showContactModal, setShowContactModal] = useState(false);

  // Data konten
  const contentChannels = [
    {
      id: 1,
      platform: 'Instagram',
      username: '@storythur',
      followers: '90.3K',
      description: 'Daily Reflections & Peace',
      posts: [
        {
          id: 1,
          title: "Berhenti Membandingkan Perjalananmu",
          excerpt: "Setiap orang punya timeline berbeda...",
          date: "15 Jul 2023",
          likes: "1.2k"
        }
      ]
    },
    {
      id: 2,
      platform: 'Instagram',
      username: '@fatkhurrhn',
      followers: '6K+',
      description: 'Random Quotes',
      posts: [
        {
          id: 1,
          title: "Ketika Hati Tak Tenang",
          excerpt: "Duduklah sejenak, diam, dan bernafas...",
          date: "12 Jul 2023",
          likes: "845"
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* Navigation */}
      <NavCreator />
      <ChatRoomComponents/>

      {/* Main Content */}
      <main className="pb-20 lg:pb-10">
        {/* Profile Header */}
        <section className="bg-gray-900 text-white py-12 px-5">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-28 h-28 rounded-full border-4 border-white overflow-hidden mb-4 md:mb-0 md:mr-8 shadow-lg">
                <img
                  src="https://fatkhurrhn.vercel.app/pp4.jpg"
                  alt="M Fatkhurrohman"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-2xl font-bold">M Fatkhurrohman</h1>
                <p className="text-gray-300 mt-1">Content Creator • Self-Growth Enthusiast</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
                  <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">
                    <i className="ri-user-smile-line mr-1"></i> 2 Instagram Accounts
                  </span>
                  <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">
                    <i className="ri-tv-line mr-1"></i> 1 Instagram Channel
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="max-w-4xl mx-auto px-5 -mt-7">
          <div className="bg-white rounded-xl shadow-md p-4 overflow-x-auto">
            <div className="flex space-x-0.5 min-w-max">
              <Link
                to="#"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center group w-20 shrink-0"
              >
                <div className="bg-gray-100 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-200 transition shadow-sm">
                  <i className="ri-user-heart-line text-2xl"></i>
                </div>
                <span className="text-xs font-medium text-center">100K+</span>
              </Link>
              <Link
                to="#"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center group w-20 shrink-0"
              >
                <div className="bg-gray-100 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-200 transition shadow-sm">
                  <i className="ri-heart-3-line text-2xl"></i>
                </div>
                <span className="text-xs font-medium text-center">725K+</span>
              </Link>
              {/* Item 1 */}
              <Link
                to="https://instagram.com/storythur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center group w-20 shrink-0"
              >
                <div className="bg-gray-100 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-200 transition shadow-sm">
                  <i className="ri-instagram-line text-2xl"></i>
                </div>
                <span className="text-xs font-medium text-center">Main IG</span>
              </Link>

              {/* Item 2 */}
              <Link
                to="ig.me/j/AbYAsEmFeC7N27Jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center group w-20 shrink-0"
              >
                <div className="bg-gray-100 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-200 transition shadow-sm">
                  <i className="ri-notification-3-line text-2xl"></i>
                </div>
                <span className="text-xs font-medium text-center">Reminder</span>
              </Link>

              {/* Item 3 */}
              <Link
                to="/creator/quotes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center group w-20 shrink-0"
              >
                <div className="bg-gray-100 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-200 transition shadow-sm">
                  <i className="ri-lightbulb-flash-line text-2xl"></i>
                </div>
                <span className="text-xs font-medium text-center">Quotes</span>
              </Link>

              {/* Item 4 */}
              <button
                onClick={() => setShowContactModal(true)}
                className="flex flex-col items-center justify-center group w-20 shrink-0"
              >
                <div className="bg-gray-100 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-200 transition shadow-sm">
                  <i className="ri-chat-3-line text-2xl"></i>
                </div>
                <span className="text-xs font-medium text-center">Contact</span>
              </button>

              <Link
                to="/creator/quotes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center group w-20 shrink-0"
              >
                <div className="bg-gray-100 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-200 transition shadow-sm">
                  <i className="ri-lightbulb-flash-line text-2xl"></i>
                </div>
                <span className="text-xs font-medium text-center">Quotes</span>
              </Link>

              <Link
                to="/creator/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center group w-20 shrink-0"
              >
                <div className="bg-gray-100 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-200 transition shadow-sm">
                  <i className="ri-lightbulb-flash-line text-2xl"></i>
                </div>
                <span className="text-xs font-medium text-center">Store</span>
              </Link>

              <Link
                to="/creator/mentahan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center group w-20 shrink-0"
              >
                <div className="bg-gray-100 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-200 transition shadow-sm">
                  <i className="ri-lightbulb-flash-line text-2xl"></i>
                </div>
                <span className="text-xs font-medium text-center">Mentahan</span>
              </Link>

              <Link
                to="/creator/more"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center group w-20 shrink-0"
              >
                <div className="bg-gray-100 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-200 transition shadow-sm">
                  <i className="ri-lightbulb-flash-line text-2xl"></i>
                </div>
                <span className="text-xs font-medium text-center">More</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="max-w-4xl mx-auto px-5 mt-8 text-justify">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="font-bold text-lg mb-4 flex items-center text-gray-800">
              <i className="ri-user-3-line mr-2 text-gray-600"></i> Tentang Saya
            </h2>
            <p className="text-gray-700 mb-4">
              Seorang kreator konten digital dengan passion di bidang pengembangan diri dan spiritualitas.
              Membangun beberapa channel konten untuk membantu generasi muda menemukan kedamaian pikiran
              dan kejelasan hidup melalui konten yang relatable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                  <i className="ri-flashlight-line mr-2 text-gray-600"></i> Misi
                </h3>
                <p className="text-gray-600 text-sm">
                  Membantu mengurangi overthinking dan meningkatkan kesadaran diri melalui konten harian.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                  <i className="ri-star-line mr-2 text-gray-600"></i> Nilai
                </h3>
                <p className="text-gray-600 text-sm">
                  Authentic, Relatable, dan Mindful dalam setiap konten yang dibuat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Channels */}
        <section className="max-w-4xl mx-auto px-5 mt-8">
          <h2 className="font-bold text-lg mb-6 flex items-center text-gray-800">
            <i className="ri-tv-2-line mr-2 text-gray-600"></i> Channel Konten Saya
          </h2>

          <div className="space-y-6">
            {contentChannels.map(channel => (
              <div key={channel.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-5 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {channel.platform === 'Instagram' ? (
                        <i className="ri-instagram-line text-2xl mr-3 text-pink-600"></i>
                      ) : (
                        <i className="ri-tiktok-line text-2xl mr-3 text-gray-900"></i>
                      )}
                      <div>
                        <h3 className="font-bold">{channel.username}</h3>
                        <p className="text-sm text-gray-500">{channel.description}</p>
                      </div>
                    </div>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      {channel.followers} followers
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  {channel.posts.map(post => (
                    <Link
                      key={post.id}
                      to={`https://${channel.platform.toLowerCase()}.com/${channel.username.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 hover:bg-gray-50 rounded-lg transition"
                    >
                      <div className="flex items-start">
                        <div className="bg-gray-100 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center mr-3 mt-1">
                          {channel.platform === 'Instagram' ? (
                            <i className="ri-image-line"></i>
                          ) : (
                            <i className="ri-video-line"></i>
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800">{post.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{post.excerpt}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-gray-500">{post.date}</span>
                            <span className="text-xs text-gray-500 flex items-center">
                              <i className="ri-heart-line mr-1"></i> {post.likes}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <Link
                  to={`https://${channel.platform.toLowerCase()}.com/${channel.username.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 bg-gray-50 text-gray-700 font-medium hover:bg-gray-100 transition"
                >
                  Kunjungi {channel.platform} <i className="ri-arrow-right-line ml-1"></i>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-5 mt-8">
          <div className="bg-gray-900 rounded-xl shadow-md p-8 text-white text-center">
            <h3 className="font-bold text-xl mb-3">Ingin Promosi di Sini?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Kami terbuka untuk kerja sama promosi berbayar yang relevan dan inspiratif.
            </p>

            <div className="flex justify-center">
              <Link
                to="/creator/paid-promote"
                className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition inline-flex items-center justify-center"
              >
                Lihat Info Promosi
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30 p-4">
          <div className="bg-white rounded-xl w-full max-w-md">
            <div className="flex justify-between items-center border-b border-gray-200 p-5">
              <h3 className="font-bold text-lg">Hubungi Saya</h3>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>

            <div className="p-5 space-y-3">
              <Link
                to="https://wa.me/6282285512813?text=Hai%20Fathur,%20aku%20penggemar%20kontenmu!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center mr-4">
                  <i className="ri-whatsapp-line text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-medium">WhatsApp</h4>
                  <p className="text-sm text-gray-500">Chat langsung dengan saya</p>
                </div>
                <i className="ri-arrow-right-s-line ml-auto text-gray-400 text-xl"></i>
              </Link>

              <Link
                to="https://instagram.com/storythur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center mr-4">
                  <i className="ri-instagram-line text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-medium">Instagram DM</h4>
                  <p className="text-sm text-gray-500">Kirim pesan ke @storythur</p>
                </div>
                <i className="ri-arrow-right-s-line ml-auto text-gray-400 text-xl"></i>
              </Link>

              <Link
                to="mailto:ig.storythur@gmail.com"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center mr-4">
                  <i className="ri-mail-line text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-sm text-gray-500">ig.storythur@gmail.com</p>
                </div>
                <i className="ri-arrow-right-s-line ml-auto text-gray-400 text-xl"></i>
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}