import React from 'react';
import { X, Phone, Mail, MapPin, DollarSign, Clock, Home, User } from 'lucide-react';
import { Lead } from '../../types/lead';

interface LeadDetailModalProps {
  lead: Lead;
  onClose: () => void;
}

export default function LeadDetailModal({ lead, onClose }: LeadDetailModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                <span className="text-lg font-medium">
                  {lead.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{lead.name}</h2>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 
                  ${lead.status === 'new' ? 'bg-blue-500' :
                    lead.status === 'contacted' ? 'bg-yellow-500' :
                    lead.status === 'qualified' ? 'bg-green-500' :
                    lead.status === 'proposal' ? 'bg-purple-500' :
                    lead.status === 'negotiation' ? 'bg-orange-500' : 'bg-gray-500'
                  }`}>
                  {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
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

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Additional Information</h3>
            <div className="flex items-center text-gray-300 mb-4">
              <Clock className="w-5 h-5 mr-3" />
              <span>Last Contact: {new Date(lead.lastContact).toLocaleDateString()}</span>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-medium mb-2">Notes</h4>
              <p className="text-gray-300">{lead.notes}</p>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-6 border-t border-gray-700">
            <button
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              onClick={onClose}
            >
              Close
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Edit Lead
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}