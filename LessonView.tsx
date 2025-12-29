import { lessons } from '../data/lessonsData';
import '../styles/LessonView.css';

interface LessonViewProps {
  lessonId: number;
  onBack: () => void;
  onStartQuiz: (lessonId: number) => void;
}

export function LessonView({ lessonId, onBack, onStartQuiz }: LessonViewProps) {
  const lesson = lessons.find(l => l.id === lessonId);

  if (!lesson) {
    return (
      <div className="lesson-view">
        <p>Lesson not found</p>
        <button onClick={onBack}>Back to Lessons</button>
      </div>
    );
  }

  return (
    <div className="lesson-view">
      <button className="back-button" onClick={onBack}>
        ← Back to Lessons
      </button>

      <article className="lesson-content">
        <div className="lesson-header">
          <span className="lesson-category">{lesson.category}</span>
          <h2 className="lesson-main-title">{lesson.title}</h2>
        </div>

        <div className="lesson-introduction">
          <p>{lesson.content.introduction}</p>
        </div>

        <div className="lesson-sections">
          {lesson.content.sections.map((section, index) => (
            <section key={index} className="lesson-section">
              <h3 className="section-heading">{section.heading}</h3>
              <p className="section-text">{section.text}</p>
            </section>
          ))}
        </div>

        <div className="key-takeaways">
          <h3 className="takeaways-title">Key Takeaways</h3>
          <ul className="takeaways-list">
            {lesson.content.keyTakeaways.map((takeaway, index) => (
              <li key={index} className="takeaway-item">{takeaway}</li>
            ))}
          </ul>
        </div>

        <div className="lesson-actions">
          <button className="quiz-button" onClick={() => onStartQuiz(lessonId)}>
            Take Quiz
          </button>
        </div>
      </article>
    </div>
  );
}