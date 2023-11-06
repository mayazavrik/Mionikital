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
  marks: Mark[];
  error: string | null;
  loading: boolean;
};
export type UslugaPriceState = {
  uslugasPrices: UslugaPrice[];
  error: string | null;
  loading: boolean;
};
