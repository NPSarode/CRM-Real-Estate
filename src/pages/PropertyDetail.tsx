import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ArrowLeft, Edit, Trash2, Bed, Bath, Square, MapPin, 
  Phone, Mail, Calendar, DollarSign, Tag, Share2 
} from 'lucide-react';
import { mockProperties } from '../data/mockProperties';

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = mockProperties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">Property not found</p>
      </div>
    );
  }

  const statusColors = {
    'available': 'bg-green-500',
    'under-contract': 'bg-yellow-500',
    'sold': 'bg-red-500',
    'off-market': 'bg-gray-500'
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/properties')}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold">Property Details</h1>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
            <Share2 className="w-4 h-4" />
            Share
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            <Edit className="w-4 h-4" />
            Edit Property
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Property Images */}
          <div className="grid grid-cols-2 gap-4">
            {property.images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <img 
                  src={image} 
                  alt={`${property.title} - ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Property Overview */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold">{property.title}</h2>
                <div className="flex items-center text-gray-400 mt-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{property.address}, {property.city}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-indigo-400">
                  ${property.price.toLocaleString()}
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${statusColors[property.status]}`}>
                  {property.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg">
                <Bed className="w-6 h-6 mb-2 text-indigo-400" />
                <span className="text-lg font-semibold">{property.bedrooms}</span>
                <span className="text-sm text-gray-400">Bedrooms</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg">
                <Bath className="w-6 h-6 mb-2 text-indigo-400" />
                <span className="text-lg font-semibold">{property.bathrooms}</span>
                <span className="text-sm text-gray-400">Bathrooms</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg">
                <Square className="w-6 h-6 mb-2 text-indigo-400" />
                <span className="text-lg font-semibold">{property.area}</span>
                <span className="text-sm text-gray-400">Sq Ft</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg">
                <Tag className="w-6 h-6 mb-2 text-indigo-400" />
                <span className="text-lg font-semibold capitalize">{property.type}</span>
                <span className="text-sm text-gray-400">Type</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="text-gray-300">{property.description}</p>
            </div>
          </div>

          {/* Property Features */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {property.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Agent Information */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Listing Agent</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center">
                <span className="text-xl font-medium">
                  {property.agent.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="font-medium">{property.agent.name}</p>
                <p className="text-sm text-gray-400">Real Estate Agent</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3" />
                <span>{property.agent.phone}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3" />
                <span>{property.agent.email}</span>
              </div>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Contact Agent
            </button>
          </div>

          {/* Property Details */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Property Details</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-gray-300">
                <span>Listed Date</span>
                <span>{new Date(property.listedDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span>Property ID</span>
                <span>#{property.id}</span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span>Property Type</span>
                <span className="capitalize">{property.type}</span>
              </div>
            </div>
          </div>

          {/* Schedule Viewing */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Schedule a Viewing</h3>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <Calendar className="w-4 h-4" />
              Schedule Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}