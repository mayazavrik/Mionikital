/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import MainPage from '../features/main/MainPage';
import ErrorWindow from '../features/404/ErrorWindow';
import SignIn from '../features/LogReg/SignIn';
import NavBar from '../features/Navbar/NavBar';
import { useAppDispatch } from '../redux/store';
import { checkUser } from '../features/LogReg/AuthSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkUser());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/game" element={<MainPage />} />
          <Route path="/reg" element={<SignIn />} />
          <Route path="*" element={<ErrorWindow />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
