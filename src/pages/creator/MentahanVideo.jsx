import React, { useState } from 'react';
import NavWrapper from '../../components/creator/NavNavigate';
import Footer from '../../components/creator/Footer';

export default function MentahanVideo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [personalityType, setPersonalityType] = useState(null);

  const questions = [
    {
      question: "Ketika menghadiri acara sosial, Anda biasanya:",
      options: [
        "Berinteraksi dengan banyak orang, termasuk orang asing",
        "Berbicara hanya dengan orang yang Anda kenal",
        "Diam-diam mengamati orang lain dari kejauhan",
        "Mencari tempat yang tenang untuk menyendiri"
      ]
    },
    {
      question: "Anda lebih cenderung mempercayai:",
      options: [
        "Pengalaman dan insting Anda",
        "Fakta dan data yang terukur",
        "Keduanya, tergantung situasi",
        "Tidak yakin, saya sering ragu"
      ]
    },
    {
      question: "Ketika membuat keputusan penting, Anda biasanya:",
      options: [
        "Mengikuti perasaan dan nilai-nilai pribadi",
        "Menganalisis pro dan kontra secara logis",
        "Meminta pendapat orang lain dulu",
        "Menunda sampai ada pilihan yang jelas"
      ]
    },
    {
      question: "Di waktu luang, Anda lebih suka:",
      options: [
        "Bertemu dengan teman-teman atau keluarga",
        "Membaca buku atau mengejar hobi sendiri",
        "Mencoba sesuatu yang baru dan menantang",
        "Beristirahat dan bersantai"
      ]
    },
    {
      question: "Orang sering menggambarkan Anda sebagai:",
      options: [
        "Orang yang energik dan bersemangat",
        "Orang yang tenang dan bijaksana",
        "Orang yang analitis dan kritis",
        "Orang yang hangat dan peduli"
      ]
    }
  ];

  const personalityTypes = {
    "Sang Visioner": {
      description: "Anda adalah pemikir besar yang selalu melihat kemungkinan di masa depan. Kreativitas dan imajinasi adalah kekuatan utama Anda.",
      strengths: ["Kreatif", "Intuitif", "Inspiratif"],
      challenges: ["Terlalu idealis", "Kurang praktis", "Mudah bosan"],
      matches: ["Si Realistis", "Si Pengorganisir"]
    },
    "Si Analitis": {
      description: "Logika adalah panduan utama Anda. Anda unggul dalam memecahkan masalah kompleks dan melihat detail yang orang lain lewatkan.",
      strengths: ["Logis", "Detail-oriented", "Objektif"],
      challenges: ["Terlalu kritis", "Kurang ekspresif", "Sulit berkompromi"],
      matches: ["Si Empatik", "Sang Visioner"]
    },
    "Si Empatik": {
      description: "Anda adalah orang yang hangat dan peduli. Hubungan dengan orang lain sangat penting bagi Anda, dan Anda memiliki kemampuan alami untuk memahami perasaan orang.",
      strengths: ["Peduli", "Diplomatis", "Mendukung"],
      challenges: ["Terlalu sensitif", "Sulit mengatakan tidak", "Mengabaikan kebutuhan sendiri"],
      matches: ["Si Analitis", "Si Petualang"]
    },
    "Si Petualang": {
      description: "Anda adalah jiwa bebas yang mencintai tantangan dan pengalaman baru. Spontanitas dan keberanian adalah ciri khas Anda.",
      strengths: ["Berani", "Adaptif", "Energik"],
      challenges: ["Impulsif", "Kurang sabar", "Sulit berkomitmen"],
      matches: ["Si Pengorganisir", "Si Empatik"]
    }
  };

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (newAnswers.length < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate personality type based on answers
      const typeIndex = newAnswers.reduce((sum, answer) => sum + answer, 0) % 4;
      const types = Object.keys(personalityTypes);
      setPersonalityType(types[typeIndex]);
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
    setPersonalityType(null);
  };

  return (
    <div className="bg-gradient-to-b from-purple-50 to-blue-50 min-h-screen text-gray-800 transition-colors duration-300">
      <NavWrapper />

      <section className="max-w-4xl mx-auto px-5 pt-[15px] pb-20">
        {!showResult ? (
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6 text-purple-700">
              {currentStep === 0 ? "Tes Kepribadian Interaktif" : `Pertanyaan ${currentStep + 1}/${questions.length}`}
            </h1>

            {currentStep === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex justify-center mb-6">
                  <i className="ri-psychotherapy-line text-6xl text-purple-500"></i>
                </div>
                <p className="text-lg mb-6">
                  Kuiz interaktif ini akan membantu Anda memahami kepribadian secara mendalam serta menghubungkan Anda dengan orang-orang yang benar-benar cocok.
                </p>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <i className="ri-search-line text-2xl text-purple-500 mr-3 mt-1"></i>
                    <div>
                      <h3 className="font-semibold text-lg">Lebih dari Sekadar Pertanyaan</h3>
                      <p className="text-gray-600">Pertanyaan dirancang khusus untuk mengungkap sisi autentik dirimu. Temukan pola tersembunyi dalam cara kamu berpikir dan berinteraksi.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-user-heart-line text-2xl text-purple-500 mr-3 mt-1"></i>
                    <div>
                      <h3 className="font-semibold text-lg">Temukan Tipe Kepribadianmu</h3>
                      <p className="text-gray-600">Pelajari tipe mana yang paling sesuai denganmu. Dapatkan wawasan tentang kekuatan dan tantangan yang kamu hadapi.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-team-line text-2xl text-purple-500 mr-3 mt-1"></i>
                    <div>
                      <h3 className="font-semibold text-lg">Connect To People</h3>
                      <p className="text-gray-600">Temukan teman, rekan kerja, dan calon pasangan yang dapat melengkapi kepribadianmu!</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Mulai Tes Kepribadian <i className="ri-arrow-right-line ml-2"></i>
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="mb-6">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full"
                      style={{ width: `${(currentStep / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold mb-8">{questions[currentStep - 1].question}</h2>

                <div className="space-y-4">
                  {questions[currentStep - 1].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 transition-all duration-200"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <i className="ri-star-smile-line text-6xl text-yellow-500 mb-4"></i>
              <h1 className="text-3xl font-bold text-purple-700 mb-2">Hasil Tes Kepribadian Anda</h1>
              <h2 className="text-4xl font-bold mb-6 text-purple-600">{personalityType}</h2>
            </div>

            <div className="mb-8 p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Deskripsi</h3>
              <p className="text-gray-700">{personalityTypes[personalityType].description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-700">Kekuatan</h3>
                <ul className="space-y-2">
                  {personalityTypes[personalityType].strengths.map((strength, index) => (
                    <li key={index} className="flex items-center">
                      <i className="ri-checkbox-circle-fill text-green-500 mr-2"></i>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-yellow-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">Tantangan</h3>
                <ul className="space-y-2">
                  {personalityTypes[personalityType].challenges.map((challenge, index) => (
                    <li key={index} className="flex items-center">
                      <i className="ri-alert-fill text-yellow-500 mr-2"></i>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Tipe Kepribadian yang Cocok</h3>
              <div className="flex flex-wrap gap-3">
                {personalityTypes[personalityType].matches.map((match, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                    {match}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="mb-6 text-gray-600">Ingin mengetahui lebih dalam tentang kepribadian Anda dan cara berinteraksi dengan orang lain?</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg mr-4">
                Daftar Premium <i className="ri-vip-crown-line ml-2"></i>
              </button>
              <button
                onClick={restartQuiz}
                className="bg-white hover:bg-gray-100 text-purple-600 font-bold py-3 px-6 border border-purple-600 rounded-lg"
              >
                Ulangi Tes <i className="ri-restart-line ml-2"></i>
              </button>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}