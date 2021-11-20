import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { logOut } from '../login/loginSlice';
import Logo from '../logo/Logo';
import css from './Nav.module.css';

export default function Nav() {
  const currentUser = useSelector(
    ({ users, loggedUser }) => users.users[loggedUser.value]
  );
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser === undefined) {
      navigate('/login');
    }
  }, [navigate, currentUser]);

  return (
    <div className={css.nav}>
      <div className="container">
        <div className={css.navLeft}>
          <Logo />
          <ul className={css.menu}>
            <li>
              <Link
                className={location.pathname === '/' ? css.active : ''}
                to="/"
              >
                Start
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === '/new' ? css.active : ''}
                to="/new"
              >
                New Poll
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname === '/leaderboard' ? css.active : ''
                }
                to="/leaderboard"
              >
                Leaderboard
              </Link>
            </li>
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

              <button
                onClick={() => {
                  dispatch(logOut());
                  navigate('/login', { replace: true });
                }}
              >
                Out →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
