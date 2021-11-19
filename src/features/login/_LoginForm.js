import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import css from './LoginForm.module.css';
import { logIn } from './loginSlice';
import { fetchUsers } from '../users/usersSlice';

export default function LoginForm() {
  const [userId, setUserId] = useState('choose');
  const { users } = useSelector(({ users }) => users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(userId));
    navigate('/', { replace: true });
  };
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const disabled = () => {
    if (userId !== '' && userId !== 'choose') return false;

    return true;
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <select value={userId} onChange={({ target }) => setUserId(target.value)}>
        <option value="choose" key="1" disabled>
          Choose a User:
        </option>
        {Object.keys(users).map((id) => (
          <option value={users[id].id} key={id}>
            {users[id].id}
          </option>
        ))}
      </select>
      <button type="submit" disabled={disabled()}>
        Login
      </button>
    </form>
  );
}
