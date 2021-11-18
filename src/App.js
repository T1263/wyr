import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInitialData } from './features';
import '../src/styles/global.css';
import Login from './features/login/Login';

function App() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser);

  useEffect(() => {
    dispatch(getInitialData());
  });

  if (loggedUser === null) return <Login />;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Header</h1>
      </header>
    </div>
  );
}

export default App;
