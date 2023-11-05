import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { UslugaPrice, UslugaPriceState } from './types/types';
import * as api from './api';

const initialState: UslugaPriceState = {
  uslugasPrices: [],
  error: null,
  loading: true,
};

export const addUsluga = createAsyncThunk('/usluga/add', (uslugaPrice: UslugaPrice) =>
  api.fetchAddUslugas(uslugaPrice),
);
export const loadPrices = createAsyncThunk('load/uslugaPrice', () => api.fetchUslugasPrice());

const uslugasPriceSlice = createSlice({
  name: 'uslugasPrice',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUsluga.fulfilled, (state, action) => {
        state.uslugasPrices = [...state.uslugasPrices, action.payload];
      })
      .addCase(addUsluga.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(addUsluga.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadPrices.fulfilled, (state, action) => {
        state.uslugasPrices = action.payload;
      })
      .addCase(loadPrices.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(loadPrices.pending, (state) => {
        state.loading = true;
      });
  },
});

export const { stopLoading } = uslugasPriceSlice.actions;
export default uslugasPriceSlice.reducer;
