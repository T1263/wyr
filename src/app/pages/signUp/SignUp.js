import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { signUpUsers } from '../../../features/users/usersSlice';
import css from './SignUp.module.css';

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fname, setFname] = useState('');
  const [lname, setlname] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let fullName = fname + ' ' + lname;
    let userId = fullName.toLowerCase().replace(/ /g, '');
    dispatch(
      signUpUsers({
        id: userId,
        name: fullName,
        avatarURL: '/images/noimage.png',
        answers: {},
        questions: [],
      })
    );

    navigate('/', { replace: true });
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
            SignUp
          </button>
        </form>
        Or
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
