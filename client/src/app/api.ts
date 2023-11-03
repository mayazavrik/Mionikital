/* eslint-disable @typescript-eslint/no-unsafe-return */

import type { Question, Theme } from '../features/type';

export const fetchThemes = async (): Promise<Theme[]> => {
  const res = await fetch('/api/theme');
  return res.json();
};

export const fetchQuestions = async (): Promise<Question[]> => {
  const res = await fetch('/api/question');
  return res.json();
};
