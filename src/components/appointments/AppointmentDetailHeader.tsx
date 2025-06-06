import React from 'react';
import { ArrowLeft, Edit, Trash2, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AppointmentDetailHeaderProps {
  onEdit: () => void;
  onDelete: () => void;
}

export default function AppointmentDetailHeader({ onEdit, onDelete }: AppointmentDetailHeaderProps) {
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button 
          onClick={() => navigate('/appointments')}
          className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl sm:text-2xl font-bold">Appointment Details</h1>
      </div>
      
      {/* Desktop Actions */}
      <div className="hidden sm:flex gap-3">
        <button 
          onClick={onDelete}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          <span>Cancel</span>
        </button>
        <button 
          onClick={onEdit}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Edit className="w-4 h-4" />
          <span>Edit</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden relative">
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
        >
          <MoreVertical className="w-5 h-5" />
        </button>

        {showMobileMenu && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50">
            <button
              onClick={() => {
                onEdit();
                setShowMobileMenu(false);
              }}
              className="w-full flex items-center gap-2 px-4 py-3 hover:bg-gray-700 transition-colors"
            >
              <Edit className="w-4 h-4" />
              <span>Edit Appointment</span>
            </button>
            <button
              onClick={() => {
                onDelete();
                setShowMobileMenu(false);
              }}
              className="w-full flex items-center gap-2 px-4 py-3 text-red-400 hover:bg-gray-700 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              <span>Cancel Appointment</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}