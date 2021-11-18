import { combineReducers } from 'redux';
import loggedUser from './authenticate';
import users from './users';
import questions from './questions';
import error from './loggedError';
export default combineReducers({
  loggedUser,
  users,
  questions,
  error,
});
