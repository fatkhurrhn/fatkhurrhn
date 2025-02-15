import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Headline() {
  const [news, setNews] = useState([]);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768); // Cek ukuran awal

  useEffect(() => {
    fetch("https://api-berita-indonesia.vercel.app/republika/islam/")
      .then((response) => response.json())
      .then((data) => {
        if (data.data && data.data.posts) {
          setNews(data.data.posts); // Simpan semua berita
        }
      })
      .catch((error) => console.error("Error fetching news:", error));

    // Listener untuk cek perubahan ukuran layar
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
        <h2 className="text-lg pt-4 font-semibold text-left hidden md:block">Headline</h2>
      {isDesktop ? (
        // Tampilan Desktop (Grid, Hanya 3 Berita)
        <div className="blog-container grid grid-cols-2 pb-4 py-5 md:grid-cols-3 gap-3 px-1">
          {news.slice(0, 3).map((item, index) => (
            <article
              key={index}
              className="blog bg-[#27272a] rounded-lg shadow-md overflow-hidden border border-zinc-700"
            >
              <Link to={item.link} target="_blank" rel="noopener noreferrer">
                <div className="blog-image">
                  <img
                    src={item.thumbnail || "https://via.placeholder.com/300"}
                    alt="thumbnail-blog"
                    className="w-full object-cover h-32 md:h-40 lg:h-48"
                  />
                </div>
                <div className="p-3">
                  <p className="text-xs text-gray-400">
                    {new Date(item.pubDate).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </p>
                  <h3 className="text-sm font-medium text-zinc-300 text-left hover:text-blue-400 transition line-clamp-2 overflow-hidden text-ellipsis">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        // Tampilan Mobile (List Seperti Awal)
        <div className="p-4 mt-6 rounded-lg shadow-lg w-[390px]">
          <h2 className="text-lg font-semibold text-left">Headline</h2>
          <hr className="my-3 border-zinc-700" />
          {news.slice(0, 7).map((item, index) => (
            <div key={index}>
              <Link to={item.link} target="_blank" rel="noopener noreferrer">
                <div className="flex items-center cursor-pointer p-2 rounded-lg">
                  <div className="flex-1 text-left">
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded-md text-white">
                      {new Date(item.pubDate).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <h3 className="text-sm font-semibold mt-2 line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                  <img
                    src={item.thumbnail || "https://via.placeholder.com/100"}
                    alt={item.title}
                    className="w-24 h-24 rounded-md object-cover ml-4"
                  />
                </div>
              </Link>
              {index < news.length - 1 && (
                <hr className="my-4 border-zinc-700" />
              )}
            </div>
          ))}
          
        </div>
      )}
      <div className="text-center mb-4 sm:mb-5">
            <Link to="/news-islamic" className="text-blue-500 hover:underline">
              Lihat Semua Berita
            </Link>
          </div>
    </div>
  );
}

export default Headline;
