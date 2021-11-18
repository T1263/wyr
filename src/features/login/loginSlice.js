import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'loggedUser',
  initialState: null,
  reducers: {
    logIn: (state, action) => {
      state = action.payload;
    },
    logOut: (state) => {
      state = '';
    },
  },
});

export const { logIn, logOut } = loginSlice.actions;
export default loginSlice.reducer;
