import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Target, TrendingUp } from 'lucide-react';

const AboutUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Award, value: '500+', label: 'Successful Projects' },
    { icon: Users, value: '50+', label: 'Expert Consultants' },
    { icon: Target, value: '98%', label: 'Client Satisfaction' },
    { icon: TrendingUp, value: '15+', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-900 mb-6">
              About Ultima Verba
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-primary-700 leading-relaxed">
                At Ultima Verba, we believe that every challenge deserves the definitive solution. 
                As a premier consultancy firm, we specialize in delivering strategic insights and 
                innovative solutions across multiple domains, ensuring that our clients always have 
                the final word in their success stories.
              </p>
              
              <p className="text-lg text-primary-700 leading-relaxed">
                Our team of seasoned experts combines deep industry knowledge with cutting-edge 
                methodologies to tackle complex business challenges. From strategic planning to 
                operational excellence, we provide comprehensive consultancy services that drive 
                measurable results and sustainable growth.
              </p>

              <p className="text-lg text-primary-700 leading-relaxed">
                Whether you're navigating legal complexities, optimizing business processes, 
                pursuing academic excellence, or implementing technological solutions, Ultima Verba 
                stands as your trusted partner in achieving excellence.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-primary-50 to-accent-50 p-6 rounded-2xl text-center transform transition-all duration-500 hover:scale-105 hover:shadow-lg ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="h-8 w-8 text-accent-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-primary-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;