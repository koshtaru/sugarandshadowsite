import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>SweetAndShadow</h2>
          </div>
          <nav className="nav">
            <a href="#home" className="nav-link">Home</a>
            <a href="#streams" className="nav-link">Streams</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <div className="header-cta">
            <a href="https://twitch.tv/valenvayne" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Watch Valen</a>
            <a href="https://twitch.tv/viktoriyavogue" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Watch Viktoriya</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
