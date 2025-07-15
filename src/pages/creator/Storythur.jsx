import React from 'react'
import NavWrapper from '../../components/creator/NavCreator'
import Footer from '../../components/creator/Footer'

export default function Storythur() {
    return (
        <div className="bg-gray-50 min-h-screen text-gray-800 transition-colors duration-300">
            <NavWrapper />
            <section className="max-w-4xl mx-auto">
                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* About Section */}
                    <section className="mb-12" id="about">
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <img
                                src="https://res.cloudinary.com/dbssvz2pe/image/upload/v1751663102/assets-gallery/ajdtk56lv99fjeg8ofy94pkvo.jpg"
                                alt="StoryThur"
                                className="w-100 h-auto lg:w-40 rounded-lg mx-auto lg:mx-0 "
                                style={{ maxHeight: '460px' }} // Sesuaikan nilai ini sesuai kebutuhan
                            />

                            <div className="w-full text-justify lg:text-left ">
                                <p className="text-gray-700 mb-2 text-sm leading-relaxed">
                                    Sederhana, tapi bermakna eaaak — itulah yang menjadi napas di setiap postingan{" "}
                                    <a
                                        href="https://instagram.com/story.thur"
                                        className="font-bold text-black hover:text-gray-600 transition"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        @story.thur.
                                    </a>{" "} Lewat kutipan harian dan pesan reflektif, aku ingin menjadi teman virtual yang
                                    mengingatkanmu akan makna-makna kecil dalam hidup ini, cihuuyyy.
                                </p>

                                <div className="flex justify-center lg:justify-start gap-6 mb-2">
                                    <div className="text-center">
                                        <span className="block text-lg font-bold text-gray-800">90K+</span>
                                        <span className="text-xs text-gray-600">Followers</span>
                                    </div>

                                    <div className="text-center">
                                        <span className="block text-lg font-bold text-gray-800">100+</span>
                                        <span className="text-xs text-gray-600">Paid Promote</span>
                                    </div>

                                    <div className="text-center">
                                        <span className="block text-lg font-bold text-gray-800">25K+</span>
                                        <span className="text-xs text-gray-600">Broadcast</span>
                                    </div>
                                </div>

                                <div className="text-center lg:text-left">
                                    <a
                                        href="https://instagram.com/story.thur"
                                        className="inline-flex items-center bg-black hover:bg-gray-800 text-white text-sm font-medium py-2 px-4 rounded transition duration-300"
                                    >
                                        Let's go to my instagram
                                        {/* <i className="ri-whatsapp-line ml-2"></i> */}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Services Section */}
                    <section className="mb-16" id="services">
                        {/* <h2 className="text-xl font-bold text-center text-gray-800 mb-8">Kamu Mau Apa?</h2> */}

                        <div className="grid grid-cols-2 gap-4">
                            {/* Paid Promote */}
                            <a
                                href="/paid-promote"
                                className="border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition"
                            >
                                <i className="ri-money-dollar-circle-line text-3xl text-gray-800 mb-2"></i>
                                <h3 className="font-medium text-gray-800">Paid Promote</h3>
                            </a>

                            {/* Assets */}
                            <a
                                href="/photos"
                                className="border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition"
                            >
                                <i className="ri-image-line text-3xl text-gray-800 mb-2"></i>
                                <h3 className="font-medium text-gray-800">Photos</h3>
                            </a>

                            {/* Quotes */}
                            <a
                                href="/quotes"
                                className="border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition"
                            >
                                <i className="ri-double-quotes-l text-3xl text-gray-800 mb-2"></i>
                                <h3 className="font-medium text-gray-800">Quotes</h3>
                            </a>

                            {/* Broadcast */}
                            <a
                                href="/more"
                                className="border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition"
                            >
                                <i className="ri-megaphone-line text-3xl text-gray-800 mb-2"></i>
                                <h3 className="font-medium text-gray-800">Broadcast</h3>
                            </a>
                        </div>
                    </section>

                    {/* Collaboration Section */}
                    <section className="bg-black rounded-lg p-6 text-white ">
                        <div className="text-center">
                            <h2 className="text-xl font-bold mb-3">Mari Kolaborasi</h2>
                            <p className="text-sm mb-6 opacity-90">
                                Punya ide keren, proyek seru, atau peluang menarik? Yuk, kita bikin jadi kenyataan! StoryThur selalu siap buat kolaborasi.
                            </p>
                            <a
                                href="https://wa.me/6282285512813"
                                className="inline-flex items-center bg-white text-black hover:bg-gray-200 text-sm font-medium py-2 px-4 rounded transition duration-300"
                            >
                                WhatsApp Admin
                                <i className="ri-whatsapp-line ml-2"></i>
                            </a>
                        </div>
                    </section>
                </main>
            </section>
            <Footer />
        </div>
    )
}
