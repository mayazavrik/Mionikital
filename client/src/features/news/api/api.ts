/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { Post, PostId } from '../types/Post';

export const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch('/api/news');

  if (res.status >= 400) {
    console.log(res);

    throw new Error(res.statusText);
  }
  return res.json();
};

export const fetchPostRemove = async (id: number): Promise<{ postId: PostId }> => {
  const res = await fetch(`/api/news/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};
