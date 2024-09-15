import React, {  useState } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './style/style.css';
import ChangeСourseForm from './ChangeCourseForm';
import type { AppDispatch, RootState } from '../../redux/store';
import { deleteСourse } from './courseSlice';
import type { CourseCard } from './types/types';

export default function CourseItem({ course }: { course: CourseCard }): JSX.Element {
  const [modalActive, setModalActive] = useState(false);
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useDispatch<AppDispatch>();
  
  const onHandleRemove = (): void => {
    dispatch(deleteСourse(course.id));
  };
  return (
    <div className="service-card">
      <div className="content">
        <h3 className="servicename">{course.title}</h3>
        <br />

        <h4 className="itemrow">
          <p className="iteminfo">{course.text}</p>
        </h4>

        {user && user.isAdmin && (
          <>
            {' '}
            <button onClick={() => onHandleRemove()} type="button">
              Удалить курс
            </button>
            {modalActive && <ChangeСourseForm course={course} setModalActive={setModalActive} />}
            <button onClick={() => setModalActive(!modalActive)} type="button">
              Изменить курс
            </button>
          </>
        )}
        <button className="btn" type="button">
          <Link to={`/courses/${course.id}`}>Подробнее</Link>
        </button>

        {/* <button  className='btn' type="button">
        <Link to={`/services/${service.id}`}>Подробнее</Link>
      </button> */}
      </div>
    </div>
  );
}
