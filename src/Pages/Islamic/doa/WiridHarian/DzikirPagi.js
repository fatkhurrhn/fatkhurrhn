import React from "react";
import Navbar from "../../../../components/Navbar-islamic";
import FooterComponent from "../../../../components/Footer-islamic";

function WirdulLathifDetail() {
  return (
    <div className="relative bg-zinc-900 text-zinc-400 min-h-screen">
        <Navbar/>
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50 bg-teal-600 text-white p-4">
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="text-2xl"
            onClick={() => window.history.back()}
          >
            <i className="ri-arrow-left-line"></i>
          </button>
          
          <div className="flex items-center space-x-4">
            <button className="text-2xl">
              <i className="ri-information-line"></i>
            </button>
            <button className="text-2xl">
              <i className="ri-bookmark-line"></i>
            </button>
            <button className="text-2xl">
              <i className="ri-text-size"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-16 border-b border-zinc-700 py-4 px-4 flex items-center justify-between">
        <button className="text-teal-500 text-2xl">
          <i className="ri-arrow-left-s-line"></i>
        </button>
        
        <div className="text-center">
          <p className="text-zinc-300 text-sm">3/6</p>
          <h1 className="text-zinc-200 text-xl font-medium">Wirdul Lathif (Dzikir Pagi)</h1>
        </div>
        
        <button className="text-teal-500 text-2xl">
          <i className="ri-arrow-right-s-line"></i>
        </button>
      </div>

      {/* Content */}
      <div className="pb-16">
        {/* Title in Arabic */}
        <div className="border-b border-zinc-700 py-6 flex justify-center">
          <h2 className="text-4xl text-zinc-200 font-arabic">الورد اللطيف</h2>
        </div>

        {/* First Dzikir */}
        <div className="border-b border-zinc-700 py-6">
          <div className="text-right px-4 mb-6">
            <p className="text-3xl text-zinc-200 font-arabic leading-loose">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
              <br />
              قُلْ هُوَ اللهُ أَحَدٌ، اَللهُ الصَّمَدُ، لَمْ يَلِدْ وَلَمْ
              <br />
              يُوْلَدْ، وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ ×٣
            </p>
          </div>
          
          <div className="px-4 text-zinc-400">
            <p className="mb-2">Dengan menyebut nama Allah yang Maha Pengasih lagi Maha Penyayang.</p>
            <p>Katakanlah (wahai Muhammad): "Dialah Allah Yang Maha Esa. Allah Dzat yang menjadi tumpuan segala permohonan. Ia tidak beranak dan tidak pula diperanakkan. Dan tidak ada siapa pun yang sebanding dengan-Nya. (QS Al-Ikhlas). (3x)</p>
          </div>
        </div>

        {/* Second Dzikir */}
        <div className="border-b border-zinc-700 py-6">
          <div className="text-right px-4 mb-6">
            <p className="text-3xl text-zinc-200 font-arabic leading-loose">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
              <br />
              قُلْ أَعُوْذُ بِرَبِّ الْفَلَقِ، مِنْ شَرِّ مَا خَلَقَ،
              <br />
              وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِنْ شَرِّ النَّفَّاثَاتِ
              <br />
              فِي الْعُقَدِ، وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ ×٣
            </p>
          </div>
          
          <div className="px-4 text-zinc-400">
            <p className="mb-2">Dengan menyebut nama Allah yang Maha Pengasih lagi Maha Penyayang.</p>
            <p>Katakanlah (wahai Muhammad), "Aku berlindung kepada Tuhan yang menciptakan cahaya subuh. Dari kejahatan makhluk-Nya. Dari kejahatan malam apabila telah gelap gulita. Dari kejahatan wanita-wanita tukang sihir yang menghembus pada buhul-buhul. Dan dari kejahatan orang yang dengki apabila ia dengki." (QS Al-Falaq). (3x)</p>
          </div>
        </div>
      </div>
      <FooterComponent/>
    </div>
  );
}

export default WirdulLathifDetail;