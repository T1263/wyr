import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addQuestion } from '../../../features/questions/questionsSlice';
import { updateAnswers } from '../../../features/users/usersSlice';

import css from './NewPoll.module.css';
export default function NewPoll() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.loggedUser.value);

  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(
      addQuestion({
        optionOneText: option1,
        optionTwoText: option2,
        author: loggedUser,
      })
    );

    if (res.type === 'questions/add/fulfilled') {
      //Todo Update current User - This could be moved somewhere else
      dispatch(
        updateAnswers({
          id: res.payload.id,
          author: res.payload.author,
        })
      );
    }

    navigate('/', { replace: true });
  };
  const disabled = () => {
    if (option1.length <= 5 || option2.length <= 5) return true;
    return false;
  };
  return (
    <div className={css.newPoll}>
      <div className={css.div}>
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
          <button type="submit" disabled={disabled()}>
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
