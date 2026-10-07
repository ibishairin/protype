import React from 'react';
import '../css/QuizSection.css';

const QuizSection = () => {
  const quizzes = [
    {
      title: 'Stream Selector',
      subtitle: 'For Students',
      description: 'Class 6 – 12 · 9 questions · ~3 min',
      details:
        'Discover which stream — PCM, PCB, Commerce, Humanities, Creative Arts, or Sports — best fits your strengths, interests, and career goals.',
      features: [
        'Personalised recommendation Message',
        'Career paths & entrance exam guidance',
        'No sign-up required',
      ],
      buttonText: 'Start quiz',
    },
    {
      title: 'School Age Eligibility Checker',
      subtitle: 'For Parents',
      description: 'Nursery to Class 12 · age-based check · ~3 min',
      details:
        'Check the class your child is eligible for using school admission age cutoffs and stage-wise class rules.',
      features: [
        'Age-based eligibility roadmap',
        'Preschool to Class 12 guidance',
        'No sign-up required',
      ],
      buttonText: 'Check Eligibility',
    },
    {
      title: 'Board Adviser',
      subtitle: 'For Parents',
      description: 'All classes · 7 questions · ~3 min',
      details:
        "Find the right school board — CBSE, ICSE, IB, Cambridge, State Board, or NIOS — matched to your child's goals and your family's priorities.",
      features: [
        'Research-backed board comparison',
        'Fee range & school availability guide',
        'No sign-up required',
      ],
      buttonText: 'Start quiz',
    },
  ];

  return (
    <section className="quiz-section">
      <div className="quiz-container">
        <h2>Take Our Quiz: Find the Perfect Path for Your Child</h2>
        <p>Get personalised recommendations</p>

        <div className="quiz-grid">
          {quizzes.map((quiz, index) => (
            <div key={index} className="quiz-card">
              <span className="quiz-subtitle">{quiz.subtitle}</span>
              <h3>{quiz.title}</h3>
              <p className="quiz-description">{quiz.description}</p>
              <p className="quiz-details">{quiz.details}</p>
              <ul className="quiz-features">
                {quiz.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <button className="quiz-btn">{quiz.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
