import React from 'react';
import { Phone, Mail, MapPin, DollarSign, Clock } from 'lucide-react';
import { Lead } from '../../types/lead';

interface LeadCardProps {
  lead: Lead;
  onClick: () => void;
}

const statusColors = {
  new: 'bg-blue-500',
  contacted: 'bg-yellow-500',
  qualified: 'bg-green-500',
  proposal: 'bg-purple-500',
  negotiation: 'bg-orange-500',
  closed: 'bg-gray-500'
};

export default function LeadCard({ lead, onClick }: LeadCardProps) {
  return (
    <div 
      className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold">{lead.name}</h3>
          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${statusColors[lead.status]}`}>
            {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
          </span>
        </div>
        <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
          <span className="text-sm font-medium">{lead.name.split(' ').map(n => n[0]).join('')}</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-gray-300">
          <Phone className="w-4 h-4 mr-2" />
          <span className="text-sm">{lead.phone}</span>
        </div>
        <div className="flex items-center text-gray-300">
          <Mail className="w-4 h-4 mr-2" />
          <span className="text-sm">{lead.email}</span>
        </div>
        <div className="flex items-center text-gray-300">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{lead.location}</span>
        </div>
        <div className="flex items-center text-gray-300">
          <DollarSign className="w-4 h-4 mr-2" />
          <span className="text-sm">${lead.budget.toLocaleString()}</span>
        </div>
        <div className="flex items-center text-gray-300">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm">Last Contact: {new Date(lead.lastContact).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-700">
        <p className="text-sm text-gray-400">{lead.notes}</p>
      </div>
    </div>
  );
}