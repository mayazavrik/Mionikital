import { Service } from "../../LogReg/type";

export type Sale = {
    id: number;
    service_id: number;
    img: string;
    text: string;
    Service: Service
  };
  
  export type SaleId = Sale['id'];
  