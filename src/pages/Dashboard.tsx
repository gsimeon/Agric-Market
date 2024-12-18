import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Map, Calendar } from 'lucide-react';

const mockProjects = [
  {
    id: 1,
    name: "Amazon Rainforest Sector A",
    region: "Brazil, South America",
    lastUpdated: "2024-03-15",
    coverage: 85.4,
    trend: "stable",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    id: 2,
    name: "Congo Basin Monitor",
    region: "Democratic Republic of Congo, Africa",
    lastUpdated: "2024-03-14",
    coverage: 72.8,
    trend: "declining",
    image: "https://images.unsplash.com/photo-1469825790477-07f35dfb08e8?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    id: 3,
    name: "Pacific Northwest Study",
    region: "Oregon, USA",
    lastUpdated: "2024-03-13",
    coverage: 91.2,
    trend: "improving",
    image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&q=80&w=800&h=400"
  }
];

const Dashboard = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Projects</h1>
          <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <PlusCircle className="h-5 w-5" />
            <span>New Project</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-1">{project.name}</h3>
                  <p className="text-gray-200 text-sm">{project.region}</p>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <Map className="h-4 w-4" />
                    <span>Coverage: {project.coverage}%</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <Calendar className="h-4 w-4" />
                    <span>{project.lastUpdated}</span>
                  </div>
                </div>

                <div className={`text-sm font-medium ${
                  project.trend === 'improving' ? 'text-green-600' :
                  project.trend === 'declining' ? 'text-red-600' :
                  'text-yellow-600'
                }`}>
                  Trend: {project.trend.charAt(0).toUpperCase() + project.trend.slice(1)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;