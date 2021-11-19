import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './features/users/usersSlice';
import { fetchQuestions } from './features/questions/questionsSlice';
import '../src/styles/global.css';
import Login from './features/login/Login';
import Start from './features/start/Start';
import Nav from './features/nav/Nav';
import { Routes, Route, useNavigate } from 'react-router';
import Footer from './features/footer/Footer';

function App() {
  const dispatch = useDispatch();
  const loggedUser = useSelector(({ loggedUser }) => loggedUser.value);
  const [usersLoading, questionsLoading] = useSelector(
    ({ users, questions }) => [users.loading, questions.loading]
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedUser === null) {
      navigate('/login', { replace: true });
    }
    dispatch(fetchUsers());
    dispatch(fetchQuestions());
  }, [navigate, dispatch, loggedUser]);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {questionsLoading && usersLoading && (
                <h3 align="center">...loading.</h3>
              )}
              {!questionsLoading && !usersLoading && <Start />}
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
