import { _getUsers, _getQuestions } from './../_DATA';

export function getInitialData() {
  return (dispatch) => {
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, questions]) => {
        //TODO dispatch respective actions
      }
    );
  };
}
