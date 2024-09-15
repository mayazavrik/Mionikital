import React, { Dispatch, SetStateAction, useState } from 'react';
import './style/modal.css';
import {  useAppDispatch } from '../../redux/store';
import {  changeCourse} from './courseSlice';

import type { CourseCard} from './types/types';

function ChangeCourseForm({
  course,
  setModalActive,
}: {
  course: CourseCard;
  setModalActive: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {

  const [title, setTitle] = useState(course?.title);
  const [visit, setVisit] = useState(course?.visit);
  const [text, setText] = useState(course?.text);
  const [price, setPrice] = useState(course?.price);
 

  
  const dispatch = useAppDispatch();
  // const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   dispatch(addCourse({ id: course.id,  title, visit, text, price }));
  //   setVisit(0);
  //   setText('');
  //   setTitle('');
  //   setPrice(0);
   
  
  // };
  const onHandleChange = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(changeCourse({ id: course.id, visit, title, text , price}));
    setModalActive(false);
  };

  return (
    <div className='darkened'>
      <div className="modal active">
      <form className="modal-content active" onSubmit={onHandleChange}>
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
    
        <label className="form__label ">
          Текст абонемента
          <textarea
            
            className="biginput"
            value={text}
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
            onChange={(e) => setPrice(e.target.value ? Number(e.target.value) : 0)}
          />
        </label>
   
        <button className="btn" type="submit">
          Сохранить изменения
        </button>
        <button onClick={() => setModalActive(false)} className="btn" type="button">
          Отмена
        </button>
      </form>
    </div>
    </div>
    
  );
}

export default ChangeCourseForm;
