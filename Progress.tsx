import { lessons } from '../data/lessonsData';
import '../styles/Progress.css';

interface ProgressProps {
  completedLessons: number[];
  quizScores: { [key: number]: number };
}

export function Progress({ completedLessons, quizScores }: ProgressProps) {
  const totalLessons = lessons.length;
  const completedCount = completedLessons.length;
  const completionPercentage = Math.round((completedCount / totalLessons) * 100);
  
  const averageScore = completedLessons.length > 0
    ? Math.round(
        completedLessons.reduce((sum, id) => sum + (quizScores[id] || 0), 0) / completedLessons.length
      )
    : 0;

  const categories = Array.from(new Set(lessons.map(l => l.category)));
  const categoryProgress = categories.map(category => {
    const categoryLessons = lessons.filter(l => l.category === category);
    const completedInCategory = categoryLessons.filter(l => 
      completedLessons.includes(l.id)
    ).length;
    return {
      name: category,
      total: categoryLessons.length,
      completed: completedInCategory,
      percentage: Math.round((completedInCategory / categoryLessons.length) * 100)
    };
  });

  return (
    <div className="progress-page">
      <h2 className="page-title">Your Learning Progress</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-content">
            <div className="stat-value">{completedCount}/{totalLessons}</div>
            <div className="stat-label">Lessons Completed</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <div className="stat-value">{completionPercentage}%</div>
            <div className="stat-label">Overall Progress</div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-content">
            <div className="stat-value">{averageScore}%</div>
            <div className="stat-label">Average Quiz Score</div>
          </div>
        </div>
      </div>

      <div className="progress-section">
        <h3 className="section-title">Category Progress</h3>
        <div className="category-progress-list">
          {categoryProgress.map(category => (
            <div key={category.name} className="category-progress-item">
              <div className="category-info">
                <span className="category-name">{category.name}</span>
                <span className="category-stats">
                  {category.completed}/{category.total} completed
                </span>
              </div>
              <div className="category-bar">
                <div 
                  className="category-bar-fill" 
                  style={{ width: `${category.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="progress-section">
        <h3 className="section-title">Lesson Details</h3>
        <div className="lessons-progress-list">
          {lessons.map(lesson => {
            const isCompleted = completedLessons.includes(lesson.id);
            const score = quizScores[lesson.id];
            
            return (
              <div key={lesson.id} className={`lesson-progress-item ${isCompleted ? 'completed' : 'incomplete'}`}>
                <div className="lesson-progress-header">
                  <div className="lesson-info">
                    <span className="lesson-status-icon">
                      {isCompleted ? '✓' : '○'}
                    </span>
                    <div>
                      <div className="lesson-name">{lesson.title}</div>
                      <div className="lesson-category-tag">{lesson.category}</div>
                    </div>
                  </div>
                  {isCompleted && score !== undefined && (
                    <div className="lesson-score">
                      <span className="score-value">{score}%</span>
                      <span className="score-label">Quiz Score</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {completedCount === totalLessons && (
        <div className="completion-banner">
          <div className="completion-icon">🎓</div>
          <h3>Congratulations!</h3>
          <p>You've completed all available lessons. You're now well-versed in Web3 fundamentals!</p>
        </div>
      )}
    </div>
  );
}