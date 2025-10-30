import React, { Suspense, lazy, useEffect } from 'react';
import companyLogo from './assets/images/SVL Logo.jpg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  // Set document title and meta tags
  useEffect(() => {
    document.title = 'Software Vala Liberia - The Name of Trust';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'A leading global software company offering over 5,000 software solutions. Quick delivery, fixed pricing, no upfront payment. The Name of Trust in Liberia.';
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'software development, web development, mobile apps, Liberia, Monrovia, Paynesville';

    // Set favicon and apple-touch-icon to company logo (works on Render)
    const ensureLinkTag = (rel, type) => {
      let linkTag = document.querySelector(`link[rel="${rel}"]`);
      if (!linkTag) {
        linkTag = document.createElement('link');
        linkTag.setAttribute('rel', rel);
        if (type) linkTag.setAttribute('type', type);
        document.head.appendChild(linkTag);
      }
      return linkTag;
    };

    const favicon = ensureLinkTag('icon', 'image/png');
    favicon.setAttribute('href', companyLogo);

    const appleIcon = ensureLinkTag('apple-touch-icon');
    appleIcon.setAttribute('href', companyLogo);

    // Update social preview images to company logo
    const ensureMetaProperty = (property) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      return tag;
    };

    const ogImage = ensureMetaProperty('og:image');
    ogImage.setAttribute('content', companyLogo);

    const twitterImage = ensureMetaProperty('twitter:image');
    twitterImage.setAttribute('content', companyLogo);
  }, []);

  return (
    <Router>
      <div style={{ minHeight: '100vh' }}>
        <Header />
        
        <main>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
