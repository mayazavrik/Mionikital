import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import {  addCourse } from './courseSlice';
import type { CourseCard } from './types/type';
import './style/style.css';

export default function AddCourseForm({ course }: { course : CourseCard }): JSX.Element {
    
    const [title, setTitle] = useState('');
    const [visit, setVisit] = useState('');
  const [text, setText] = useState('');
  const [price, setPrice] = useState('');

  const dispatch = useAppDispatch();

  const onHandleAdd = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addCourse({ id: 1,title, visit, text , price,}));
    setTitle('');
    setText('');
    setVisit('');
    setPrice('');
    
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
          Цена 
          <input
            className="biginput"
            value={price}
            name="text"
            type="text"
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
   
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}
