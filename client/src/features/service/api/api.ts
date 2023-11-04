import type { Sale, SaleId, ServiceCard } from '../types/type';

export async function fetchServices(): Promise<ServiceCard[]> {
  const res = await fetch('/api/services');
  return res.json();
}
export async function fetchAddSale(sale: Sale): Promise<Sale> {
  const res = await fetch('/api/sales', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ id: sale.service_id, img: sale.img, text: sale.text }),
  });
  return res.json();
}

export async function fetchDeleteSale(id: number): Promise<SaleId> {
  const res = await fetch(`/api/sales/${id}`, {
    method: 'DELETE',
  });
  return res.json();
}
