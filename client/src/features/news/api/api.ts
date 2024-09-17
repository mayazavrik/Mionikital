/* eslint-disable @typescript-eslint/no-unsafe-return */

import type { Post, PostId } from '../types/Post';

export const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch('/api/news');

  if (res.status >= 400) {
    throw new Error(res.statusText);
  }
  return res.json();
};

export const fetchPostRemove = async (id: number): Promise<PostId> => {
  const res = await fetch(`/api/news/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};

export const fetchPostChange = async (formData: FormData): Promise<Post> => {
  const res = await fetch(`/api/news/${formData.get('id')}`, {
    method: 'PUT',

    body: formData,
  });
  if (!res.ok) {
    throw new Error('Failed to update post');
  }
  return res.json();
};