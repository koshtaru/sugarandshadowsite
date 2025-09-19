import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Sweet & Shadow: A Married VTuber Duo
            </h1>
            <p className="hero-subtitle">
              Meet Valen Vayne and Viktoriya Vogue, a married couple bringing you 
              wholesome gaming content, creative streams, and endless entertainment. 
              Join us on Twitch for gaming adventures, art streams, and cozy vibes!
            </p>
            <div className="hero-buttons">
              <a href="https://twitch.tv/valenvayne" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Watch Valen</a>
              <a href="https://twitch.tv/viktoriyavogue" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Watch Viktoriya</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <h3>2</h3>
                <p>Streamers</p>
              </div>
              <div className="stat">
                <h3>∞</h3>
                <p>Love & Fun</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Wholesome Vibes</p>
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
