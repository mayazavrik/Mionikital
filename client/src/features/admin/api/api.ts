import type { Post } from '../../news/types/Post';

export const fetchPostAdd = async (post: FormData): Promise<Post> => {
  const res = await fetch('/api/news', {
    method: 'POST',
   
    body: post,
  });
  return res.json();
};
