// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   isToggled: false,
// };

// const toggleSlice = createSlice({
//   name: 'isToggled',
//   initialState,
//   reducers: {
//     toggle: (state) => {
//       state.isToggled = !state.isToggled;
      
//     },
//     toggleFalse : (state) => {
//       state.isToggled = false;
//   },
//   toggleTrue : (state) => {
//     state.isToggled = true;
// },
// }});

// export const { toggle, toggleFalse, toggleTrue } = toggleSlice.actions;
// export default toggleSlice.reducer;

  
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};
// Structuring the slice to handle toggling states for different contexts (e.g., different API calls) by using dynamic keys in the state. This allows to manage the state for each specific API.
const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggle: (state, action) => {
      const key = action.payload;  // Unique key for the toggle state
      state[key] = !state[key];
    },
    setToggleTrue: (state, action) => {
      const key = action.payload;
      state[key] = true;
    },
    setToggleFalse: (state, action) => {
      const key = action.payload;
      state[key] = false;
    },
  },
});

export const { toggle, setToggleTrue, setToggleFalse } = toggleSlice.actions;

export default toggleSlice.reducer;
