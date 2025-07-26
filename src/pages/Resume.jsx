import React from 'react';
import NavNavigate from '../components/frontdev/NavNavigate';
import Footer from '../components/frontdev/Footer';
import { Link } from 'react-router-dom';
import ChatRoomComponents from '../components/ChatRoom';

export default function Resume() {
    return (
        <div className="bg-gray-50 min-h-screen text-gray-800">
            <NavNavigate />
            <ChatRoomComponents />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-12">
                {/* CV Cards - Simple Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Frontend Developer CV */}
                    <div className="bg-white p-5 rounded-lg border border-gray-200 hover:border-blue-200 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-100 p-2 rounded-full">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                            </div>
                            <div>
                                <h2 className="font-medium text-gray-900">Frontend Focus</h2>
                                <p className="text-sm text-gray-500">Technical skills</p>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-5">
                            React, Tailwind CSS, Git/Github, and modern web development.
                        </p>
                        <Link
                            to="/cv/frontdev.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-blue-600 hover:text-blue-800 inline-flex items-center"
                        >
                            View PDF <span className="ml-1">→</span>
                        </Link>
                    </div>

                    {/* Content Creator CV */}
                    <div className="bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-200 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-purple-100 p-2 rounded-full">
                                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <h2 className="font-medium text-gray-900">Creative Focus</h2>
                                <p className="text-sm text-gray-500">Content production</p>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-5">
                            Video, writing, and digital content creation.
                        </p>
                        <Link
                            to="/cv/creator.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-purple-600 hover:text-purple-800 inline-flex items-center"
                        >
                            View PDF <span className="ml-1">→</span>
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}