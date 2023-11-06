import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import type { Post, PostId } from './types/Post';
import './style/style.css';
import { deleteNews } from './newsSlice';

function PostItem({ post }: { post: Post }): JSX.Element {
  const dispatch = useDispatch();
  console.log(post);

  const onHandleRemove =  (value: PostId):void => {
    dispatch(deleteNews(value));
  };
  return (
    <div className="post__container">
      <img className="post__img" src={post.img} alt="post" />
      <h2>{post.text}</h2>
      <button onClick={() => onHandleRemove(post.id)} type="button">
        Удалить статью
      </button>
      <button type="button">
        <Link to={`/news/${post.id}`}>Посмотреть статью</Link>
      </button>
    </div>
  );
}

export default memo(PostItem);
