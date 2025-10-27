import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/SVL Logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    { name: 'Software Development', path: '/services#software' },
    { name: 'Web Development', path: '/services#web' },
    { name: 'Mobile Apps', path: '/services#mobile' },
    { name: 'Database Systems', path: '/services#database' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'LinkedIn', href: '#', icon: '💼' }
  ];

  return (
    <footer style={{
      backgroundColor: '#111827',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 1rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {/* Company Info */}
          <div>
            <div style={{
              marginBottom: '1.5rem'
            }}>
              <img 
                src={logo} 
                alt="Software Vala Liberia Logo" 
                style={{
                  height: '80px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(1.1)'
                }}
              />
            </div>
            <p style={{
              color: '#d1d5db',
              marginBottom: '1rem',
              lineHeight: '1.6',
              fontSize: '0.9rem'
            }}>
              Powering Liberia's future with innovative software solutions. 
              We build technology that drives growth and efficiency.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  style={{
                    color: '#9ca3af',
                    fontSize: '1.5rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = 'white'}
                  onMouseOut={(e) => e.target.style.color = '#9ca3af'}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'white'
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {quickLinks.map((link) => (
                <li key={link.name} style={{ marginBottom: '0.5rem' }}>
                  <Link
                    to={link.path}
                    style={{
                      color: '#d1d5db',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseOver={(e) => e.target.style.color = 'white'}
                    onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'white'
            }}>
              Services
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {services.map((service) => (
                <li key={service.name} style={{ marginBottom: '0.5rem' }}>
                  <Link
                    to={service.path}
                    style={{
                      color: '#d1d5db',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseOver={(e) => e.target.style.color = 'white'}
                    onMouseOut={(e) => e.target.style.color = '#d1d5db'}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'white'
            }}>
              Contact Info
            </h4>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: '0.75rem'
              }}>
                <span style={{
                  color: '#60a5fa',
                  marginRight: '0.75rem',
                  fontSize: '1.125rem',
                  marginTop: '0.125rem'
                }}>
                  📍
                </span>
                <div>
                  <p style={{
                    color: '#d1d5db',
                    margin: 0,
                    fontSize: '0.9rem',
                    lineHeight: '1.5'
                  }}>
                    Paynesville, Monrovia<br />
                    Liberia, West Africa
                  </p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '0.75rem'
              }}>
                <span style={{
                  color: '#60a5fa',
                  marginRight: '0.75rem',
                  fontSize: '1.125rem'
                }}>
                  📞
                </span>
                <p style={{
                  color: '#d1d5db',
                  margin: 0,
                  fontSize: '0.9rem'
                }}>
                  +231 777 969 602/0775 592 486
                  +231 888 636 071/0881 031 901
                </p>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center'
              }}>
                <span style={{
                  color: '#60a5fa',
                  marginRight: '0.75rem',
                  fontSize: '1.125rem'
                }}>
                  📧
                </span>
                <p style={{
                  color: '#d1d5db',
                  margin: 0,
                  fontSize: '0.9rem'
                }}>
                  softwarevalaliberiainc@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #374151',
          marginTop: '2rem',
          paddingTop: '2rem'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <p style={{
              color: '#9ca3af',
              fontSize: '0.875rem',
              margin: 0
            }}>
              © {currentYear} Software Vala Liberia. All rights reserved.
            </p>
            <div style={{
              display: 'flex',
              gap: '1.5rem'
            }}>
              <Link
                to="/privacy"
                style={{
                  color: '#9ca3af',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.color = 'white'}
                onMouseOut={(e) => e.target.style.color = '#9ca3af'}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                style={{
                  color: '#9ca3af',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.color = 'white'}
                onMouseOut={(e) => e.target.style.color = '#9ca3af'}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;