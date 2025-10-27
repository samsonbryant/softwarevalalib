import React, { useState, useEffect, useRef } from 'react';
import testimonialsData from '../data/testimonials.json';

const Testimonials = () => {
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

  return (
    <section 
      ref={sectionRef}
      style={{ padding: '5rem 1rem', backgroundColor: '#f8fafc' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem',
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease-out'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            What Our Clients Say
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Don't just take our word for it. Here's what our clients have to say about 
            working with Software Vala Liberia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              style={{
                backgroundColor: 'white',
                padding: '2.5rem',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                opacity: isVisible ? 1 : 0,
                transition: `all 0.6s ease-out ${index * 0.2}s`,
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
              {/* Stars */}
              <div style={{
                display: 'flex',
                marginBottom: '1.5rem'
              }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{
                    color: '#fbbf24',
                    fontSize: '1.25rem',
                    marginRight: '0.25rem'
                  }}>
                    ⭐
                  </span>
                ))}
              </div>

              {/* Quote */}
              <blockquote style={{
                fontSize: '1.125rem',
                color: '#374151',
                lineHeight: '1.7',
                marginBottom: '2rem',
                fontStyle: 'italic'
              }}>
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#eff6ff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#3b82f6'
                }}>
                  {testimonial.author.split(' ').map(name => name[0]).join('')}
                </div>
                <div>
                  <div style={{
                    fontWeight: '600',
                    color: '#1f2937',
                    fontSize: '1.125rem',
                    marginBottom: '0.25rem'
                  }}>
                    {testimonial.author}
                  </div>
                  <div style={{
                    color: '#6b7280',
                    fontSize: '0.9rem'
                  }}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          padding: '3rem 2rem',
          textAlign: 'center',
          maxWidth: '1000px',
          margin: '0 auto',
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease-out 0.6s'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '2rem'
          }}>
            Trusted by Businesses Across Liberia
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#3b82f6',
                marginBottom: '0.5rem'
              }}>
                100%
              </div>
              <div style={{
                color: '#6b7280',
                fontSize: '0.9rem'
              }}>
                Client Satisfaction
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#3b82f6',
                marginBottom: '0.5rem'
              }}>
                24/7
              </div>
              <div style={{
                color: '#6b7280',
                fontSize: '0.9rem'
              }}>
                Support Available
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#3b82f6',
                marginBottom: '0.5rem'
              }}>
                5+
              </div>
              <div style={{
                color: '#6b7280',
                fontSize: '0.9rem'
              }}>
                Years Experience
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#3b82f6',
                marginBottom: '0.5rem'
              }}>
                50+
              </div>
              <div style={{
                color: '#6b7280',
                fontSize: '0.9rem'
              }}>
                Projects Delivered
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
