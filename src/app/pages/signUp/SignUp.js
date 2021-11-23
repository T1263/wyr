import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { signUpUsers } from '../../../features/users/usersSlice';
import css from './SignUp.module.css';
import useAuth from '../../useAuth';

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(({ users }) => users.loading);
  const [fname, setFname] = useState('');
  const [lname, setlname] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let fullName = fname + ' ' + lname;
    let userId = fullName.toLowerCase().replace(/ /g, '');

    await dispatch(
      signUpUsers({
        id: userId,
        name: fullName,
        avatarURL: '/images/noimage.png',
        answers: {},
        questions: [],
      })
    );

    await login();
    navigate('/');
  };
  const disabled = () => {
    if (fname.length <= 5 || lname.length <= 5) return true;
    return false;
  };
  return (
    <div className={css.signUp}>
      <div className={css.div}>
        <h2> Sign Up </h2>
        <form onSubmit={handleSubmit}>
          <input
            value={fname}
            placeholder="First Name"
            type="text"
            onChange={({ target }) => setFname(target.value)}
          />
          <input
            value={lname}
            placeholder="Last Name"
            type="text"
            onChange={({ target }) => setlname(target.value)}
          />
          <button type="submit" disabled={disabled()}>
            {loading ? '...loading.' : 'SignUp →'}
          </button>
        </form>
        Or
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
