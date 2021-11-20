export const questionSelector = (state) => {
  let unanswered = [];
  let answered = [];
  const { questions, loggedUser, users } = state;
  if (!users.users[loggedUser.value])
    return { unanswered, answered, users: users.users };
  // Filter unanswered questions by current user
  Object.keys(questions.questions).forEach((item) => {
    if (users.users[loggedUser.value].answers[item] === undefined) {
      unanswered.push(questions.questions[item]);
    }
  });
  // Filter answered questions by current user
  Object.keys(users.users[loggedUser.value].answers).forEach((item) => {
    answered.push(questions.questions[item]);
  });
  return {
    unanswered,
    answered,
    users: users.users,
    loading: questions.loading,
  };
};
