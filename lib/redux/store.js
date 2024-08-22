import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./coursesSlice"
import toggleReducer from "./toggleSlice"
import modalReducer from "./modalSlice"

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    isToggled: toggleReducer,
    openModal: modalReducer
  },
});

export default store;
