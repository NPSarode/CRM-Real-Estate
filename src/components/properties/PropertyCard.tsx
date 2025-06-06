import React from 'react';
import { Bed, Bath, Square, MapPin, Tag } from 'lucide-react';
import { Property } from '../../types/property';

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

const statusColors = {
  'available': 'bg-green-500',
  'under-contract': 'bg-yellow-500',
  'sold': 'bg-red-500',
  'off-market': 'bg-gray-500'
};

export default function PropertyCard({ property, onClick }: PropertyCardProps) {
  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img 
          src={property.images[0]} 
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[property.status]}`}>
            {property.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold">{property.title}</h3>
            <div className="flex items-center text-gray-400 mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{property.city}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-indigo-400">
              ${property.price.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center text-gray-400">
            <Bed className="w-4 h-4 mr-2" />
            <span className="text-sm">{property.bedrooms} beds</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Bath className="w-4 h-4 mr-2" />
            <span className="text-sm">{property.bathrooms} baths</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Square className="w-4 h-4 mr-2" />
            <span className="text-sm">{property.area} sqft</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {property.features.slice(0, 3).map((feature, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
            >
              {feature}
            </span>
          ))}
          {property.features.length > 3 && (
            <span className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
              +{property.features.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}