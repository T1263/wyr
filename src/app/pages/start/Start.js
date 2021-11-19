import React from 'react';
import { useSelector } from 'react-redux';
import Question from '../../../features/questions/Question';
import css from './Start.module.css';

export default function Start() {
  const [{ questions }, { users }] = useSelector(({ questions, users }) => [
    questions,
    users,
  ]);

  return (
    <div className={css.start}>
      <ul>
        {Object.keys(questions).map((id) => (
          <Question
            key={id}
            question={questions[id]}
            user={users[questions[id].author]}
          />
        ))}
      </ul>
    </div>
  );
}
