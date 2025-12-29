import '../styles/Header.css';

interface HeaderProps {
  onNavigate: (view: 'home' | 'lessons' | 'progress') => void;
  currentView: string;
}

export function Header({ onNavigate, currentView }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">⛓️</div>
          <h1>Web3 Learning Hub</h1>
        </div>
        <nav className="nav">
          <button 
            className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
            onClick={() => onNavigate('home')}
          >
            Home
          </button>
          <button 
            className={`nav-link ${currentView === 'lessons' ? 'active' : ''}`}
            onClick={() => onNavigate('lessons')}
          >
            Lessons
          </button>
          <button 
            className={`nav-link ${currentView === 'progress' ? 'active' : ''}`}
            onClick={() => onNavigate('progress')}
          >
            Progress
          </button>
        </nav>
      </div>
    </header>
  );
}