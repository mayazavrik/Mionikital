import type { Question, Theme } from '../features/type';

export type ThemeState = {
  themes: Theme[];
};
export type QuestionState = {
  questions: Question[];
};

export type User = { email: string; password: string; name: string; id: number; score: number };
export type UserState = {
  user: User;
};
export type Score = number;

export type Action =
  | { type: 'themes/load'; payload: Theme[] }
  | { type: 'question/load'; payload: Question[] }
  | { type: 'user/get'; payload: User }
  | { type: 'user/load'; payload: User }
  | { type: 'user/put'; payload: User };
