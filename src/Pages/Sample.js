import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Hasil() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("certificateData")) || [];
    setItems(storedItems);
  }, []);

  return (
    <div className="relative">
      <div className="bg-zinc-900 text-zinc-400 min-h-screen">
        <div className="mx-auto max-w-[750px] px-4 pb-1 pt-6 text-lg sm:px-12 md:px-16">
          <section className="sertif-section py-10">
            <h1 className="text-xl font-semibold text-zinc-100 sm:text-2xl text-center mb-6">
              My Certificate
            </h1>
            <div className="sertif-container grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
              {items.map((item, index) => (
                <article key={index} className="sertif bg-[#27272a] rounded-lg shadow-md overflow-hidden border border-zinc-700">
                  <div className="sertif-image">
                    {/* Pastikan gambar langsung menggunakan URL dari state */}
                    <img src={item.image} alt={item.name} className="w-full object-cover" />
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-zinc-300 text-left">{item.name}</h3>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block w-full bg-[#323236] hover:bg-[#3b3b40] text-zinc-300 hover:text-white font-medium py-2 px-3 rounded-md transition duration-200 text-center text-xs"
                    >
                      View Course
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Hasil;
