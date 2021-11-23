import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import css from './LoginForm.module.css';
import { logIn } from './loginSlice';
import useAuth from '../../app/useAuth';
export default function LoginForm({ locationState }) {
  const [userId, setUserId] = useState('choose');
  const { users, loading } = useSelector(({ users }) => ({
    ...users,
  }));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { login } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();

    login().then(() => {
      dispatch(logIn(userId));
      navigate(locationState.path || '/');
    });
  };

  const disabled = () => userId === '' && userId === 'choose';
  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <select
          value={userId}
          onChange={({ target }) => setUserId(target.value)}
        >
          <option value="choose" key="1" disabled>
            {loading ? '...loading' : 'Choose a User:'}
          </option>
          {Object.keys(users).map((id) => (
            <option value={users[id].id} key={id}>
              {users[id].id}
            </option>
          ))}
        </select>
        <button type="submit" disabled={disabled()}>
          {loading ? '...loading' : 'In →'}
        </button>
      </form>
      Or
      <Link to="/signup">SignUp</Link>
    </>
  );
}
