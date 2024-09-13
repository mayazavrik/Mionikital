export type User = {
  id?: number;
  name?: string;
  email: string;
  password: string;
  isAdmin?: boolean;
};

export type Service = {
  id?: number;
  title?: string;
  img?: string;
  text?: string;
  price?: number;
  price2?: number;
  
};

export type AuthState = {
  user: User | undefined;
  // service: Service | undefined;
  error: string | null;
};
