import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './LoginForm.module.css';
import { logIn } from './loginSlice';
export default function LoginForm() {
  const [userId, setUserId] = useState('choose');
  const { users } = useSelector(({ users }) => users);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(userId));
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
      <button type="submit">Login</button>
    </form>
  );
}
