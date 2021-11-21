import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './Question.module.css';

export default function Question({ question, user }) {
  const { id, avatarURL } = user;
  const navigate = useNavigate();
  const goToPage = () => {
    navigate(`/question/${question.id}`, {
      state: {
        question,
        user,
      },
    });
  };
  return (
    <li>
      <div className={css.question}>
        <div className={css.header}>
          <h2>{id} is asking: </h2>
        </div>
        <div className={css.content}>
          <img src={avatarURL} alt={`avatar of ${id}`} />
          <div className={css.options}>
            <h2>Would you rather</h2>
            <span>
              <p>...{question.optionOne.text} ?</p>
            </span>
          </div>
        </div>
        <button onClick={goToPage} className={css.button}>
          Or → Answer
        </button>
      </div>
    </li>
  );
}
