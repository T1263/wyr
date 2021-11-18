import { RECEIVED_ERROR } from '../actions/logError';

export default function logError(state = '', action) {
  if (action.type === RECEIVED_ERROR) return action.error;

  return state;
}
