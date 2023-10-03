import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  getMainPostById: null,
};

export const mainPostsSlice = createSlice({
  name: 'mainPosts',
  initialState,
  reducers: {
    setMainPosts: (state, action) => {
      state.data = action.payload;
    },
    setMainPostById: (state, action) => {
      state.getMainPostById = action.payload;
    },
  },
});

export const { setMainPosts,setMainPostById } = mainPostsSlice.actions;

export default mainPostsSlice.reducer;
