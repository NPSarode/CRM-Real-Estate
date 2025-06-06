import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const benefits = [
  'Increase productivity and close more deals',
  'Stay organized with intuitive task management',
  'Generate detailed reports and analytics',
  'Automate repetitive tasks and follow-ups'
];

export default function BenefitsSection() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Transform your real estate business
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate('/login')}
              className="mt-8 inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Start Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80"
              alt="Real estate dashboard"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}