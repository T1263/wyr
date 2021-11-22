import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../../_DATA';
import { updateQuestions } from '../users/usersSlice';

export const fetchQuestions = createAsyncThunk(
  'questions/fetchAll',
  async () => {
    return await _getQuestions();
  }
);

export const addQuestion = createAsyncThunk(
  'questions/add',
  async (question, { dispatch }) => {
    const savedQuestion = await _saveQuestion(question);

    dispatch(
      updateQuestions({
        id: savedQuestion.id,
        author: savedQuestion.author,
      })
    );
    return savedQuestion;
  }
);
export const saveQuestionAnswer = createAsyncThunk(
  'questions/saveAnswer',
  async (question) => {
    // To satisfy fake backend
    // question = {
    //   authedUser: loggedUser,
    //   qid: id,
    //   answer: question1 ? 'optionOne' : 'optionTwo',
    // }
    // Backend does not return any value
    await _saveQuestionAnswer(question);

    //Lets return an object we can work with in our redux store since we have the question

    return question;
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
    builder.addCase(saveQuestionAnswer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(saveQuestionAnswer.fulfilled, (state, action) => {
      const { authedUser, answer, qid } = action.payload;

      state.loading = false;
      state.questions[qid][answer]['votes'].push(authedUser);
    });
  },
});

export default questionsSlice.reducer;
