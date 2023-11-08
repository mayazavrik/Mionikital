export type UslugaPrice = {
  id: number;
  usluga_id: number;
  service_id: number;
  cost: number;
  mark_id: number;
  carModel_id: number;
  CarModel: CarModel;
  Mark: Mark;
  Usluga: Usluga;
};

export type Usluga = {
  id: number;
  title: string;
};
export type CarModel = {
  id: number;
  mark_id: number;
  title: string;
};
export type Mark = {
  id: number;
  title: string;
  CarModels: CarModel[];
};

export type UslugasState = {
  uslugas: Usluga[];
  marks: Mark[] | [];
  error: string | null;
  order: OrderAndUslugaAndMArk[] | [];
  loading: boolean;
};
export type UslugaPriceState = {
  uslugasPrices: UslugaPrice[];
  error: string | null;
  loading: boolean;
};

export type OrderAdd = {
  id: number;
  user_id: number;
  isClosed: boolean;
  service_id: number;
};
export type OrderItemAdd = {
  id: number;
  order_id: number;
  uslugaPrice_id: number;
  date: string;
};
export type UslugasAdd = {
  carModel: CarModel;
  mark: Mark;
  usluga: Usluga;
};
export type OrderAndUslugaAndMArk = {
  order: OrderAdd;
  orderItem: OrderItemAdd;
  uslugas: UslugasAdd;
};
