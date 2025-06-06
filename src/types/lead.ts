export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'negotiation' | 'closed';
  budget: number;
  propertyType: string;
  location: string;
  assignedAgent: string;
  lastContact: string;
  notes: string;
}