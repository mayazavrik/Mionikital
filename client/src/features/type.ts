export type Theme = {
  id: number;
  title: string;
};

export type Question = {
  id: number;
  quest: string;
  answer: string;
  cost: number;
  theme_id: number;
  usersResults: {
    user_id: number;
    question_id: number;
    disabled: boolean;
  };
};
