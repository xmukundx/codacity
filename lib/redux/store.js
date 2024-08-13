import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./coursesSlice"
import toggleReducer from "./toggleSlice"

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    isToggled: toggleReducer
  },
});

export default store;
