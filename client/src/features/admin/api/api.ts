import type { Post } from '../../news/types/Post';

export const fetchPostAdd = async (post: {img: string; text: string }): Promise<Post> => {
    const res = await fetch('/api/news', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    return res.json();
  };
  
