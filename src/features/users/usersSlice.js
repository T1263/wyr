import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { _getUsers, _createUser } from '../../_DATA';
import { logIn } from '../login/loginSlice';
export const fetchUsers = createAsyncThunk('users/fetchAll', async () => {
  return await _getUsers();
});

export const signUpUsers = createAsyncThunk(
  'users/signUp',
  async (user, { dispatch }) => {
    await _createUser(user);
    dispatch(create(user));
    dispatch(logIn(user.id));
  }
);

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: {},
    loading: false,
  },
  reducers: {
    create: (state, action) => {
      state.users[action.payload.id] = action.payload;
    },
    updateQuestions: (state, action) => {
      const { id, author } = action.payload;
      state.users[author].questions.push(id);
    },
    updateAnswers: (state, action) => {
      const { qid, answer, authedUser } = action.payload;
      state.users[authedUser].answers[qid] = answer;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
  },
});

export const { setUsers, updateQuestions, updateAnswers, create } =
  usersSlice.actions;
export default usersSlice.reducer;
