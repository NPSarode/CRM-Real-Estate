import React from 'react';
import { Clock, MapPin, Mail, Phone, FileText, Calendar } from 'lucide-react';
import { Appointment } from '../../types/appointment';
import { formatDateTime } from '../../utils/dateUtils';

interface AppointmentOverviewProps {
  appointment: Appointment;
}

const typeColors = {
  viewing: 'bg-blue-500',
  meeting: 'bg-purple-500',
  inspection: 'bg-orange-500'
};

export default function AppointmentOverview({ appointment }: AppointmentOverviewProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center">
          <span className="text-xl font-medium">
            {appointment.clientName.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">{appointment.clientName}</h2>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${typeColors[appointment.type]}`}>
              {appointment.type.charAt(0).toUpperCase() + appointment.type.slice(1)}
            </span>
            <span className="text-gray-400 text-sm">
              {formatDateTime(appointment.dateTime)} • {appointment.duration} min
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Information</h3>
          <div className="space-y-3">
            <a 
              href={`tel:${appointment.clientPhone}`}
              className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors"
            >
              <Phone className="w-5 h-5 mr-3" />
              <span className="text-sm sm:text-base">{appointment.clientPhone}</span>
            </a>
            <a 
              href={`mailto:${appointment.clientEmail}`}
              className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors"
            >
              <Mail className="w-5 h-5 mr-3" />
              <span className="text-sm sm:text-base">{appointment.clientEmail}</span>
            </a>
            <div className="flex items-center text-gray-300">
              <MapPin className="w-5 h-5 mr-3" />
              <span className="text-sm sm:text-base">{appointment.propertyAddress}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Appointment Details</h3>
          <div className="space-y-3">
            <div className="flex items-center text-gray-300">
              <Calendar className="w-5 h-5 mr-3" />
              <span className="text-sm sm:text-base">{formatDateTime(appointment.dateTime)}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Clock className="w-5 h-5 mr-3" />
              <span className="text-sm sm:text-base">{appointment.duration} minutes</span>
            </div>
          </div>
        </div>
      </div>

      {appointment.notes && (
        <div className="mt-6 pt-6 border-t border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Notes</h3>
          <div className="flex items-start gap-2">
            <FileText className="w-5 h-5 text-gray-400 mt-1" />
            <p className="text-sm sm:text-base text-gray-300">{appointment.notes}</p>
          </div>
        </div>
      )}
    </div>
  );
}