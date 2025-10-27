import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '150px',
        height: '150px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite reverse'
      }}></div>

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Main Content */}
        <div style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease-out'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            Ready to Transform Your Business?
          </h2>

          <p style={{
            fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
            marginBottom: '3rem',
            opacity: 0.9,
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto 3rem auto'
          }}>
            Join the growing number of Liberian businesses leveraging technology 
            for growth. Let's discuss how we can help you achieve your digital goals.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}>
            <Link
              to="/contact"
              style={{
                backgroundColor: 'white',
                color: '#667eea',
                padding: '1.25rem 2.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.125rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
              }}
            >
              🚀 Start Your Project
            </Link>
            
            <Link
              to="/services"
              style={{
                border: '2px solid white',
                color: 'white',
                backgroundColor: 'transparent',
                padding: '1.25rem 2.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.125rem',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
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
              📋 View Services
            </Link>
          </div>

          {/* Contact Options */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            maxWidth: '800px',
            margin: '0 auto',
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s ease-out 0.3s'
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '2rem',
              borderRadius: '15px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📞</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                Call Us Today
              </h3>
              <p style={{ opacity: 0.9, fontSize: '0.9rem', marginBottom: '1rem' }}>
                Speak directly with our team
              </p>
              <a 
                href="tel:+231XXXXXXX"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '600',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.5)'
                }}
              >
                +231 777 969 602
              </a>
            </div>

            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '2rem',
              borderRadius: '15px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✉️</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                Email Us
              </h3>
              <p style={{ opacity: 0.9, fontSize: '0.9rem', marginBottom: '1rem' }}>
                Get a detailed response within 24 hours
              </p>
              <a 
                href="mailto:softwarevalaliberiainc@gmail.com"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '600',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.5)'
                }}
              >
                softwarevalaliberiainc@gmail.com
              </a>
            </div>

            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '2rem',
              borderRadius: '15px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📍</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                Visit Our Office
              </h3>
              <p style={{ opacity: 0.9, fontSize: '0.9rem', marginBottom: '1rem' }}>
                Located in the heart of Monrovia
              </p>
              <address style={{
                color: 'white',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '0.9rem',
                lineHeight: '1.4'
              }}>
                Paynesville, Monrovia<br />
                Liberia, West Africa
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Guarantee */}
        <div style={{
          marginTop: '4rem',
          padding: '2rem',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease-out 0.6s'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            🛡️ Our Commitment to You
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            fontSize: '0.9rem',
            opacity: 0.9
          }}>
            <div>✅ Free Initial Consultation</div>
            <div>✅ Transparent Pricing</div>
            <div>✅ On-Time Delivery</div>
            <div>✅ 100% Satisfaction Guarantee</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default CallToAction;
