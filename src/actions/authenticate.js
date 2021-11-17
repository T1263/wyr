export const LOG_USER = 'LOG_USER';

export function login(loggedUserId) {
  return {
    type: LOG_USER,
    loggedUserId,
  };
}
