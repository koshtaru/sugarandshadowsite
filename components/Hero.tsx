import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              One Developer, Endless Possibilities
            </h1>
            <p className="hero-subtitle">
              I'm James Crawford, a passionate solo developer who believes great digital 
              solutions don't require massive teams—just dedication, creativity, and 
              the right skills. Let me help your business stand out in the digital world.
            </p>
            <div className="hero-buttons">
              <a href="#services" className="btn btn-primary">What I Do</a>
              <a href="#contact" className="btn btn-secondary">Let's Talk</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Delivered</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Years Learning</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Personal Touch</p>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="card-content">
                <div className="mock-website">
                  <div className="mock-nav">
                    <div className="mock-logo"></div>
                    <div className="mock-menu">
                      <div className="mock-menu-item"></div>
                      <div className="mock-menu-item"></div>
                      <div className="mock-menu-item"></div>
                    </div>
                  </div>
                  <div className="mock-hero">
                    <div className="mock-title"></div>
                    <div className="mock-subtitle"></div>
                    <div className="mock-button"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
