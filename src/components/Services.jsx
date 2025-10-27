import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../data/services.json';

const Services = () => {
  const [isVisible, setIsVisible] = useState(true); // Start as visible
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Keep the observer for scroll-based animations but don't hide content initially
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

  return (
    <section 
      ref={sectionRef}
      style={{
        padding: '6rem 1rem',
        backgroundColor: '#f8fafc'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem',
          transform: 'translateY(0)',
          opacity: 1,
          transition: 'all 0.8s ease-out'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            Our Services
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Comprehensive technology solutions tailored for the Liberian market. 
            We build solutions that drive your business forward.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {servicesData && servicesData.length > 0 ? servicesData.map((service, index) => (
            <div
              key={service.id}
              style={{
                backgroundColor: 'white',
                padding: '2.5rem',
                borderRadius: '20px',
                boxShadow: activeService === index 
                  ? '0 20px 40px rgba(0, 0, 0, 0.15)' 
                  : '0 10px 30px rgba(0, 0, 0, 0.1)',
                border: `2px solid ${activeService === index ? '#3b82f6' : 'transparent'}`,
                cursor: 'pointer',
                transform: activeService === index 
                  ? 'translateY(-10px) scale(1.02)' 
                  : 'translateY(0)',
                opacity: 1,
                transition: `all 0.3s ease`,
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(-1)}
            >
              {/* Background Gradient */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: activeService === index 
                  ? 'linear-gradient(90deg, #3b82f6, #8b5cf6)' 
                  : 'transparent',
                transition: 'all 0.3s ease'
              }}></div>

              {/* Service Icon */}
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#eff6ff',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                fontSize: '2.5rem',
                transform: activeService === index ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.3s ease'
              }}>
                {service.icon || '💼'}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '1rem'
              }}>
                {service.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '1rem',
                color: '#6b7280',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {service.description}
              </p>

              {/* Features List */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '0.875rem',
                      color: '#4b5563'
                    }}
                  >
                    <span style={{
                      color: '#10b981',
                      marginRight: '0.5rem',
                      fontWeight: 'bold'
                    }}>
                      ✓
                    </span>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <Link
                to="/services"
                style={{
                  color: '#3b82f6',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.875rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.color = '#2563eb'}
                onMouseOut={(e) => e.target.style.color = '#3b82f6'}
              >
                Learn More →
              </Link>
            </div>
          )) : (
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              color: '#6b7280'
            }}>
              No services available. Please check the services data file.
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div style={{
          backgroundColor: 'white',
          padding: '3rem 2rem',
          borderRadius: '20px',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          transform: 'translateY(0)',
          opacity: 1,
          transition: 'all 0.8s ease-out 0.6s'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            Ready to Transform Your Business?
          </h3>
          <p style={{
            fontSize: '1.125rem',
            color: '#6b7280',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem auto'
          }}>
            Let's discuss how our technology solutions can help your business 
            grow and succeed in Liberia's digital economy.
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
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.125rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#2563eb';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#3b82f6';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
              }}
            >
              Get Free Consultation
            </Link>
            <Link
              to="/services"
              style={{
                border: '2px solid #3b82f6',
                color: '#3b82f6',
                backgroundColor: 'transparent',
                padding: '1rem 2rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.125rem',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#3b82f6';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#3b82f6';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
