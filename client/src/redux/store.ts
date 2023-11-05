import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import AuthSlice from '../features/LogReg/AuthSlice';
import servicesSlice from '../features/service/servicesSlice';
import newsSlice from '../features/news/newsSlice';

const store = configureStore({
  reducer: { servicesSlice, news: newsSlice, auth: AuthSlice},
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;
