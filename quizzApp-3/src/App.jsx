import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeComponent from './component/HomeComponent';
import QuizComponent from './component/QuizComponent';
import QuizData from './component/quizQuestion.json';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/quiz" element={<QuizComponent quizData={QuizData} />} />
      </Routes>
    </Router>
  );
}

export default App;
