import React from 'react'
import NavNavigate from '../../components/frontdev/NavNavigate'
import Footer from '../../components/frontdev/Footer'

export default function Others() {
    return (
        <div className="bg-gray-50 min-h-screen text-gray-800 transition-colors duration-300">
            <NavNavigate />
            
            <section className="max-w-4xl mx-auto px-5 pt-[95px]">
                <section className="mb-0 pt-0" id="services">
                    {/* <h2 className="text-xl font-bold text-center text-gray-800 mb-8">Kamu Mau Apa?</h2> */}

                    <div className="grid grid-cols-2 gap-4">
                        <a href="/paid-promote" className="border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition">
                            <i className="ri-money-dollar-circle-line text-3xl text-gray-800 mb-2"></i>
                            <h3 className="font-medium text-gray-800">Paid Promote</h3>
                        </a>

                        <a href="https://www.instagram.com/story.thur" className="border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition">
                            <i className="ri-instagram-line text-3xl text-gray-800 mb-2"></i>
                            <h3 className="font-medium text-gray-800">Instagram</h3>
                        </a>

                        <a href="https://whatsapp.com/channel/0029VahGmJQ8kyyK2Xv6OA0Y" className="border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition">
                            <i className="ri-message-2-line text-3xl text-gray-800 mb-2"></i>
                            <h3 className="font-medium text-gray-800">Channel WA</h3>
                        </a>

                        <a href="https://ig.me/j/AbYAsEmFeC7N27Jp/" className="border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition">
                            <i className="ri-chat-1-line text-3xl text-gray-800 mb-2"></i>
                            <h3 className="font-medium text-gray-800">Channel IG</h3>
                        </a>

                        <a href="https://tiktok.com/@arabicvibes_" className="border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition">
                            <i className="ri-tiktok-line text-3xl text-gray-800 mb-2"></i>
                            <h3 className="font-medium text-gray-800">Tiktok</h3>
                        </a>

                        <a href="/photos" className="border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition">
                            <i className="ri-image-line text-3xl text-gray-800 mb-2"></i>
                            <h3 className="font-medium text-gray-800">Photos</h3>
                        </a>

                        <a href="/quotes" className="border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition">
                            <i className="ri-double-quotes-l text-3xl text-gray-800 mb-2"></i>
                            <h3 className="font-medium text-gray-800">Quotes</h3>
                        </a>

                        <a href="https://youtube.com/@fatkhurrhnn" className="border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition">
                            <i className="ri-youtube-line text-3xl text-gray-800 mb-2"></i>
                            <h3 className="font-medium text-gray-800">YouTube</h3>
                        </a>

                        <a href="https://instagram.com/fatkhurrhn" className="border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition">
                            <i className="ri-instagram-line text-3xl text-gray-800 mb-2"></i>
                            <h3 className="font-medium text-gray-800">Instagram 2</h3>
                        </a>

                        <a href="https://tiktok.com/@fatkhurrhnn" className="border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition">
                            <i className="ri-tiktok-line text-3xl text-gray-800 mb-2"></i>
                            <h3 className="font-medium text-gray-800">Tiktok 2</h3>
                        </a>

                        <a href="/store" className="border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition">
                            <i className="ri-store-line text-3xl text-gray-800 mb-2"></i>
                            <h3 className="font-medium text-gray-800">Store</h3>
                        </a>

                        <a href="wa.me/6282285512813" className="border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition">
                            <i className="ri-user-line text-3xl text-gray-800 mb-2"></i>
                            <h3 className="font-medium text-gray-800">Contact</h3>
                        </a>

                    </div>
                </section>
            </section>
            <Footer />
        </div>
    )
}
