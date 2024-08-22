import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isToggled: false,
};

const toggleSlice = createSlice({
  name: 'isToggled',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isToggled = !state.isToggled;
      
    },
    toggleFalse : (state) => {
      state.isToggled = false;
  },
  toggleTrue : (state) => {
    state.isToggled = true;
},
}});

export const { toggle, toggleFalse, toggleTrue } = toggleSlice.actions;
export default toggleSlice.reducer;

  
