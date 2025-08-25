import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ContactCTAProps {
  title: string;
  description: string;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ title, description }) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/#contact');
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">{description}</p>
        
        <button
          onClick={handleContactClick}
          className="group bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 mx-auto"
        >
          <span>Get Started Today</span>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default ContactCTA;