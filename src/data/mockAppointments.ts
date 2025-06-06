import { Appointment } from '../types/appointment';

// Helper to generate times throughout today
const getTodayDateTime = (hour: number, minute: number = 0): string => {
  const date = new Date();
  date.setHours(hour, minute, 0, 0);
  return date.toISOString();
};

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    clientName: 'Alice Thompson',
    clientEmail: 'alice.t@example.com',
    clientPhone: '(555) 123-4567',
    propertyId: '1',
    propertyTitle: 'Modern Downtown Apartment',
    propertyAddress: '123 Downtown Ave, Metro City',
    dateTime: getTodayDateTime(10, 30),
    duration: 45,
    type: 'viewing',
    status: 'scheduled',
    notes: 'Interested in the kitchen layout and storage options',
    agent: {
      id: '1',
      name: 'John Doe'
    }
  },
  {
    id: '2',
    clientName: 'Robert Chen',
    clientEmail: 'robert.c@example.com',
    clientPhone: '(555) 234-5678',
    propertyId: '2',
    propertyTitle: 'Suburban Family Home',
    propertyAddress: '456 Maple Street, Suburbia',
    dateTime: getTodayDateTime(13, 15),
    duration: 60,
    type: 'inspection',
    status: 'scheduled',
    notes: 'Pre-purchase inspection with inspector Mike',
    agent: {
      id: '1',
      name: 'John Doe'
    }
  },
  {
    id: '3',
    clientName: 'Emily Martinez',
    clientEmail: 'emily.m@example.com',
    clientPhone: '(555) 345-6789',
    propertyId: '3',
    propertyTitle: 'Luxury Beachfront Villa',
    propertyAddress: '789 Oceanview Drive, Coastal City',
    dateTime: getTodayDateTime(15, 45),
    duration: 45,
    type: 'meeting',
    status: 'scheduled',
    notes: 'Contract discussion and final walkthrough',
    agent: {
      id: '2',
      name: 'Jane Smith'
    }
  }
];