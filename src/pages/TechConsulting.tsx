import React from 'react';
import { Laptop, Code, Cloud, Shield, Zap, Cpu } from 'lucide-react';
import PageHero from '../components/PageHero';
import ServiceContactForm from '../components/ServiceContactForm';

const TechConsulting: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Digital Transformation',
      description: 'Modernize your business with cutting-edge digital solutions.',
      technologies: ['Cloud Migration', 'API Integration', 'Automation', 'Digital Workflows']
    },
    {
      icon: Code,
      title: 'System Integration',
      description: 'Seamlessly connect your systems and applications.',
      technologies: ['Enterprise Integration', 'Data Synchronization', 'Legacy Modernization', 'Microservices']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with robust security measures.',
      technologies: ['Security Audits', 'Threat Assessment', 'Compliance', 'Incident Response']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Enhance system performance and user experience.',
      technologies: ['Performance Tuning', 'Scalability', 'Load Balancing', 'Monitoring']
    }
  ];

  const technologies = [
    { name: 'Cloud Platforms', icon: Cloud, items: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes'] },
    { name: 'Development', icon: Code, items: ['React', 'Node.js', 'Python', 'Java'] },
    { name: 'Databases', icon: Cpu, items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
    { name: 'DevOps', icon: Zap, items: ['Docker', 'CI/CD', 'Terraform', 'Monitoring'] }
  ];

  return (
    <div className="pt-20">
      <PageHero
        icon={Laptop}
        title="Technology Consulting"
        subtitle="Leverage cutting-edge technology solutions to drive innovation and operational efficiency in your organization."
        backgroundGradient="from-orange-600 to-orange-800"
      />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">Technology Solutions</h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              From digital transformation to system optimization, we deliver technology solutions that drive results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4">{service.title}</h3>
                <p className="text-primary-600 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">Our Technology Stack</h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              We work with the latest technologies and frameworks to deliver cutting-edge solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-xl w-fit mb-4">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-4">{category.name}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-primary-600 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceContactForm 
        serviceName="Tech Consulting"
        serviceColor="from-orange-600 to-orange-800"
      />
    </div>
  );
};

export default TechConsulting;