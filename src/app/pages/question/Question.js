import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import css from './QuestionPage.module.css';
export default function QuestionPage() {
  const [question1, checkQuestion1] = useState(false);
  const [question2, checkQuestion2] = useState(false);
  const { question, user } = useLocation().state;
  const { author, optionOne, optionTwo } = question;

  const handleForm = (e) => {
    e.preventDefault();
    // Save the answer
  };

  const disabled = () => question1 === false && question2 === false;
  return (
    <div className={css.questionPage}>
      <div className={css.card}>
        <h1 className={css.header}>{author} is asking:</h1>
        <div className={css.content}>
          <img src={user.avatarURL} alt={`Avatar of ${user.name}`} />
          <div className={css.questions}>
            <h2>Would you rather</h2>
            <form onSubmit={handleForm}>
              <label>
                {optionOne.text}
                <input
                  onChange={({ target }) => {
                    checkQuestion2(!target.checked);
                    checkQuestion1(target.checked);
                  }}
                  checked={question1}
                  type="checkbox"
                />
              </label>
              <span className={css.or}> Or </span>
              <label>
                {optionTwo.text}

                <input
                  onChange={({ target }) => {
                    checkQuestion2(target.checked);
                    checkQuestion1(!target.checked);
                  }}
                  checked={question2}
                  type="checkbox"
                />
              </label>
              <button className={css.button} disabled={disabled()}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
