export interface Property {
  id: string;
  title: string;
  type: 'apartment' | 'house' | 'condo' | 'villa' | 'land';
  status: 'available' | 'under-contract' | 'sold' | 'off-market';
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  address: string;
  city: string;
  description: string;
  features: string[];
  images: string[];
  listedDate: string;
  agent: {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
}