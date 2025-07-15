import NavNavigate from '../../components/frontdev/NavNavigate';
import Footer from '../../components/frontdev/Footer';
import { Link } from 'react-router-dom';

export default function Creator() {
    return (
        <div className="bg-gray-50 min-h-screen text-gray-800 transition-colors duration-300">
            <NavNavigate />
            <section className="max-w-4xl mx-auto pt-[95px] p-4">
                <div className="space-y-12">
                    {/* Hero Section - Minimalist */}
                    <div className="flex flex-col items-center text-center">
                        {/* <div className="w-40 h-40 rounded-full overflow-hidden mb-6">
                            <img 
                                src="https://res.cloudinary.com/dbssvz2pe/image/upload/v1751663102/assets-gallery/ajdtk56lv99fjeg8ofy94pkvo.jpg" 
                                alt="M. Fatkhurrohman"
                                className="w-full h-full object-cover"
                            />
                        </div> */}

                        <h1 className="text-4xl font-bold text-gray-900">M. FATKHURROHMAN</h1>
                        <p className="text-lg mt-2 text-gray-600">Content Creator & Digital Strategist</p>

                        <div className="flex gap-4 mt-6">
                            <a href="https://instagram.com/story.thur" target="_blank" rel="noopener noreferrer"
                                className="text-pink-600 hover:text-pink-700 text-2xl transition">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="https://tiktok.com/@storythurr" target="_blank" rel="noopener noreferrer"
                                className="text-gray-800 hover:text-black text-2xl transition">
                                <i className="ri-tiktok-line"></i>
                            </a>
                            <a href="https://linkedin.com/in/fatkhurrhnn" target="_blank" rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-700 text-2xl transition">
                                <i className="ri-linkedin-box-line"></i>
                            </a>
                        </div>
                    </div>

                    {/* Social Media Stats - Minimal */}
                    <div className="flex justify-center gap-8 py-6 border-y border-gray-200">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-pink-600">90K+</div>
                            <div className="text-sm text-gray-500">Instagram</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-800">3K+</div>
                            <div className="text-sm text-gray-500">TikTok</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">1K+</div>
                            <div className="text-sm text-gray-500">LinkedIn</div>
                        </div>
                    </div>

                    {/* Profile Content - Clean Layout */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">PROFIL SINGKAT</h2>
                            <p className="text-gray-700 leading-relaxed text-justify">
                                Mahasiswa semester 6 di Sekolah Tinggi Teknologi Nurul Fikri jurusan Sistem Informasi
                                dengan pengalaman di bidang administrasi, desain dan manajemen media sosial. Memiliki
                                kemampuan dalam Microsoft Office, Canva, dan Figma, serta aktif mengelola media sosial
                                dengan total 90K+ pengikut di instagram.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">KETERAMPILAN</h2>
                                <ul className="space-y-3 text-justify">
                                    <li className="flex items-start">
                                        <i className="ri-microsoft-line mt-1 mr-2 text-indigo-500"></i>
                                        Microsoft Office (Word, Excel, PowerPoint)
                                    </li>
                                    <li className="flex items-start">
                                        <i className="ri-pencil-ruler-2-line mt-1 mr-2 text-indigo-500"></i>
                                        Desain Grafis (Canva & Figma)
                                    </li>
                                    <li className="flex items-start">
                                        <i className="ri-share-line mt-1 mr-2 text-indigo-500"></i>
                                        Manajemen Media Sosial (Instagram & Tiktok)
                                    </li>
                                    <li className="flex items-start">
                                        <i className="ri-video-line mt-1 mr-2 text-indigo-500"></i>
                                        Konten Creator & Strategi Digital
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">PENDIDIKAN</h2>
                                <div >
                                    <h3 className="font-semibold text-gray-800">Sekolah Tinggi Teknologi Terpadu Nurul Fikri</h3>
                                    <p className="text-gray-600">SI Sistem Informasi | IPK 3.66</p>
                                    <p className="text-gray-500 text-sm">September 2022 – Sekarang</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">PENGALAMAN</h2>
                            <div className="space-y-6 text-justify">
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800">Admin & Designer – GenQ (Organisasi LDK STT NF) 2023-2024</h3>
                                    <ul className="mt-2 ml-6 list-disc text-gray-700 space-y-1">
                                        <li>Microsoft Office (Word, Excel, PowerPoint)</li>
                                        <li>Membuat desain konten menggunakan Canva & Figma</li>
                                        <li>Meningkatkan engagement dan interaksi di media sosial</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800">Instagram Influencer & Content Creator</h3>
                                    <p className="text-sm text-gray-500">Akun Pribadi, 90K+ Followers</p>
                                    <ul className="mt-2 ml-6 list-disc text-gray-700 space-y-1">
                                        <li>Mengelola dan mengembangkan akun instagram pribadi dengan strategi organik</li>
                                        <li>Berpengalaman dalam pembuatan konten dan interaksi dengan audiens</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800">Staff Administrasi Santri Baru 2022</h3>
                                    <ul className="mt-2 ml-6 list-disc text-gray-700 space-y-1">
                                        <li>Bertanggung jawab dalam administrasi santri baru</li>
                                        <li>Menggunakan Microsoft Office untuk pengelolaan data dan dokumen</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Showcase - Minimal */}
                    <div className="pt-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">KONTEN TERBAIK</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                                    <p className="text-gray-500">Video {item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}