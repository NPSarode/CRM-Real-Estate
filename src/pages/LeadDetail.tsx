import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Phone, Mail, MapPin, DollarSign, Clock, Home, User, ArrowLeft, Edit, Trash2, History, MessageSquare } from 'lucide-react';
import { mockLeads } from '../data/mockLeads';

export default function LeadDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const lead = mockLeads.find(l => l.id === id);

  if (!lead) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">Lead not found</p>
      </div>
    );
  }

  const statusColors = {
    new: 'bg-blue-500',
    contacted: 'bg-yellow-500',
    qualified: 'bg-green-500',
    proposal: 'bg-purple-500',
    negotiation: 'bg-orange-500',
    closed: 'bg-gray-500'
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/leads')}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold">Lead Details</h1>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            <Edit className="w-4 h-4" />
            Edit Lead
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Lead Overview */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center">
                <span className="text-xl font-medium">
                  {lead.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{lead.name}</h2>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${statusColors[lead.status]}`}>
                  {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 mr-3" />
                    <span>{lead.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 mr-3" />
                    <span>{lead.email}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-3" />
                    <span>{lead.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Property Requirements</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Home className="w-5 h-5 mr-3" />
                    <span>{lead.propertyType}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <DollarSign className="w-5 h-5 mr-3" />
                    <span>${lead.budget.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <User className="w-5 h-5 mr-3" />
                    <span>Assigned to: {lead.assignedAgent}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Notes</h3>
              <button className="text-sm text-indigo-400 hover:text-indigo-300">Add Note</button>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <p className="text-gray-300">{lead.notes}</p>
            </div>
          </div>

          {/* Activity Timeline */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Activity Timeline</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                    <History className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">Phone call completed</p>
                    <p className="text-sm text-gray-400">Discussed property requirements</p>
                    <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <Phone className="w-4 h-4" />
                Schedule Call
              </button>
              <button className="w-full flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <MessageSquare className="w-4 h-4" />
                Send Message
              </button>
              <button className="w-full flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <Home className="w-4 h-4" />
                Schedule Viewing
              </button>
            </div>
          </div>

          {/* Upcoming Tasks */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Upcoming Tasks</h3>
            <div className="space-y-3">
              {[1, 2].map((i) => (
                <div key={i} className="p-3 bg-gray-700 rounded-lg">
                  <p className="font-medium">Follow-up call</p>
                  <p className="text-sm text-gray-400">Tomorrow at 2:00 PM</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}