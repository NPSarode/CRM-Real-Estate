import { Lead } from '../types/lead';

export const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '(555) 123-4567',
    status: 'qualified',
    budget: 500000,
    propertyType: '3 BHK Apartment',
    location: 'Downtown',
    assignedAgent: 'John Doe',
    lastContact: '2024-03-15',
    notes: 'Looking for a family-friendly neighborhood'
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'm.chen@example.com',
    phone: '(555) 234-5678',
    status: 'contacted',
    budget: 750000,
    propertyType: 'Luxury Villa',
    location: 'Suburbs',
    assignedAgent: 'John Doe',
    lastContact: '2024-03-14',
    notes: 'Interested in properties with large gardens'
  },
  {
    id: '3',
    name: 'Emma Wilson',
    email: 'emma.w@example.com',
    phone: '(555) 345-6789',
    status: 'new',
    budget: 300000,
    propertyType: '2 BHK Apartment',
    location: 'City Center',
    assignedAgent: 'John Doe',
    lastContact: '2024-03-16',
    notes: 'First-time buyer'
  }
];