import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from './servicesSlice';
import type { Comment, Rate, ServiceCard } from './types/type';
import ReactStars from 'react-rating-stars-component';
import type { RootState } from '../../redux/store';

export default function CommentItem({
  comment,
  service,
}: {
  comment: Comment;
  service: ServiceCard;
}): JSX.Element {
  const dispatch = useDispatch();
  const user = useSelector((store: RootState) => store.auth.user);
  const rate = service.Rates.find(
    (el) => el.service_id === service.id && el.user_id === comment.user_id,
  );
  const onHandleDelete = (): void => {
    dispatch(deleteComment(comment.id));
  };
  let rating = 0;

  if (rate) {
    rating = rate.score;
  }
  console.log(rate);

  return (
    <div className="comment-item">
      <div className="comm-content">
        {' '}
        <section className="user-name">
          <p>{comment.User.name}</p>
        </section>
        <section className="comm-rate">
          <ReactStars value={rating} edit={false} count={5} size={10} activeColor="#ffd700" />
          <p>{comment.updatedAt}</p>
        </section>
      </div>
      <p>{comment.text}</p>
      {user?.id === comment.user_id && (
        <button type="button" onClick={onHandleDelete}>
          X
        </button>
      )}
    </div>
  );
}
