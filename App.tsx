import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { LessonsList } from './components/LessonsList';
import { LessonView } from './components/LessonView';
import { Quiz } from './components/Quiz';
import { Progress } from './components/Progress';
import './styles/App.css';

type View = 'home' | 'lessons' | 'lesson' | 'quiz' | 'progress';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedLessonId, setSelectedLessonId] = useState<number | null>(null);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [quizScores, setQuizScores] = useState<{ [key: number]: number }>({});

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedCompletedLessons = localStorage.getItem('completedLessons');
    const savedQuizScores = localStorage.getItem('quizScores');

    if (savedCompletedLessons) {
      setCompletedLessons(JSON.parse(savedCompletedLessons));
    }
    if (savedQuizScores) {
      setQuizScores(JSON.parse(savedQuizScores));
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    localStorage.setItem('quizScores', JSON.stringify(quizScores));
  }, [quizScores]);

  const handleNavigate = (view: 'home' | 'lessons' | 'progress') => {
    setCurrentView(view);
    setSelectedLessonId(null);
  };

  const handleStartLearning = () => {
    setCurrentView('lessons');
  };

  const handleSelectLesson = (lessonId: number) => {
    setSelectedLessonId(lessonId);
    setCurrentView('lesson');
  };

  const handleBackToLessons = () => {
    setCurrentView('lessons');
    setSelectedLessonId(null);
  };

  const handleStartQuiz = (lessonId: number) => {
    setSelectedLessonId(lessonId);
    setCurrentView('quiz');
  };

  const handleQuizComplete = (lessonId: number, score: number) => {
    // Add lesson to completed if not already there
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
    
    // Save the quiz score
    setQuizScores({
      ...quizScores,
      [lessonId]: score
    });
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home onStartLearning={handleStartLearning} />;
      
      case 'lessons':
        return (
          <LessonsList 
            onSelectLesson={handleSelectLesson}
            completedLessons={completedLessons}
          />
        );
      
      case 'lesson':
        return selectedLessonId ? (
          <LessonView 
            lessonId={selectedLessonId}
            onBack={handleBackToLessons}
            onStartQuiz={handleStartQuiz}
          />
        ) : null;
      
      case 'quiz':
        return selectedLessonId ? (
          <Quiz 
            lessonId={selectedLessonId}
            onComplete={handleQuizComplete}
            onBack={handleBackToLessons}
          />
        ) : null;
      
      case 'progress':
        return (
          <Progress 
            completedLessons={completedLessons}
            quizScores={quizScores}
          />
        );
      
      default:
        return <Home onStartLearning={handleStartLearning} />;
    }
  };

  return (
    <div className="app">
      <Header 
        onNavigate={handleNavigate} 
        currentView={currentView === 'lesson' || currentView === 'quiz' ? 'lessons' : currentView}
      />
      <main className="main-content">
        {renderView()}
      </main>
      <footer className="footer">
        <p>© 2025 Web3 Learning Hub. Built for educational purposes.</p>
      </footer>
    </div>
  );
}