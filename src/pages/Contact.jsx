import React, { useState } from 'react';
import companyConfig from '../data/company-config.json';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    'Software Development',
    'Web Development', 
    'Mobile Applications',
    'Database & Systems',
    'Consultation',
    'Other'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000',
    'Not Sure'
  ];

  const timelines = [
    'ASAP',
    '1-3 months',
    '3-6 months', 
    '6-12 months',
    'More than 1 year',
    'Flexible'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '', email: '', phone: '', company: '', 
        service: '', budget: '', message: '', timeline: ''
      });
    }, 2000);
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '4rem' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '6rem 1rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem'
          }}>
            Let's Build Something Amazing Together
          </h1>
          <p style={{
            fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
            opacity: 0.9,
            lineHeight: '1.6'
          }}>
            Ready to transform your business with technology? We're here to help 
            bring your vision to life.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '6rem 1rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '4rem'
          }}>
            {/* Contact Information */}
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '2rem'
              }}>
                Get In Touch
              </h2>
              
              <p style={{
                fontSize: '1.125rem',
                color: '#6b7280',
                lineHeight: '1.6',
                marginBottom: '3rem'
              }}>
                Whether you need a custom software solution, a mobile app, or complete 
                digital transformation, we're ready to help. Let's discuss your project 
                and explore how we can work together.
              </p>

              {/* Contact Details */}
              <div style={{ marginBottom: '3rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                  padding: '1.5rem',
                  backgroundColor: 'white',
                  borderRadius: '15px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    marginRight: '1rem',
                    width: '60px',
                    textAlign: 'center'
                  }}>
                    📍
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#1f2937',
                      marginBottom: '0.25rem'
                    }}>
                      Office Location
                    </h3>
                    <p style={{ color: '#6b7280', margin: 0 }}>
                      {companyConfig.company.location.fullAddress}
                    </p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                  padding: '1.5rem',
                  backgroundColor: 'white',
                  borderRadius: '15px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    marginRight: '1rem',
                    width: '60px',
                    textAlign: 'center'
                  }}>
                    📞
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#1f2937',
                      marginBottom: '0.25rem'
                    }}>
                      Phone
                    </h3>
                    <a 
                      href={`tel:${companyConfig.contact.phone}`}
                      style={{
                        color: '#3b82f6',
                        textDecoration: 'none',
                        fontWeight: '500'
                      }}
                    >
                      {companyConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                  padding: '1.5rem',
                  backgroundColor: 'white',
                  borderRadius: '15px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    marginRight: '1rem',
                    width: '60px',
                    textAlign: 'center'
                  }}>
                    ✉️
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#1f2937',
                      marginBottom: '0.25rem'
                    }}>
                      Email
                    </h3>
                    <a 
                      href={`mailto:${companyConfig.contact.email}`}
                      style={{
                        color: '#3b82f6',
                        textDecoration: 'none',
                        fontWeight: '500'
                      }}
                    >
                      {companyConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '1rem'
                }}>
                  Business Hours
                </h3>
                <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Monday - Friday</span>
                    <span>{companyConfig.contact.businessHours.monday}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Saturday</span>
                    <span>{companyConfig.contact.businessHours.saturday}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Sunday</span>
                    <span>{companyConfig.contact.businessHours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{
              backgroundColor: 'white',
              padding: '3rem',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '1.5rem'
              }}>
                Start Your Project
              </h3>

              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                {/* Name and Email Row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        transition: 'border-color 0.2s ease',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        transition: 'border-color 0.2s ease',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Company Row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        transition: 'border-color 0.2s ease',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      placeholder="+231 XXX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        transition: 'border-color 0.2s ease',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                {/* Service and Budget Row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        transition: 'border-color 0.2s ease',
                        outline: 'none',
                        backgroundColor: 'white'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151',
                      marginBottom: '0.5rem'
                    }}>
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        transition: 'border-color 0.2s ease',
                        outline: 'none',
                        backgroundColor: 'white'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Project Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'border-color 0.2s ease',
                      outline: 'none',
                      backgroundColor: 'white'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  >
                    <option value="">When do you need this completed?</option>
                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'border-color 0.2s ease',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: isSubmitting ? '#9ca3af' : '#3b82f6',
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '10px',
                    border: 'none',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    marginTop: '1rem'
                  }}
                  onMouseOver={(e) => {
                    if (!isSubmitting) {
                      e.target.style.backgroundColor = '#2563eb';
                      e.target.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isSubmitting) {
                      e.target.style.backgroundColor = '#3b82f6';
                      e.target.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {isSubmitting ? '🚀 Sending...' : '📨 Send Message'}
                </button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div style={{
                    backgroundColor: '#d1fae5',
                    border: '2px solid #10b981',
                    color: '#065f46',
                    padding: '1rem',
                    borderRadius: '10px',
                    textAlign: 'center'
                  }}>
                    ✅ Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '6rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '3rem'
          }}>
            Frequently Asked Questions
          </h2>
          
          <div style={{ textAlign: 'left' }}>
            {[
              {
                q: "How long does a typical project take?",
                a: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while custom software can take 3-6 months. We'll provide a detailed timeline during our consultation."
              },
              {
                q: "Do you provide ongoing support?",
                a: "Yes! We offer 24/7 support and maintenance services to ensure your systems run smoothly. We also provide training and documentation for your team."
              },
              {
                q: "What technologies do you use?",
                a: "We use modern, proven technologies including React, Node.js, Python, Laravel, and cloud platforms like AWS and Google Cloud. We choose the best tech stack for each project."
              },
              {
                q: "Can you work with our existing systems?",
                a: "Absolutely! We specialize in system integration and can work with your existing infrastructure to enhance and extend your current capabilities."
              }
            ].map((faq, index) => (
              <div key={index} style={{
                backgroundColor: '#f8fafc',
                padding: '2rem',
                borderRadius: '15px',
                marginBottom: '1.5rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '1rem'
                }}>
                  {faq.q}
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
