import { _getUsers, _getQuestions } from '../_DATA';
import { setUsers } from './users/usersSlice';
import { setquestions } from './questions/questionsSlice';
import { createSlice } from '@reduxjs/toolkit';
// import { receiveError } from '../actions/logError';

const errorSlice = createSlice({
  name: 'error',
  initialState: '',
  reducers: {},
});

export function getInitialData() {
  return async (dispatch) => {
    try {
      const users = await _getUsers();
      const questions = await _getQuestions();
      dispatch(setUsers(users));
      dispatch(setquestions(questions));
    } catch (error) {
      // dispatch(receiveError(error.toString()));
    }
  };
}
