import { Home, Users, Building2, Calendar, Settings } from 'lucide-react';

export const navigation = [
  { name: 'Dashboard', icon: Home, path: '/' },
  { name: 'Leads', icon: Users, path: '/leads' },
  { name: 'Properties', icon: Building2, path: '/properties' },
  { name: 'Appointments', icon: Calendar, path: '/appointments' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];