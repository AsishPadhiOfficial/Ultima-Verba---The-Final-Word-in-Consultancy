import React, { useState, useEffect } from 'react';
import { Menu, X, Crown, Sparkles, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const services = [
    { name: 'Business Strategy', path: '/services/business-strategy' },
    { name: 'Legal Advisory', path: '/services/legal-advisory' },
    { name: 'Academic Support', path: '/services/academic-support' },
    { name: 'Tech Consulting', path: '/services/tech-consulting' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-primary-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer">
            <div className="relative">
              <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-accent-500 group-hover:text-accent-600 transition-colors duration-300" />
              <Sparkles className="h-2 w-2 sm:h-3 sm:w-3 text-accent-400 absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 animate-pulse" />
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-primary-800 group-hover:text-primary-900 transition-colors duration-300">
                Ultima Verba
              </h1>
              <p className="text-xs text-primary-600 -mt-0.5 sm:-mt-1 group-hover:text-accent-600 transition-colors duration-300 hidden sm:block">
                The Final Word in Consultancy
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              to="/"
              className="text-primary-700 hover:text-accent-600 font-medium transition-all duration-300 relative group px-2 py-1"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-500 to-primary-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-primary-700 hover:text-accent-600 font-medium transition-all duration-300 relative group px-2 py-1">
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-500 to-primary-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-primary-100 py-2 animate-fade-in">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-3 text-primary-700 hover:text-accent-600 hover:bg-accent-50 transition-all duration-300"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="text-primary-700 hover:text-accent-600 font-medium transition-all duration-300 relative group px-2 py-1"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-500 to-primary-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>

            <button
              onClick={() => scrollToSection('contact')}
              className="text-primary-700 hover:text-accent-600 font-medium transition-all duration-300 relative group px-2 py-1"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-500 to-primary-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-primary-700 hover:text-accent-600 transition-all duration-300 hover:bg-accent-50 rounded-lg"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary-200 animate-fade-in bg-white/95 backdrop-blur-md rounded-b-lg">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-primary-700 hover:text-accent-600 font-medium transition-all duration-300 px-4 py-3 hover:bg-accent-50 rounded-lg"
              >
                Home
              </Link>
              
              <div className="px-4">
                <div className="text-primary-500 text-sm font-medium mb-2">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-primary-700 hover:text-accent-600 font-medium transition-all duration-300 py-2 pl-4 hover:bg-accent-50 rounded-lg"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-primary-700 hover:text-accent-600 font-medium transition-all duration-300 px-4 py-3 hover:bg-accent-50 rounded-lg"
              >
                About
              </Link>

              <button
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
                className="text-left text-primary-700 hover:text-accent-600 font-medium transition-all duration-300 px-4 py-3 hover:bg-accent-50 rounded-lg"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;