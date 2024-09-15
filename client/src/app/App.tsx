/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect} from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import SignIn from '../features/logreg/RegistrUser';
import { checkUser } from '../features/logreg/AuthSlice';
import { loadServices } from '../features/service/servicesSlice';
import MainPage from '../features/main/MainPage';
import NavBar from '../features/navbar/NavBar';
import ServicesPage from '../features/service/ServicesPage';

// import PersonalArea from '../features/personalArea/PersonalArea';
// import PersonalAreaAdmin from '../features/personalArea/PersonalAreaAdmin';
import NewsBlock from '../features/news/NewsBlock';
import { loadPosts } from '../features/news/newsSlice';
import ServicePage from '../features/service/ServicePage';
import NewsPostPage from '../features/news/NewsPostPage';
import { useAppDispatch } from '../redux/store';
import {  loadCourses } from '../features/usluga/courseSlice';
// import { loadPrices } from '../features/usluga/uslugaPriceSlice';
import { loadSales } from '../features/sales/salesSlice';
import SalesPage from '../features/sales/SalesPage';

import ErrorPage from '../features/404/404';
import CoursesPage from '../features/usluga/CoursesPage';
import CoursePage from '../features/usluga/CoursePage';
import DoctorsPage from '../features/doctor/DoctorsPage';
import DoctorPage from '../features/doctor/DoctorPage';
import { loadDoctors } from '../features/doctor/doctorSlice';

function App(): JSX.Element {

  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(loadServices());
    dispatch(loadPosts());
  }, []);

  useEffect(() => {
    dispatch(checkUser());
    dispatch(loadCourses());
  	dispatch(loadDoctors());
    dispatch(loadServices());

    dispatch(loadSales());
  
  }, []);



  return (
    <div id="huge" >
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/reg" element={<SignIn />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/services/:serviceId" element={<ServicePage />} />
          <Route path="/courses/:courseId" element={<CoursePage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
					<Route path="/doctors/:doctorId" element={<DoctorPage />} />
          <Route path="/news" element={<NewsBlock />} />
          <Route path="/sales" element={<SalesPage />} />
       
          <Route path="/news/:postId" element={<NewsPostPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
