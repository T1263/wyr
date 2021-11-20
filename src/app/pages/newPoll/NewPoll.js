import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { addQuestion } from '../../../features/questions/questionsSlice';
import { _saveQuestion } from '../../../_DATA';
import css from './NewPoll.module.css';
export default function NewPoll() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.loggedUser.value);

  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      addQuestion({
        optionOneText: option1,
        optionTwoText: option2,
        author: loggedUser,
      })
    );

    navigate('/', { replace: true });
  };
  const disabled = () => {
    if (option1.length <= 5 || option2.length <= 5) return true;
    return false;
  };
  return (
    <div className={css.newPoll}>
      <h2> New Poll </h2>
      <form onSubmit={handleSubmit}>
        <input
          value={option1}
          placeholder="Enter Option 1"
          type="text"
          onChange={({ target }) => setOption1(target.value)}
        />
        <small className={css.or}> OR </small>
        <input
          value={option2}
          placeholder="Enter Option 2"
          type="text"
          onChange={({ target }) => setOption2(target.value)}
        />
        <button disabled={disabled()}>Create</button>
      </form>
    </div>
  );
}
