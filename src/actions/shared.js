import { _getUsers, _getQuestions } from './../_DATA';
import { receiveUsers } from '../actions/users';
import { receiveQuestions } from '../actions/questions';
export function getInitialData() {
  return async (dispatch) => {
    try {
      const users = await _getUsers();
      const questions = await _getQuestions();
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    } catch (error) {
      console.log(error);
    }
  };
}
