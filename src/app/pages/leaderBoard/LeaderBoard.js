import React from 'react';
import { useSelector } from 'react-redux';
import { leaderBoardSelector } from '../../../features/selectors';
import css from './LeaderBoard.module.css';

export default function LeaderBoard() {
  const leaders = useSelector(leaderBoardSelector);

  const LeaderCard = ({ id, avatarURL, answers, questions }) => {
    return (
      <div className={css.card}>
        <img src={avatarURL} alt={`avatar of ${id}`} />

        <div className={css.data}>
          <h3>{id}</h3>
          <div className={css.answers}>
            <h4>Answered</h4>
            <h4>{answers}</h4>
          </div>
          <div className={css.created}>
            <h4>Created</h4>
            <h4>{questions}</h4>
          </div>
        </div>

        <div className={css.score}>
          <h2>Score</h2>
          <h1>{answers + questions}</h1>
        </div>
      </div>
    );
  };
  return (
    <div className={css.leaders}>
      {leaders.map((user) => (
        <LeaderCard {...user} />
      ))}
    </div>
  );
}
