import { create } from 'zustand';
import { AuthState } from '../types/auth';

// This is a mock implementation. In a real app, you'd integrate with a backend
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    // Mock login - replace with actual API call
    const mockUser = {
      id: '1',
      email,
      name: 'John Doe',
      role: 'agent' as const,
    };
    set({ user: mockUser, isAuthenticated: true });
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));