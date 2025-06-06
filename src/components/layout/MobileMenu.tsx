import React from 'react';
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { navigation } from './navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { logout } = useAuthStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      
      <div className="fixed inset-y-0 right-0 w-64 bg-gray-800 p-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-700 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="space-y-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                  isActive
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`
              }
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <button
            onClick={() => {
              logout();
              onClose();
            }}
            className="w-full px-4 py-2 text-sm font-medium text-gray-300 rounded-lg hover:bg-gray-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}