import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About SweetAndShadow</h2>
            <p className="about-description">
              We're Valen Vayne and Viktoriya Vogue, a married VTuber duo who love sharing 
              our gaming adventures, creative processes, and daily life with our amazing community. 
              What started as individual streams has become a beautiful partnership where we 
              create wholesome content together and spread joy through gaming and creativity.
            </p>
            <div className="about-highlights">
              <div className="highlight">
                <h4>Valen Vayne - The Gamer</h4>
                <p>Valen brings the energy and excitement to our streams with his love for competitive gaming and indie adventures.</p>
              </div>
              <div className="highlight">
                <h4>Viktoriya Vogue - The Artist</h4>
                <p>Viktoriya shares her creative process through digital art, music, and character design streams.</p>
              </div>
              <div className="highlight">
                <h4>Together We're Stronger</h4>
                <p>Our chemistry and love for each other creates the most wholesome and entertaining content for our community.</p>
              </div>
            </div>
            <div className="about-skills">
              <h4>What We Love</h4>
              <div className="skills-grid">
                <span className="skill-tag">Gaming</span>
                <span className="skill-tag">Digital Art</span>
                <span className="skill-tag">Music Creation</span>
                <span className="skill-tag">Character Design</span>
                <span className="skill-tag">Community Building</span>
                <span className="skill-tag">Wholesome Content</span>
                <span className="skill-tag">Interactive Streams</span>
                <span className="skill-tag">Creative Challenges</span>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <div className="placeholder-icon">💕</div>
                  <p>Valen & Viktoriya</p>
                </div>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <h3>2</h3>
                <p>Streamers</p>
              </div>
              <div className="stat-item">
                <h3>∞</h3>
                <p>Love & Fun</p>
              </div>
              <div className="stat-item">
                <h3>24/7</h3>
                <p>Wholesome Vibes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
