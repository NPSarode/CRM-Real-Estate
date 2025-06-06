import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Plus } from 'lucide-react';
import AppointmentCard from '../components/appointments/AppointmentCard';
import { mockAppointments } from '../data/mockAppointments';

export default function TodaySchedule() {
  const navigate = useNavigate();
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  // Sort appointments by time
  const sortedAppointments = [...mockAppointments].sort((a, b) => 
    new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-500 rounded-lg">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Today's Schedule</h1>
            <p className="text-gray-400 mt-1 text-sm sm:text-base">{formattedDate}</p>
          </div>
        </div>
        <div className="flex w-full sm:w-auto items-center gap-3">
          <div className="flex-1 sm:flex-none flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg">
            <Clock className="w-5 h-5 text-indigo-400" />
            <span className="text-sm">
              {today.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
              })}
            </span>
          </div>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            <Plus className="w-5 h-5" />
            <span className="text-sm">New Appointment</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {sortedAppointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            appointment={appointment}
            onClick={() => navigate(`/appointments/${appointment.id}`)}
          />
        ))}
      </div>

      {sortedAppointments.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-300">No Appointments Today</h3>
          <p className="text-gray-400 mt-2">Enjoy your free time!</p>
        </div>
      )}
    </div>
  );
}