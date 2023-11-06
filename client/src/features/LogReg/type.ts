export type User = {
  id?: number;
  name?: string;
  email: string;
  phone?: string;
  password: string;
  isAdmin?: boolean;
};
export type Service = {
  id?: number;
  title?: string;
  email?: string;
  adress?: string;
  phone?: string;
  password?: string;
  tarif?: string;
  img?: string;
  isChecked?: boolean;
};

export type AuthState = {
  user: User | undefined;
  service: Service | undefined;
  error: string | null;
};
