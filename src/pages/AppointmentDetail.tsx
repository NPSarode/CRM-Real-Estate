import React from 'react';
import { useParams } from 'react-router-dom';
import { mockAppointments } from '../data/mockAppointments';
import AppointmentDetailHeader from '../components/appointments/AppointmentDetailHeader';
import AppointmentOverview from '../components/appointments/AppointmentOverview';
import PropertyPreview from '../components/appointments/PropertyPreview';

export default function AppointmentDetail() {
  const { id } = useParams();
  const appointment = mockAppointments.find(a => a.id === id);

  if (!appointment) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">Appointment not found</p>
      </div>
    );
  }

  const handleEdit = () => {
    console.log('Edit appointment:', id);
  };

  const handleDelete = () => {
    console.log('Delete appointment:', id);
  };

  return (
    <div className="space-y-6">
      <AppointmentDetailHeader 
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <AppointmentOverview appointment={appointment} />
        </div>

        <div>
          <PropertyPreview propertyId={appointment.propertyId} />
        </div>
      </div>
    </div>
  );
}