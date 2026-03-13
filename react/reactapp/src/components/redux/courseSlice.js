import { createSlice } from "@reduxjs/toolkit";
import coursesData from "../../data/courses.json";

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    courses: coursesData
  },
  reducers: {
    enrollStudent: (state, action) => {
      const course = state.courses.find(c => c.id === action.payload);
      if (course) course.status = "Enrolled";
    },
    unenrollStudent: (state, action) => {
      const course = state.courses.find(c => c.id === action.payload);
      if (course) course.status = "Available";
    }
  }
});

export const { enrollStudent, unenrollStudent } = courseSlice.actions;
export default courseSlice.reducer;
