import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const departmentsSlice = createSlice({
  name: 'departments',
  initialState,
  reducers: {
    setDepartments: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setDepartments } = departmentsSlice.actions;

export default departmentsSlice.reducer;
