import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      question: 'How do you prefer to engage with new information?',
      options: ['Through visual aids such as diagrams, charts, or videos.', 'By listening to explanations or audio recordings.', 'By reading and taking notes.'],
    },
    {
      question: 'When studying for an exam, what method do you find most effective?',
      options: ['Reviewing colorful presentations or slideshows.', 'Listening to recorded lectures or discussions.', 'Reading textbooks and writing out summaries or notes.'],
    },
    {
      question: 'What type of content do you find most engaging and easy to understand?',
      options: [' Content with lots of visual elements and graphics.', 'Content presented in audio format, such as podcasts or audiobooks.', 'Content that is well-written and allows for note-taking.'],
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOptions([...selectedOptions, option]);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getLearnerType = () => {
    const optionCounts = {};
    selectedOptions.forEach(option => {
      optionCounts[option] = (optionCounts[option] || 0) + 1;
    });
  
    let maxCount = 0;
    let maxOption = '';
  
    Object.keys(optionCounts).forEach(option => {
      if (optionCounts[option] > maxCount) {
        maxCount = optionCounts[option];
        maxOption = option;
      }
    });
  
    return maxOption;
  };
  

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOptions([]);
    setShowResult(false);
  };

  return (
    <div>
      {showResult ? (
        <div>
          <h2>Quiz Result</h2>
          <p>Learner Type: {getLearnerType()}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    onChange={() => handleOptionSelect(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
