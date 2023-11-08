import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { UslugasState } from './types/types';
import * as api from './api';

const initialState: UslugasState = {
  uslugas: [],
  marks: [],
  order: [],
  error: null,
  loading: true,
};

export const loadUslugas = createAsyncThunk('/uslugas/load', () => api.fetchUslugas());
export const loadMarks = createAsyncThunk('/marks/load', () => api.fetchMarks());
export const addOrder = createAsyncThunk(
  '/api/order',
  (obj: { user_id: number; service_id: number; data: string; uslugaPrice_id: number }) =>
    api.fetchOrderAdd(obj),
);
// export const loadOrder = createAsyncThunk('/order/load', () => api.fetchOrderLoad());


const uslugasSlice = createSlice({
  name: 'uslugas',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUslugas.fulfilled, (state, action) => {
        state.uslugas = action.payload;
      })
      .addCase(loadUslugas.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(loadUslugas.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadMarks.fulfilled, (state, action) => {
        state.marks = action.payload;
      })
      .addCase(loadMarks.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(loadMarks.pending, (state) => {
        state.loading = true;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.order.push(action.payload);
      });
  },
});

export const { stopLoading } = uslugasSlice.actions;
export default uslugasSlice.reducer;
