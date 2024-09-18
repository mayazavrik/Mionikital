import { Service } from '../../LogReg/type';
import type { ServiceId, Sale } from '../types/type';

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
export const fetchAddService = async (service: FormData): Promise<Service> => {
  const res = await fetch('/api/services', {
    method: 'POST',

    body: service,
  });
  return res.json();
};

export const fetchServiceChange = async (formData: FormData): Promise<Service> => {
  const res = await fetch(`/api/services/${formData.get('id')}`, {
    // Используйте ID из FormData
    method: 'PUT',
    body: formData,
  });
  if (!res.ok) {
    throw new Error('Failed to update service');
  }
  return res.json();
};

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
