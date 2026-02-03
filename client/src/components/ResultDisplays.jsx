import React from 'react';

// Formatted display for Idea Clarity results
export function IdeaClarityDisplay({ data }) {
    if (!data) return null;

    return (
        <div className="result-display">
            {data.problemSolutionStatement && (
                <div className="result-section-item">
                    <h4>💡 Problem-Solution Statement</h4>
                    <p>{data.problemSolutionStatement}</p>
                </div>
            )}

            {data.valueProposition && (
                <div className="result-section-item">
                    <h4>🎯 Value Proposition</h4>
                    <p>{data.valueProposition}</p>
                </div>
            )}

            {data.customerPainPoints?.length > 0 && (
                <div className="result-section-item">
                    <h4>😣 Customer Pain Points</h4>
                    <ul>
                        {data.customerPainPoints.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </div>
            )}

            {data.coreAssumptions?.length > 0 && (
                <div className="result-section-item">
                    <h4>🤔 Core Assumptions</h4>
                    <ul>
                        {data.coreAssumptions.map((assumption, i) => (
                            <li key={i}>{assumption}</li>
                        ))}
                    </ul>
                </div>
            )}

            {data.flaggedAssumptions?.length > 0 && (
                <div className="result-section-item">
                    <h4>⚠️ Flagged Assumptions</h4>
                    {data.flaggedAssumptions.map((item, i) => (
                        <div key={i} className="flagged-item">
                            <strong>{item.assumption}</strong>
                            <p><span style={{ color: 'var(--warning)' }}>Risk:</span> {item.risk}</p>
                            <p><span style={{ color: 'var(--success)' }}>Validation:</span> {item.validation}</p>
                        </div>
                    ))}
                </div>
            )}

            {data.ideaClarityScore && (
                <div className="score-display">
                    <span className="score-label">Clarity Score:</span>
                    <span className={`score-value ${data.ideaClarityScore >= 7 ? 'score-good' : data.ideaClarityScore >= 4 ? 'score-medium' : 'score-low'}`}>
                        {data.ideaClarityScore}/10
                    </span>
                </div>
            )}
        </div>
    );
}

// Market Analysis Display
export function MarketAnalysisDisplay({ data }) {
    if (!data) return null;

    return (
        <div className="result-display">
            {data.marketSizeEstimate && (
                <div className="result-section-item">
                    <h4>📊 Market Size</h4>
                    <div className="market-sizes">
                        <div className="market-size-box">
                            <span className="label">TAM</span>
                            <span className="value">{data.marketSizeEstimate.TAM}</span>
                        </div>
                        <div className="market-size-box">
                            <span className="label">SAM</span>
                            <span className="value">{data.marketSizeEstimate.SAM}</span>
                        </div>
                        <div className="market-size-box">
                            <span className="label">SOM</span>
                            <span className="value">{data.marketSizeEstimate.SOM}</span>
                        </div>
                    </div>
                </div>
            )}

            {data.growthTrends?.length > 0 && (
                <div className="result-section-item">
                    <h4>📈 Growth Trends</h4>
                    <ul>
                        {data.growthTrends.map((trend, i) => (
                            <li key={i}>{trend}</li>
                        ))}
                    </ul>
                </div>
            )}

            {data.adoptionBarriers?.length > 0 && (
                <div className="result-section-item">
                    <h4>🚧 Adoption Barriers</h4>
                    <ul>
                        {data.adoptionBarriers.map((barrier, i) => (
                            <li key={i}>{barrier}</li>
                        ))}
                    </ul>
                </div>
            )}

            {data.marketScore && (
                <div className="score-display">
                    <span className="score-label">Market Score:</span>
                    <span className={`score-value ${data.marketScore >= 7 ? 'score-good' : data.marketScore >= 4 ? 'score-medium' : 'score-low'}`}>
                        {data.marketScore}/10
                    </span>
                </div>
            )}
        </div>
    );
}

// Competitor Analysis Display
export function CompetitorAnalysisDisplay({ data }) {
    if (!data) return null;

    return (
        <div className="result-display">
            {data.directCompetitors?.length > 0 && (
                <div className="result-section-item">
                    <h4>🎯 Direct Competitors</h4>
                    {data.directCompetitors.map((comp, i) => (
                        <div key={i} className="competitor-card">
                            <strong>{comp.name}</strong>
                            <p>{comp.description}</p>
                            <p><span style={{ color: 'var(--text-secondary)' }}>Strengths:</span> {comp.strengths}</p>
                            <p><span style={{ color: 'var(--text-secondary)' }}>Weaknesses:</span> {comp.weaknesses}</p>
                        </div>
                    ))}
                </div>
            )}

            {data.marketGaps?.length > 0 && (
                <div className="result-section-item">
                    <h4>🕳️ Market Gaps</h4>
                    <ul>
                        {data.marketGaps.map((gap, i) => (
                            <li key={i}>{gap}</li>
                        ))}
                    </ul>
                </div>
            )}

            {data.competitorScore && (
                <div className="score-display">
                    <span className="score-label">Competitive Position:</span>
                    <span className={`score-value ${data.competitorScore >= 7 ? 'score-good' : data.competitorScore >= 4 ? 'score-medium' : 'score-low'}`}>
                        {data.competitorScore}/10
                    </span>
                </div>
            )}
        </div>
    );
}

// Success Probability Display with breakdown bars
export function SuccessProbabilityDisplay({ data }) {
    if (!data) return null;

    // Handle both old and new response formats
    const prob = data.probability || data.successProbability?.percentage || 0;
    const probColor = prob >= 50 ? 'var(--success)' : prob >= 30 ? 'var(--warning)' : 'var(--error)';
    const breakdown = data.probabilityBreakdown || {};

    // Breakdown categories with labels
    const breakdownItems = [
        { key: 'marketOpportunity', label: 'Market Opportunity', icon: '📊' },
        { key: 'problemSolutionFit', label: 'Problem-Solution Fit', icon: '🎯' },
        { key: 'executionFeasibility', label: 'Execution Feasibility', icon: '⚙️' },
        { key: 'competitivePosition', label: 'Competitive Position', icon: '🏆' },
        { key: 'timing', label: 'Market Timing', icon: '⏰' }
    ];

    return (
        <div className="result-display">
            {/* Main probability display */}
            <div className="probability-display" style={{ textAlign: 'center', padding: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{
                    fontSize: '4rem',
                    fontWeight: 'bold',
                    color: probColor,
                    textShadow: `0 0 30px ${probColor}40`
                }}>{prob}%</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Success Probability</div>
                {data.confidenceInterval && (
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                        Confidence: {typeof data.confidenceInterval === 'string' ? data.confidenceInterval : `${data.confidenceInterval.low}% - ${data.confidenceInterval.high}%`}
                    </div>
                )}
            </div>

            {/* Probability breakdown bars */}
            {Object.keys(breakdown).length > 0 && (
                <div className="result-section-item">
                    <h4>📊 Probability Breakdown</h4>
                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                        {breakdownItems.map(item => {
                            const score = breakdown[item.key];
                            if (!score) return null;
                            const barColor = score >= 7 ? 'var(--success)' : score >= 5 ? 'var(--warning)' : 'var(--error)';
                            return (
                                <div key={item.key}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                        <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                            {item.icon} {item.label}
                                        </span>
                                        <span style={{ fontWeight: 'bold', color: barColor }}>{score}/10</span>
                                    </div>
                                    <div style={{
                                        height: '8px',
                                        background: 'var(--bg-tertiary)',
                                        borderRadius: '4px',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            height: '100%',
                                            width: `${score * 10}%`,
                                            background: barColor,
                                            borderRadius: '4px',
                                            transition: 'width 0.5s ease'
                                        }} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Industry benchmark */}
            {data.industryBenchmark && (
                <div className="result-section-item" style={{
                    padding: '1rem',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '0.75rem',
                    borderLeft: '4px solid var(--accent-primary)'
                }}>
                    <strong style={{ color: 'var(--accent-primary)' }}>📈 Industry Benchmark:</strong>
                    <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>{data.industryBenchmark}</p>
                </div>
            )}

            {/* Positive factors */}
            {data.positiveFactors?.length > 0 && (
                <div className="result-section-item">
                    <h4>✅ Positive Factors</h4>
                    <ul>
                        {data.positiveFactors.map((factor, i) => (
                            <li key={i} style={{ color: 'var(--success)' }}>
                                {typeof factor === 'string' ? factor : factor.factor}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Negative factors */}
            {data.negativeFactors?.length > 0 && (
                <div className="result-section-item">
                    <h4>⚠️ Negative Factors</h4>
                    <ul>
                        {data.negativeFactors.map((factor, i) => (
                            <li key={i} style={{ color: 'var(--warning)' }}>
                                {typeof factor === 'string' ? factor : factor.factor}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Key factors (legacy format) */}
            {data.keyFactors?.length > 0 && (
                <div className="result-section-item">
                    <h4>🔑 Key Success Factors</h4>
                    <ul>
                        {data.keyFactors.map((factor, i) => (
                            <li key={i}>{factor}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

// Risk Analysis Display
export function RiskAnalysisDisplay({ data }) {
    if (!data) return null;

    return (
        <div className="result-display">
            {data.criticalRisks?.length > 0 && (
                <div className="result-section-item">
                    <h4>🚨 Critical Risks</h4>
                    {data.criticalRisks.map((risk, i) => (
                        <div key={i} className="risk-card risk-high">
                            <div className="risk-header">{typeof risk === 'string' ? risk : risk.risk}</div>
                            {risk.likelihood && <div className="risk-likelihood">Likelihood: {risk.likelihood}</div>}
                            {risk.mitigation && <div className="risk-mitigation">Mitigation: {risk.mitigation}</div>}
                        </div>
                    ))}
                </div>
            )}

            {data.warnings?.length > 0 && (
                <div className="result-section-item">
                    <h4>⚠️ Warnings</h4>
                    <ul>
                        {data.warnings.map((warning, i) => (
                            <li key={i}>{warning}</li>
                        ))}
                    </ul>
                </div>
            )}

            {data.overallRiskScore && (
                <div className="score-display">
                    <span className="score-label">Risk Level:</span>
                    <span className={`score-value ${data.overallRiskScore <= 3 ? 'score-good' : data.overallRiskScore <= 6 ? 'score-medium' : 'score-low'}`}>
                        {data.overallRiskScore}/10
                    </span>
                </div>
            )}
        </div>
    );
}

// Business Feasibility Display
export function BusinessFeasibilityDisplay({ data }) {
    if (!data) return null;

    return (
        <div className="result-display">
            {data.scalabilityAssessment && (
                <div className="result-section-item">
                    <h4>📈 Scalability</h4>
                    <p>{data.scalabilityAssessment}</p>
                </div>
            )}

            {data.monetizationStrategies?.length > 0 && (
                <div className="result-section-item">
                    <h4>💰 Monetization Strategies</h4>
                    <ul>
                        {data.monetizationStrategies.map((strategy, i) => (
                            <li key={i}>{strategy}</li>
                        ))}
                    </ul>
                </div>
            )}

            {data.breakEvenEstimate && (
                <div className="result-section-item">
                    <h4>⚖️ Break-Even Estimate</h4>
                    <p>{data.breakEvenEstimate}</p>
                </div>
            )}

            {data.feasibilityScore && (
                <div className="score-display">
                    <span className="score-label">Feasibility Score:</span>
                    <span className={`score-value ${data.feasibilityScore >= 7 ? 'score-good' : data.feasibilityScore >= 4 ? 'score-medium' : 'score-low'}`}>
                        {data.feasibilityScore}/10
                    </span>
                </div>
            )}
        </div>
    );
}

// Final Verdict Display
export function FinalVerdictDisplay({ data }) {
    if (!data) return null;

    const verdictColor = data.recommendation === 'GO' ? 'var(--success)' :
        data.recommendation === 'PIVOT' ? 'var(--warning)' : 'var(--error)';

    return (
        <div className="result-display">
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div style={{
                    display: 'inline-block',
                    padding: '1rem 2rem',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: verdictColor,
                    border: `3px solid ${verdictColor}`,
                    borderRadius: '1rem',
                    background: `${verdictColor}15`
                }}>
                    {data.recommendation}
                </div>
                {data.overallScore && (
                    <div style={{ marginTop: '1rem', fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
                        Score: <strong>{data.overallScore}/10</strong>
                    </div>
                )}
            </div>

            {data.recommendationRationale && (
                <div className="result-section-item">
                    <h4>📝 Rationale</h4>
                    <p>{data.recommendationRationale}</p>
                </div>
            )}

            {data.keyStrengths?.length > 0 && (
                <div className="result-section-item">
                    <h4>✅ Key Strengths</h4>
                    <ul>
                        {data.keyStrengths.map((strength, i) => (
                            <li key={i}>{strength}</li>
                        ))}
                    </ul>
                </div>
            )}

            {data.criticalWeaknesses?.length > 0 && (
                <div className="result-section-item">
                    <h4>❌ Critical Weaknesses</h4>
                    <ul>
                        {data.criticalWeaknesses.map((weakness, i) => (
                            <li key={i}>{weakness}</li>
                        ))}
                    </ul>
                </div>
            )}

            {data.nextSteps?.length > 0 && (
                <div className="result-section-item">
                    <h4>📋 Next Steps</h4>
                    <ol>
                        {data.nextSteps.map((step, i) => (
                            <li key={i}>{step}</li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
}

// Helper to get the right display component for a task
export function getResultDisplay(taskId, data) {
    switch (taskId) {
        case 'ideaClarity':
            return <IdeaClarityDisplay data={data} />;
        case 'marketAnalysis':
            return <MarketAnalysisDisplay data={data} />;
        case 'competitorAnalysis':
            return <CompetitorAnalysisDisplay data={data} />;
        case 'successProbability':
            return <SuccessProbabilityDisplay data={data} />;
        case 'riskAnalysis':
            return <RiskAnalysisDisplay data={data} />;
        case 'businessFeasibility':
            return <BusinessFeasibilityDisplay data={data} />;
        case 'finalVerdict':
            return <FinalVerdictDisplay data={data} />;
        default:
            return <pre>{JSON.stringify(data, null, 2)}</pre>;
    }
}
