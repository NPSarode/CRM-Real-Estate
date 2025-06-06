import React from 'react';
import { Clock, MapPin, Mail, Phone, FileText } from 'lucide-react';
import { Appointment } from '../../types/appointment';

interface AppointmentCardProps {
  appointment: Appointment;
  onClick: () => void;
}

const typeColors = {
  viewing: 'bg-blue-500',
  meeting: 'bg-purple-500',
  inspection: 'bg-orange-500'
};

export default function AppointmentCard({ appointment, onClick }: AppointmentCardProps) {
  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div 
      onClick={onClick}
      className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors cursor-pointer"
    >
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-500 rounded-full flex-shrink-0 flex items-center justify-center">
              <span className="text-sm font-medium">
                {appointment.clientName.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">{appointment.clientName}</h3>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeColors[appointment.type]}`}>
                  {appointment.type.charAt(0).toUpperCase() + appointment.type.slice(1)}
                </span>
                <span className="text-sm text-gray-400">
                  {formatTime(appointment.dateTime)} • {appointment.duration} min
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center text-gray-300">
            <MapPin className="w-4 h-4 mr-2 text-gray-400" />
            <span className="text-sm truncate">{appointment.propertyTitle}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <Phone className="w-4 h-4 mr-2 text-gray-400" />
            <span className="text-sm">{appointment.clientPhone}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <Mail className="w-4 h-4 mr-2 text-gray-400" />
            <span className="text-sm truncate">{appointment.clientEmail}</span>
          </div>
        </div>

        {appointment.notes && (
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-start gap-2">
              <FileText className="w-4 h-4 mt-1 text-gray-400" />
              <p className="text-sm text-gray-300 line-clamp-2">{appointment.notes}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}