import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import CourseItem from './CourseItem';
import './style/style.css';
import AddCourseForm from './AddCourseForm';


export default function CoursesPage(): JSX.Element {
  
  const courses = useSelector((store: RootState) =>  store.courseSlice.courses)
  const user = useSelector((store: RootState) => store.auth.user);
  // const error = useSelector((store: RootState) => store.servicesSlice.error);
  // const loading = useSelector((store: RootState) => store.servicesSlice.loading);

  return (
    <div className="containerPostForm">
{user && user.isAdmin && (
      <AddCourseForm />)}

      <div className="swiper">
        <div className="posts__container">
          {courses?.map((course) => <CourseItem key={course.id} course={course} />)}
        </div>

        {/* <div className="swiper-pagination"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        <div className="swiper-scrollbar"></div> */}
      </div>
    </div>
  );
}
