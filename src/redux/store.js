import { configureStore } from '@reduxjs/toolkit';
import postReducer from "./postRedux";

export default configureStore({
    reducer: {
        post: postReducer,
    },
});