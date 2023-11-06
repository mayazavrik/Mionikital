import { UslugaPrice } from '../../usluga/types/types';

export type ServiceCard = {
  id: number;
  title: string;
  email: string;
  adress: string;
  phone: string;
  img: string;
  Sales: Sale[];
  UslugaPrices: UslugaPrice[];
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
