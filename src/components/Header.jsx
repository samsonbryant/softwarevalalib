import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/SVL Logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Services', path: '/services', icon: '⚙️' },
    { name: 'Projects', path: '/projects', icon: '💼' },
    { name: 'About', path: '/about', icon: '👥' },
    { name: 'Contact', path: '/contact', icon: '📞' }
  ];

  // Handle scroll effect and responsive behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  return (
    <header style={{
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.05)',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      borderBottom: isScrolled ? '1px solid #e5e7eb' : 'none'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 clamp(1rem, 4vw, 2rem)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: isScrolled ? '70px' : '80px',
          transition: 'height 0.3s ease',
          minHeight: '60px'
        }}>
          {/* Logo */}
          <Link 
            to="/" 
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <img 
                src={logo} 
                alt="Software Vala Liberia Logo" 
                style={{
                  height: isScrolled ? '50px' : '60px',
                  width: 'auto',
                  transition: 'height 0.3s ease',
                  objectFit: 'contain'
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav style={{
            display: isMobile ? 'none' : 'flex',
            gap: '0.5rem',
            alignItems: 'center'
          }}>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  color: isActivePage(item.path) ? '#3b82f6' : '#374151',
                  textDecoration: 'none',
                  padding: '0.75rem 1rem',
                  fontSize: '0.9rem',
                  fontWeight: isActivePage(item.path) ? '600' : '500',
                  borderRadius: '12px',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: isActivePage(item.path) ? '#eff6ff' : 'transparent',
                  border: isActivePage(item.path) ? '1px solid #dbeafe' : '1px solid transparent'
                }}
                onMouseOver={(e) => {
                  if (!isActivePage(item.path)) {
                    e.target.style.backgroundColor = '#f8fafc';
                    e.target.style.color = '#3b82f6';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isActivePage(item.path)) {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#374151';
                  }
                }}
              >
                <span style={{ fontSize: '1rem' }}>{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div style={{
            display: isMobile ? 'none' : 'flex',
            gap: '0.75rem',
            alignItems: 'center'
          }}>
            <Link
              to="/contact"
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
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
              <span>💬</span>
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div style={{
            display: isMobile ? 'block' : 'none'
          }}>
            <button
              onClick={toggleMenu}
              style={{
                color: '#374151',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.75rem',
                borderRadius: '12px',
                transition: 'all 0.2s ease',
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '44px',
                minHeight: '44px',
                position: 'relative'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#f3f4f6';
                e.target.style.color = '#3b82f6';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#374151';
              }}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            id="mobile-navigation"
            style={{
              display: isMobile ? 'block' : 'none',
              backgroundColor: 'white',
              borderTop: '1px solid #e5e7eb',
              padding: '1rem 0',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              borderRadius: '0 0 20px 20px',
              marginTop: '1px',
              animation: 'fadeInUp 0.3s ease-out'
            }}
            aria-label="Mobile navigation"
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  style={{
                    color: isActivePage(item.path) ? '#3b82f6' : '#374151',
                    textDecoration: 'none',
                    padding: '1rem 1.25rem',
                    fontSize: '1.125rem',
                    fontWeight: isActivePage(item.path) ? '600' : '500',
                    borderRadius: '12px',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    backgroundColor: isActivePage(item.path) ? '#eff6ff' : 'transparent',
                    border: isActivePage(item.path) ? '1px solid #dbeafe' : '1px solid transparent',
                    margin: '0 0.5rem',
                    minHeight: '48px',
                    position: 'relative'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                  onMouseOver={(e) => {
                    if (!isActivePage(item.path)) {
                      e.target.style.backgroundColor = '#f8fafc';
                      e.target.style.color = '#3b82f6';
                      e.target.style.transform = 'translateX(4px)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isActivePage(item.path)) {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#374151';
                      e.target.style.transform = 'translateX(0)';
                    }
                  }}
                  role="menuitem"
                >
                  <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile CTA Button */}
              <div style={{ padding: '1rem 0.5rem 0 0.5rem' }}>
                <Link
                  to="/contact"
                  style={{
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#2563eb';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#3b82f6';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <span style={{ fontSize: '1.25rem' }}>💬</span>
                  Get Quote
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
