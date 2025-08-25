import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Target, TrendingUp, Globe, Clock } from 'lucide-react';

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    experience: 0,
    countries: 0,
    response: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalCounts = {
    projects: 500,
    clients: 150,
    satisfaction: 98,
    experience: 15,
    countries: 25,
    response: 24
  };

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

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounts({
          projects: Math.floor(finalCounts.projects * progress),
          clients: Math.floor(finalCounts.clients * progress),
          satisfaction: Math.floor(finalCounts.satisfaction * progress),
          experience: Math.floor(finalCounts.experience * progress),
          countries: Math.floor(finalCounts.countries * progress),
          response: Math.floor(finalCounts.response * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounts(finalCounts);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stats = [
    { 
      icon: Award, 
      value: `${counts.projects}+`, 
      label: 'Successful Projects',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      icon: Users, 
      value: `${counts.clients}+`, 
      label: 'Happy Clients',
      color: 'from-emerald-500 to-emerald-600'
    },
    { 
      icon: Target, 
      value: `${counts.satisfaction}%`, 
      label: 'Client Satisfaction',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      icon: TrendingUp, 
      value: `${counts.experience}+`, 
      label: 'Years Experience',
      color: 'from-orange-500 to-orange-600'
    },
    { 
      icon: Globe, 
      value: `${counts.countries}+`, 
      label: 'Countries Served',
      color: 'from-pink-500 to-pink-600'
    },
    { 
      icon: Clock, 
      value: `${counts.response}h`, 
      label: 'Response Time',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-6">Our Impact in Numbers</h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            These numbers represent our commitment to excellence and the trust our clients place in us.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center group transform transition-all duration-500 hover:scale-105 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-r ${stat.color} p-6 rounded-2xl mb-4 group-hover:shadow-xl transition-all duration-300`}>
                <stat.icon className="h-8 w-8 text-white mx-auto" />
              </div>
              <div className="text-3xl font-bold text-primary-900 mb-2">{stat.value}</div>
              <div className="text-sm text-primary-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;