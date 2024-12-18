import React from 'react';
import { TrendingUp, Truck, Shield, Users } from 'lucide-react';

const features = [
  {
    name: 'Fair Market Prices',
    description: 'Get real-time market prices and ensure fair trade for both farmers and buyers.',
    icon: TrendingUp,
  },
  {
    name: 'Secure Logistics',
    description: 'Reliable transportation and delivery tracking for your agricultural products.',
    icon: Truck,
  },
  {
    name: 'Verified Users',
    description: 'All users are verified to ensure safe and trustworthy transactions.',
    icon: Shield,
  },
  {
    name: 'Direct Connections',
    description: 'Connect directly with farmers and buyers without intermediaries.',
    icon: Users,
  },
];

export default function FeatureSection() {
  return (
    <div className="py-24 bg-white dark:bg-gray-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600 dark:text-green-400">
            Why Choose Us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to trade agricultural products
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Our platform provides all the tools and features you need to succeed in agricultural trading,
            from market insights to secure payments and logistics.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon className="h-5 w-5 flex-none text-green-600 dark:text-green-400" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}