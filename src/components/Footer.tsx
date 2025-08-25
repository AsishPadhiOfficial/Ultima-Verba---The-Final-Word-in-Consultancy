import React from 'react';
import { Crown, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const services = [
    { name: 'Business Strategy', path: '/services/business-strategy' },
    { name: 'Legal Advisory', path: '/services/legal-advisory' },
    { name: 'Academic Support', path: '/services/academic-support' },
    { name: 'Tech Consulting', path: '/services/tech-consulting' }
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' }
  ];

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <Crown className="h-8 w-8 text-accent-500 group-hover:text-accent-400 transition-colors" />
              <div>
                <h3 className="text-2xl font-bold group-hover:text-accent-400 transition-colors">Ultima Verba</h3>
                <p className="text-sm text-primary-300">The Final Word in Consultancy</p>
              </div>
            </Link>
            <p className="text-primary-300 leading-relaxed mb-6">
              Your trusted partner for strategic solutions across business, legal, academic, and technology domains.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-400 hover:text-accent-500 transition-colors p-2 hover:bg-primary-800 rounded-lg">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-400 hover:text-accent-500 transition-colors p-2 hover:bg-primary-800 rounded-lg">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-400 hover:text-accent-500 transition-colors p-2 hover:bg-primary-800 rounded-lg">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent-400">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path} 
                    className="text-primary-300 hover:text-white transition-colors hover:translate-x-1 transform duration-300 block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-primary-300 hover:text-white transition-colors hover:translate-x-1 transform duration-300 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-accent-500 mt-0.5 flex-shrink-0 group-hover:text-accent-400 transition-colors" />
                <span className="text-primary-300 group-hover:text-white transition-colors">
                  123 Excellence Avenue<br />
                  Business District, NY 10001
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-accent-500 flex-shrink-0 group-hover:text-accent-400 transition-colors" />
                <span className="text-primary-300 group-hover:text-white transition-colors">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-accent-500 flex-shrink-0 group-hover:text-accent-400 transition-colors" />
                <span className="text-primary-300 group-hover:text-white transition-colors">hello@ultimaverba.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-400 text-sm">
              © {new Date().getFullYear()} Ultima Verba Consultancy. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;