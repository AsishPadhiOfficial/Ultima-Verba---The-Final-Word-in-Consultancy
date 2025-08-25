import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <AboutUs />
      <Services />
      <Testimonials />
      <ContactForm />
    </>
  );
};

export default Home;