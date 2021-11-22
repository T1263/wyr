import Question from './Question';

import css from './List.module.css';

export default function List({ questions, users }) {
  return (
    <>
      {questions.length > 0 ? (
        <div className={css.card}>
          <ul className={css.list}>
            {Object.keys(questions)
              .map((id) => (
                <Question
                  key={id}
                  question={questions[id]}
                  user={users[questions[id].author]}
                />
              ))
              .reverse()}
          </ul>
        </div>
      ) : (
        <p>...no more.</p>
      )}
    </>
  );
}
