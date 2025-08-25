import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden pt-16 sm:pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-100/50 to-accent-100/50 bg-size-200 animate-shimmer"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-accent-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-primary-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="flex items-center space-x-2 bg-accent-100/80 px-3 sm:px-4 py-2 rounded-full">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-accent-600" />
              <span className="text-xs sm:text-sm font-medium text-accent-700">Premium Consultancy Services</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-900 mb-4 sm:mb-6 leading-tight px-4">
            <span className="block">Ultima Verba</span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-accent-600 font-medium mt-2">
              The Final Word in Consultancy
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-600 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
            Where expertise meets innovation. We deliver strategic solutions that transform challenges into opportunities, 
            ensuring your success is the final word in every endeavor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <button
              onClick={scrollToContact}
              className="group bg-primary-800 hover:bg-primary-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>Start Your Consultation</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group border-2 border-accent-500 text-accent-600 hover:bg-accent-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;