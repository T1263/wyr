import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from '../../../features/questions/List';
import css from './Start.module.css';
import { fetchQuestions } from '../../../features/questions/questionsSlice';

export default function Start() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  const [{ questions }, { users }, loggedUser] = useSelector(
    ({ questions, users, loggedUser }) => [questions, users, loggedUser.value]
  );

  return (
    <div className={css.start}>
      <List
        name="Unanswered"
        borderPosition="borderRight"
        questions={questions}
        users={users}
      />
      <List
        name="Answered"
        borderPosition="borderLeft"
        questions={questions}
        users={users}
      />
    </div>
  );
}
