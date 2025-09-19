import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About James Crawford</h2>
            <p className="about-description">
              I'm a self-taught developer who started coding in my spare time and fell in love 
              with solving problems. What began as a hobby has become my passion—helping 
              small businesses compete with the big players through smart, affordable digital 
              solutions. I believe every business deserves a fighting chance online.
            </p>
            <div className="about-highlights">
              <div className="highlight">
                <h4>Self-Taught & Hungry</h4>
                <p>I learned everything through trial, error, and endless YouTube tutorials. This makes me resourceful and determined.</p>
              </div>
              <div className="highlight">
                <h4>Small Business Champion</h4>
                <p>I understand the struggles of running a small business because I am one. Your success is my success.</p>
              </div>
              <div className="highlight">
                <h4>Personal Touch</h4>
                <p>You'll work directly with me, not a team. Every project gets my full attention and passion.</p>
              </div>
            </div>
            <div className="about-skills">
              <h4>Technical Skills</h4>
              <div className="skills-grid">
                <span className="skill-tag">React & TypeScript</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Adobe Creative Suite</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">System Administration</span>
                <span className="skill-tag">Network Security</span>
                <span className="skill-tag">Cloud Solutions</span>
                <span className="skill-tag">Database Management</span>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <div className="placeholder-icon">👨‍💻</div>
                  <p>Professional Headshot</p>
                </div>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <h3>5+</h3>
                <p>Years Learning</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Personal Commitment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
