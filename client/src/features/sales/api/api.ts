/* eslint-disable @typescript-eslint/no-unsafe-return */

import type { Sale, SaleId} from '../types/Sale';

export const fetchSales = async (): Promise<Sale[]> => {
  const res = await fetch('/api/sales');

  if (res.status >= 400) {
    throw new Error(res.statusText);
  }
  return res.json();
};
export async function fetchAddSale(sale: FormData): Promise<Sale> {
  const res = await fetch('/api/sales', {
    method: 'POST',
   
    body: sale,
  });
  return res.json();
}

export const fetchDeleteSale=async(id: number): Promise< SaleId > => {
  const res = await fetch(`/api/sales/${id}`, {
    method: 'DELETE',
  });
  return res.json();
}

export async function fetchUpdSale(formData: FormData): Promise<Sale> {
  const res = await fetch(`/api/sales/${formData.get('id')}`, {
    method: 'PUT',
    body: formData,
  });
  if (!res.ok) {
    throw new Error('Failed to update sale');
  }
  return res.json();
};




