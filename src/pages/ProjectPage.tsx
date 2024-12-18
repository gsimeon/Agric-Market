import React from 'react';
import { useParams } from 'react-router-dom';
import { Map, Calendar, BarChart2, Camera, Download, Share2 } from 'lucide-react';

const ProjectPage = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would come from an API
  const projectData = {
    id: parseInt(id),
    name: "Amazon Rainforest Sector A",
    region: "Brazil, South America",
    coverage: 85.4,
    lastUpdated: "2024-03-15",
    coordinates: "3.4653° S, 62.2159° W",
    mainImage: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1200&h=400",
    historicalData: [
      { date: '2023-10', coverage: 84.2 },
      { date: '2023-11', coverage: 84.8 },
      { date: '2023-12', coverage: 85.0 },
      { date: '2024-01', coverage: 85.2 },
      { date: '2024-02', coverage: 85.3 },
      { date: '2024-03', coverage: 85.4 },
    ]
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80">
        <img
          src={projectData.mainImage}
          alt={projectData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {projectData.name}
            </h1>
            <p className="text-gray-200">{projectData.region}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={<Map className="h-5 w-5 text-green-600" />}
            label="Current Coverage"
            value={`${projectData.coverage}%`}
          />
          <StatCard
            icon={<Calendar className="h-5 w-5 text-green-600" />}
            label="Last Updated"
            value={projectData.lastUpdated}
          />
          <StatCard
            icon={<BarChart2 className="h-5 w-5 text-green-600" />}
            label="Monthly Change"
            value="+0.1%"
          />
          <StatCard
            icon={<Camera className="h-5 w-5 text-green-600" />}
            label="Latest Capture"
            value="2 days ago"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 mb-8">
          <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Download className="h-5 w-5" />
            <span>Export Data</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-200">
            <Share2 className="h-5 w-5" />
            <span>Share</span>
          </button>
        </div>

        {/* Map Placeholder */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Location</h2>
          <div className="bg-gray-100 dark:bg-gray-700 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Interactive map would be displayed here</p>
          </div>
        </div>

        {/* Historical Data */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Coverage History</h2>
          <div className="bg-gray-100 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Coverage trend chart would be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
    <div className="flex items-center space-x-3">
      {icon}
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
        <p className="text-lg font-semibold text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  </div>
);

export default ProjectPage;