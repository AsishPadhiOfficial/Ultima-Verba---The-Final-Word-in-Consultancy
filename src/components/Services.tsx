import React, { useEffect, useRef, useState } from 'react';
import { 
  Briefcase, 
  Scale, 
  GraduationCap, 
  Laptop, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  const services = [
    {
      icon: Briefcase,
      title: 'Business Strategy',
      description: 'Transform your vision into actionable strategies with our comprehensive business consulting services.',
      features: ['Strategic Planning', 'Market Analysis', 'Growth Optimization', 'Performance Metrics'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      rating: 4.9,
      projects: '150+',
      path: '/services/business-strategy'
    },
    {
      icon: Scale,
      title: 'Legal Advisory',
      description: 'Navigate complex legal landscapes with confidence through our expert legal consultation services.',
      features: ['Legal Compliance', 'Contract Review', 'Risk Assessment', 'Regulatory Guidance'],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100',
      rating: 4.8,
      projects: '200+',
      path: '/services/legal-advisory'
    },
    {
      icon: GraduationCap,
      title: 'Academic Support',
      description: 'Achieve academic excellence with our specialized educational consulting and research support.',
      features: ['Research Guidance', 'Academic Writing', 'Thesis Support', 'Publication Assistance'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      rating: 4.9,
      projects: '300+',
      path: '/services/academic-support'
    },
    {
      icon: Laptop,
      title: 'Tech Consulting',
      description: 'Leverage cutting-edge technology solutions to drive innovation and operational efficiency.',
      features: ['Digital Transformation', 'System Integration', 'Tech Strategy', 'Innovation Labs'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      rating: 4.7,
      projects: '100+',
      path: '/services/tech-consulting'
    }
  ];

  const handleLearnMore = (servicePath: string, serviceTitle: string) => {
    // Google Analytics Event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'service_learn_more', {
        event_category: 'navigation',
        event_label: serviceTitle.toLowerCase().replace(' ', '_')
      });
    }
    navigate(servicePath);
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden" ref={sectionRef}>
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-accent-300 to-primary-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-primary-300 to-accent-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 bg-accent-100/80 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-accent-600" />
                <span className="text-xs sm:text-sm font-medium text-accent-700">Premium Services</span>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-900 mb-4 sm:mb-6 px-4">
              Our Premium Services
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-base sm:text-lg lg:text-xl text-primary-600 max-w-3xl mx-auto px-4">
              Comprehensive consultancy solutions tailored to your unique challenges and objectives
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-primary-100 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Top Bar */}
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                
                {/* Hover Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative p-6 sm:p-8">
                  {/* Service Icon */}
                  <div className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  
                  {/* Rating and Projects */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                      <span className="text-xs sm:text-sm font-semibold text-primary-700">{service.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-primary-600">
                      <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm font-medium">{service.projects}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-900 mb-3 sm:mb-4 group-hover:text-accent-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-primary-600 mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-primary-700">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-accent-500 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => handleLearnMore(service.path, service.title)}
                    className="group/btn w-full bg-primary-800 hover:bg-primary-900 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg relative overflow-hidden"
                  >
                    {/* Button Ripple Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-600/20 to-primary-600/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    
                    <span className="relative z-10">Learn More</span>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
                  </button>
                </div>

                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }}></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-primary-100 max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-primary-900 mb-3 sm:mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-sm sm:text-base text-primary-600 mb-4 sm:mb-6">
                Let's discuss how we can help you achieve your goals with our premium consultancy services.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Start Your Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;