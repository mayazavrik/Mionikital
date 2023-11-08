import type { User } from '../../LogReg/type';
import type { UslugaPrice } from '../../usluga/types/types';

export type ServiceCard = {
  id: number;
  title: string;
  email: string;
  adress: string;
  phone: string;
  img: string;
  Sales: Sale[];
  UslugaPrices: UslugaPrice[];
  Comments: Comment[];
};
export type Comment = {
  id: number;
  user_id: number;
  service_id: number;
  text: string;
  User: User;
  createdAt: Date;
};
export type CommentData = {
  user_id: number;
  service_id: number;
  text: string;
};
export type CommentDelete = {
  comment_id: number;
  service_id: number;
};
export type ServicesState = {
  services: ServiceCard[];
  error: string | null;
  loading: boolean;
  city: string;
};
export type Sale = {
  id: number;
  service_id: number;
  img: string;
  text: string;
};
export type SaleId = Sale['id'];
