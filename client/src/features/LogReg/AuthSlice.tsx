/* eslint-disable @typescript-eslint/default-param-last */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCheckUser, fetchLogOut, fetchSignIn, fetchSignUp } from './api/api';
import type { AuthState, User } from './type';

const initialState: AuthState = {
  user: undefined,
  error: null,
};

export const checkUser = createAsyncThunk('auth/check', () => fetchCheckUser());

export const signUp = createAsyncThunk('auth/signup', (user: User) => fetchSignUp(user));

export const signIn = createAsyncThunk('auth/signin', (user: User) => fetchSignIn(user));

export const logOut = createAsyncThunk('auth/logout', () => fetchLogOut());

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = undefined;
      });
  },
});

export default authSlice.reducer;
