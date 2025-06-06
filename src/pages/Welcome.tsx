import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Users, Calendar, BarChart, ArrowRight } from 'lucide-react';

const features = [
  { icon: Users, label: 'Lead Management' },
  { icon: Building2, label: 'Property Listings' },
  { icon: Calendar, label: 'Smart Scheduling' },
  { icon: BarChart, label: 'Real-time Analytics' }
];

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
          alt="Modern building"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="bg-indigo-500/10 p-4 rounded-2xl">
              <Building2 className="w-16 h-16 text-indigo-500" />
            </div>
          </div>

          {/* Main Text */}
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Real Estate CRM
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Your all-in-one solution for managing properties, leads, and growing your real estate business
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 hover:bg-gray-800/70 transition-colors"
              >
                <div className="flex flex-col items-center gap-2">
                  <feature.icon className="w-8 h-8 text-indigo-400" />
                  <span className="text-sm font-medium text-gray-300">{feature.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => navigate('/login')}
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}