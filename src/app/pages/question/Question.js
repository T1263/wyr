import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { saveQuestionAnswer } from '../../../features/questions/questionsSlice';

import css from './QuestionPage.module.css';
export default function QuestionPage() {
  const [question1, checkQuestion1] = useState(false);
  const [question2, checkQuestion2] = useState(false);
  const { question, user } = useLocation().state;
  const { id, author, optionOne, optionTwo } = question;
  const [showResults, setShowResults] = useState(false);
  const loggedUser = useSelector(({ loggedUser }) => loggedUser.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();

    dispatch(
      saveQuestionAnswer({
        authedUser: loggedUser,
        qid: id,
        answer: question1 ? 'optionOne' : 'optionTwo',
      })
    );

    setShowResults(true);
    //Todo: Show Results
    // Fix state not updating
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
