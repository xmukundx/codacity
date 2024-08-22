
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    openModal: false
};


export const modalSlice = createSlice({
    name: "openModal",
    initialState,
    reducers:{
        toggleModal(state) {
            state.openModal = !state.openModal
        },

    }
})

 export const {toggleModal} = modalSlice.actions;
 export default modalSlice.reducer;