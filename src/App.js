import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './features/users/usersSlice';
import { fetchQuestions } from './features/questions/questionsSlice';
import '../src/styles/global.css';
import Login from './features/login/Login';
import Start from './features/start/Start';
import Nav from './features/nav/Nav';

function App() {
  const dispatch = useDispatch();
  const loggedUser = useSelector(({ loggedUser }) => loggedUser.value);
  const [usersLoading, questionsLoading] = useSelector(
    ({ users, questions }) => [users.loading, questions.loading]
  );

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchQuestions());
  }, [dispatch]);

  if (loggedUser === null && !questionsLoading && !usersLoading)
    return <Login />;
  return (
    <div className="App">
      <Nav />
      {questionsLoading && usersLoading && <h3 align="center">...loading.</h3>}
      {!questionsLoading && !usersLoading && <Start />}
    </div>
  );
}

export default App;
