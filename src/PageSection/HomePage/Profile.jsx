import React, {  } from "react";

export default function Page() {

    return (
        <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                    {/* Foto */}
                    <div className="flex items-center space-x-4 md:block">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D5603AQFSeewLSkNWqw/profile-displayphoto-shrink_400_400/B56ZOsnbZfGgAo-/0/1733767838340?e=1744243200&v=beta&t=UxHXMMALF5Qc2QZ4dhi3Ers-M-nP6NjBjaPPcrgHLY8"
                            alt="profile pic"
                            className="rounded-full grayscale hover:grayscale-0 duration-150 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40"
                        />
                        {/* Nama & Role di sebelah foto (Mobile) */}
                        <div className="md:hidden">
                            <h1 className="text-xl sm:text-[18px] font-bold text-[#d4d4d4]">Fatkhurrhn 🪴</h1>
                            <p className="text-xs sm:text-sm font-mono text-[#252529] dark:text-gray-300">
                                FrontEnd Developer
                            </p>
                        </div>
                    </div>

                    {/* Nama & Paragraf (Desktop), Paragraf (Mobile) */}
                    <div className="text-center md:text-left md:flex-1">
                        <div className="hidden md:block">
                            <h1 className="text-[18px] font-bold text-[#d4d4d4]">Fatkhurrhn 🪴</h1>
                            <p className="text-sm font-mono text-[#252529] dark:text-gray-300">
                                FrontEnd Developer
                            </p>
                        </div>
                        <p className="mt-2 dark:text-[#d4d4d4] text-justify">
                            I'm an Information Systems student passionate about Front-End Development. I love turning ideas into interactive, user-friendly experiences with clean and efficient code. Always exploring new web technologies, I enjoy building innovative projects and sharing knowledge to make a real impact.😎🔥
                        </p>
                    </div>
                </div>
    );
}