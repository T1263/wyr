import { createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
  name: 'error',
  initialState: {
    value: '',
  },
  reducers: {
    setError: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setError } = errorSlice.actions;
export default errorSlice.reducer;
