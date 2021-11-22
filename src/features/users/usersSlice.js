import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { _getUsers } from '../../_DATA';

export const fetchUsers = createAsyncThunk('users/fetchAll', async () => {
  return await _getUsers();
});

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: {},
    loading: false,
  },
  reducers: {
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

export const { setUsers, updateQuestions, updateAnswers } = usersSlice.actions;
export default usersSlice.reducer;
