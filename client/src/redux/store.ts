import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import servicesSlice from '../features/service/servicesSlice';

const store = configureStore({
  reducer: { servicesSlice },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;
