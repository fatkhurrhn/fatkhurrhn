import React from "react";
import Thumbnail1 from "../../assets/thumbnail01.png"

export default function Page() {

    return (
        <div>
            <div className="flex justify-between items-center w-full">
                <h2 className="text-[20px] text-[#d4d4d4] font-bold">🛠 My Projects</h2>
            </div>
            <p className="text-justify pt-2 text-[#d4d4d4]">
                I have worked on a variety of projects over the years; some of them as a hobby, some as a proof of concept and others to solve my own pain points. Here are some of the projects that I have worked on.
            </p>
            <br />
            <div className="grid gap-2">
                <div className="border border-[#252529] bg-[#141417] rounded-xl sm:flex items-center">
                    <div className="p-2">
                        <img
                            src={Thumbnail1}
                            alt="Personal Website Mockup"
                            width={500}
                            height={100}
                            className="border border-[#202024] rounded-lg"
                        />
                    </div>
                    <div className="p-3 w-full">
                        <div className="flex justify-between items-center">
                            <h1 className="text-[18px] text-[#d4d4d4] font-black">Personal Website</h1>
                            <a
                                target="_blank"
                                href="https://fatkhurrhn.vercel.app/"
                                className="border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] duration-200 px-5 py-2 flex items-center rounded-lg text-zinc-400 gap-2"
                            >
                                <i className="ri-a-m" /> Preview
                            </a>
                        </div>
                        <hr className="border-1 border-[#252529] border-dashed my-3" />
                        <div className="flex items-center gap-5">
                            <ul className="flex gap-2">
                                <li className="text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500 font-mono w-fit">
                                    # JavaScript
                                </li>
                                <li className="text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500 font-mono w-fit">
                                    # Tailwindv3
                                </li>
                                <li className="text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500 font-mono w-fit">
                                    # ReactJS
                                </li>
                            </ul>
                        </div>
                        <hr className="border-1 border-[#252529] border-dashed my-3 text-justify" />
                        <p className="text-[#d4d4d4]">
                            Personal portfolio built with React.js and Tailwind, showcasing my skills, projects, and experience in front-end development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}