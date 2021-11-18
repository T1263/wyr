import { _getUsers, _getQuestions } from '../_DATA';
import { setUsers } from './users/usersSlice';
import { setquestions } from './questions/questionsSlice';
import { setError } from '../features/errorSlice';

// Sets our initial Data
export function getInitialData() {
  return async (dispatch) => {
    try {
      const users = await _getUsers();
      const questions = await _getQuestions();
      dispatch(setUsers(users));
      dispatch(setquestions(questions));
    } catch (error) {
      dispatch(setError(error.toString()));
    }
  };
}
