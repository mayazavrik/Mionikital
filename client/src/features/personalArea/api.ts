/* eslint-disable import/prefer-default-export */
import type { Service } from '../LogReg/type';

export const fetchUpdatePhoto = async (obj: Service): Promise<{ message: string }> => {
  const res = await fetch(`/api/service/person/${obj.id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  const data = await res.json();
  return data;
};
