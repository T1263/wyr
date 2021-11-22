import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { saveQuestionAnswer } from '../../../features/questions/questionsSlice';

import css from './QuestionPage.module.css';
export default function QuestionPage() {
  const [question1, checkQuestion1] = useState(false);
  const [question2, checkQuestion2] = useState(false);

  const { question, user } = useLocation().state;
  const { id, author, optionOne, optionTwo } = question;

  const [numVotesOne, setNumVotesOne] = useState(optionOne.votes.length);
  const [numVotesTwo, setNumVotesTwo] = useState(optionTwo.votes.length);

  const [showResults, setShowResults] = useState(false);
  const loggedUser = useSelector(({ loggedUser }) => loggedUser.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      optionOne.votes.includes(loggedUser) ||
      optionTwo.votes.includes(loggedUser)
    ) {
      setShowResults(true);
    }
  }, [setShowResults, optionTwo, optionOne, loggedUser]);

  const handleForm = (e) => {
    e.preventDefault();

    dispatch(
      saveQuestionAnswer({
        authedUser: loggedUser,
        qid: id,
        answer: question1 ? 'optionOne' : 'optionTwo',
      })
    );

    question1
      ? setNumVotesOne(numVotesOne + 1)
      : setNumVotesTwo(numVotesTwo + 1);

    setShowResults(true);
  };

  const disabled = () => question1 === false && question2 === false;
  return (
    <div className={css.questionPage}>
      {showResults ? (
        <div className={css.card}>
          <h3 className={css.header}>{author} is asking:</h3>
          <div className={css.option1}>
            <div>
              <p>{optionOne.text}</p>
              <p>
                {numVotesOne} out of {numVotesOne + numVotesTwo}
                {numVotesOne + numVotesTwo <= 1 ? ' vote' : ' votes'}
              </p>
            </div>
            {(optionOne.votes.includes(loggedUser) || question1) && (
              <p className={css.vote}>✔ You</p>
            )}
          </div>

          <div className={css.option2}>
            <div>
              <p>{optionTwo.text}</p>
              <p>
                {numVotesTwo} out of {numVotesOne + numVotesTwo}{' '}
                {numVotesOne + numVotesTwo <= 1 ? ' vote' : ' votes'}
              </p>
            </div>
            {(optionTwo.votes.includes(loggedUser) || question2) && (
              <p className={css.vote}>✔ You</p>
            )}
          </div>

          <button onClick={() => navigate('/')}>Back</button>
        </div>
      ) : (
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
      )}
    </div>
  );
}
