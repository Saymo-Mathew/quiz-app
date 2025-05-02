import React from 'react';
import './Question.css';

const Question = ({ data, onAnswer, selected }) => {
  return (
    <div className="question-box">
      <h2>{data.question}</h2>
      <div className="options">
        {data.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className={selected === option ? 'selected' : ''}
            disabled={selected !== null}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
