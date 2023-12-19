import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuizComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      selectedOption: null,
      score: 0,
      quizFinished: false,
    };
  }

  handleOptionSelect = (selectedAnswer) => {
    const { quizData } = this.props;
    const { currentQuestionIndex, selectedOption, score } = this.state;
  
    this.setState({ selectedOption: selectedAnswer }, () => {
      if (this.state.selectedOption === quizData[currentQuestionIndex].answer) {
        alert("This is a Correct Answer!");
        this.setState((prevState) => ({ score: prevState.score + 1 }));
      } else {
        alert("This is a Wrong Answer");
      }
  
      this.handleNextQuestion();
    });
  };
  

  handleNextQuestion = () => {
    const { quizData } = this.props;
    const { currentQuestionIndex, selectedOption } = this.state;

    if (currentQuestionIndex === quizData.length - 1) {
      this.setState({ quizFinished: true });
    } else {
      this.setState({
        selectedOption: null,
        currentQuestionIndex: currentQuestionIndex + 1,
      });
    }
  };

  handlePreviousQuestion = () => {
    const { currentQuestionIndex } = this.state;

    if (currentQuestionIndex > 0) {
      this.setState({ selectedOption: null, currentQuestionIndex: currentQuestionIndex - 1 });
    }
  };

  handleQuit = () => {
    window.alert('Are you sure you want to quit the quiz?');
  };

  handleRestart = () => {
    window.alert('Do you want to play again?');
  };

  handleFinish = () => {
    this.setState({ quizFinished: true });
  };

  render() {
    const { quizData } = this.props;
    const { currentQuestionIndex, selectedOption, score, quizFinished } = this.state;

    return (
      <div className="body">
        <div className="content">
          <h1>React Quiz App</h1>
          <h4>{`${currentQuestionIndex + 1}/${quizData.length}`}</h4>
          <div>
            {quizFinished ? (
              <div>
                <h1>Quiz Completed</h1>
                <p>Your Final Score: {score}</p>
                <p>Total Number of Questions: {quizData.length}</p>
                <p>No.of Correct Questions: {score}</p>
                <p>No.of Wrong Questions: {(quizData.length) - (score)}</p>
                <Link to="/lab-quizzApp-3-react"><button className='restart' onClick={this.handleRestart}>Restart</button></Link>
              </div>
            ) : (
              <div>
                <h2>{`${currentQuestionIndex + 1}. ${quizData[currentQuestionIndex].question}`}</h2>
                <div className='answerBtns'>
                  {['A', 'B', 'C', 'D'].map((option) => (
                    <button
                      id='answers'
                      key={option}
                      onClick={() => this.handleOptionSelect(quizData[currentQuestionIndex][`option${option}`])}
                      className={selectedOption === quizData[currentQuestionIndex][`option${option}`] ? 'selected' : ''}
                      disabled={selectedOption !== null}
                    >
                      {quizData[currentQuestionIndex][`option${option}`]}
                    </button>
                  ))}
                </div>
                <p>Your Score: {score}</p>
                <button className='previous' onClick={this.handlePreviousQuestion} disabled={currentQuestionIndex === 0}> Previous </button>
                <button className='next' onClick={this.handleNextQuestion}> Next </button>
                <Link to="/lab-quizzApp-3-react"> <button className='quit' onClick={this.handleQuit}> Quit </button> </Link>
                <button className='Finish' onClick={this.handleFinish}> Finish </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default QuizComponent;
