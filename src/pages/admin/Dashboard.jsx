import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { signOut } from "firebase/auth";
import { collection, getCountFromServer } from "firebase/firestore";
import LogoutConfirmModal from "../../components/LogoutConfirmModal";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

export default function Dashboard() {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [stats, setStats] = useState({
    animes: 0,
    reels: 0,
    projects: 0,
    certificates: 0,
    loading: true
  });
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get counts from Firestore
        const [animeSnapshot, reelsSnapshot, projectsSnapshot, certsSnapshot] = 
          await Promise.all([
            getCountFromServer(collection(db, 'animes')),
            getCountFromServer(collection(db, 'anime-story')),
            getCountFromServer(collection(db, 'my-project')),
            getCountFromServer(collection(db, 'my-certificate'))
          ]);

        setStats({
          animes: animeSnapshot.data().count,
          reels: reelsSnapshot.data().count,
          projects: projectsSnapshot.data().count,
          certificates: certsSnapshot.data().count,
          loading: false
        });

      } catch (error) {
        console.error("Error fetching data: ", error);
        setStats(prev => ({...prev, loading: false}));
      }
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error logging out: ", error);
      alert("Logout gagal: " + error.message);
    }
  };

  const chartData = {
    labels: ['Animes', 'Reels', 'Projects', 'Certificates'],
    datasets: [{
      data: [stats.animes, stats.reels, stats.projects, stats.certificates],
      backgroundColor: [
        'rgba(101, 116, 205, 0.8)',
        'rgba(85, 190, 175, 0.8)',
        'rgba(255, 159, 67, 0.8)',
        'rgba(255, 99, 132, 0.8)'
      ],
      borderColor: [
        'rgba(101, 116, 205, 1)',
        'rgba(85, 190, 175, 1)',
        'rgba(255, 159, 67, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1,
      hoverOffset: 10
    }]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      <LogoutConfirmModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Dashboard Admin
            </h1>
            <p className="text-gray-500 mt-1">Manage your content and analytics</p>
          </div>
          <button
            onClick={() => setShowLogoutModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white text-red-500 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 border border-red-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
            </svg>
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${activeTab === 'overview' ? 'bg-white text-indigo-600 shadow-sm border-t border-l border-r border-gray-200' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${activeTab === 'analytics' ? 'bg-white text-indigo-600 shadow-sm border-t border-l border-r border-gray-200' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Analytics
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <StatCard 
                title="Animes" 
                value={stats.animes} 
                icon="🎬"
                color="from-indigo-100 to-indigo-50"
                loading={stats.loading}
              />
              <StatCard 
                title="Reels" 
                value={stats.reels} 
                icon="🎥"
                color="from-teal-100 to-teal-50"
                loading={stats.loading}
              />
              <StatCard 
                title="Projects" 
                value={stats.projects} 
                icon="💻"
                color="from-amber-100 to-amber-50"
                loading={stats.loading}
              />
              <StatCard 
                title="Certificates" 
                value={stats.certificates} 
                icon="🏆"
                color="from-rose-100 to-rose-50"
                loading={stats.loading}
              />
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <DashboardCard 
                title="Animes"
                description="Manage anime content"
                to="/dashboard/animes"
                icon={
                  <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
                  </svg>
                }
              />
              <DashboardCard 
                title="Reels"
                description="Manage anime reels"
                to="/dashboard/animes/reels"
                icon={
                  <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                }
              />
              <DashboardCard 
                title="Projects"
                description="Manage coding projects"
                to="/dashboard/frontdev/projects"
                icon={
                  <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                }
              />
              <DashboardCard 
                title="Certificates"
                description="Manage certificates"
                to="/dashboard/frontdev/certificates"
                icon={
                  <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                }
              />
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Doughnut Chart */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4">Content Distribution</h3>
                <div className="h-64">
                  <Doughnut 
                    data={chartData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'right',
                        },
                        tooltip: {
                          callbacks: {
                            label: function(context) {
                              return `${context.label}: ${context.raw} items`;
                            }
                          }
                        }
                      },
                      cutout: '70%',
                    }}
                  />
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <ActivityItem 
                    title="New anime added"
                    time="2 hours ago"
                    icon="➕"
                  />
                  <ActivityItem 
                    title="Project updated"
                    time="5 hours ago"
                    icon="🔄"
                  />
                  <ActivityItem 
                    title="Certificate uploaded"
                    time="1 day ago"
                    icon="📄"
                  />
                  <ActivityItem 
                    title="Reel edited"
                    time="2 days ago"
                    icon="🎬"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Stat Card Component
function StatCard({ title, value, icon, color, loading }) {
  return (
    <div className={`bg-gradient-to-br ${color} p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all`}>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1">
            {loading ? (
              <div className="h-8 w-12 bg-gray-200 rounded animate-pulse"></div>
            ) : (
              value
            )}
          </h3>
        </div>
        <span className="text-3xl opacity-80">{icon}</span>
      </div>
    </div>
  );
}

// Dashboard Card Component
function DashboardCard({ title, description, to, icon }) {
  return (
    <Link 
      to={to} 
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 flex flex-col group"
    >
      <div className="mb-4">
        <div className="w-12 h-12 rounded-lg bg-opacity-20 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h2 className="text-lg font-semibold mb-1 group-hover:text-indigo-600 transition-colors">{title}</h2>
      <p className="text-gray-500 text-sm mt-auto">{description}</p>
    </Link>
  );
}

// Activity Item Component
function ActivityItem({ title, time, icon }) {
  return (
    <div className="flex items-start gap-3">
      <div className="bg-gray-100 p-2 rounded-full">
        <span className="text-sm">{icon}</span>
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
    </div>
  );
}