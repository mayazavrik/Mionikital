export type User = {
  id?: number;
  name?: string;
  email: string;
  phone?: string;
  password: string;
  isAdmin?: boolean;
};
export type AuthState = {
  user: User | undefined;
  error: string | null;
};