"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const certificates = [
  {
    id: 1,
    name: "Sertif 1",
    img: "https://marketplace.canva.com/EAF3lV78vig/1/0/1600w/canva-biru-emas-ornamen-klasik-sertifikat-penghargaan-kT1JTV7bIVQ.jpg",
  },
  {
    id: 2,
    name: "Sertif 2",
    img: "https://marketplace.canva.com/EAF3lV78vig/1/0/1600w/canva-biru-emas-ornamen-klasik-sertifikat-penghargaan-kT1JTV7bIVQ.jpg",
  },
];

function CertificateGallery() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="sertif-section py-10">
      <h1 className="text-xl font-semibold text-zinc-100 sm:text-2xl text-center mb-6">
        My Sertif
      </h1>

      {/* Grid Sertifikat */}
      <div className="sertif-container grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {certificates.map((cert, index) => (
          <Dialog key={cert.id} open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <article
                className="sertif bg-zinc-800 rounded-lg shadow-md overflow-hidden cursor-pointer"
                onClick={() => setActiveIndex(index)}
              >
                <div className="sertif-image">
                  <img src={cert.img} alt={cert.name} className="w-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-white p-4 text-left">{cert.name}</h3>
              </article>
            </DialogTrigger>

            {/* Modal View */}
            <DialogContent className="max-w-4xl">
              <Swiper initialSlide={activeIndex} className="w-full">
                {certificates.map((cert) => (
                  <SwiperSlide key={cert.id} className="flex justify-center">
                    <img src={cert.img} alt={cert.name} className="w-full max-h-[80vh] object-contain" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}

// ✅ Export harus ada di paling bawah!
export default CertificateGallery;
