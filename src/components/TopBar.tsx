import React, { useState } from 'react';
import { Menu, Bell, Sun } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import MobileMenu from './layout/MobileMenu';

export default function TopBar() {
  const { user } = useAuthStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-40 bg-gray-800 border-b border-gray-700 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              className="lg:hidden p-2 hover:bg-gray-700 rounded-lg"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold">Real Estate CRM</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-700 rounded-lg">
              <Sun className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-lg">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <p className="text-sm font-medium">{user?.name}</p>
                <p className="text-xs text-gray-400">{user?.role}</p>
              </div>
              <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">{user?.name[0]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}