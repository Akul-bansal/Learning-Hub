import '../styles/Home.css';

interface HomeProps {
  onStartLearning: () => void;
}

export function Home({ onStartLearning }: HomeProps) {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">Welcome to Web3 Learning Hub</h2>
          <p className="hero-subtitle">
            Your beginner-friendly gateway to understanding blockchain, cryptocurrencies, and the decentralized web
          </p>
          <button className="cta-button" onClick={onStartLearning}>
            Start Learning
          </button>
        </div>
      </section>

      <section className="features">
        <h3 className="features-title">What You'll Learn</h3>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔗</div>
            <h4>Blockchain Fundamentals</h4>
            <p>Understand how blockchain technology works and why it's revolutionary</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h4>Cryptocurrencies</h4>
            <p>Learn about Bitcoin, Ethereum, and the world of digital currencies</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h4>Web3 Concepts</h4>
            <p>Explore the evolution of the internet and decentralized applications</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h4>Smart Contracts</h4>
            <p>Discover self-executing contracts and their real-world applications</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h4>NFTs</h4>
            <p>Understand digital ownership and non-fungible tokens</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏦</div>
            <h4>DeFi</h4>
            <p>Learn about decentralized finance and its impact on traditional banking</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h3 className="section-title">How It Works</h3>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h4>Read Lessons</h4>
            <p>Access comprehensive, beginner-friendly lessons on various Web3 topics</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h4>Take Quizzes</h4>
            <p>Test your understanding with interactive quizzes after each lesson</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h4>Track Progress</h4>
            <p>Monitor your learning journey and see how much you've accomplished</p>
          </div>
        </div>
      </section>
    </div>
  );
}