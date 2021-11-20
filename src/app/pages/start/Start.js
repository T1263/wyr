import React from 'react';
import { useSelector } from 'react-redux';
import List from '../../../features/questions/List';
import css from './Start.module.css';
import { questionSelector } from '../../../features/selectors';

export default function Start() {
  const { unanswered, answered, users, loading } =
    useSelector(questionSelector);

  return (
    <div>
      {loading && <h2 align="center">...loading</h2>}
      <div className={css.start}>
        <List
          name="Unanswered"
          borderPosition="borderRight"
          questions={unanswered}
          users={users}
        />
        <List
          name="Answered"
          borderPosition="borderLeft"
          questions={answered}
          users={users}
        />
      </div>
    </div>
  );
}
