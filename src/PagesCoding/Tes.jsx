import React, { useState } from "react";

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    { icon: "ri-mail-line", text: "Email", link: "mailto:muhammadthursina123@email.com" },
    { icon: "ri-instagram-line", text: "Instagram", link: "https://ig.me/m/story.thur" },
    { icon: "ri-whatsapp-line", text: "WhatsApp", link: "https://wa.me/6282285512813" }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#18181b]">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
      >
        Contact Me
      </button>

      {/* Popup */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-[#141417] text-white rounded-lg shadow-lg border border-[#252529] text-center">
            <h2 className="text-xl font-bold mb-4">Contact me</h2>

            {/* Kontainer Flex agar ikon dan teks sejajar ke samping */}
            <div className="flex gap-3">
              {contacts.map(({ icon, text, link }, index) => (
                <a 
                  key={index} 
                  href={link} 
                  className="flex items-center gap-2 bg-[#18181b] border border-[#252529] hover:bg-[#1f1f24] px-4 py-2 rounded-md transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={icon}></i>
                  <span>{text}</span>
                </a>
              ))}
            </div>

            <button 
              onClick={() => setIsOpen(false)} 
              className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded w-full"
            >
              Close
            </button>

            {/* Teks kecil untuk CV */}
            <p className="mt-3 text-sm text-gray-400">
            Want to see my CV?{" "}
              <a 
                href="https://drive.google.com/file/d/1TBEdUYvG6KvhNQfQBz6gwXFTxWvTe5_g/view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Click here
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPopup;
