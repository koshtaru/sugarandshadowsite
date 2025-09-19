import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🎮',
      title: 'Gaming Streams',
      description: 'Join Valen and Viktoriya for exciting gaming adventures! From cozy indie games to competitive multiplayer, we bring the fun and wholesome vibes.',
      features: ['Indie Games', 'Co-op Adventures', 'Retro Gaming', 'New Releases']
    },
    {
      icon: '🎨',
      title: 'Creative Content',
      description: 'Watch us create art, music, and digital content! Viktoriya shares her artistic process while Valen provides the perfect commentary.',
      features: ['Digital Art', 'Music Creation', 'Character Design', 'Creative Challenges']
    },
    {
      icon: '💕',
      title: 'Wholesome Vibes',
      description: 'Experience the love and laughter of a married couple sharing their passions. Our streams are a safe space for everyone to enjoy.',
      features: ['Safe Community', 'Positive Energy', 'Couple Content', 'Interactive Chat']
    }
  ];

  return (
    <section id="services" className="services bg-light">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What We Stream</h2>
          <p className="section-subtitle">
            Three types of content we love creating for our amazing community
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <span className="icon-emoji">{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="feature-item">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="service-cta">Learn More</a>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <h3>Join Our Community!</h3>
          <p>Follow us on Twitch and join our Discord to be part of our amazing community. We love connecting with our viewers!</p>
          <a href="https://twitch.tv/valenvayne" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Follow Valen</a>
          <a href="https://twitch.tv/viktoriyavogue" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Follow Viktoriya</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
