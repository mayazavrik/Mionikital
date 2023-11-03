import type { Data } from '../types/type';

export const logUser = async (password: string, email: string): Promise<Data> => {
  const res = await fetch('api/authLog', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      password,
      email,
    }),
  });

  const data: Data = await res.json();
  return data;
};

export const regUser = async (password: string, email: string, name: string): Promise<Data> => {
  const res = await fetch('api/sign-up', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      password,
      email,
      name,
    }),
  });

  const data: Data = await res.json();
  return data;
};
export const fetchUser = async (): Promise<Data> => {
  const res = await fetch('/api/getUser');
  const data = await res.json();
  console.log(data);
  return data;
};
