export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'agent';
  phone: string;
  avatar?: string;
  title: string;
  bio: string;
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  theme: 'light' | 'dark';
}

export interface ProfileFormData {
  name: string;
  email: string;
  phone: string;
  title: string;
  bio: string;
}