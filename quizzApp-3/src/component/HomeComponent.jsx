import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeComponent = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div className='homepage'>
      <h1>Quiz App</h1>
      <button className='playBtn' onClick={startQuiz}>
        Start
      </button>
    </div>
  );
};

export default HomeComponent;
