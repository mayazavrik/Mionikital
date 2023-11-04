import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Sale, ServicesState } from './types/type';
import * as api from './api/api';

const initialState: ServicesState = {
  services: [],
  error: null,
  loading: true,
};

export const loadServices = createAsyncThunk('services/load', () => api.fetchServices());
export const addSales = createAsyncThunk('services/sales/add', (sale: Sale) =>
  api.fetchAddSale(sale),
);

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadServices.fulfilled, (state, action) => {
        state.services = action.payload;
      })
      .addCase(loadServices.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(loadServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(addSales.fulfilled, (state, action) => {
        state.services.forEach((service) =>
          service.id === action.payload.service_id ? service.Sales.push(action.payload) : service,
        );
      })
      .addCase(addSales.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(addSales.pending, (state) => {
        state.loading = true;
      });
  },
});
export const { stopLoading } = servicesSlice.actions;
export default servicesSlice.reducer;
