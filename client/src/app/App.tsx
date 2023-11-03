/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import MainPage from '../features/main/MainPage';
import ErrorWindow from '../features/404/ErrorWindow';
// import LogReg from '../features/logreg/LogReg';
import NavBar from '../features/navbar/NavBar';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/main" element={<MainPage />} />
          {/* <Route path="/" element={<LogReg />} /> */}
        </Route>
        <Route path="*" element={<ErrorWindow />} />
      </Routes>
    </div>
  );
}

export default App;
