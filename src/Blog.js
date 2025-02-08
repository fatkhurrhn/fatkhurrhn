import Navbar from "./components/Navbar";
import FooterComponent from "./components/Footer";
import { Link } from "react-router-dom";


function Blog() {
    return (
        <div>
            <div className="bg-zinc-900 text-zinc-400">
                <div className="mx-auto max-w-[750px] px-4 pb-1 pt-6 text-lg sm:px-12 md:px-16">
                    <Navbar />
                    <div>
                        <div className="pt-[10px] flex flex-col gap-3 text-base leading-7 sm:gap-4 sm:text-lg sm:leading-8" style={{ textAlign: "justify" }}>
                            {/* blog */}
                            <section className="blog-section py-10">
                                <h1 className="text-xl font-semibold text-zinc-100 sm:text-2xl text-center mb-6">
                                    My Blog
                                </h1>
                                <div className="blog-container grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                                    <article className="blog bg-[#27272a] rounded-lg shadow-md overflow-hidden border border-zinc-700">
                                        <div className="blog-image">
                                            <img src="https://i.ytimg.com/vi/YRxDCO1BBEM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB9te2K_XJmR_MDHavKu4HZXqVBbw" alt="Badge" className="w-full object-cover" />
                                        </div>
                                        <div className="p-3">
                                            <Link to="/blog-1">
                                                <h3 className="text-sm font-medium text-zinc-300 text-left hover:text-blue-400 transition">
                                                    Judul Blog
                                                </h3>
                                            </Link>
                                        </div>
                                    </article>
                                    <article className="blog bg-[#27272a] rounded-lg shadow-md overflow-hidden border border-zinc-700">
                                        <div className="blog-image">
                                            <img src="https://i.ytimg.com/vi/YRxDCO1BBEM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB9te2K_XJmR_MDHavKu4HZXqVBbw" alt="Badge" className="w-full object-cover" />
                                        </div>
                                        <div className="p-3">
                                            <Link to="/blog-2">
                                                <h3 className="text-sm font-medium text-zinc-300 text-left hover:text-blue-400 transition">
                                                    Judul Blog
                                                </h3>
                                            </Link>
                                        </div>
                                    </article>
                                    <article className="blog bg-[#27272a] rounded-lg shadow-md overflow-hidden border border-zinc-700">
                                        <div className="blog-image">
                                            <img src="https://i.ytimg.com/vi/YRxDCO1BBEM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB9te2K_XJmR_MDHavKu4HZXqVBbw" alt="Badge" className="w-full object-cover" />
                                        </div>
                                        <div className="p-3">
                                            <Link to="/blog-3">
                                                <h3 className="text-sm font-medium text-zinc-300 text-left hover:text-blue-400 transition">
                                                    Judul Blog
                                                </h3>
                                            </Link>
                                        </div>
                                    </article>
                                    <article className="blog bg-[#27272a] rounded-lg shadow-md overflow-hidden border border-zinc-700">
                                        <div className="blog-image">
                                            <img src="https://i.ytimg.com/vi/YRxDCO1BBEM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB9te2K_XJmR_MDHavKu4HZXqVBbw" alt="Badge" className="w-full object-cover" />
                                        </div>
                                        <div className="p-3">
                                            <Link to="/blog-4">
                                                <h3 className="text-sm font-medium text-zinc-300 text-left hover:text-blue-400 transition">
                                                    Judul Blog
                                                </h3>
                                            </Link>
                                        </div>
                                    </article>
                                    <article className="blog bg-[#27272a] rounded-lg shadow-md overflow-hidden border border-zinc-700">
                                        <div className="blog-image">
                                            <img src="https://i.ytimg.com/vi/YRxDCO1BBEM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB9te2K_XJmR_MDHavKu4HZXqVBbw" alt="Badge" className="w-full object-cover" />
                                        </div>
                                        <div className="p-3">
                                            <Link to="/blog-5">
                                                <h3 className="text-sm font-medium text-zinc-300 text-left hover:text-blue-400 transition">
                                                    Judul Blog
                                                </h3>
                                            </Link>
                                        </div>
                                    </article>
                                    <article className="blog bg-[#27272a] rounded-lg shadow-md overflow-hidden border border-zinc-700">
                                        <div className="blog-image">
                                            <img src="https://i.ytimg.com/vi/YRxDCO1BBEM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB9te2K_XJmR_MDHavKu4HZXqVBbw" alt="Badge" className="w-full object-cover" />
                                        </div>
                                        <div className="p-3">
                                            <Link to="/blog-6">
                                                <h3 className="text-sm font-medium text-zinc-300 text-left hover:text-blue-400 transition">
                                                    Judul Blog
                                                </h3>
                                            </Link>
                                        </div>
                                    </article>
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
