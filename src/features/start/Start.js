import React from 'react';
import { useSelector } from 'react-redux';

export default function Start() {
  const { questions } = useSelector(({ questions }) => questions);

  return (
    <div>
      <ul>
        {Object.keys(questions).map((question, sec) => (
          <li key={questions[question].id}> {questions[question].author} </li>
        ))}
      </ul>
    </div>
  );
}
