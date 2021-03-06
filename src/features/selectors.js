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
    unanswered: unanswered.sort((a, b) => a.timestamp - b.timestamp),
    answered: answered.sort((a, b) => a.timestamp - b.timestamp),
    users: users.users,
    loading: questions.loading,
  };
};

export const leaderBoardSelector = (state) => {
  const { users } = state.users;

  const leaders = Object.keys(users).map((key) => {
    return {
      id: users[key].id,
      avatarURL: users[key].avatarURL,
      answers: Object.keys(users[key].answers).length,
      questions: users[key].questions.length,
    };
  });

  return leaders
    .sort((a, b) => a.answers + a.questions - (b.answers + b.questions))
    .reverse();
};
