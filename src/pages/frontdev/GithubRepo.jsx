import React from 'react'
import NavNavigate from '../../components/NavNavigate'
import Footer from '../../components/Footer'

export default function GithubRepo() {
    return (
        <div className="bg-gray-50 min-h-screen text-gray-800 transition-colors duration-300">
            <NavNavigate />
            <section className="max-w-4xl mx-auto pt-[95px]">
                <div className="p-4">
                    <div className="projects-container">
                        <article className="graph mb-8">
                            <div className="graph-image">
                                <img src="/assets/github-contribution-grid-snake-dark.svg" alt="" />
                                <img src="https://github-readme-activity-graph.vercel.app/graph?username=fatkhurrhn&theme=github-compact&hide_border=true"
                                    className="border-none" height="auto" alt="by fatkhurhhn" />
                            </div>
                        </article>

                        {/* GitHub Repositories Section */}
                        <div className="repositories-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Sample Repository Cards */}
                            <div className="repository-card border border-gray-200 rounded-md p-4 hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-semibold text-blue-600">Repository Name</h3>
                                    <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">Public</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-2">Repository description goes here...</p>
                                <div className="flex items-center mt-4 text-xs text-gray-500">
                                    <span className="flex items-center mr-4">
                                        <span className="w-3 h-3 rounded-full bg-yellow-400 mr-1"></span>
                                        JavaScript
                                    </span>
                                    <span className="flex items-center mr-4">
                                        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" className="mr-1">
                                            <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                        </svg>
                                        42
                                    </span>
                                    <span className="flex items-center">
                                        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" className="mr-1">
                                            <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                                        </svg>
                                        12
                                    </span>
                                </div>
                            </div>

                            {/* Add more repository cards as needed */}
                            <div className="repository-card border border-gray-200 rounded-md p-4 hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-semibold text-blue-600">Another Project</h3>
                                    <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">Public</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-2">Another repository description...</p>
                                <div className="flex items-center mt-4 text-xs text-gray-500">
                                    <span className="flex items-center mr-4">
                                        <span className="w-3 h-3 rounded-full bg-blue-400 mr-1"></span>
                                        TypeScript
                                    </span>
                                    <span className="flex items-center mr-4">
                                        <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" className="mr-1">
                                            <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                        </svg>
                                        28
                                    </span>
                                    <span className="flex items-center">
                                        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" className="mr-1">
                                            <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                                        </svg>
                                        5
                                    </span>
                                </div>
                            </div>

                            {/* You can add more repository cards here */}
                        </div>

                        {/* GitHub Stats Section */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img 
                                src="https://github-readme-stats.vercel.app/api?username=fatkhurrhn&show_icons=true&theme=default&hide_border=true" 
                                alt="GitHub Stats" 
                                className="w-full"
                            />
                            <img 
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=fatkhurrhn&layout=compact&theme=default&hide_border=true" 
                                alt="Top Languages" 
                                className="w-full"
                            />
                        </div>

                        {/* GitHub Streak Stats */}
                        <div className="mt-4">
                            <img 
                                src="https://github-readme-streak-stats.herokuapp.com/?user=fatkhurrhn&theme=default&hide_border=true" 
                                alt="GitHub Streak" 
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}