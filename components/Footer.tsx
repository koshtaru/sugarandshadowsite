import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Crawford Digital</h3>
            <p className="footer-description">
              One developer, endless possibilities. I help small businesses 
              compete with the big players through smart, affordable digital solutions.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span>💼</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span>🐦</span>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <span>🐙</span>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Web Design</a></li>
                <li><a href="#services">Graphic Design</a></li>
                <li><a href="#services">IT Support</a></li>
                <li><a href="#contact">Consultation</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#services">Portfolio</a></li>
                <li><a href="#contact">Get Quote</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Contact Info</h4>
              <ul>
                <li>hello@crawforddigital.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Remote Worldwide</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2024 Crawford Digital. All rights reserved.</p>
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
