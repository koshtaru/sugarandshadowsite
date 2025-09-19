import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Web Design & Development',
      description: 'I build websites that actually work. No templates, no shortcuts—just clean, fast, and beautiful sites that help your business grow.',
      features: ['Custom Built', 'Mobile-First', 'SEO Ready', 'Lightning Fast']
    },
    {
      icon: '🎨',
      title: 'Graphic Design',
      description: 'I create visuals that tell your story. From logos to marketing materials, I make sure your brand stands out in a crowded market.',
      features: ['Unique Logos', 'Brand Identity', 'Marketing Materials', 'Social Media Graphics']
    },
    {
      icon: '💻',
      title: 'IT Technical Support',
      description: 'When technology breaks, I fix it. I keep your systems running so you can focus on what you do best—running your business.',
      features: ['Quick Fixes', 'System Setup', 'Network Security', '24/7 Support']
    }
  ];

  return (
    <section id="services" className="services bg-light">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What I Do Best</h2>
          <p className="section-subtitle">
            Three core skills I've honed over years of helping small businesses succeed online
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
          <h3>Ready to Work Together?</h3>
          <p>I'm always excited to take on new challenges. Let's talk about your project and see how I can help you succeed.</p>
          <a href="#contact" className="btn btn-primary">Let's Build Something</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
