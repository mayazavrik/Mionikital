/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import MainPage from '../features/main/MainPage';
// import ErrorWindow from '../features/404/ErrorWindow';
// import LogReg from '../features/logreg/LogReg';
import NavBar from '../features/navbar/NavBar';
import NewsBlock from '../features/news/NewsBlock';
import { useAppDispatch } from '../redux/store';
import { loadPosts } from '../features/news/newsSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadPosts());
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/news" element={<NewsBlock />} />
          {/* <Route path="/" element={<LogReg />} /> */}
        </Route>
        {/* <Route path="*" element={<ErrorWindow />} /> */}
      </Routes>
    </div>
  );
}

export default App;
