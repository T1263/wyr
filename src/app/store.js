import { configureStore } from '@reduxjs/toolkit';
import loggedUser from '../features/login/loginSlice';
import users from '../features/users/usersSlice';
import questions from '../features/questions/questionsSlice';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: {
    loggedUser,
    users,
    questions,
  },
  middleware: [thunk, logger],
});
