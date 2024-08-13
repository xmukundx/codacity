import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  loading: false,
  error: null,
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",

  async () => {
    try {
      const response = await fetch("/api/courses");
      const data = await response.json();
      return data;
      
    } catch (error) {
        console.error('Error fetching courses:', error);
        return rejectWithValue(error.message);
      }
  },
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default coursesSlice.reducer;
