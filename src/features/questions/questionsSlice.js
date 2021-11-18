import { createSlice } from '@reduxjs/toolkit';

export const questionsSlice = createSlice({
  name: 'questions',
  initialState: {
    questions: {},
  },
  reducers: {
    setquestions: (state, action) => {
      state.questions = action.payload;
    },
  },
});

export const { setquestions } = questionsSlice.actions;
export default questionsSlice.reducer;
