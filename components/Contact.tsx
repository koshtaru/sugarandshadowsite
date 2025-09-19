import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="contact bg-light">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Connect With Us</h2>
          <p className="section-subtitle">
            Join our community and follow our streaming adventures! We love connecting with our viewers.
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Join Our Community</h3>
            <p>
              We love connecting with our amazing community! Follow us on Twitch, join our Discord, 
              and be part of our wholesome streaming family. We're always excited to meet new people 
              and share our gaming adventures together.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">🎮</div>
                <div className="method-details">
                  <h4>Valen's Twitch</h4>
                  <p>twitch.tv/valenvayne</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">🎨</div>
                <div className="method-details">
                  <h4>Viktoriya's Twitch</h4>
                  <p>twitch.tv/viktoriyavogue</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">💬</div>
                <div className="method-details">
                  <h4>Discord</h4>
                  <p>Join our community server</p>
                </div>
              </div>
            </div>
            
            <div className="response-time">
              <h4>Always Streaming</h4>
              <p>We're usually live on Twitch! Check our schedules and join us for gaming, art, and wholesome content.</p>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Content Type Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select content type</option>
                    <option value="gaming">Gaming Streams</option>
                    <option value="creative">Creative Content</option>
                    <option value="wholesome">Wholesome Vibes</option>
                    <option value="collaboration">Collaboration</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about what you'd like to see in our streams or how we can connect..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary form-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
