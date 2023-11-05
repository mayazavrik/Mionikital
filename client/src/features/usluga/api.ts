import { Mark, Usluga, UslugaPrice } from './types/types';

export async function fetchUslugas(): Promise<Usluga[]> {
  const res = await fetch('/api/uslugas');
  return res.json();
}

export async function fetchMarks(): Promise<Mark[]> {
  const res = await fetch('/api/marks');
  return res.json();
}

export async function fetchAddUslugas(uslugaPrice: UslugaPrice): Promise<UslugaPrice> {
  const res = await fetch('/api/uslugas', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(uslugaPrice),
  });
  return res.json();
}
export async function fetchUslugasPrice(): Promise<UslugaPrice[]> {
  const res = await fetch('/api/uslugasPrice');
  return res.json();
}
