import { configureStore } from '@reduxjs/toolkit';
import loggedUser from '../features/login/loginSlice';
import users from '../features/users/usersSlice';
import questions from '../features/questions/questionsSlice';
import logger from 'redux-logger';
import errorReducer from '../features/errorSlice';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: {
    loggedUser,
    users,
    questions,
    error: errorReducer,
  },
  middleware: [thunk, logger],
});
