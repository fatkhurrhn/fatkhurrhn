import { useState, useEffect } from "react";
import FooterIslamic from "../../components/Footer-islamic"; 
import NavbarIslamic from "../../components/Navbar-islamic"; 
import { Link } from "react-router-dom";

function NewsIslamic() {
    const [berita, setBerita] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://api-berita-indonesia.vercel.app/republika/islam/')
            .then((res) => res.json())
            .then(({ data }) => {
                setBerita(data.posts);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                setError(true);
            });
    }, []);

    return (
        <div>
            <div className="bg-zinc-900 text-zinc-400 min-h-screen">
                <div className=" mx-auto max-w-[880px] px-4 pb-1 pt-6 text-lg sm:px-12 md:px-16">
                    <NavbarIslamic/>
                    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 flex items-center justify-between gap-5 bg-zinc-800 px-5 text-base sm:px-5 py-1">
                <div className="relative block sm:hidden">
                    <button type="button" className="flex items-center gap-2 py-3 text-sm transition-colors hover:text-zinc-300 sm:hidden sm:text-base" onClick={() => window.history.back()}>
                        <i class="ri-arrow-left-line"></i>News Islamic
                    </button>
                </div>
            </div>
                    <div>
                        <div className="pt-[10px] flex flex-col gap-3 text-base leading-7 sm:gap-4 sm:text-lg sm:leading-8" style={{ textAlign: "justify" }}>
                        <section className="blog-section pt-0 sm:py-10 relative"> <br/>
                                {loading && <p className="text-center">Loading...</p>}
                                {error && <p className="text-center text-red-500">Terjadi kesalahan saat mengambil data.</p>}
                                <div className="blog-container grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
                                    {berita.map((item, index) => (
                                        <article key={index} className="blog bg-[#27272a] rounded-lg shadow-md overflow-hidden border border-zinc-700">
                                            <Link to={item.link} target="_blank" rel="noopener noreferrer">
                                                <div className="blog-image">
                                                    <img 
                                                        src={item.thumbnail || "https://via.placeholder.com/300"} 
                                                        alt="thumbnail-blog" 
                                                        className="w-full object-cover h-32 md:h-40 lg:h-48" 
                                                    />
                                                </div>
                                                <div className="p-3">
                                                    <p className="text-xs text-gray-400">{new Date(item.pubDate).toLocaleDateString("id-ID", { day: "2-digit", month: "2-digit", year: "numeric" })}</p>
                                                    <h3 className="text-sm font-medium text-zinc-300 text-left hover:text-blue-400 transition line-clamp-2 overflow-hidden text-ellipsis">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                            </Link>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <FooterIslamic/>
            </div>
        </div>
    );
}

export default NewsIslamic;