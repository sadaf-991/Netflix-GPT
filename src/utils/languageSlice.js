import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: 'lang',
    initialState: {
        language: 'en',
    },
    reducers: {
       languageChange: (state, action) => {
        state.language = action.payload;
    },
},
})
export const { languageChange } = languageSlice.actions;

export default languageSlice.reducer;