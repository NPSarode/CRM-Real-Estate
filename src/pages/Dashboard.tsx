import React from 'react';
import { Users, Building2, Calendar, TrendingUp } from 'lucide-react';

const stats = [
  { name: 'Active Leads', value: '245', icon: Users, change: '+12.5%' },
  { name: 'Listed Properties', value: '132', icon: Building2, change: '+8.2%' },
  { name: 'Appointments', value: '48', icon: Calendar, change: '+24.3%' },
  { name: 'Closed Deals', value: '12', icon: TrendingUp, change: '+10.1%' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">{stat.name}</p>
                <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
              </div>
              <div className="p-3 bg-gray-700 rounded-lg">
                <stat.icon className="w-6 h-6 text-indigo-400" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-green-400 text-sm font-medium">
                {stat.change}
              </span>
              <span className="text-gray-400 text-sm ml-2">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Recent Leads</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">JD</span>
                  </div>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-gray-400">Looking for 3 BHK</p>
                  </div>
                </div>
                <span className="text-sm text-gray-400">2 hours ago</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Upcoming Appointments</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                <div>
                  <p className="font-medium">Property Viewing</p>
                  <p className="text-sm text-gray-400">123 Main St, Suite 4B</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">3:00 PM</p>
                  <p className="text-sm text-gray-400">Today</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}