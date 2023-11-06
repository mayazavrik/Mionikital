import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { UslugasState } from './types/types';
import * as api from './api';

const initialState: UslugasState = {
  uslugas: [],
  marks: [],
  error: null,
  loading: true,
};

export const loadUslugas = createAsyncThunk('/uslugas/load', () => api.fetchUslugas());
export const loadMarks = createAsyncThunk('/marks/load', () => api.fetchMarks());

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
      });
  },
});

export const { stopLoading } = uslugasSlice.actions;
export default uslugasSlice.reducer;
