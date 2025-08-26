import { Link } from "react-router-dom";

export default function CertificatesSection() {
  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <h2 className="text-[18px] font-bold text-gray-800 flex items-center gap-2">
          <i className="ri-award-fill"></i> Certifications
        </h2>
        <Link to="/certificate" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
          View more
        </Link>
      </div> <br />
      <div className="grid gap-4">
        <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { img: "/assets/bangkit.png", title: "Bangkit Academy", date: "Issued Jan 2025 - Expires Jan 2028" },
            { img: "/assets/google.png", title: "Google Certification", date: "Issued Nov 2024 - Expires Nov 2027" },
            { img: "/assets/aws.png", title: "AWS Certified", date: "Issued Nov 2024 - Expires Nov 2027" }
          ].map((cert, index) => (
            <div
              key={index}
              className={`w-full bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow
      ${index > 0 ? 'hidden sm:block' : ''}`}
            >
              <div className="sertif-image overflow-hidden">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium text-gray-600 text-left">
                  {cert.date}
                </h3>
                <Link
                  to="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block w-full border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium py-2 px-3 rounded-md transition duration-200 text-center text-xs"
                >
                  View Certificate
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}