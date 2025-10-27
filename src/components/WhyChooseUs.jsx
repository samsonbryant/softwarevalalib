import React, { useState, useEffect, useRef } from 'react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
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

  const features = [
    {
      icon: '🎯',
      title: 'Local Expertise',
      description: 'Deep understanding of the Liberian market and business environment. We build solutions that work specifically for local challenges and opportunities.',
      benefits: ['Cultural Understanding', 'Local Market Knowledge', 'Regulatory Compliance', 'Community Focus']
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Agile development process ensures quick turnaround times without compromising quality. Get your solutions to market faster.',
      benefits: ['Rapid Prototyping', 'Iterative Development', 'Quick Deployment', 'Fast Support Response']
    },
    {
      icon: '💰',
      title: 'Cost-Effective',
      description: 'Competitive pricing with transparent costs. No hidden fees, just honest pricing that delivers exceptional value for your investment.',
      benefits: ['Transparent Pricing', 'No Hidden Costs', 'Flexible Payment Plans', 'Maximum ROI']
    },
    {
      icon: '🛡️',
      title: 'Reliable Support',
      description: '24/7 support and maintenance services. We\'re here when you need us, ensuring your systems run smoothly at all times.',
      benefits: ['24/7 Availability', 'Proactive Monitoring', 'Regular Updates', 'Emergency Response']
    },
    {
      icon: '🚀',
      title: 'Modern Technology',
      description: 'Latest technologies and best practices ensure your solutions are future-ready and scalable as your business grows.',
      benefits: ['Latest Tech Stack', 'Scalable Architecture', 'Security First', 'Performance Optimized']
    },
    {
      icon: '🤝',
      title: 'Partnership Approach',
      description: 'We work as your technology partner, not just a vendor. Your success is our success, and we\'re committed to long-term relationships.',
      benefits: ['Collaborative Process', 'Strategic Guidance', 'Long-term Partnership', 'Business Growth Focus']
    }
  ];

  return (
    <section 
      ref={sectionRef}
      style={{
        padding: '6rem 1rem',
        backgroundColor: '#ffffff',
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
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            Why Choose Software Vala Liberia?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            We combine international expertise with local knowledge to deliver 
            exceptional software solutions tailored for the Liberian market.
          </p>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                backgroundColor: activeFeature === index ? '#f8fafc' : 'white',
                padding: '2.5rem',
                borderRadius: '20px',
                border: `2px solid ${activeFeature === index ? '#3b82f6' : '#e5e7eb'}`,
                cursor: 'pointer',
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                opacity: isVisible ? 1 : 0,
                transition: `all 0.6s ease-out ${index * 0.1}s`,
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(-1)}
            >
              {/* Background Gradient */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: activeFeature === index 
                  ? 'linear-gradient(90deg, #3b82f6, #8b5cf6)' 
                  : 'transparent',
                transition: 'all 0.3s ease'
              }}></div>

              {/* Icon */}
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem',
                transform: activeFeature === index ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.3s ease'
              }}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '1rem'
              }}>
                {feature.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '1rem',
                color: '#6b7280',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {feature.description}
              </p>

              {/* Benefits List */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.5rem'
              }}>
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div
                    key={benefitIndex}
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
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div style={{
          backgroundColor: '#f8fafc',
          padding: '3rem 2rem',
          borderRadius: '20px',
          textAlign: 'center',
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
            Our Proven Process
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your needs' },
              { step: '02', title: 'Planning', desc: 'Strategic roadmap creation' },
              { step: '03', title: 'Development', desc: 'Building your solution' },
              { step: '04', title: 'Launch', desc: 'Deployment & support' }
            ].map((process, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  margin: '0 auto 1rem auto'
                }}>
                  {process.step}
                </div>
                <h4 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.5rem'
                }}>
                  {process.title}
                </h4>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#6b7280'
                }}>
                  {process.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
