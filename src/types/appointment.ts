export interface Appointment {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  propertyId: string;
  propertyTitle: string;
  propertyAddress: string;
  dateTime: string;
  duration: number;
  type: 'viewing' | 'meeting' | 'inspection';
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
  agent: {
    id: string;
    name: string;
  };
}