import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import ContactForm from '../components/ContactForm';
import Stats from '../components/Stats';
import WhyChooseUs from '../components/WhyChooseUs';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <Team />
      <CallToAction />
      <ContactForm />
    </div>
  );
};

export default Home;
