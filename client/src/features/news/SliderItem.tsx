import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import type { Post, PostId } from './types/Post';
import './style/slider.css';
import { deleteNews } from './newsSlice';
import ChangeNewsForm from './ChangeNewsForm';

function SliderItem({ post }: { post: Post }): JSX.Element {
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();

  const onHandleRemove = (value: PostId): void => {
    dispatch(deleteNews(value));
  };

  return (
    <div className="posts_slide_container">
      <img className="post__img" src={post.img} alt="post" />
      <h2>{post.text}</h2>
      <button onClick={() => onHandleRemove(post.id)} type="button">
        Удалить статью
      </button>

      {modalActive && <ChangeNewsForm post={post} setModalActive={setModalActive} />}

      <button onClick={() => setModalActive(!modalActive)} type="button">
        Изменить статью
      </button>
      <button type="button">
        <Link to={`/news/${post.id}`}>Посмотреть статью</Link>
      </button>
    </div>
  );
}

export default memo(SliderItem);
