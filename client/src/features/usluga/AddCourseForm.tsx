import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import {  addCourse } from './courseSlice';

import './style/style.css';

export default function AddCourseForm(): JSX.Element {
    
    const [title, setTitle] = useState('');
    const [visit, setVisit] = useState<number | ''>(0);

  const [text, setText] = useState('');
  const [price, setPrice] = useState<number | ''>(0);

  const dispatch = useAppDispatch();

  const onHandleAdd = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addCourse({
      id: 1,
      title,
      visit: typeof visit === 'number' ? visit : 0, // Убедитесь, что это число
      text,
      price: typeof price === 'number' ? price : 0, // Убедитесь, что это число
    }));
    setTitle('');
    setText('');
    setVisit(0);
    setPrice(0);
  };
  
  return (
    <div className="form__container">
      <form className="formsale" onSubmit={onHandleAdd}>
      <label className="form__label">
          Название абонемента
          <input
            className="biginput"
            value={title}
            name="text"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
   
        <label className="form__label">
          Текст абонемента
          <input
            className="biginput"
            value={text}
            name="text"
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <label className="form__label">
          Количество визитов
          <input
            className="biginput"
            value={visit}
            name="text"
            type="number"
            onChange={(e) => setVisit(e.target.value ? Number(e.target.value) : 0)}
          />
        </label>
        <label className="form__label">
          Цена 
          <input
            className="biginput"
            value={price}
            name="text"
            type="number"
            onChange={(e) => setPrice(e.target.value ? Number(e.target.value) : '')}
          />
        </label>
   
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}
