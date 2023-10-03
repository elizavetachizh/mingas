import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setServices: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setServices } = servicesSlice.actions;

export default servicesSlice.reducer;
