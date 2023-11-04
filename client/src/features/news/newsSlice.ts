import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PostsState } from './types/state';
import * as api from '../../features/news/api/api';
import { fetchPostAdd } from '../admin/api/api';
import type { Post } from './types/Post';

const initialState: PostsState = {
  posts: [],
  error: null,
  loading: true,
};

export const loadPosts = createAsyncThunk('posts/load', () => api.fetchPosts());
export const addNews = createAsyncThunk('posts/add', (post: Post) => fetchPostAdd(post));

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(loadPosts.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(loadPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNews.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  },
});

export const { stopLoading } = postsSlice.actions;
export default postsSlice.reducer;
