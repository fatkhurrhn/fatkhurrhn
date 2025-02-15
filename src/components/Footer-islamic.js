import { useState } from "react";

export function FooterComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date();
    const dateTime = now.toLocaleString("id-ID", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const message = `Nama: ${formData.name}%0AEmail: ${formData.email}%0ADate: ${dateTime}%0APesan: ${formData.message}`;
    const phoneNumber = "6282285512813";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");

    setFormData({ name: "", email: "", message: "" });
    setIsOpen(false);
  };

  return (
    <>
      <footer className="hidden sm:block w-full max-w-[750px] sm:w-[85%] mx-auto bg-zinc-800 border-t border-zinc-700/40 px-5 py-4 shadow-md rounded-none sm:rounded-t-2xl mt-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="http://fatkhurrhn.vercel.app/" className="flex items-center gap-3">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="text-lg font-semibold text-white">Fatkhurrhn</span>
          </a>
          <ul className="flex flex-wrap justify-center sm:justify-end gap-3 text-sm font-medium text-gray-400">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#privacy" className="hover:text-white">Privacy</a></li>
            <li><a href="#licenci" className="hover:text-white">Licensing</a></li>
            <li>
              <button onClick={() => setIsOpen(true)} className="hover:text-white">Contact</button>
            </li>
          </ul>
        </div>
      </footer>

      {/* Popup Contact */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50" onClick={() => setIsOpen(false)}>
          <section
            className="w-[90%] max-w-sm p-5 bg-[#2d2d2f] rounded-lg shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute top-2 right-3 text-gray-400 hover:text-white text-lg" onClick={() => setIsOpen(false)}>✕</button>
            <h2 className="text-lg font-semibold text-center text-gray-50 mb-2">Contact Me</h2>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-[#3a3a3c] border border-[#4a4a4d] rounded-md text-white text-sm focus:ring-2 focus:ring-[#6c6c6e] outline-none"
              />
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-[#3a3a3c] border border-[#4a4a4d] rounded-md text-white text-sm focus:ring-2 focus:ring-[#6c6c6e] outline-none"
              />
              <textarea
                id="message"
                placeholder="Your Message"
                rows="3"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-[#3a3a3c] border border-[#4a4a4d] rounded-md text-white text-sm focus:ring-2 focus:ring-[#6c6c6e] outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-2 bg-[#5a5a5d] text-white rounded-md text-sm font-medium hover:bg-[#484848] focus:ring-2 focus:ring-[#6c6c6e] transition-all"
              >
                <i class="ri-whatsapp-line"></i> Send Message
              </button>
            </form>
          </section>
        </div>
      )}
    </>
  );
}

export default FooterComponent;
