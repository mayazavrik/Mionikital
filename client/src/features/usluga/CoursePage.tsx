/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate,useParams } from 'react-router-dom';
import type { RootState } from '../../redux/store';

import './style/style.css';


export default function CoursePage(): JSX.Element {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const courses = useSelector((store: RootState) => store.courseSlice.courses)
  const course = courses.find((course) => courseId && course.id === +courseId);
  const error = <h1>Такого абонемента нет</h1>;
  const content= (
    <div className="services-page">
      
      <div className="post-page">
        <h2 className='servicenamepage'>{course?.title}</h2>
 
      <h2 className="post-page__text">{course?.text}</h2>
      <div className='visit'>Количество визитов :{course?.visit}</div>
      <div className='price'>Стоимость курса :{course?.price}</div>
      </div>
      <button onClick={() => navigate(-1)} type="button">
        Назад к списку услуг
      </button>
    </div>
  );
  return <div className="services-page__container">{!course? error : content}</div>;
}
