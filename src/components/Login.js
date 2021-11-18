import React from 'react';
import css from '../styles/Login.module.css';
import LoginForm from './_loginForm';

export default function Login() {
  return (
    <div className={css.login}>
      <h1 className={css.head}>Login</h1>
      <LoginForm />
    </div>
  );
}
