// import { _getUsers, _getQuestions } from '../_DATA';
// import { setUsers } from './users/usersSlice';
// import { setquestions } from './questions/questionsSlice';
// import { setError } from '../features/errorSlice';
// import { show, hide } from './loadingSlice';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const getInitialData = createAsyncThunk()

// // Sets our initial Data
// export function getInitialData() {
//   return async (dispatch) => {
//     try {
//       dispatch(show());
//       const users = await _getUsers();
//       const questions = await _getQuestions();
//       dispatch(setUsers(users));
//       dispatch(setquestions(questions));
//       dispatch(hide());
//     } catch (error) {
//       dispatch(hide());
//       dispatch(setError(error.toString()));
//     }
//   };
// }
