import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Team from '../components/Team';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
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

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive real results.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring their vision becomes reality through open communication.'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We stay at the forefront of technology, using cutting-edge tools and methodologies to build future-ready solutions.'
    },
    {
      icon: '🌍',
      title: 'Local Impact',
      description: 'We\'re committed to making a positive impact in Liberia, building solutions that strengthen our local economy.'
    },
    {
      icon: '🔒',
      title: 'Reliability',
      description: 'We deliver on time, every time, with robust solutions that stand the test of time and scale with your business.'
    },
    {
      icon: '💡',
      title: 'Transparency',
      description: 'We maintain complete transparency throughout the development process, keeping you informed every step of the way.'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
        padding: '5rem 1rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1.5rem',
            opacity: 1,
            transform: 'translateY(0)',
            transition: 'all 0.8s ease-out'
          }}>
            About Us
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: 1,
            transform: 'translateY(0)',
            transition: 'all 0.8s ease-out 0.2s'
          }}>
            Empowering Liberia's digital future through innovative technology solutions
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section 
        ref={sectionRef}
        style={{ padding: '5rem 1rem', backgroundColor: 'white' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div style={{
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.6s ease-out'
            }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '1.5rem'
              }}>
                Our Story
              </h2>
              <p style={{
                fontSize: '1.125rem',
                color: '#6b7280',
                marginBottom: '1.5rem',
                lineHeight: '1.7'
              }}>
                Founded in 2019, Software Vala Liberia began with a simple mission: to bridge the technology gap 
                in Liberia and provide world-class software solutions to local businesses and organizations.
              </p>
              <p style={{
                fontSize: '1.125rem',
                color: '#6b7280',
                marginBottom: '1.5rem',
                lineHeight: '1.7'
              }}>
                Based in Paynesville, Monrovia, we understand the unique challenges and opportunities that come 
                with operating in Liberia's growing digital economy. Our team combines international expertise 
                with local knowledge to deliver solutions that truly work for our clients.
              </p>
              <p style={{
                fontSize: '1.125rem',
                color: '#6b7280',
                lineHeight: '1.7'
              }}>
                Today, we're proud to have helped over 25 businesses transform their operations through technology, 
                from small startups to established institutions across various sectors.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
              borderRadius: '20px',
              padding: '2rem',
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.6s ease-out'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
                textAlign: 'center'
              }}>
                <div>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#3b82f6',
                    marginBottom: '0.5rem'
                  }}>
                    5+
                  </div>
                  <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                    Years Experience
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#3b82f6',
                    marginBottom: '0.5rem'
                  }}>
                    50+
                  </div>
                  <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                    Projects Completed
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#3b82f6',
                    marginBottom: '0.5rem'
                  }}>
                    25+
                  </div>
                  <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                    Happy Clients
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#3b82f6',
                    marginBottom: '0.5rem'
                  }}>
                    100%
                  </div>
                  <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '5rem 1rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem',
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.6s ease-out'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              Our Values
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              The principles that guide everything we do
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {values.map((value, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s ease-out ${index * 0.1}s`,
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>
                  {value.icon}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.75rem'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* CTA Section */}
      <section style={{
        padding: '5rem 1rem',
        backgroundColor: '#3b82f6',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.6s ease-out'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '1rem'
            }}>
              Ready to Work With Us?
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#dbeafe',
              marginBottom: '2rem',
              maxWidth: '700px',
              margin: '0 auto 2rem auto',
              lineHeight: '1.6'
            }}>
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <Link
              to="/contact"
              style={{
                backgroundColor: 'white',
                color: '#3b82f6',
                padding: '1rem 2rem',
                borderRadius: '12px',
                fontSize: '1.125rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                display: 'inline-block'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#f3f4f6';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;