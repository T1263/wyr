import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getInitialData } from './actions/shared';
import '../src/styles/global.css';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitialData());
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>Header</h1>
      </header>
    </div>
  );
}

export default App;
