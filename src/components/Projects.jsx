import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

// Build-time image resolver that tolerates spaces and varied casing
// It looks up images from src/assets/images by filename from projects.json
// @ts-ignore - require.context is provided by webpack in CRA
const imagesCtx = require.context('../assets/images', false, /\.(png|jpe?g|webp)$/i);
const imageKeys = imagesCtx.keys();

// Normalize function that handles trailing spaces and case
function normalizeFileName(name) {
  return String(name || '').toLowerCase().trim();
}

// Extract just the filename from require.context path (e.g., "./School Ease Management.jpg" -> "School Ease Management.jpg")
function getFileNameFromPath(path) {
  const match = path.match(/[^/\\]+\.(png|jpe?g|webp)$/i);
  return match ? match[0] : '';
}

// Create a map of normalized filenames to their require.context keys
const imageMap = {};
imageKeys.forEach(key => {
  const fileName = getFileNameFromPath(key);
  const normalized = normalizeFileName(fileName);
  if (normalized && !imageMap[normalized]) {
    imageMap[normalized] = key;
  }
});

function resolveProjectImage(fileName) {
  if (!fileName) return null;
  
  // Normalize the target filename
  const targetNormalized = normalizeFileName(fileName);
  
  // Try exact match first
  if (imageMap[targetNormalized]) {
    try {
      return imagesCtx(imageMap[targetNormalized]);
    } catch (e) {
      console.warn('Failed to load image:', fileName, e);
    }
  }
  
  // Fallback: try partial match (for files with trailing spaces)
  const targetWithoutSpaces = targetNormalized.replace(/\s+$/, '');
  for (const [normalized, key] of Object.entries(imageMap)) {
    if (normalized.replace(/\s+$/, '') === targetWithoutSpaces || 
        normalized === targetWithoutSpaces + ' ') {
      try {
        return imagesCtx(key);
      } catch (e) {
        console.warn('Failed to load image (partial match):', fileName, e);
      }
    }
  }
  
  // Final fallback: try public path
  return `/assets/images/${fileName}`;
}

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const categories = ['All', 'Web Development', 'Mobile Applications', 'Software Development', 'Database & Systems'];
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

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
            Our Projects
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            maxWidth: '700px',
            margin: '0 auto 2rem auto',
            lineHeight: '1.6'
          }}>
            Explore our portfolio of successful projects that have helped businesses and organizations 
            across Liberia achieve their digital transformation goals.
          </p>

          {/* Filter Buttons */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem'
          }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: filter === category ? '#3b82f6' : '#f3f4f6',
                  color: filter === category ? 'white' : '#374151',
                  boxShadow: filter === category ? '0 4px 15px rgba(59, 130, 246, 0.3)' : 'none'
                }}
                onMouseOver={(e) => {
                  if (filter !== category) {
                    e.target.style.backgroundColor = '#e5e7eb';
                  }
                }}
                onMouseOut={(e) => {
                  if (filter !== category) {
                    e.target.style.backgroundColor = '#f3f4f6';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.6s ease-out'
        }}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transitionDelay: `${index * 0.1}s`
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
              {/* Project Image */}
              <div style={{
                height: '200px',
                position: 'relative',
                background: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)',
                overflow: 'hidden'
              }}>
                {resolveProjectImage(project.image) ? (
                  <img
                    src={resolveProjectImage(project.image)}
                    alt={`${project.title} cover`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem',
                    opacity: 0.25
                  }}>
                    {project.category === 'Web Development' && '🌐'}
                    {project.category === 'Mobile Applications' && '📱'}
                    {project.category === 'Software Development' && '💻'}
                    {project.category === 'Database & Systems' && '🗄️'}
                  </div>
                )}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: '#3b82f6',
                  padding: '0.5rem 1rem',
                  borderRadius: '15px',
                  fontSize: '0.75rem',
                  fontWeight: '600'
                }}>
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div style={{ padding: '2rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '1rem'
                }}>
                  {project.title}
                </h3>

                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{
                        backgroundColor: '#eff6ff',
                        color: '#3b82f6',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: '500'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <Link
                  to={project.link}
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
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div style={{
          textAlign: 'center',
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease-out 0.6s'
        }}>
          <Link
            to="/projects"
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.125rem',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#2563eb';
              e.target.style.transform = 'translateY(-2px) scale(1.05)';
              e.target.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#3b82f6';
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
            }}
          >
            View All Projects
            <span style={{ fontSize: '1rem' }}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
