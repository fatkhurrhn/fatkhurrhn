import React from 'react'
import NavNavigate from '../components/NavNavigate'
import Footer from '../components/Footer'

export default function ShortcutPage() {
    return (
        <div className="bg-gray-50 min-h-screen text-gray-800 transition-colors duration-300">
            <NavNavigate />

            <section className="max-w-4xl mx-auto px-4 sm:px-5 pt-4 pb-10">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Halaman Pintasan</h1>
                    <p className="text-gray-600">Akses cepat ke berbagai layanan</p>
                </div>

                {/* Social Media Section - Tampilan DANA-like di mobile */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <i className="ri-share-circle-line mr-2"></i> Media Sosial
                    </h2>
                    <div className="flex flex-col space-y-4 md:grid md:grid-cols-4 md:gap-4 md:space-y-0">
                        {/* Baris 1 */}
                        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-4 md:gap-4 md:space-x-0">
                            <DanaStyleCard
                                icon="ri-instagram-line"
                                title="Instagram"
                                color="bg-pink-500"
                                href="https://www.instagram.com/story.thur"
                            />
                            <DanaStyleCard
                                icon="ri-whatsapp-line"
                                title="Channel WA"
                                color="bg-green-500"
                                href="https://whatsapp.com/channel/0029VahGmJQ8kyyK2Xv6OA0Y"
                            />
                            <DanaStyleCard
                                icon="ri-messenger-line"
                                title="Channel IG"
                                color="bg-purple-500"
                                href="https://ig.me/j/AbYAsEmFeC7N27Jp/"
                            />
                            <DanaStyleCard
                                icon="ri-tiktok-line"
                                title="Tiktok"
                                color="bg-gray-900"
                                href="https://tiktok.com/@arabicvibes_"
                            />
                        </div>

                        {/* Baris 2 */}
                        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-4 md:gap-4 md:space-x-0">
                            <DanaStyleCard
                                icon="ri-youtube-line"
                                title="YouTube"
                                color="bg-red-500"
                                href="https://youtube.com/@fatkhurrhnn"
                            />
                            <DanaStyleCard
                                icon="ri-instagram-line"
                                title="Instagram 2"
                                color="bg-pink-500"
                                href="https://instagram.com/fatkhurrhn"
                            />
                            <DanaStyleCard
                                icon="ri-tiktok-line"
                                title="Tiktok 2"
                                color="bg-gray-900"
                                href="https://tiktok.com/@fatkhurrhnn"
                            />
                            <DanaStyleCard
                                icon="ri-twitter-line"
                                title="Twitter"
                                color="bg-blue-400"
                                href="#"
                            />
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <i className="ri-file-list-2-line mr-2"></i> Konten
                    </h2>
                    <div className="flex flex-col space-y-4 md:grid md:grid-cols-4 md:gap-4 md:space-y-0">
                        {/* Baris 1 */}
                        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-4 md:gap-4 md:space-x-0">
                            <DanaStyleCard
                                icon="ri-image-line"
                                title="Photos"
                                color="bg-blue-500"
                                href="/photos"
                            />
                            <DanaStyleCard
                                icon="ri-double-quotes-l"
                                title="Quotes"
                                color="bg-indigo-500"
                                href="/quotes"
                            />
                            <DanaStyleCard
                                icon="ri-store-line"
                                title="Store"
                                color="bg-orange-500"
                                href="/store"
                            />
                            <DanaStyleCard
                                icon="ri-money-dollar-circle-line"
                                title="Paid Promote"
                                color="bg-green-500"
                                href="/paid-promote"
                            />
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <i className="ri-contacts-line mr-2"></i> Kontak
                    </h2>
                    <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-4 md:gap-4">
                        <DanaStyleCard
                            icon="ri-user-line"
                            title="Contact"
                            color="bg-teal-500"
                            href="wa.me/6282285512813"
                        />
                        <DanaStyleCard
                            icon="ri-customer-service-line"
                            title="Support"
                            color="bg-amber-500"
                            href="#"
                        />
                        <DanaStyleCard
                            icon="ri-question-line"
                            title="FAQ"
                            color="bg-gray-500"
                            href="#"
                        />
                        <DanaStyleCard
                            icon="ri-information-line"
                            title="Info"
                            color="bg-cyan-500"
                            href="#"
                        />
                    </div>
                </section>

                {/* AI & Web Tools Section */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <i className="ri-robot-line mr-2"></i> AI & Web Tools
                    </h2>
                    <div className="flex flex-col space-y-4 md:grid md:grid-cols-4 md:gap-4 md:space-y-0">
                        {/* Baris 1 */}
                        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-4 md:gap-4 md:space-x-0">
                            <DanaStyleCard
                                icon="ri-brain-line"
                                title="ChatGPT"
                                color="bg-emerald-500"
                                href="https://chat.openai.com"
                            />
                            <DanaStyleCard
                                icon="ri-magic-line"
                                title="Midjourney"
                                color="bg-violet-500"
                                href="https://www.midjourney.com"
                            />
                            <DanaStyleCard
                                icon="ri-palette-line"
                                title="Canva"
                                color="bg-sky-500"
                                href="https://www.canva.com"
                            />
                            <DanaStyleCard
                                icon="ri-code-line"
                                title="GitHub"
                                color="bg-gray-500"
                                href="https://github.com"
                            />
                        </div>

                        {/* Baris 2 */}
                        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-4 md:gap-4 md:space-x-0">
                            <DanaStyleCard
                                icon="ri-cloud-line"
                                title="Google Drive"
                                color="bg-yellow-500"
                                href="https://drive.google.com"
                            />
                            <DanaStyleCard
                                icon="ri-translate-2"
                                title="DeepL"
                                color="bg-blue-500"
                                href="https://www.deepl.com/translator"
                            />
                            <DanaStyleCard
                                icon="ri-file-word-line"
                                title="Notion"
                                color="bg-gray-800"
                                href="https://notion.so"
                            />
                            <DanaStyleCard
                                icon="ri-tools-line"
                                title="More Tools"
                                color="bg-gray-400"
                                href="#"
                            />
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </div>
    )
}

// Komponen Kartu dengan Gaya DANA
function DanaStyleCard({ icon, title, href, color }) {
    return (
        <a
            href={href}
            className={`flex flex-col items-center justify-center rounded-2xl p-4 min-w-[110px] h-[120px] shadow-sm hover:shadow-md transition-all duration-300 bg-white`}
        >
            <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center text-white mb-3`}>
                <i className={`${icon} text-2xl`}></i>
            </div>
            <h3 className="font-medium text-gray-800 text-sm text-center">{title}</h3>
        </a>
    )
}