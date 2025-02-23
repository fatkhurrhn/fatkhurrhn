import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/Footer";
import { Link } from "react-router-dom";

function Blog() {
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
                <div className="mx-auto max-w-[880px] px-4 pb-1 pt-6 text-lg sm:px-12 md:px-16">
                    <Navbar />
                    <div>
                        <div className="pt-[10px] flex flex-col gap-3 text-base leading-7 sm:gap-4 sm:text-lg sm:leading-8" style={{ textAlign: "justify" }}>
                            <section className="blog-section py-10">
                                <h1 className="text-xl font-semibold text-zinc-100 sm:text-2xl text-center mb-6">
                                    News Islamic
                                </h1>
                                {loading && <p className="text-center">Loading...</p>}
                                {error && <p className="text-center text-red-500">Terjadi kesalahan saat mengambil data.</p>}
                                <div className="blog-container grid grid-cols-2 gap-4 px-4">
                                    {berita.map((item, index) => (
                                        <article key={index} className="blog bg-[#27272a] rounded-lg shadow-md overflow-hidden border border-zinc-700">
                                            <Link to={item.link} target="_blank" rel="noopener noreferrer">
                                                <div className="blog-image">
                                                    <img src={item.thumbnail || "https://via.placeholder.com/300"} alt="thumbnail-blog" className="w-full object-cover h-40" />
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
                <FooterComponent />
            </div>
        </div>
    );
}

export default Blog;
