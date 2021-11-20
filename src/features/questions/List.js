import Question from './Question';

import css from './List.module.css';

export default function List({ name, questions, users }) {
  return (
    <div className={css.card}>
      <h2 className={css.heading}>{name}</h2>
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
  );
}
