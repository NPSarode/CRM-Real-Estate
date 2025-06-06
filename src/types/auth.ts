export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'agent';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}