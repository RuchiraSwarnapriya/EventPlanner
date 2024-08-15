export type User = {
  email: string;
  password: string;
};

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignupPayload {
  email: string;
  password: string;
  confirmaPassword: string;
}
