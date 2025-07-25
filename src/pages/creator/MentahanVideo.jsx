import React, { useState, useEffect } from 'react';
import NavWrapper from '../../components/creator/NavCreator';
import Footer from '../../components/creator/Footer';

export default function HomePage() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizResult, setQuizResult] = useState(null);
  
  // Efek animasi saat masuk
  useEffect(() => {
    document.body.style.opacity = '1';
  }, []);

  const questions = [
    {
      question: "Apa warna favoritmu?",
      answers: [
        { text: "Merah", value: "energetic" },
        { text: "Biru", value: "calm" },
        { text: "Hijau", value: "nature" },
        { text: "Hitam", value: "mysterious" }
      ]
    },
    {
      question: "Aktivitas weekend favorit?",
      answers: [
        { text: "Nongkrong dengan teman", value: "social" },
        { text: "Nonton film/series", value: "chill" },
        { text: "Olahraga", value: "active" },
        { text: "Tidur seharian", value: "lazy" }
      ]
    },
    {
      question: "Pilih makanan:",
      answers: [
        { text: "Sushi", value: "adventurous" },
        { text: "Pizza", value: "classic" },
        { text: "Salad", value: "healthy" },
        { text: "Es krim", value: "sweet" }
      ]
    }
  ];

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        // Hitung hasil quiz
        calculateResult();
      }
    }, 800);
  };

  const calculateResult = () => {
    // Logika untuk menentukan hasil quiz
    const result = {
      title: "Kepribadian Kreatif!",
      description: "Berdasarkan jawabanmu, kamu adalah orang yang penuh energi dan kreatif! Cocok banget buat jadi bagian dari komunitas kami.",
      image: "https://example.com/result-image.jpg" // Ganti dengan URL gambar hasil
    };
    setQuizResult(result);
  };

  const restartQuiz = () => {
    setShowQuiz(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setQuizResult(null);
    setTimeout(() => setShowQuiz(true), 300);
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen text-gray-800 transition-all duration-500 opacity-0">
      <NavWrapper />
      
      <section className="max-w-4xl mx-auto px-5 pt-8 pb-16">
        {!showQuiz && !quizResult ? (
          <div className="text-center py-12 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              Hai, Sobat Kreatif! <i className="ri-emotion-happy-line ml-2"></i>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Yuk ikuti quiz singkat ini untuk mengetahui kepribadian kreatifmu dan dapatkan rekomendasi konten spesial!
            </p>
            <button 
              onClick={() => setShowQuiz(true)}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center mx-auto"
            >
              Mulai Quiz <i className="ri-arrow-right-line ml-2"></i>
            </button>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                  <i className={`ri-${['music-2-line', 'camera-line', 'pen-nib-line', 'heart-line'][item-1]} text-3xl text-purple-500 mb-3`}></i>
                  <h3 className="font-semibold">Fitur {item}</h3>
                  <p className="text-sm mt-2 text-gray-600">Deskripsi singkat fitur {item}</p>
                </div>
              ))}
            </div>
          </div>
        ) : quizResult ? (
          <div className="text-center py-12 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">{quizResult.title}</h2>
              <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center">
                <i className="ri-award-line text-5xl text-purple-500"></i>
              </div>
              <p className="text-lg mb-6">{quizResult.description}</p>
              <p className="mb-8">
                <i className="ri-instagram-line text-2xl text-pink-500 mr-2"></i>
                Follow Instagramku untuk konten lebih keren!
              </p>
              <button 
                onClick={restartQuiz}
                className="px-6 py-2 bg-gray-100 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300"
              >
                Coba Lagi <i className="ri-refresh-line ml-1"></i>
              </button>
            </div>
          </div>
        ) : (
          <div className="quiz-container max-w-md mx-auto">
            <div className="progress-bar bg-gray-200 rounded-full h-2 mb-8">
              <div 
                className="progress-bar-fill bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500" 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
            
            <div className="quiz-question bg-white rounded-xl shadow-sm p-8 text-center">
              <h3 className="text-xl font-semibold mb-6">{questions[currentQuestion].question}</h3>
              <div className="grid grid-cols-2 gap-4">
                {questions[currentQuestion].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(answer)}
                    className={`p-4 rounded-lg border transition-all duration-300 ${
                      selectedAnswer === answer 
                        ? 'bg-gradient-to-r from-purple-100 to-blue-100 border-purple-300 scale-95' 
                        : 'bg-white hover:bg-gray-50 border-gray-200 hover:border-purple-200'
                    }`}
                  >
                    {answer.text}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-6 text-center text-sm text-gray-500">
              Pertanyaan {currentQuestion + 1} dari {questions.length}
            </div>
          </div>
        )}
      </section>
      
      <Footer />
      
      {/* Tambahkan animasi floating */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}