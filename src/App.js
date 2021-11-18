import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './features/users/usersSlice';
import { fetchQuestions } from './features/questions/questionsSlice';
import '../src/styles/global.css';
import Login from './features/login/Login';
import Start from './features/start/Start';

function App() {
  const dispatch = useDispatch();
  const loggedUser = useSelector(({ loggedUser }) => loggedUser.value);
  const questionsLoading = useSelector(({ questions }) => questions.loading);
  const usersLoading = useSelector(({ users }) => users.loading);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchQuestions());
  }, [dispatch]);

  if (loggedUser === null && !questionsLoading && !usersLoading)
    return <Login />;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Header</h1>
      </header>
      {questionsLoading && usersLoading && <h3 align="center">...loading.</h3>}
      {!questionsLoading && !usersLoading && <Start />}
    </div>
  );
}

export default App;
