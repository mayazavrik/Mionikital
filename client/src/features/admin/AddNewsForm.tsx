import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './style/style.css';
import { fetchPostAdd } from './api/api';

function AddNewsForm(): JSX.Element {
  const [img, setImg] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    fetchPostAdd({  img, text }).then((data) => {
      dispatch({ type: 'posts/add', payload: data });
      setImg('');
      setText('');
    });
  };

  return (
    <div className="form__container">
      <form className="form__add-post" onSubmit={onHandleSubmit}>
        <label className="form__label">
          Фото
          <input value={img} onChange={(e) => setImg(e.target.value)} type="text" />
        </label>
        <label className="form__label ">
          Текст статьи
          <input className='biginput' value={text} onChange={(e) => setText(e.target.value)} type="text" />
        </label>

        <button className='addbtn' type="submit">Добавить статью</button>
      </form>
    </div>
  );
}

export default AddNewsForm;
