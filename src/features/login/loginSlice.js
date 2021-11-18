import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'loggedUser',
  initialState: {
    value: null,
  },
  reducers: {
    logIn: (state, action) => {
      state.value = action.payload;
    },
    logOut: (state) => {
      state.value = '';
    },
  },
});

export const { logIn, logOut } = loginSlice.actions;
export default loginSlice.reducer;
