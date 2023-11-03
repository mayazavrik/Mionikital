/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { loadServices } from '../features/service/servicesSlice';
import MainPage from '../features/main/MainPage';
import ErrorWindow from '../features/404/ErrorWindow';
// import LogReg from '../features/logreg/LogReg';
import NavBar from '../features/Navbar/NavBar';
import ServicesPage from '../features/service/ServicesPage';
import { useAppDispatch } from '../redux/store';
import ServicePage from '../features/service/ServicePage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadServices());
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServicePage />} />
          {/* <Route path="/" element={<LogReg />} /> */}
        </Route>
        <Route path="*" element={<ErrorWindow />} />
      </Routes>
    </div>
  );
}

export default App;
