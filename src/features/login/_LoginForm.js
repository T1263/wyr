import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import css from './LoginForm.module.css';
import { logIn } from './loginSlice';

export default function LoginForm() {
  const [userId, setUserId] = useState('choose');
  const { users, loading } = useSelector(({ users }) => ({
    ...users,
  }));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(userId));
    navigate('/', { replace: true });
  };

  const disabled = () => {
    if (userId !== '' && userId !== 'choose') return false;

    return true;
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <select value={userId} onChange={({ target }) => setUserId(target.value)}>
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
        In →
      </button>
    </form>
  );
}
