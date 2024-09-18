/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import servicesSlice from '../features/service/servicesSlice';
import newsSlice from '../features/news/newsSlice';

// import uslugaPriceSlice from '../features/usluga/uslugaPriceSlice';
import salesSlice from '../features/sales/salesSlice';
import PersonalSlice from '../features/personalArea/PersonalSlice';
import courseSlice from '../features/usluga/courseSlice';
import doctorSlice from '../features/doctor/doctorSlice';
import AuthSlice from '../features/logreg/AuthSlice';

const store = configureStore({
  reducer: {
    servicesSlice,
    news: newsSlice,
    auth: AuthSlice,
    doctorSlice, 
    courseSlice,

		// prices: uslugaPriceSlice,
		sales: salesSlice,
		adminArea: PersonalSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;
