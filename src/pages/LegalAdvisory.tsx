import React from 'react';
import { Scale, Shield, FileText, Gavel, AlertTriangle, BookOpen } from 'lucide-react';
import PageHero from '../components/PageHero';
import ServiceContactForm from '../components/ServiceContactForm';

const LegalAdvisory: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Legal Compliance',
      description: 'Ensure your business operations comply with all relevant laws and regulations.',
      features: ['Regulatory Assessment', 'Compliance Audits', 'Policy Development', 'Training Programs']
    },
    {
      icon: FileText,
      title: 'Contract Review',
      description: 'Comprehensive contract analysis and negotiation support.',
      features: ['Contract Drafting', 'Terms Negotiation', 'Risk Assessment', 'Legal Documentation']
    },
    {
      icon: AlertTriangle,
      title: 'Risk Management',
      description: 'Identify and mitigate legal risks before they become problems.',
      features: ['Risk Assessment', 'Mitigation Strategies', 'Crisis Management', 'Legal Insurance']
    },
    {
      icon: Gavel,
      title: 'Dispute Resolution',
      description: 'Expert guidance through legal disputes and conflict resolution.',
      features: ['Mediation Support', 'Arbitration', 'Litigation Strategy', 'Settlement Negotiation']
    }
  ];

  const expertise = [
    'Corporate Law',
    'Employment Law',
    'Intellectual Property',
    'Data Protection & Privacy',
    'Commercial Contracts',
    'Regulatory Compliance',
    'International Trade',
    'Mergers & Acquisitions'
  ];

  return (
    <div className="pt-20">
      <PageHero
        icon={Scale}
        title="Legal Advisory Services"
        subtitle="Navigate complex legal landscapes with confidence through our expert legal consultation and advisory services."
        backgroundGradient="from-emerald-600 to-emerald-800"
      />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">Comprehensive Legal Solutions</h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              From compliance to complex legal matters, we provide expert guidance every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4">{service.title}</h3>
                <p className="text-primary-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-primary-700">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">Areas of Expertise</h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Our legal experts cover a wide range of practice areas to meet your diverse needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {expertise.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                <BookOpen className="h-8 w-8 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold text-primary-900">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceContactForm 
        serviceName="Legal Advisory"
        serviceColor="from-emerald-600 to-emerald-800"
      />
    </div>
  );
};

export default LegalAdvisory;