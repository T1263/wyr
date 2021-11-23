import React from 'react';
import { useLocation } from 'react-router';
import css from './Login.module.css';
import LoginForm from './_LoginForm';

export default function Login() {
  const { state } = useLocation();
  return (
    <div className={css.login}>
      <h1 className={css.head}>Login</h1>
      <LoginForm locationState={state} />
    </div>
  );
}
