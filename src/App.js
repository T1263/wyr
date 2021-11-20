import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../src/styles/global.css';
import Login from './features/login/Login';
import Start from './app/pages/start/Start';
import Nav from './features/nav/Nav';
import { Routes, Route, useNavigate } from 'react-router';
import Footer from './features/footer/Footer';
import NewPoll from './app/pages/newPoll/NewPoll';
import LeaderBoard from './app/pages/leaderBoard/LeaderBoard';
import { useDispatch } from 'react-redux';
import { fetchQuestions } from './features/questions/questionsSlice';
import { fetchUsers } from './features/users/usersSlice';

function App() {
  const loggedUser = useSelector(({ loggedUser }) => loggedUser.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchQuestions());
    if (loggedUser === null) {
      navigate('/login', { replace: true });
    }
  }, [dispatch, navigate, loggedUser]);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route index path="/" element={<Start />} />
        <Route path="/new" element={<NewPoll />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
