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
    setUsers: (state, action) => {
      state.users = action.payload;
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

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
