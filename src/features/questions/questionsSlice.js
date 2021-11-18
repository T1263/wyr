import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { _getQuestions } from '../../_DATA';
export const fetchQuestions = createAsyncThunk(
  'questions/fetchAll',
  async () => {
    return await _getQuestions();
  }
);

export const questionsSlice = createSlice({
  name: 'questions',
  initialState: {
    questions: {},
    loading: false,
  },
  reducers: {
    setquestions: (state, action) => {
      state.questions = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.questions = action.payload;
      state.loading = false;
    });
  },
});

export const { setquestions } = questionsSlice.actions;
export default questionsSlice.reducer;
