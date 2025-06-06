import { Property } from '../types/property';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Apartment',
    type: 'apartment',
    status: 'available',
    price: 450000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    address: '123 Downtown Ave',
    city: 'Metro City',
    description: 'Luxurious modern apartment with stunning city views, featuring high-end finishes and state-of-the-art appliances. Open concept living space with floor-to-ceiling windows.',
    features: ['Hardwood floors', 'Stainless steel appliances', 'Central AC', 'In-unit laundry', 'Balcony', 'Parking space'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1000&q=80'
    ],
    listedDate: '2024-03-01',
    agent: {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@realestate.com',
      phone: '(555) 123-4567'
    }
  },
  {
    id: '2',
    title: 'Suburban Family Home',
    type: 'house',
    status: 'available',
    price: 750000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    address: '456 Maple Street',
    city: 'Suburbia',
    description: 'Spacious family home in a quiet neighborhood. Features a large backyard, updated kitchen, and finished basement. Perfect for growing families.',
    features: ['Large backyard', 'Finished basement', 'Updated kitchen', 'Attached garage', 'Fireplace', 'Garden'],
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80'
    ],
    listedDate: '2024-02-15',
    agent: {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@realestate.com',
      phone: '(555) 234-5678'
    }
  },
  {
    id: '3',
    title: 'Luxury Beachfront Villa',
    type: 'villa',
    status: 'under-contract',
    price: 1250000,
    bedrooms: 5,
    bathrooms: 4,
    area: 3800,
    address: '789 Oceanview Drive',
    city: 'Coastal City',
    description: 'Stunning beachfront villa with panoramic ocean views. Features high-end finishes, a private pool, and direct beach access.',
    features: ['Ocean view', 'Private pool', 'Beach access', 'Wine cellar', 'Home theater', 'Gourmet kitchen'],
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=80'
    ],
    listedDate: '2024-03-10',
    agent: {
      id: '3',
      name: 'Robert Johnson',
      email: 'robert.j@realestate.com',
      phone: '(555) 345-6789'
    }
  }
];