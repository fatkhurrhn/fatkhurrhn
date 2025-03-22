import React from "react";
import Lintasarta from "../../assets/lintasarta.png";
import NF from "../../assets/nf.jpg";
import Senada from "../../assets/senada.jpg";
import Pintar from "../../assets/pintar.png";

export default function Page() {
    return (
        <div>
            <div className="flex justify-between items-center w-full">
                <h2 className="text-[18px] font-bold text-[#d4d4d4]">💼 My Experience</h2>
                <a href="https://www.linkedin.com/in/fatkhurrhn/" className="text-xs text-zinc-500">
                    View more
                </a>
            </div> <br />
            <div className="mt-1 sm:mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="grid gap-4">
                    <div className="rounded-xl border border-[#252529] hover:bg-[#1f1f24] bg-[141417] p-3 sm:p-4" >
                        <div className="mb-3 sm:mb-4 flex items-center gap-3" >
                            <img className="h-[40px] w-[40px] rounded-full" src={Lintasarta}
                                alt=" Company Lintasarta" />
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold text-[#d4d4d4] text-left">
                                    Company Lintasarta
                                </h3>
                                <p className="text-xs sm:text-sm text-[#d4d4d4] text-left">
                                    Capstone Project at Bangkit Academy
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm sm:text-base text-[#d4d4d4] text-justify">
                                Developed an employee recruitment website using React over two months as part of the
                                Capstone Project at Lintasarta, focusing on frontend development and user
                                experience.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-xl border border-[#252529] hover:bg-[#1f1f24] bg-[141417] p-3 sm:p-4" >
                        <div className="mb-3 sm:mb-4 flex items-center gap-3">
                            <img className="h-[40px] w-[40px] rounded-full" src={NF}
                                alt="Assistan Lecturer 2024" />
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold text-[#d4d4d4] text-left">
                                    Assistan Lecturer 2024
                                </h3>
                                <p className="text-xs sm:text-sm text-[#d4d4d4] text-left">
                                    STT Terpadu Nurul Fikri
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm sm:text-base text-[#d4d4d4] text-justify">
                                Assisted in teaching the Big Data course for one semester, helping students
                                understand data processing, analytics, and visualization concepts. Provided guidance
                                in practical assignments, facilitated discussions, and supported the lecturer in
                                className activities.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4" >
                    <div className="rounded-xl border border-[#252529] hover:bg-[#1f1f24] bg-[141417] p-3 sm:p-4" >
                        <div className="mb-3 sm:mb-4 flex items-center gap-3">
                            <img className="h-[40px] w-[40px] rounded-full"
                                src="https://files.klob.id/public/mig01/l32ovhf5/channels4_profile.jpg"
                                alt="Bangkit Academy 2024" />
                            <div>
                                <h3 className="text-base sm:text-lg font-semibold text-[#d4d4d4] text-left">
                                    Bangkit Academy 2024
                                </h3>
                                <p className="text-xs sm:text-sm text-[#d4d4d4] text-left">
                                    Cloud Computing Cohort CC-23
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm sm:text-base text-[#d4d4d4] text-justify">
                                Participated in the Kampus Merdeka program for four months, focusing on the Cloud
                                Computing learning path.
                            </p>
                        </div>
                    </div>
                    <div className="rounded-xl border border-[#252529] hover:bg-[#1f1f24] bg-[141417] p-3 sm:p-4" >
                        <div className="mb-3 sm:mb-4 flex items-center gap-3">
                            <img className="h-[40px] w-[40px] rounded-full" src={Senada}
                                alt="Head of the Quran Program Department" />
                            <div>
                                <h3 className="text-base sm:text-lg text-left font-semibold">
                                    Leader of the PQ
                                </h3>
                                <p className="text-xs sm:text-sm text-left text-[#d4d4d4]">
                                    LDK Senada STT NF
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm sm:text-base text-[#d4d4d4] text-justify">
                                an Islamic organization on the STT Nurul Fikri campus
                            </p>
                        </div>
                    </div>
                    <div className="rounded-xl border border-[#252529] hover:bg-[#1f1f24] bg-[141417] p-3 sm:p-4" >
                        <div className="mb-3 sm:mb-4 flex items-center gap-3">
                            <img className="h-[40px] w-[40px] rounded-full" src={Pintar}
                                alt="Freelance Translator" />
                            <div>
                                <h3 className="text-base sm:text-lg text-left font-semibold">
                                    Freelance Translator
                                </h3>
                                <p className="text-xs sm:text-sm text-left text-[#d4d4d4]">
                                    Malay translator at PINTAR
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm sm:text-base text-[#d4d4d4] text-justify">
                                Translated Malay language documents for two months at PINTAR.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
