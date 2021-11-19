import React from 'react';
import css from './Login.module.css';
import LoginForm from './_LoginForm';

export default function Login() {
  return (
    <div className={css.login}>
      <h1 className={css.head}>Login</h1>
      <LoginForm />
    </div>
  );
}
