import React, { useState } from 'react';
import NavNavigate from '../../components/frontdev/NavNavigate';
import Footer from '../../components/frontdev/Footer';

export default function HomePageTools() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Tools' },
    { id: 'text', name: 'Text Tools' },
    { id: 'code', name: 'Code Tools' },
    { id: 'web', name: 'Web Utilities' }
  ];

  const tools = [
    {
      title: "Password Generator",
      icon: "ri-key-2-line",
      category: 'code',
      description: "Create secure passwords instantly",
      color: "bg-gradient-to-br from-blue-500 to-cyan-400"
    },
    {
      title: "Text Case Converter",
      icon: "ri-text",
      category: 'text',
      description: "Convert between different text cases",
      color: "bg-gradient-to-br from-purple-500 to-fuchsia-400"
    },
    {
      title: "URL Encoder/Decoder",
      icon: "ri-link",
      category: 'web',
      description: "Encode and decode URL strings",
      color: "bg-gradient-to-br from-green-500 to-emerald-400"
    },
    {
      title: "JSON Formatter",
      icon: "ri-braces-line",
      category: 'code',
      description: "Beautify and validate JSON",
      color: "bg-gradient-to-br from-amber-500 to-yellow-400"
    },
    {
      title: "Base64 Converter",
      icon: "ri-file-code-line",
      category: 'code',
      description: "Encode/decode Base64 strings",
      color: "bg-gradient-to-br from-red-500 to-pink-400"
    },
    {
      title: "QR Code Generator",
      icon: "ri-qr-scan-2-line",
      category: 'web',
      description: "Create QR codes from text/URLs",
      color: "bg-gradient-to-br from-indigo-500 to-violet-400"
    },
    {
      title: "HTML Escape",
      icon: "ri-code-s-slash-line",
      category: 'web',
      description: "Escape/unescape HTML entities",
      color: "bg-gradient-to-br from-sky-500 to-blue-400"
    },
    {
      title: "Regex Tester",
      icon: "ri-regexp",
      category: 'code',
      description: "Test regular expressions",
      color: "bg-gradient-to-br from-rose-500 to-red-400"
    }
  ];

  const filteredTools = activeCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <NavNavigate />
      
      <section className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 p-8 text-white mb-12">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-3">Developer Tools</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Powerful utilities to streamline your development workflow
            </p>
            <div className="mt-6 flex">
              <div className="relative flex-1 max-w-md">
                <input 
                  type="text" 
                  placeholder="Search tools..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 bg-opacity-50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <i className="ri-search-line absolute left-3 top-3.5 text-gray-400"></i>
              </div>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-500 bg-opacity-20"></div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-purple-500 bg-opacity-20"></div>
        </div>

        {/* Categories */}
        <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeCategory === category.id 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTools.map((tool, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className={`h-2 ${tool.color}`}></div>
              <div className="p-5">
                <div className={`w-12 h-12 rounded-lg ${tool.color} flex items-center justify-center text-white text-xl mb-4`}>
                  <i className={tool.icon}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <a 
                  href="#"
                  className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium"
                >
                  Open Tool <i className="ri-arrow-right-line ml-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <div className="text-3xl font-bold text-gray-800 mb-2">12+</div>
            <div className="text-gray-500">Total Tools</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <div className="text-3xl font-bold text-gray-800 mb-2">5K+</div>
            <div className="text-gray-500">Monthly Users</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <div className="text-3xl font-bold text-gray-800 mb-2">98%</div>
            <div className="text-gray-500">Satisfaction</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <div className="text-3xl font-bold text-gray-800 mb-2">24/7</div>
            <div className="text-gray-500">Availability</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Need a Custom Tool?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We can build specialized tools tailored to your specific development needs.
          </p>
          <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-md">
            Request Custom Tool
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}