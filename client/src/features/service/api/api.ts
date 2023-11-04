import type { Sale, ServiceCard } from '../types/type';

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
