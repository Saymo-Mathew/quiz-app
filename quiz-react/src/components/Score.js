import React from 'react';
import './Score.css';

const Score = ({ score, total, onRestart }) => {
  return (
    <div className="score-box">
      <h2>Quiz Completed!</h2>
      <p>You scored <strong>{score}</strong> out of <strong>{total}</strong></p>
      <p>Percentage: <strong>{((score / total) * 100).toFixed(2)}%</strong></p>
      <button className="retake-button" onClick={onRestart}>Retake Quiz</button>
    </div>
  );
};

export default Score;
