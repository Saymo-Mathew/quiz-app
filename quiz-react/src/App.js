import React, { useState } from 'react';
import questions from './data/questions';
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    const updatedAnswers = [...answers, selectedOption];
    setAnswers(updatedAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    } else {
      setShowResult(true);
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      <h1>Knowledge Quiz</h1>

      {showResult ? (
        <div>
          <h2>Quiz Completed!</h2>
          {(() => {
            const score = answers.reduce((s, a, i) => a === questions[i].answer ? s + 1 : s, 0);
            const percentage = Math.round((score / questions.length) * 100);
            return (
              <>
                <p>Your Score: {score} / {questions.length}</p>
                <p>Percentage: {percentage}%</p>
              </>
            );
          })()}
          <button onClick={handleRetake}>Retake Quiz</button>
        </div>
      ) : (
        <div>
          <p>{questions[currentQuestion].question}</p>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                />
                {option}
              </label>
            ))}
          </ul>
          <button
            onClick={handleNext}
            disabled={!selectedOption}
          >
            {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
