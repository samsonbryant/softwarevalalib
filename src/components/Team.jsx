import React, { useState, useEffect, useRef } from 'react';
import teamData from '../data/team.json';

// Use public paths for team images (most reliable for Render)
// Images should be in public/assets/images/ folder
function resolveMemberImage(member) {
  if (!member.image) return null;
  
  // If already a public path, use it
  if (member.image.startsWith('/')) {
    return member.image;
  }
  
  // Otherwise, construct public path
  return `/assets/images/${member.image}`;
}

const Team = () => {
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
      style={{ padding: '5rem 1rem', backgroundColor: 'white' }}
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
            Meet Our Team
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Our talented team of developers, designers, and technology experts 
            is dedicated to delivering exceptional solutions for our clients in Liberia and beyond.
          </p>
        </div>

        {/* Team Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {teamData.map((member, index) => (
            <div
              key={member.id}
              style={{
                backgroundColor: 'white',
                padding: '2.5rem',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                opacity: isVisible ? 1 : 0,
                transition: `all 0.6s ease-out ${index * 0.1}s`,
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
              }}
            >
              {/* Member Photo */}
              {(() => {
                const resolved = resolveMemberImage(member);
                return resolved ? (
                <img
                  src={resolved}
                  alt={`${member.name} profile`}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    margin: '0 auto 1.5rem auto',
                    objectFit: 'cover',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.12)'
                  }}
                />
                ) : null;
              })()}
              <div style={{
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                borderRadius: '50%',
                margin: '0 auto 1.5rem auto',
                display: resolveMemberImage(member) ? 'none' : 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#3b82f6'
              }}>
                {member.name.split(' ').map(name => name[0]).join('')}
              </div>

              {/* Name and Role */}
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '0.5rem'
              }}>
                {member.name}
              </h3>
              <p style={{
                color: '#3b82f6',
                fontWeight: '600',
                marginBottom: '1.5rem'
              }}>
                {member.role}
              </p>

              {/* Bio */}
              <p style={{
                color: '#6b7280',
                fontSize: '0.9rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {member.bio}
              </p>

              {/* Skills */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                {member.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    style={{
                      backgroundColor: '#f3f4f6',
                      color: '#374151',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Contact Info */}
              <div style={{
                textAlign: 'center'
              }}>
                {member.email && (
                  <div style={{
                    marginBottom: '0.75rem',
                    fontSize: '0.875rem',
                    color: '#6b7280'
                  }}>
                    📧 <a 
                      href={`mailto:${member.email}`}
                      style={{
                        color: '#3b82f6',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseOver={(e) => e.target.style.color = '#2563eb'}
                      onMouseOut={(e) => e.target.style.color = '#3b82f6'}
                    >
                      {member.email}
                    </a>
                  </div>
                )}
                {member.phone && (
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#6b7280'
                  }}>
                    📞 {member.phone}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Company Culture Section */}
        <div style={{
          backgroundColor: '#f8fafc',
          borderRadius: '20px',
          padding: '3rem 2rem',
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease-out 0.6s'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h3 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              Our Mission
            </h3>
            <p style={{
              fontSize: '1.125rem',
              color: '#6b7280',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.7'
            }}>
              To empower businesses and organizations in Liberia through innovative technology solutions. 
              We believe in the transformative power of software and are committed to building solutions 
              that drive growth, efficiency, and success in the digital economy.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#eff6ff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto',
                fontSize: '2rem'
              }}>
                🎯
              </div>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '0.75rem'
              }}>
                Mission-Driven
              </h4>
              <p style={{
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                Every project we undertake is aligned with our mission to transform Liberia's digital landscape.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#eff6ff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto',
                fontSize: '2rem'
              }}>
                🤝
              </div>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '0.75rem'
              }}>
                Collaborative
              </h4>
              <p style={{
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                We work closely with our clients to understand their needs and deliver tailored solutions.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#eff6ff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto',
                fontSize: '2rem'
              }}>
                🚀
              </div>
              <h4 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '0.75rem'
              }}>
                Innovative
              </h4>
              <p style={{
                color: '#6b7280',
                lineHeight: '1.6'
              }}>
                We stay at the forefront of technology to deliver cutting-edge solutions for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
