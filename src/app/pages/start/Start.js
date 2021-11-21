import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import List from '../../../features/questions/List';
import css from './Start.module.css';
import { questionSelector } from '../../../features/selectors';

export default function Start() {
  const [active, setActive] = useState('Unanswered');
  const { unanswered, answered, users, loading } =
    useSelector(questionSelector);

  return (
    <div className={css.tabs}>
      <div className={css.tabsButtons}>
        <span
          className={active === 'Unanswered' ? css.active : ''}
          onClick={() => setActive('Unanswered')}
        >
          Unanswered
        </span>
        <span
          className={active === 'Answered' ? css.active : ''}
          onClick={() => setActive('Answered')}
        >
          Answered
        </span>
      </div>
      {loading ? (
        <h2 align="center">...loading</h2>
      ) : (
        <div className={css.start}>
          {active === 'Unanswered' && (
            <List
              name="Unanswered"
              borderPosition="borderRight"
              questions={unanswered}
              users={users}
            />
          )}
          {active === 'Answered' && (
            <List
              name="Answered"
              borderPosition="borderLeft"
              questions={answered}
              users={users}
            />
          )}
        </div>
      )}
    </div>
  );
}
