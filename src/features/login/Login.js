import React from 'react';
import Logo from '../logo/Logo';
import css from './Login.module.css';
import LoginForm from './_LoginForm';

export default function Login() {
  return (
    <div className={css.login}>
      <Logo />
      <h1 className={css.head}>Login</h1>
      <LoginForm />
    </div>
  );
}
