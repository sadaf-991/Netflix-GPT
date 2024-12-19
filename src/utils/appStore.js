import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./appSlice";
import moviesReducer from './movieSlice';
import gptReducer from './gptSlice';
import langRdeucer from './languageSlice';

const appStore = configureStore({
        reducer: {
           user: userReducer, 
           movies: moviesReducer,
           gpt: gptReducer,
           lang: langRdeucer, 
        },
     });
export default appStore;