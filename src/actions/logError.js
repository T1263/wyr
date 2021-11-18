export const RECEIVED_ERROR = 'RECEIVED_ERROR';
export function receiveError(error) {
  return {
    type: RECEIVED_ERROR,
    error,
  };
}
