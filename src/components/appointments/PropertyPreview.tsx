import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Bed, Bath, Square } from 'lucide-react';
import { mockProperties } from '../../data/mockProperties';

interface PropertyPreviewProps {
  propertyId: string;
}

export default function PropertyPreview({ propertyId }: PropertyPreviewProps) {
  const navigate = useNavigate();
  const property = mockProperties.find(p => p.id === propertyId);

  if (!property) return null;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden sticky top-4">
      <div className="relative h-40 sm:h-48">
        <img 
          src={property.images[0]} 
          alt={property.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">{property.title}</h3>
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4">
          <div className="flex items-center text-gray-400">
            <Bed className="w-4 h-4 mr-2" />
            <span className="text-sm">{property.bedrooms}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Bath className="w-4 h-4 mr-2" />
            <span className="text-sm">{property.bathrooms}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Square className="w-4 h-4 mr-2" />
            <span className="text-sm">{property.area}</span>
          </div>
        </div>
        <button
          onClick={() => navigate(`/properties/${property.id}`)}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
        >
          <Building2 className="w-4 h-4" />
          <span className="text-sm">View Property</span>
        </button>
      </div>
    </div>
  );
}