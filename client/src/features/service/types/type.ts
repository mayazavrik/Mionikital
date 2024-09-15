import type { Service } from "../../logreg/type";

export type ServiceCard = {
  id: number;
  title: string;
  img: string;
  text: string;
  price:number;
  price2:number;
};
export type ServiceId = ServiceCard['id'];

export type ServicesState = {
  services: Service[];
  error: string | null;
  loading: boolean;
  
};

export type Sale = {
  id: number;
  img: string;
  text: string;
};
export type SaleId = Sale['id'];
