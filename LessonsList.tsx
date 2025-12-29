import { lessons } from '../data/lessonsData';
import '../styles/LessonsList.css';

interface LessonsListProps {
  onSelectLesson: (lessonId: number) => void;
  completedLessons: number[];
}

export function LessonsList({ onSelectLesson, completedLessons }: LessonsListProps) {
  const categories = Array.from(new Set(lessons.map(l => l.category)));

  return (
    <div className="lessons-list">
      <h2 className="page-title">Learning Modules</h2>
      <p className="page-description">
        Select a lesson to begin your Web3 learning journey. Complete the reading and pass the quiz to mark it complete.
      </p>

      {categories.map(category => (
        <div key={category} className="category-section">
          <h3 className="category-title">{category}</h3>
          <div className="lessons-grid">
            {lessons
              .filter(lesson => lesson.category === category)
              .map(lesson => {
                const isCompleted = completedLessons.includes(lesson.id);
                return (
                  <div 
                    key={lesson.id} 
                    className={`lesson-card ${isCompleted ? 'completed' : ''}`}
                    onClick={() => onSelectLesson(lesson.id)}
                  >
                    <div className="lesson-card-header">
                      <h4 className="lesson-title">{lesson.title}</h4>
                      {isCompleted && <span className="completion-badge">✓</span>}
                    </div>
                    <p className="lesson-description">{lesson.description}</p>
                    <button className="lesson-button">
                      {isCompleted ? 'Review Lesson' : 'Start Lesson'}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}