import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroData from '../data/hero.json';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const dynamicTexts = [
    "Custom Software Solutions",
    "Mobile App Development", 
    "Web Development Services",
    "Database Management Systems"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [dynamicTexts.length]);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      overflow: 'hidden',
      padding: 'clamp(2rem, 8vh, 4rem) clamp(1rem, 4vw, 2rem)',
      paddingTop: 'max(6rem, 15vh)'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '100px',
        height: '100px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '70%',
        right: '10%',
        width: '150px',
        height: '150px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse'
      }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0',
        textAlign: 'center',
        color: 'white',
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.8s ease-out',
        width: '100%'
      }}>
        {/* Main Heading */}
        <h1 style={{
          fontSize: 'clamp(2rem, 6vw, 4rem)',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
          lineHeight: '1.2'
        }}>
          {heroData.title}
        </h1>

        {/* Tagline */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.125rem, 3vw, 1.75rem)',
            fontWeight: '700',
            color: '#fff',
            opacity: 0.95,
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            {heroData.tagline}
          </h2>
        </div>

        {/* Dynamic Subheading */}
        <div style={{
          height: '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.25rem, 3vw, 2rem)',
            fontWeight: '600',
            color: '#e0e7ff',
            opacity: 0.9,
            animation: 'fadeInOut 3s infinite'
          }}>
            {dynamicTexts[currentText]}
          </h2>
        </div>

        {/* Description */}
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#e0e7ff',
          marginBottom: '2.5rem',
          maxWidth: '800px',
          margin: '0 auto 2.5rem auto',
          lineHeight: '1.6'
        }}>
          {heroData.subtitle}
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: 'clamp(0.75rem, 2vw, 1.5rem)',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '3rem',
          alignItems: 'center'
        }}>
          <Link
            to="/contact"
            style={{
              backgroundColor: '#ffffff',
              color: '#667eea',
              padding: 'clamp(0.875rem, 2vw, 1.125rem) clamp(1.5rem, 4vw, 2.5rem)',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              border: 'none',
              cursor: 'pointer',
              minHeight: '48px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            }}
          >
            🚀 {heroData.ctaText}
          </Link>
          
          <Link
            to="/projects"
            style={{
              border: '2px solid white',
              color: 'white',
              backgroundColor: 'transparent',
              padding: 'clamp(0.875rem, 2vw, 1.125rem) clamp(1.5rem, 4vw, 2.5rem)',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
              transition: 'all 0.3s ease',
              minHeight: '48px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#667eea';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            📁 View Our Work
          </Link>
        </div>

        {/* Trust Indicators */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '2rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: '#fbbf24'
            }}>50+</div>
            <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Projects Completed</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: '#fbbf24'
            }}>25+</div>
            <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Happy Clients</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: '#fbbf24'
            }}>5+</div>
            <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Years Experience</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite'
      }}>
        <div style={{
          width: '30px',
          height: '50px',
          border: '2px solid rgba(255, 255, 255, 0.5)',
          borderRadius: '25px',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '8px'
        }}>
          <div style={{
            width: '4px',
            height: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '2px',
            animation: 'scroll 2s infinite'
          }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }
        @keyframes scroll {
          0% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateY(15px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;