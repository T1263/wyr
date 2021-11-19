import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { logOut } from '../login/loginSlice';
import Logo from '../logo/Logo';
import css from './Nav.module.css';

export default function Nav() {
  const currentUser = useSelector(
    ({ users, loggedUser }) => users.users[loggedUser.value]
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className={css.nav}>
      <div className="container">
        <div className={css.navLeft}>
          <Logo />
          <ul className={css.menu}>
            <li>New Poll</li>
            <li>Leaderboard</li>
          </ul>
        </div>
        <div className={css.navRight}>
          {currentUser && (
            <div className={css.userInfo}>
              <img
                src={currentUser.avatarURL}
                alt={`avatar of ${currentUser.id}`}
              />
              <p>{currentUser.id}</p>
            </div>
          )}
          <button
            onClick={() => {
              dispatch(logOut());
              navigate('/login', { replace: true });
            }}
          >
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
}
