import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import ProfileSection from '../components/settings/ProfileSection';
import NotificationSection from '../components/settings/NotificationSection';
import SecuritySection from '../components/settings/SecuritySection';
import { UserProfile } from '../types/settings';

export default function Settings() {
  const { user } = useAuthStore();

  // Mock user profile data (in a real app, this would come from an API)
  const userProfile: UserProfile = {
    id: user?.id || '',
    name: user?.name || '',
    email: user?.email || '',
    role: user?.role || 'agent',
    phone: '(555) 123-4567',
    title: 'Senior Real Estate Agent',
    bio: 'Experienced real estate professional with over 10 years in the industry.',
    notifications: {
      email: true,
      push: true,
      sms: false,
    },
    theme: 'dark',
  };

  const handleProfileUpdate = (data: any) => {
    console.log('Profile updated:', data);
    // In a real app, this would make an API call to update the profile
  };

  const handleNotificationUpdate = (notifications: UserProfile['notifications']) => {
    console.log('Notifications updated:', notifications);
    // In a real app, this would make an API call to update notification preferences
  };

  const handlePasswordChange = (data: any) => {
    console.log('Password changed:', data);
    // In a real app, this would make an API call to update the password
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-indigo-500 rounded-lg">
          <SettingsIcon className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="space-y-6">
        <ProfileSection 
          profile={userProfile}
          onUpdate={handleProfileUpdate}
        />
        
        <NotificationSection
          notifications={userProfile.notifications}
          onUpdate={handleNotificationUpdate}
        />

        <SecuritySection
          onPasswordChange={handlePasswordChange}
        />
      </div>
    </div>
  );
}