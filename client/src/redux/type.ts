import type { Post } from '../features/news/types/Post';

export type PostState = {
  posts: Post[];
};

export type Score = number;

export type Action =
  | { type: 'posts/load'; payload: Post[] }
  | { type: 'post/put'; payload: Post };
