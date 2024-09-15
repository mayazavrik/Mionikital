import type { Service } from '../../logreg/type';
import type {
ServiceId,
  Sale,
 
  
} from '../types/type';


export const fetchSales = async (): Promise<Sale[]> => {
  const res = await fetch('/api/sales');

  if (res.status >= 400) {
    throw new Error(res.statusText);
  }
  return res.json();
};


// export async function fetchServices(): Promise<ServiceCard[]> {
//   const res = await fetch('/api/services');
//   return res.json();
// }
export const fetchServices = async (): Promise<Service[]> => {
  const res = await fetch('/api/services');

  if (res.status >= 400) {
    throw new Error(res.statusText);
  }
  return res.json();
};
export const fetchAddService= async (service: Service): Promise<Service> => {
  const res = await fetch('/api/services', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(service),
  });
  return res.json();
}
export const fetchServiceChange=async(service: Service): Promise<Service> => {
  const res = await fetch(`/api/services/${service.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ title:service.title,  img: service.img, text: service.text, price:service.price, price2:service.price2 }),
  });
  return res.json();
}
export const fetchServiceRemove = async (id: number): Promise<ServiceId> => {
  const res = await fetch(`/api/services/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};

// export async function fetchAddSale(sale: Sale): Promise<Sale> {
//   const res = await fetch('/api/sales', {
//     method: 'POST',
//     headers: { 'Content-type': 'application/json' },
//     body: JSON.stringify({  img: sale.img, text: sale.text }),
//   });
//   return res.json();
// }

// export async function fetchDeleteSale(id: number): Promise<{ saleId: SaleId }> {
//   const res = await fetch(`/api/sales/${id}`, {
//     method: 'DELETE',
//   });
//   return res.json();
// }

// export async function fetchUpdSale(sale: Sale): Promise<Sale> {
//   const res = await fetch(`/api/sales/${sale.id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify({ img: sale.img, text: sale.text }),
//   });
//   return res.json();
// }

