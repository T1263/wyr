import { combineReducers } from 'redux';
import loggedUser from './authenticate';
import users from './users';
import questions from './questions';
export default combineReducers({
  loggedUser,
  users,
  questions,
});
