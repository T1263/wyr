import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { _getQuestions, _saveQuestion } from '../../_DATA';
export const fetchQuestions = createAsyncThunk(
  'questions/fetchAll',
  async () => {
    return await _getQuestions();
  }
);

export const addQuestion = createAsyncThunk(
  'questions/add',
  async (question) => {
    return await _saveQuestion(question);
  }
);
export const questionsSlice = createSlice({
  name: 'questions',
  initialState: {
    questions: {},
    loading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.questions = action.payload;
      state.loading = false;
    });
    builder.addCase(addQuestion.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addQuestion.fulfilled, (state, action) => {
      state.questions[action.payload.id] = action.payload;
      state.loading = false;
    });
  },
});

export default questionsSlice.reducer;
