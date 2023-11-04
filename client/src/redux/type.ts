import type { User } from '../features/LogReg/type';

export type UserState = {
  user: User;
};
export type Score = number;

export type Action =
  | { type: 'user/get'; payload: User }
  | { type: 'user/load'; payload: User }
  | { type: 'user/put'; payload: User };
