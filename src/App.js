import React, { useEffect } from 'react';
import '../src/styles/global.css';
import Login from './features/login/Login';
import Start from './app/pages/start/Start';
import Nav from './features/nav/Nav';
import { Routes, Route } from 'react-router';
import Footer from './features/footer/Footer';
import NewPoll from './app/pages/newPoll/NewPoll';
import LeaderBoard from './app/pages/leaderBoard/LeaderBoard';
import { useDispatch } from 'react-redux';
import { fetchQuestions } from './features/questions/questionsSlice';
import { fetchUsers } from './features/users/usersSlice';
import QuestionPage from './app/pages/question/Question';
import NotFound from './app/pages/notFound/NotFound';
import SignUp from './app/pages/signUp/SignUp';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchQuestions());
  }, [dispatch]);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route index path="/" element={<Start />} />
        <Route path="/new" element={<NewPoll />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/question/:id" element={<QuestionPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
