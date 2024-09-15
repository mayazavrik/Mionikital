import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type {  CourseCard,  CoursesState } from './types/types';
import * as api from './api/api';



const initialState: CoursesState = {
  courses: [],
  error: null,
  loading: true,
  
};

export const loadCourses = createAsyncThunk('courses/load', () => api.fetchCourses());

// export const addSales = createAsyncThunk('sales/add', (sale: Sale) =>
//   api.fetchAddSale(sale),
// );
// // export const changeSales = createAsyncThunk('sales/change', (sale: Sale) =>
// //   api.fetchUpdSale(sale),
// // );
// export const deleteSale = createAsyncThunk('/sales/delete', (saleId: SaleId) =>
//   api.fetchDeleteSale(saleId),
// );
// export const updateSale = createAsyncThunk('/sales/upd', (sale: Sale) =>
//   api.fetchUpdSale(sale),
// );
export const addCourse = createAsyncThunk('courses/add', (course: CourseCard) =>
  api.fetchAddCourse(course),
);

export const deleteСourse = createAsyncThunk('courses/delete', (id: number) =>
  api.fetchCourseRemove(id),
);

export const changeCourse = createAsyncThunk('courses/change', (course: CourseCard) =>
  api.fetchCourseChange(course),
);
// export const addComments = createAsyncThunk('comments/add', (comment: CommentData) =>
//   api.fetchAddComments(comment),
// );
// export const deleteComment = createAsyncThunk('comments/delete', (id: number) =>
//   api.fetchDeleteComments(id),
// );

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.loading = false;
    },
 
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
      })
      .addCase(loadCourses.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(loadCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.courses.push(action.payload);
      })
      .addCase(changeCourse.fulfilled, (state, action) => {
        state.courses = state.courses.map((course) =>
        course.id === action.payload.id ? (course = action.payload) : course,
        );
      })
      .addCase(deleteСourse.fulfilled, (state, action) => {
        state.courses = state.courses.filter((course) => course.id !== action.payload);
      })
    
      // .addCase(addComments.fulfilled, (state, action) => {
      //   if (!action.payload.rate) {
      //     state.services.forEach((service) =>
      //       service.id === action.payload.comment.service_id
      //         ? (service.Comments = [...service.Comments, action.payload.comment])
      //         : service,
      //     );
      //   } else {
      //     state.services.forEach((service) =>
      //       service.id === action.payload.comment.service_id
      //         ? (service.Comments = [...service.Comments, action.payload.comment])
      //         : service,
      //     );
      //     state.services.forEach((service) =>
      //       service.id === action.payload.comment.service_id
      //         ? (service.Rates = [...service.Rates, action.payload.rate])
      //         : service,
      //     );
      //   }
      // })
      // .addCase(addComments.rejected, (state, action) => {
      //   state.error = action.error.message ? action.error.message : null;
      // })
      // .addCase(addComments.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(deleteComment.fulfilled, (state, action) => {
      //   state.services = state.services.map((service) =>
      //     service.id === action.payload.service_id
      //       ? {
      //           ...service,
      //           Comments: service.Comments.filter(
      //             (comment) => comment.id !== action.payload.comment_id,
      //           ),
      //         }
      //       : service,
      //   );
     
      // })
    
  },
});
export const { stopLoading } = coursesSlice.actions;
export default coursesSlice.reducer;
