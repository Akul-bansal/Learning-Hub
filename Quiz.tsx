import { useState } from 'react';
import { quizzes } from '../data/quizzesData';
import '../styles/Quiz.css';

interface QuizProps {
  lessonId: number;
  onComplete: (lessonId: number, score: number) => void;
  onBack: () => void;
}

export function Quiz({ lessonId, onComplete, onBack }: QuizProps) {
  const quiz = quizzes.find(q => q.lessonId === lessonId);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  if (!quiz) {
    return (
      <div className="quiz">
        <p>Quiz not found</p>
        <button onClick={onBack}>Back</button>
      </div>
    );
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showExplanation) {
      setSelectedAnswer(answerIndex);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowExplanation(true);
    setAnswers([...answers, selectedAnswer]);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // Calculate final score
      const finalAnswers = [...answers, selectedAnswer!];
      const correctCount = finalAnswers.filter((answer, index) => 
        answer === quiz.questions[index].correctAnswer
      ).length;
      const score = Math.round((correctCount / quiz.questions.length) * 100);
      
      setQuizCompleted(true);
      onComplete(lessonId, score);
    }
  };

  const calculateCurrentScore = () => {
    const finalAnswers = [...answers, selectedAnswer!];
    const correctCount = finalAnswers.filter((answer, index) => 
      answer === quiz.questions[index].correctAnswer
    ).length;
    return Math.round((correctCount / quiz.questions.length) * 100);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnswers([]);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    const score = calculateCurrentScore();
    const passed = score >= 70;
    const correctAnswers = answers.filter((answer, index) => 
      answer === quiz.questions[index].correctAnswer
    ).length;

    return (
      <div className="quiz">
        <div className="quiz-results">
          <div className={`results-card ${passed ? 'passed' : 'failed'}`}>
            <div className="results-icon">
              {passed ? '🎉' : '📚'}
            </div>
            <h2 className="results-title">
              {passed ? 'Congratulations!' : 'Keep Learning!'}
            </h2>
            <div className="score-display">
              <div className="score-number">{score}%</div>
              <p className="score-text">
                You got {correctAnswers} out of {quiz.questions.length} questions correct
              </p>
            </div>
            <p className="results-message">
              {passed 
                ? 'Great job! You\'ve demonstrated a solid understanding of this topic.'
                : 'Don\'t worry! Review the lesson material and try again to improve your score.'}
            </p>
            <div className="results-actions">
              <button className="action-button secondary" onClick={restartQuiz}>
                Retake Quiz
              </button>
              <button className="action-button primary" onClick={onBack}>
                Back to Lessons
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="quiz">
      <div className="quiz-header">
        <button className="back-button-quiz" onClick={onBack}>
          ← Back
        </button>
        <h2 className="quiz-title">{quiz.title}</h2>
        <div className="quiz-progress">
          Question {currentQuestion + 1} of {quiz.questions.length}
        </div>
      </div>

      <div className="quiz-container">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
          />
        </div>

        <div className="question-card">
          <h3 className="question-text">{question.question}</h3>
          
          <div className="options-list">
            {question.options.map((option, index) => {
              let optionClass = 'option';
              if (showExplanation) {
                if (index === question.correctAnswer) {
                  optionClass += ' correct';
                } else if (index === selectedAnswer && !isCorrect) {
                  optionClass += ' incorrect';
                }
              } else if (selectedAnswer === index) {
                optionClass += ' selected';
              }

              return (
                <button
                  key={index}
                  className={optionClass}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="option-text">{option}</span>
                  {showExplanation && index === question.correctAnswer && (
                    <span className="option-icon">✓</span>
                  )}
                  {showExplanation && index === selectedAnswer && !isCorrect && (
                    <span className="option-icon">✗</span>
                  )}
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className={`explanation ${isCorrect ? 'correct-explanation' : 'incorrect-explanation'}`}>
              <p className="explanation-title">
                {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
              </p>
              <p className="explanation-text">{question.explanation}</p>
            </div>
          )}

          <div className="quiz-actions">
            {!showExplanation ? (
              <button 
                className="quiz-submit-button" 
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
              >
                Submit Answer
              </button>
            ) : (
              <button className="quiz-next-button" onClick={handleNextQuestion}>
                {currentQuestion < quiz.questions.length - 1 ? 'Next Question' : 'See Results'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}