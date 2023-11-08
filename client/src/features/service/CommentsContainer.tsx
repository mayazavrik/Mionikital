import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import CommentItem from './CommentItem';
import { addComments } from './servicesSlice';
import type { ServiceCard } from './types/type';

export default function CommentsContainer({ service }: { service: ServiceCard }): JSX.Element {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((store: RootState) => store.auth.user);
  const onHandleAddComment = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (user) {
      dispatch(addComments({ service_id: service.id, user_id: user.id, text }));
      setText('');
    }
  };
  return (
    <div className="comments-container">
      <div className="comments-content">
        {service.Comments?.length > 0 ? (
          service.Comments?.map((comment) => <CommentItem comment={comment} key={comment.id} />)
        ) : (
          <h3>Отзывов пока нет</h3>
        )}
      </div>
      {user && (
        <form onSubmit={onHandleAddComment}>
          <input value={text} type="text" onChange={(e) => setText(e.target.value)} />
          <button type="submit">Оставить отзыв</button>
        </form>
      )}
    </div>
  );
}
