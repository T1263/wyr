import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { logOut } from '../login/loginSlice';
import Logo from '../logo/Logo';
import css from './Nav.module.css';
import useAuth from '../../app/useAuth';

export default function Nav() {
  const currentUser = useSelector(
    ({ users, loggedUser }) => users.users[loggedUser.value]
  );
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { logout } = useAuth();

  return (
    <div className={css.nav}>
      <div className="container">
        <div className={css.navLeft}>
          <Logo />
          <ul className={css.menu}>
            <li className={location.pathname === '/' ? css.active : ''}>
              <Link to="/">Start</Link>
            </li>
            <li className={location.pathname === '/add' ? css.active : ''}>
              <Link to="/add">New Poll</Link>
            </li>
            <li
              className={location.pathname === '/leaderboard' ? css.active : ''}
            >
              <Link to="/leaderboard">Leaderboard</Link>
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
                  logout().then(() => {
                    dispatch(logOut());
                    navigate('/');
                  });
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
