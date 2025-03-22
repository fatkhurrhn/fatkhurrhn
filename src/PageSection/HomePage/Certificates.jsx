import React from "react";
import Bangkit from "../../assets/bangkit.png";
import Google from "../../assets/google.png";
import Aws from "../../assets/aws.png";

export default function Page() {
    return (
        <div>
            <div className="flex justify-between items-center w-full">
                <h2 className="text-[18px] font-bold text-[#d4d4d4]">📜 My Certificates</h2>
                <a href="/certificate" className="text-xs text-zinc-500">
                    View more
                </a>
            </div> <br />
            <div className="grid gap-3">
                <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">

                    <div className="w-full bg-[#141417] rounded-lg shadow-md overflow-hidden border border-[#252529]">
                        <div className="sertif-image">
                            <img
                                src={Bangkit}
                                alt="sertifikat"
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="p-3">
                            <h3 className="text-sm font-medium text-[#d4d4d4] text-left">
                                Issued Jan 2025 - Expires Jan 2028
                            </h3>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-block w-full border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] text-[#d4d4d4] hover:text-white font-medium py-2 px-3 rounded-md transition duration-200 text-center text-xs"
                            >
                                View Course
                            </a>
                        </div>
                    </div>

                    {/* Duplikat sertifikat */}
                    <div className="w-full hidden sm:block bg-[#141417] rounded-lg shadow-md overflow-hidden border border-[#252529]">
                        <div className="sertif-image">
                            <img
                                src={Google}
                                alt="sertifikat"
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="p-3">
                            <h3 className="text-sm font-medium text-[#d4d4d4] text-left">
                                Issued Nov 2024 - Expires Nov 2027
                            </h3>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-block w-full border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] text-[#d4d4d4] hover:text-white font-medium py-2 px-3 rounded-md transition duration-200 text-center text-xs"
                            >
                                View Course
                            </a>
                        </div>
                    </div>

                    <div className="w-full hidden sm:block bg-[#141417] rounded-lg shadow-md overflow-hidden border border-[#252529]">
                        <div className="sertif-image">
                            <img
                                src={Aws}
                                alt="sertifikat"
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="p-3">
                            <h3 className="text-sm font-medium text-[#d4d4d4] text-left">
                                Issued Nov 2024 - Expires Nov 2027
                            </h3>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-block w-full border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] text-[#d4d4d4] hover:text-white font-medium py-2 px-3 rounded-md transition duration-200 text-center text-xs"
                            >
                                View Course
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
