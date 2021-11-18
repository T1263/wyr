import { useDispatch } from 'react-redux';
import { logOut } from '../login/loginSlice';
export default function Nav() {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Nav</h3>
      <button onClick={() => dispatch(logOut())}>LogOut</button>
    </div>
  );
}
