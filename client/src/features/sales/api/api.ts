/* eslint-disable @typescript-eslint/no-unsafe-return */

import type { Sale} from '../types/Sale';

export const fetchSales = async (): Promise<Sale[]> => {
  const res = await fetch('/api/sales');

  if (res.status >= 400) {
    throw new Error(res.statusText);
  }
  return res.json();
};

export const fetchCity = async (): Promise<Sale[]> => {
  const res = await fetch('/api/sales/sort');

  if (res.status >= 400) {
    throw new Error(res.statusText);
  }
  return res.json();
};

