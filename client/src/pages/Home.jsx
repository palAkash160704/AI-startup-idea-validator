import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="hero">
            <div className="container hero-content">
                <h1 className="hero-title">
                    Validate Your <span className="gradient-text">Startup Idea</span> with AI
                </h1>
                <p className="hero-subtitle">
                    Get brutally honest, data-driven analysis of your business idea.
                    No hype, no sugarcoating—just real insights from market data, competitor research, and ML-based probability estimation.
                </p>
                <div className="hero-cta">
                    <Link to="/validate" className="btn btn-primary btn-lg">
                        🚀 Start Validation
                    </Link>
                    <a href="#features" className="btn btn-secondary btn-lg">
                        Learn More
                    </a>
                </div>
            </div>

            <section id="features" className="container">
                <div className="features-grid">
                    <div className="feature-card card">
                        <div className="feature-icon">🎯</div>
                        <h3 className="feature-title">Idea Clarity</h3>
                        <p className="feature-description">
                            Extract assumptions, pain points, and value propositions. Flag vague or risky elements.
                        </p>
                    </div>

                    <div className="feature-card card">
                        <div className="feature-icon">📊</div>
                        <h3 className="feature-title">Market Analysis</h3>
                        <p className="feature-description">
                            TAM/SAM/SOM estimation, growth trends, and adoption barriers with honest uncertainty.
                        </p>
                    </div>

                    <div className="feature-card card">
                        <div className="feature-icon">🥊</div>
                        <h3 className="feature-title">Competitor Intel</h3>
                        <p className="feature-description">
                            Direct and indirect competitors, market gaps, switching costs, and saturation analysis.
                        </p>
                    </div>

                    <div className="feature-card card">
                        <div className="feature-icon">🧪</div>
                        <h3 className="feature-title">Success Probability</h3>
                        <p className="feature-description">
                            ML-based estimation using historical startup patterns and industry survival rates.
                        </p>
                    </div>

                    <div className="feature-card card">
                        <div className="feature-icon">⚠️</div>
                        <h3 className="feature-title">Risk Analysis</h3>
                        <p className="feature-description">
                            Failure mode identification with early warning signals and mitigation strategies.
                        </p>
                    </div>

                    <div className="feature-card card">
                        <div className="feature-icon">💰</div>
                        <h3 className="feature-title">Business Feasibility</h3>
                        <p className="feature-description">
                            Cost structure, scalability, monetization viability, and break-even timeline.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-xl">
                    <h2 className="mb-md">Ready to validate your idea?</h2>
                    <p className="mb-lg" style={{ color: 'var(--text-muted)' }}>
                        Get a comprehensive 7-point analysis with a GO / PIVOT / KILL recommendation.
                    </p>
                    <Link to="/validate" className="btn btn-primary btn-lg">
                        Get Started →
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Home
