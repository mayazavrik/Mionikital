import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment } from './servicesSlice';
import type { Comment } from './types/type';

export default function CommentItem({ comment }: { comment: Comment }): JSX.Element {
  const dispatch = useDispatch();
  const onHandleDelete = (): void => {
    dispatch(deleteComment(comment.id));
  };

  return (
    <div className="comment-item">
      <section>
        <p>{comment.User.name}</p>
        <p>{comment.createdAt}</p>
      </section>
      <p>{comment.text}</p>
      <button type="button" onClick={onHandleDelete}>
        X
      </button>
    </div>
  );
}
