import React from 'react';
import { Sprout, Users, TrendingUp, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About AgroMarket
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Revolutionizing agricultural trade by connecting farmers directly with buyers,
          ensuring fair prices, and streamlining the supply chain.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300">
            To empower farmers and agricultural businesses by providing a transparent,
            efficient, and sustainable marketplace that promotes fair trade and supports
            local communities.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
          <p className="text-gray-600 dark:text-gray-300">
            To become the leading digital platform for agricultural trade, fostering
            innovation and sustainability in the farming sector while ensuring food
            security for future generations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <div className="bg-green-100 dark:bg-green-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Sprout className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sustainable Farming</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Supporting eco-friendly agricultural practices
          </p>
        </div>

        <div className="text-center">
          <div className="bg-green-100 dark:bg-green-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community Focus</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Building strong relationships between farmers and buyers
          </p>
        </div>

        <div className="text-center">
          <div className="bg-green-100 dark:bg-green-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Market Growth</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Expanding opportunities for agricultural businesses
          </p>
        </div>

        <div className="text-center">
          <div className="bg-green-100 dark:bg-green-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Secure Platform</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Ensuring safe and reliable transactions
          </p>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Join Our Growing Community
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">5000+</div>
            <div className="text-gray-600 dark:text-gray-300">Active Farmers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">10K+</div>
            <div className="text-gray-600 dark:text-gray-300">Monthly Transactions</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">Countries Served</div>
          </div>
        </div>
      </div>
    </div>
  );
}