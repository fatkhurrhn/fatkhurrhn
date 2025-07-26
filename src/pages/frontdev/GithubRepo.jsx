import React, { useState, useEffect } from 'react';
import NavNavigate from '../../components/frontdev/NavNavigate';
import Footer from '../../components/frontdev/Footer';
import { Link } from 'react-router-dom';
import ChatRoomComponents from '../../components/ChatRoom';

export default function GithubRepo() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const username = 'fatkhurrhn';

    // Fungsi untuk mengambil semua repository
    const fetchAllRepositories = async () => {
        let page = 1;
        let allRepos = [];
        let hasMore = true;

        try {
            while (hasMore) {
                const response = await fetch(`https://api.github.com/users/${username}/repos?page=${page}&per_page=100&sort=updated`);
                const data = await response.json();

                if (data.length === 0) {
                    hasMore = false;
                } else {
                    allRepos = [...allRepos, ...data];
                    page++;
                }
            }

            // Urutkan berdasarkan update terbaru
            allRepos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
            setRepos(allRepos);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching repos:', err);
            setError('Gagal memuat repository. Coba lagi nanti.');
            setLoading(false);
        }
    };

    // Load data pertama kali
    useEffect(() => {
        fetchAllRepositories();

        // Update setiap 60 detik
        const interval = setInterval(fetchAllRepositories, 60000);

        // Bersihkan interval saat komponen unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen text-gray-800 transition-colors duration-300">
            <NavNavigate />
            <ChatRoomComponents/>
            <section className="max-w-4xl mx-auto pt-4 p-4">
                <div className="">

                    <div className="bg-white rounded-2xl bordir bordir-gray-500 space-y-4">
                        <img
                            src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=github-compact&hide_border=true`}
                            className="w-full h-auto rounded-md"
                        />
                    </div>


                    {/* GitHub Repositories Section */}
                    <div className="mb-8">

                        {loading && (
                            <div className="text-center py-8">
                                <p>Memuat repository...</p>
                            </div>
                        )}

                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                                {error}
                            </div>
                        )}

                        <div className="repositories-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                            {repos.map((repo) => (

                                <Link to={repo.html_url}>
                                    <div key={repo.id} className="repository-card border border-gray-200 rounded-md p-4 hover:shadow-md transition-shadow">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-lg font-semibold text-blue-600">
                                                {repo.name}
                                            </h3>
                                            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                                                {repo.private ? 'Private' : 'Public'}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                                            {repo.description || 'Tidak ada deskripsi'}
                                        </p>
                                        <div className="flex items-center mt-4 text-xs text-gray-500">
                                            {repo.language && (
                                                <span className="flex items-center mr-4">
                                                    <span className="w-3 h-3 rounded-full bg-blue-400 mr-1"></span>
                                                    {repo.language}
                                                </span>
                                            )}
                                            <span className="flex items-center mr-4">
                                                <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" className="mr-1">
                                                    <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                                </svg>
                                                {repo.stargazers_count}
                                            </span>
                                            <span className="flex items-center">
                                                <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" className="mr-1">
                                                    <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                                                </svg>
                                                {repo.forks_count}
                                            </span>
                                        </div>
                                        <div className="mt-2 text-xs text-gray-400">
                                            Diperbarui: {new Date(repo.updated_at).toLocaleString('id-ID')}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}