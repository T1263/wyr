import { LOG_USER } from '../actions/authenticate';

export default function loggedUser(state = null, action) {
  switch (action.type) {
    case LOG_USER:
      return action.loggedUserId;

    default:
      return state;
  }
}
