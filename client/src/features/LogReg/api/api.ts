/* eslint-disable @typescript-eslint/no-unsafe-return */

import type { Service, User } from '../type';

// export const fetchLogOut = async (): Promise<{ message: string }> => {
//   // Создаем обещание, которое разрешится через 1 секунду
//   const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

//   // Ожидаем 1 секунду
//   await delay(3000);

//   // Выполняем запрос после ожидания
//   const res = await fetch('/api/auth/logout');
//   const data: { message: string } = await res.json();

//   return data;
// };
export const fetchLogOut = async (): Promise<{ message: string }> => {
  console.log('----------');
  const res = await fetch('/api/auth/logout');
  const data: { message: string } = await res.json();
  return data;
};

export const fetchSignIn = async (user: User): Promise<{ message: string; user: User }> => {
  const res = await fetch('/api/auth/sign-in', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return res.json();
};



// export const fetchSignInService = async (
//   service: Service,
// ): Promise<{ message: string; service: Service }> => {
//   const res = await fetch('/api/auth/sign-in/service', {
//     method: 'post',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(service),
//   });
//   return res.json();
// };
export const fetchSignInService = async (
  service: Service,
): Promise<{ message: string; service: Service }> => {
  const fetchPromise = fetch('/api/auth/sign-in/service', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(service),
  });

  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Время запроса истекло'));
    }, 1000); // 1000 миллисекунд (1 секунда)
  });

  try {
    const result = await Promise.race([fetchPromise, timeoutPromise]);
    return result.json();
  } catch (error) {
    // Здесь можно обработать ошибку сеттаймаута или другие ошибки запроса
    console.error(error);
    throw error;
  }
};

export const fetchSignUp = async (user: User): Promise<User> => {
  const res = await fetch('/api/auth/sign-up', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  // Добавляем setTimeout на 1 секунду
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return res.json();
};

export const fetchSignUpService = async (service: Service): Promise<Service> => {
  const res = await fetch('/api/auth/sign-up/service', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(service),
  });
  return res.json();
};

export const fetchCheckUser = async (): Promise<{ message: string; user: User }> => {
  const res = await fetch('/api/auth/check');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return res.json();
};

export const fetchCheckService = async (): Promise<{ message: string; service: Service }> => {
  // Создаем обещание, которое разрешится через 5 секунд
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  // Ожидаем 5 секунд
  await delay(1000);

  // Выполняем запрос после ожидания
  const res = await fetch('/api/auth/check/service');

  return res.json();
};
