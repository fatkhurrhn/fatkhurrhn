import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-t-gray-200 py-3 mt-4">
      <div className="px-4 sm:mx-auto text-gray-800 max-w-4xl flex justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Fatkhurrhn, All right reserved.
        </p>
        {/* Container untuk icon */}
        <div className="flex space-x-3 sm:space-x-4 ml-auto text-gray-800 items-center justify-center sm:justify-start">
        <a
            href="https://github.com/fatkhurrhn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl"
          >
            <i className="ri-github-fill"></i>
          </a>
          <a
            href="https://tiktok.com/@fatkhurrhnn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl"
          >
            <i className="ri-tiktok-fill"></i>
          </a>
          <a
            href="https://instagram.com/story.thur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl"
          >
            <i className="ri-instagram-line"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
