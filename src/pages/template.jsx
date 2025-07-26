import React from 'react'
import NavNavigate from '../components/frontdev/NavNavigate'
import Footer from '../components/frontdev/Footer'

export default function Template() {
    return (
        <div className="bg-gray-50 min-h-screen text-gray-800 transition-colors duration-300">
            <NavNavigate />
            <section className="max-w-4xl mx-auto px-5 pt-[95px]">
                <div>isi konten disini</div>
            </section>
            <Footer />
        </div>
    )
}

// untuk icon gunain cdn yg udh aku taro di inxex.html (<link href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css" rel="stylesheet" /> )dan penggunaannya kaya gini <i class="ri-music-2-line"></i> dst...
