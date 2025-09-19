import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">SweetAndShadow</h3>
            <p className="footer-description">
              Valen Vayne & Viktoriya Vogue - A married VTuber duo bringing you 
              wholesome gaming content, creative streams, and endless entertainment.
            </p>
            <div className="footer-social">
              <a href="https://twitch.tv/valenvayne" className="social-link" aria-label="Valen's Twitch" target="_blank" rel="noopener noreferrer">
                <span>🎮</span>
              </a>
              <a href="https://twitch.tv/viktoriyavogue" className="social-link" aria-label="Viktoriya's Twitch" target="_blank" rel="noopener noreferrer">
                <span>🎨</span>
              </a>
              <a href="#" className="social-link" aria-label="Discord">
                <span>💬</span>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Content</h4>
              <ul>
                <li><a href="#services">Gaming Streams</a></li>
                <li><a href="#services">Creative Content</a></li>
                <li><a href="#services">Wholesome Vibes</a></li>
                <li><a href="#contact">Community</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Streamers</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Connect</a></li>
                <li><a href="https://twitch.tv/valenvayne" target="_blank" rel="noopener noreferrer">Valen's Twitch</a></li>
                <li><a href="https://twitch.tv/viktoriyavogue" target="_blank" rel="noopener noreferrer">Viktoriya's Twitch</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Follow Us</h4>
              <ul>
                <li>twitch.tv/valenvayne</li>
                <li>twitch.tv/viktoriyavogue</li>
                <li>Discord Community</li>
                <li>Always Streaming</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2024 SweetAndShadow. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
