import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../data/services.json';

const Services = () => {
  const [isVisible, setIsVisible] = useState(true); // Start as visible
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Keep observer for scroll-based animations but don't hide content initially
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We start by understanding your business needs, goals, and challenges through detailed consultation and market analysis.',
      details: ['Business Requirements Analysis', 'Market Research', 'Technical Feasibility Study', 'Budget Planning']
    },
    {
      step: '02',
      title: 'Strategic Planning',
      description: 'Our team creates a comprehensive project plan with timelines, milestones, and deliverables tailored to your objectives.',
      details: ['Project Roadmap', 'Technology Selection', 'Resource Allocation', 'Risk Assessment']
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your solution using modern technologies and best practices, with regular updates and thorough testing.',
      details: ['Agile Development', 'Quality Assurance', 'User Testing', 'Performance Optimization']
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We deploy your solution and provide ongoing support to ensure continued success and growth.',
      details: ['Deployment', '24/7 Support', 'Maintenance', 'Future Enhancements']
    }
  ];

  return (
    <div style={{ minHeight: '100vh', paddingTop: '4rem' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '6rem 1rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            Our Services
          </h1>
          <p style={{
            fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: 0.9,
            lineHeight: '1.6'
          }}>
            Comprehensive technology solutions designed to help your business 
            thrive in Liberia's digital economy
          </p>
        </div>
      </section>

      {/* Services Detailed Section */}
      <section 
        ref={sectionRef}
        style={{ padding: '6rem 1rem', backgroundColor: 'white' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem',
            transform: 'translateY(0)',
            opacity: 1,
            transition: 'all 0.8s ease-out'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              What We Offer
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              From concept to deployment, we provide end-to-end technology solutions
            </p>
          </div>

          {/* Detailed Services Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '3rem'
          }}>
            {servicesData && servicesData.length > 0 ? servicesData.map((service, index) => (
              <div
                key={service.id}
                style={{
                  backgroundColor: '#f8fafc',
                  padding: '3rem',
                  borderRadius: '20px',
                  border: `3px solid ${activeService === index ? '#3b82f6' : 'transparent'}`,
                  cursor: 'pointer',
                  transform: activeService === index 
                    ? 'scale(1.02)' 
                    : 'scale(1)',
                  opacity: 1,
                  transition: `all 0.6s ease-out ${index * 0.2}s`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(-1)}
              >
                {/* Service Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '2rem'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#3b82f6',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    marginRight: '1.5rem',
                    transform: activeService === index ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.3s ease'
                  }}>
                    {service.icon || '💼'}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.75rem',
                      fontWeight: 'bold',
                      color: '#1f2937',
                      marginBottom: '0.5rem'
                    }}>
                      {service.title}
                    </h3>
                    <div style={{
                      width: '60px',
                      height: '4px',
                      backgroundColor: '#3b82f6',
                      borderRadius: '2px'
                    }}></div>
                  </div>
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '1.125rem',
                  color: '#4b5563',
                  lineHeight: '1.7',
                  marginBottom: '2rem'
                }}>
                  {service.description}
                </p>

                {/* Features Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem',
                  marginBottom: '2rem'
                }}>
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0.75rem',
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        fontSize: '0.9rem',
                        color: '#374151',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                      }}
                    >
                      <span style={{
                        color: '#10b981',
                        marginRight: '0.75rem',
                        fontWeight: 'bold',
                        fontSize: '1.1rem'
                      }}>
                        ✓
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to="/contact"
                  style={{
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#2563eb';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#3b82f6';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Get Started →
                </Link>
              </div>
            )) : (
              <div style={{
                textAlign: 'center',
                padding: '3rem',
                color: '#6b7280',
                gridColumn: '1 / -1'
              }}>
                <p style={{ fontSize: '1.25rem' }}>
                  No services available. Please check the services data file.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{
        padding: '6rem 1rem',
        backgroundColor: '#f8fafc'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              Our Proven Process
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              We follow a structured methodology to ensure your project's success
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {processSteps.map((step, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  padding: '2.5rem',
                  borderRadius: '20px',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Step Number */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  margin: '0 auto 1.5rem auto'
                }}>
                  {step.step}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '1rem'
                }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '1rem',
                  color: '#6b7280',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {step.description}
                </p>

                {/* Details */}
                <div style={{
                  textAlign: 'left'
                }}>
                  {step.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '0.875rem',
                        color: '#4b5563',
                        marginBottom: '0.5rem'
                      }}
                    >
                      <span style={{
                        color: '#10b981',
                        marginRight: '0.5rem',
                        fontWeight: 'bold'
                      }}>
                        •
                      </span>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '6rem 1rem',
        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem'
          }}>
            Ready to Get Started?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            marginBottom: '2.5rem',
            opacity: 0.9
          }}>
            Let's discuss your project and how we can help bring your vision to life
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link
              to="/contact"
              style={{
                backgroundColor: 'white',
                color: '#3b82f6',
                padding: '1.25rem 2.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.125rem',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Start Your Project
            </Link>
            <Link
              to="/projects"
              style={{
                border: '2px solid white',
                color: 'white',
                backgroundColor: 'transparent',
                padding: '1.25rem 2.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.125rem',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
