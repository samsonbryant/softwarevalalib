import React, { useState, useEffect, useRef } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0
  });
  const sectionRef = useRef(null);

  const finalCounts = {
    projects: 50,
    clients: 25,
    years: 5,
    satisfaction: 100
  };

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

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;

      Object.keys(finalCounts).forEach((key) => {
        let currentCount = 0;
        const increment = finalCounts[key] / steps;
        
        const timer = setInterval(() => {
          currentCount += increment;
          if (currentCount >= finalCounts[key]) {
            currentCount = finalCounts[key];
            clearInterval(timer);
          }
          setCounts(prev => ({
            ...prev,
            [key]: Math.floor(currentCount)
          }));
        }, stepTime);
      });
    }
  }, [isVisible]);

  const stats = [
    {
      icon: '🚀',
      number: counts.projects,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successfully delivered software solutions across Liberia',
      color: '#3b82f6'
    },
    {
      icon: '🤝',
      number: counts.clients,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Businesses and organizations trust our expertise',
      color: '#10b981'
    },
    {
      icon: '📅',
      number: counts.years,
      suffix: '+',
      label: 'Years Experience',
      description: 'Proven track record in software development',
      color: '#f59e0b'
    },
    {
      icon: '⭐',
      number: counts.satisfaction,
      suffix: '%',
      label: 'Client Satisfaction',
      description: '100% client satisfaction rate with ongoing support',
      color: '#ef4444'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      style={{
        padding: '5rem 1rem',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        position: 'relative'
      }}
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
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            Our Impact in Numbers
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Building Liberia's digital future, one project at a time
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                padding: '2.5rem 2rem',
                borderRadius: '20px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb',
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                opacity: isVisible ? 1 : 0,
                transition: `all 0.8s ease-out ${index * 0.1}s`,
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
              }}
            >
              {/* Background Decoration */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '100px',
                height: '100px',
                background: `linear-gradient(45deg, ${stat.color}20, ${stat.color}10)`,
                borderRadius: '50%',
                zIndex: 0
              }}></div>

              {/* Icon */}
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                position: 'relative',
                zIndex: 1
              }}>
                {stat.icon}
              </div>

              {/* Number */}
              <div style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 'bold',
                color: stat.color,
                marginBottom: '0.5rem',
                position: 'relative',
                zIndex: 1
              }}>
                {stat.number}{stat.suffix}
              </div>

              {/* Label */}
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '1rem',
                position: 'relative',
                zIndex: 1
              }}>
                {stat.label}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '0.9rem',
                color: '#6b7280',
                lineHeight: '1.5',
                position: 'relative',
                zIndex: 1
              }}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease-out 0.5s'
        }}>
          <p style={{
            fontSize: '1.125rem',
            color: '#4b5563',
            marginBottom: '1.5rem'
          }}>
            Ready to become our next success story?
          </p>
          <a
            href="/contact"
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.125rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-block'
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
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stats;
