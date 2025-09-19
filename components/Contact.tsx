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
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to start your next project? Let's discuss how I can help your business grow.
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Build Something Amazing</h3>
            <p>
              I'm always excited to work with fellow entrepreneurs and small business owners. 
              Whether you need a website, graphics, or tech support, let's talk about how 
              I can help you compete with the big players.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-details">
                  <h4>Email</h4>
                  <p>hello@crawforddigital.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">📱</div>
                <div className="method-details">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-details">
                  <h4>Location</h4>
                  <p>Available for remote work worldwide</p>
                </div>
              </div>
            </div>
            
            <div className="response-time">
              <h4>Quick Response</h4>
              <p>As a solo business owner, I understand the importance of quick communication. I'll get back to you within a few hours, not days.</p>
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
                  <label htmlFor="service">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="web-design">Web Design & Development</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="it-support">IT Technical Support</option>
                    <option value="consultation">Consultation</option>
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
                  placeholder="Tell me about your project and how I can help..."
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
