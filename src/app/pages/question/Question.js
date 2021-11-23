import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { saveQuestionAnswer } from '../../../features/questions/questionsSlice';

import css from './QuestionPage.module.css';
export default function QuestionPage() {
  const [question1, checkQuestion1] = useState(false);
  const [question2, checkQuestion2] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  let questionInitState = {
    id: '',
    author: '',
    timestamp: '',
    optionOne: { votes: [], text: '' },
    optionTwo: { votes: [], text: '' },
  };
  const [question, setQuestion] = useState(questionInitState);
  const [user, setUser] = useState({});

  const [numVotesOne, setNumVotesOne] = useState(0);
  const [numVotesTwo, setNumVotesTwo] = useState(0);

  const [showResults, setShowResults] = useState(false);
  const loggedUser = useSelector(({ loggedUser }) => loggedUser.value);

  useEffect(() => {
    if (location.state === null) {
      // Redirect to a random path caught by the NotFound component
      navigate('/questionNotFound');
    } else {
      setQuestion((prevState) => ({
        ...prevState,
        ...location.state.question,
      }));
      setUser(location.state.user);
      setNumVotesOne(question.optionOne.votes.length);
      setNumVotesTwo(question.optionTwo.votes.length);
      if (
        question.optionOne.votes.includes(loggedUser) ||
        question.optionTwo.votes.includes(loggedUser)
      ) {
        setShowResults(true);
      }
    }
  }, [setShowResults, question, loggedUser, navigate, location]);

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

  const percentage = (vote, totalVotes) =>
    Math.round((100 * vote) / totalVotes);

  const disabled = () => question1 === false && question2 === false;

  const { id, author, optionOne, optionTwo } = question;

  return (
    <div className={css.questionPage}>
      {showResults ? (
        <div className={css.card}>
          <h3 className={css.header}>{author} is asking:</h3>
          <h5>Would you rather...</h5>
          <div className={css.option1}>
            <div>
              <p>{optionOne.text}</p>

              <p className={css.percentageVote}>
                {numVotesOne} out of {numVotesOne + numVotesTwo}
                {numVotesOne + numVotesTwo <= 1 ? ' vote' : ' votes'} |{' '}
                {percentage(numVotesOne, numVotesOne + numVotesTwo)}%
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
                {numVotesOne + numVotesTwo <= 1 ? ' vote' : ' votes'} |{' '}
                {percentage(numVotesTwo, numVotesOne + numVotesTwo)}%
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
