import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GCSB from "../assets/profil-gcsb.png";
import git from "../assets/git.png";
import ai from "../assets/ai.png";
import backend from "../assets/backend.png";
import cloud from "../assets/cloud.png";
import dasarweb from "../assets/dasar-web.png";
import javascript from "../assets/javascript.png";
import logika from "../assets/logika.png";
import ml from "../assets/ml.png";
import software from "../assets/software.png";
import Google from "../assets/google.png";
import Aws from "../assets/aws.png";
import Bangkit from "../assets/bangkit.png";

const certificates = [
    {
        id: 0,
        imgSrc: Bangkit,
        issuedDate: "Issued Jan 2025 - Expries Jan 2029",
        link: "#"
    },
    {
        id: 0,
        imgSrc: Google,
        issuedDate: "Issued Oct 2024 - Expries Oct 2027",
        link: "https://www.cloudskillsboost.google/paths/36"
    },
    {
        id: 0,
        imgSrc: Aws,
        issuedDate: "Issued Jan 2024 - Expries Jan 2027",
        link: "https://www.coursera.org/projects/aws-s3-basics"
    },
    {
        id: 0,
        imgSrc: ml,
        issuedDate: "Issued Des 2024 - Expries Des 2028",
        link: "https://www.dicoding.com/academies/658"
    },
    {
        id: 0,
        imgSrc: cloud,
        issuedDate: "Issued Nov 2024 - Expries Nov 2027",
        link: "https://www.dicoding.com/academies/133"
    },
    {
        id: 0,
        imgSrc: ai,
        issuedDate: "Issued Nov 2024 - Expries Nov 2027",
        link: "https://www.dicoding.com/academies/653"
    },
    {
        id: 0,
        imgSrc: backend,
        issuedDate: "Issued Nov 2024 - Expries Nov 2027",
        link: "https://www.dicoding.com/academies/342"
    },
    {
        id: 0,
        imgSrc: javascript,
        issuedDate: "Issued Oct 2024 - Expries Oct 2027",
        link: "https://www.dicoding.com/academies/256"
    },
    {
        id: 0,
        imgSrc: software,
        issuedDate: "Issued Sep 2024 - Expries Sep 2027",
        link: "https://www.dicoding.com/academies/237"
    },
    {
        id: 0,
        imgSrc: dasarweb,
        issuedDate: "Issued Sep 2024 - Expries Sep 2027",
        link: "https://www.dicoding.com/academies/123"
    },
    {
        id: 0,
        imgSrc: git,
        issuedDate: "Issued Sep 2024 - Expries Sep 2027",
        link: "https://www.dicoding.com/academies/317"
    },
    {
        id: 0,
        imgSrc: logika,
        issuedDate: "Issued Sep 2024 - Expries Sep 2027",
        link: "https://www.dicoding.com/academies/302"
    },
];

const bagdes = [
    {
        id: 1,
        img: "https://cdn.qwiklabs.com/G3FQHXnXtt1DjNfJrIB6pnliswtS9r4HI7tQ1QQrx9A%3D",
        earned: "Earned Oct 24 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/749"
    },
    {
        id: 2,
        img: "https://cdn.qwiklabs.com/oR8B%2FuNyP%2F0gEL3Ionlf%2BvpsraICZzGUgcgacmC%2FMdg%3D",
        earned: "Earned Oct 23 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/716"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/Au8XmoMOOARnWkKYyMj7OPxjJA4dSh3dpK1yAmey%2B3c%3D",
        earned: "Earned Oct 14 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/636"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/5D%2F9QfiaIW21joMjNrdNqYpLSaYUQFgslfVxdKi3ZcU%3D",
        earned: "Earned Oct 13 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/625"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/t0b88bg6YHVVcyfjgBBGP%2BmVfr2k8zm1qrR9os9JBLc%3D",
        earned: "Earned Sep 29 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/637"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/gwaziiY9l16dYBocReK5WM6Xe%2Ft3NoOo4026BzAdP%2FY%3D",
        earned: "Earned Sep 29 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/648"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/4RegS2GVYx%2Bh0q25xpLS%2FwpHoA5CL4mOJxeQsI2tddw%3D",
        earned: "Earned Sep 26 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/1135"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/PlN4TqqQNmBYkb1B%2FIQCkW5rucxTbBhycvXs9itiivQ%3D",
        earned: "Earned Sep 26 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/931"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/t7fEj2llWAH1nalLAYFWZ6feGTfuh4%2BvppmCEzbG8S0%3D",
        earned: "Earned Sep 26 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/914"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/vVyd70vFyK0NyEQGIUbthQnRHiTL7lmKjy7nZ%2BEBouw%3D",
        earned: "Earned Sep 26 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/896"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/%2FEtAhl4ld03vaZZZSwVddKhXZvct9PQu5hSWx%2FL%2Fz2k%3D",
        earned: "Earned Sep 23 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/905"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/amFaR05aFXKueJ%2F6kMD%2FfYGt2C3fqQLc9edWljwffXc%3D",
        earned: "Earned Sep 26 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/943"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/DAKAxfw2JZNB0UuwypObZ05A%2FYFH8MGIBM2jmqxgg2c%3D",
        earned: "Earned Sep 23 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/888"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/eqWmX686YYguvJJXCghylMhakSAz6cwGVA0AyLcY0YI%3D",
        earned: "Earned Nov 2 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/371"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/5dLhvqW2q0GoDFG1b%2Beo%2F2B5bs7zVMr56ZKEYRF1mMc%3D",
        earned: "Earned Oct 27 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/178"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/jD65k7ICyyPiId1fxqfSzMtibDBPJaK5UFPZozvydoA%3D",
        earned: "Earned Oct 23 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/940"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/dhhLphjCkhOWATnu9%2BfhKORcTVz0lCnTe1Ap2924Vn0%3D",
        earned: "Earned Oct 23 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/864"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/2ztYey8ufLpnrhx36E3Z87OpwRjB1OtAmL%2F13aH8X4E%3D",
        earned: "Earned Oct 21 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/41"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/EbKVqtpN%2FA6uMIZFRj1RBSkOO5uJ4ozY%2BKjIP%2BE%2B69M%3D",
        earned: "Earned Oct 21 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/99"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/Jjb%2FzMXij%2FXkl%2BzCd9SnV%2BVn7DGk2NJXHMGbVPhJhIo%3D",
        earned: "Earned Oct 15 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/95"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/NgxLXaw79LkaZdJS0BwhPZx1wcBJSzQ0jPPWKIbm35I%3D",
        earned: "Earned Oct 14 2024",
        linkCourse: "ttps://www.cloudskillsboost.google/course_templates/443"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/U1oe%2FbRZqwOi7Qu7LeOphCwJ5%2FJT8eMi8%2Fi3u7PvL1w%3D",
        earned: "Earned Oct 9 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/50"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/PnBhgSK5s4ijylsEXG5htONBhVI%2BoX0uiT5khKk9Md8%3D",
        earned: "Earned Oct 9 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/60"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/shjT5LjJUHXQb68VfByccFNckibjgRDxDgh%2BuDRcIio%3D",
        earned: "Earned Oct 9 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/2"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/nKyV%2BRDiONLY%2F3HzvwN4yryQlIrvTgxmYgtzf0NzrAU%3D",
        earned: "Earned Oct 8 2024",
        linkCourse: "https://www.cloudskillsboost.google/paths/11/course_templates/49"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/lbQBxMmb2LKMw2LaSA%2FQ4LjS%2FqTw%2BuI%2B7SaoH8Vl%2Ft4%3D",
        earned: "Earned Oct 3 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/77"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/PIMrT8aeyepNKz9d9vDK9qusuYR93M2NRJT%2F%2F6QZqcc%3D",
        earned: "Earned Sep 25 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/156"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/A4IKYEu%2FpkWClPI3S7XtUdUL3d6ZF6Ac1WDt3RZoscw%3D",
        earned: "Earned Sep 25 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/155"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/jT7nToAO1myJ1T9cO5BdIKYJhZlAQQHuhbpdqt3ZDOI%3D",
        earned: "Earned Sep 25 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/154"
    },
    {
        id: 0,
        img: "https://cdn.qwiklabs.com/VvGZuErP4zQ5ktjYw0amu2Ul7h6iUqrnaORwCNwkuto%3D",
        earned: "Earned Sep 24 2024",
        linkCourse: "https://www.cloudskillsboost.google/course_templates/153"
    },
]


export default function Page() {
    return (
        <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />
            <section className="max-w-4xl mx-auto px-5 pt-20">

                {/* sertifikat */}
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-[20px] text-[#d4d4d4] font-bold">📜 My Certificates</h2>
                </div> <br />
                <div className="grid gap-3 text-[#d4d4d4]">
                    <div className="w-full mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {certificates.map(cert => (
                            <div key={cert.id} className="w-full bg-[#141417] rounded-lg shadow-md overflow-hidden border border-[#252529]">
                                <div className="sertif-image">
                                    <img
                                        src={cert.imgSrc}
                                        alt="sertifikat"
                                        className="w-full object-cover"
                                    />
                                </div>
                                <div className="p-3">
                                    <h3 className="text-sm font-medium text-left">
                                        {cert.issuedDate}
                                    </h3>
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 inline-block w-full border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24 hover:text-white font-medium py-2 px-3 rounded-md transition duration-200 text-center text-xs"
                                    >
                                        View Course
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* hr */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

                <div className="flex justify-between items-center w-full">
                    <h2 className="text-[20px] font-bold">📜 My Bagdes</h2>
                </div> <br />

                <div className="sertif bg-[#27272a] rounded-lg shadow-md overflow-hidden border border-zinc-700 w-full max-w-4xl mx-auto">
                    <div className="sertif-image">
                        <a href="https://www.cloudskillsboost.google/public_profiles/a0413875-4f2d-4c72-b551-524e6cffb45d" target="_blank" rel="noopener noreferrer">
                            <img src={GCSB} alt="Badge" className="w-full object-cover" />
                        </a>
                    </div>
                </div>
                <br />
                <div className="grid gap-3">
                    <div className="w-full mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {bagdes.map(cert => (
                            <div key={cert.id} className="w-full bg-[#141417] rounded-lg shadow-md overflow-hidden border border-[#252529]">
                                <div className="sertif-image">
                                    <img
                                        src={cert.img}
                                        alt="sertifikat"
                                        className="w-full object-cover"
                                    />
                                </div>
                                <div className="p-3">
                                    <h3 className="text-sm font-medium text-left">
                                        {cert.earned}
                                    </h3>
                                    <a
                                        href={cert.linkCourse}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 inline-block w-full border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24 hover:text-white font-medium py-2 px-3 rounded-md transition duration-200 text-center text-xs"
                                    >
                                        View Course
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
