import React from 'react';
import { Building2, Users, Calendar, BarChart } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Users,
    title: 'Lead Management',
    description: 'Track and nurture leads through your sales pipeline with ease'
  },
  {
    icon: Building2,
    title: 'Property Listings',
    description: 'Manage your property portfolio with detailed insights and analytics'
  },
  {
    icon: Calendar,
    title: 'Appointment Scheduling',
    description: 'Streamline your viewing appointments and meetings in one place'
  },
  {
    icon: BarChart,
    title: 'Performance Analytics',
    description: 'Get detailed insights into your sales performance and growth'
  }
];

export default function FeaturesGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Everything you need to succeed
        </h2>
        <p className="text-lg text-gray-400">
          Powerful tools to help you manage your real estate business effectively
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-colors"
          >
            <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}