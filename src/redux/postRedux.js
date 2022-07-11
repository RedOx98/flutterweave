import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //Get posts
        getPostStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getPostSuccess: (state, action) => {
            state.isFetching = false;
            state.posts = action.payload;
        },
        getPostFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
},
);

export const { getPostStart, getPostSuccess, getPostFailure } = postSlice.actions;
export default postSlice.reducer;