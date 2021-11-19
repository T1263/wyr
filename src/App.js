import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../src/styles/global.css';
import Login from './features/login/Login';
import Start from './features/start/Start';
import Nav from './features/nav/Nav';
import { Routes, Route, useNavigate } from 'react-router';
import Footer from './features/footer/Footer';

function App() {
  const loggedUser = useSelector(({ loggedUser }) => loggedUser.value);

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedUser === null) {
      navigate('/login', { replace: true });
    }
  }, [navigate, loggedUser]);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
