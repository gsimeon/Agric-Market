import React from 'react';
import { TreePine, GlobeIcon, BarChart3Icon } from 'lucide-react';

const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Monitor Earth's Green Cover
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Advanced tree canopy coverage estimation using satellite imagery and AI. 
            Track, analyze, and contribute to global forest conservation efforts.
          </p>
          <button
            onClick={onGetStarted}
            className="px-8 py-4 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Start Monitoring Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why Choose TreeCover?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<GlobeIcon className="h-8 w-8 text-green-600" />}
              title="Global Coverage"
              description="Monitor forest coverage anywhere on Earth using high-resolution satellite imagery"
            />
            <FeatureCard
              icon={<BarChart3Icon className="h-8 w-8 text-green-600" />}
              title="Accurate Analytics"
              description="Get precise estimations and detailed reports about canopy coverage changes"
            />
            <FeatureCard
              icon={<TreePine className="h-8 w-8 text-green-600" />}
              title="Conservation Impact"
              description="Contribute to global forest conservation efforts with real-time monitoring"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of environmental professionals monitoring forest coverage worldwide.
          </p>
          <button
            onClick={onGetStarted}
            className="px-8 py-4 bg-white text-green-700 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Free
          </button>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

export default LandingPage;