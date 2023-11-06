/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignIn from '../features/LogReg/RegistrUser';
import { checkService, checkUser } from '../features/LogReg/AuthSlice';
import { loadServices } from '../features/service/servicesSlice';
import MainPage from '../features/main/MainPage';
import NavBar from '../features/Navbar/NavBar';
import ServicesPage from '../features/service/ServicesPage';
import type { RootState } from '../redux/store';
import { useAppDispatch } from '../redux/store';
import NewsBlock from '../features/news/NewsBlock';
import { loadPosts } from '../features/news/newsSlice';
import ServicePage from '../features/service/ServicePage';
import PersonalArea from '../features/personalArea/PersonalArea';

function App(): JSX.Element {
  const [isPageClickable, setIsPageClickable] = useState(false);
  const dispatch = useAppDispatch();
  const service = useSelector((store: RootState) => store.auth.service);
  const user = useSelector((store: RootState) => store.auth.user);
  // console.log(service);
  // console.log(user);

  useEffect(() => {
    // fetch('/api/auth/check/service')
    //   .then((data) => data.json())
    //   .then(console.log);
    dispatch(loadServices());
    dispatch(loadPosts());
    dispatch(checkService());
  }, []);

  useEffect(() => {
    dispatch(checkUser());
  }, []);

  useEffect(() => {
    if (service?.isChecked === false) {
      setIsPageClickable(false);
    }
  }, [service?.isChecked]);

  return (
    <div className={`App ${isPageClickable ? '' : 'unclickable'}`}>
      {/* {isPageClickable == false && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '0vh', // Задайте желаемую высоту, чтобы текст был посередине
          }}
        >
          <h1>Pдравствуйте, {service?.title}, ваша учетная пока не активна</h1>
        </div>
      )} */}
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/reg" element={<SignIn />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServicePage />} />
          <Route path="/news" element={<NewsBlock />} />
          <Route path="/personalArea" element={<PersonalArea />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
