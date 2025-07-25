import React from 'react';
import NavWrapper from '../../components/creator/NavCreator';
import Footer from '../../components/creator/Footer';
import { Link } from 'react-router-dom';

export default function CreatorProfile() {
  const socialStats = [
    { platform: 'Instagram', followers: '90K+', icon: 'ri-instagram-line', color: 'text-pink-600' },
    { platform: 'TikTok', followers: '3K+', icon: 'ri-tiktok-line', color: 'text-gray-800' },
    { platform: 'LinkedIn', followers: '1K+', icon: 'ri-linkedin-box-line', color: 'text-blue-600' },
  ];

  const services = [
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Paid Promote',
      link: '/creator/paid-promote'
    },
    {
      icon: 'ri-image-line',
      title: 'Content Creation',
      link: '/creator/mentahan'
    },
    {
      icon: 'ri-lightbulb-flash-line',
      title: 'Strategy',
      link: '/creator/quotes'
    },
    {
      icon: 'ri-megaphone-line',
      title: 'Social Media',
      link: '/creator/more'
    }
  ];

  const skills = [
    { name: 'Content Strategy', level: 90 },
    { name: 'Social Media Growth', level: 85 },
    { name: 'Graphic Design', level: 80 },
    { name: 'Brand Collaboration', level: 75 }
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <NavWrapper />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-lg relative">
            <img 
              src="https://fatkhurrhn.vercel.app/preview.jpg" 
              alt="M. Fatkhurrohman"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 rounded-full border-2 border-white opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">M. FATKHURROHMAN</h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6">Digital Creator & Social Media Strategist</p>
          
          <div className="flex justify-center gap-4 mb-8">
            {socialStats.map((stat, index) => (
              <Link 
                key={index}
                to={`https://${stat.platform.toLowerCase()}.com/story.thur`} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${stat.color} hover:scale-110 text-2xl transition-transform`}
              >
                <i className={stat.icon}></i>
              </Link>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto">
            <span className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm">Content Creator</span>
            <span className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm">Social Media Expert</span>
            <span className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm">Digital Strategist</span>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {socialStats.map((stat, index) => (
              <div key={index} className="bg-gray-50 p-4 sm:p-6 rounded-xl hover:shadow-md transition-all text-center">
                <i className={`${stat.icon} ${stat.color} text-2xl sm:text-3xl mb-3`}></i>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{stat.followers}</h3>
                <p className="text-sm sm:text-base text-gray-600">{stat.platform}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-xl overflow-hidden shadow-lg aspect-square">
                <img
                  src="https://fatkhurrhn.vercel.app/preview.jpg"
                  alt="StoryThur"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                  <h2 className="text-white text-2xl sm:text-3xl font-bold">@story.thur</h2>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">My Digital Journey</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I transform simple ideas into meaningful digital experiences. Through daily quotes and reflective content, 
                I've built a community of <span className="font-semibold">90K+ followers</span> who engage with thoughtful 
                content that makes them pause and reflect.
              </p>
              
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition">
                  <span className="block text-lg sm:text-xl font-bold text-gray-900">90K+</span>
                  <span className="text-xs sm:text-sm text-gray-600">Followers</span>
                </div>
                <div className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition">
                  <span className="block text-lg sm:text-xl font-bold text-gray-900">100+</span>
                  <span className="text-xs sm:text-sm text-gray-600">Collabs</span>
                </div>
                <div className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition">
                  <span className="block text-lg sm:text-xl font-bold text-gray-900">25K+</span>
                  <span className="text-xs sm:text-sm text-gray-600">Engagement</span>
                </div>
              </div>
              
              <Link 
                to="https://instagram.com/story.thur" 
                target="_blank"
                className="inline-flex items-center px-5 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                <i className="ri-instagram-line mr-2"></i>
                Visit My Instagram
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">My Digital Skills</h2>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">What I Offer</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-transparent"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-indigo-100 group-hover:bg-indigo-600 transition-colors w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <i className={`${service.icon} text-xl text-indigo-600 group-hover:text-white transition-colors`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition">{service.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">Learn more about my {service.title.toLowerCase()} services</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <i className="ri-arrow-right-line text-gray-400 group-hover:text-indigo-600 transition"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">Content Highlights</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition">
                <img 
                  src={`https://source.unsplash.com/random/600x600/?quote,${item}`} 
                  alt={`Content ${item}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="https://instagram.com/story.thur" 
              target="_blank"
              className="inline-flex items-center px-5 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
            >
              <i className="ri-gallery-line mr-2"></i>
              View More on Instagram
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">What Brands Say</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Marketing Director, XYZ Brand</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Working with Fatkhur was a game-changer for our social media strategy. His content ideas increased our engagement by 40% in just two months."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Michael Tan</h4>
                  <p className="text-sm text-gray-600">CEO, ABC Startup</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The paid promotion through Fatkhur's account delivered exceptional ROI. We gained quality followers who actually engage with our brand."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Whether it's content creation, social strategy, or brand collaboration - I'm here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="https://wa.me/6282285512813"
              target="_blank"
              className="inline-flex items-center justify-center bg-white text-indigo-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition"
            >
              <i className="ri-whatsapp-line mr-2"></i>
              WhatsApp Me
            </Link>
            <Link
              to="mailto:fatkhurrohman@example.com"
              className="inline-flex items-center justify-center bg-transparent border border-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg transition"
            >
              <i className="ri-mail-line mr-2"></i>
              Email Me
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}