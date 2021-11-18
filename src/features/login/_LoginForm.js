import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './LoginForm.module.css';
import { logIn } from './loginSlice';
export default function LoginForm() {
  const [userId, setUserId] = useState('');
  const { users } = useSelector(({ users }) => users);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(userId));
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <select
        name=""
        value={userId}
        onChange={({ target }) => setUserId(target.value)}
      >
        <option key="1" disabled>
          Choose a User:
        </option>
        {Object.keys(users).map((id) => (
          <option key={id}>{users[id].id}</option>
        ))}
      </select>
      <button type="submit">Login</button>
    </form>
  );
}
