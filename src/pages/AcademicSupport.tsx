import React from 'react';
import { GraduationCap, BookOpen, PenTool, Award, Users, Lightbulb } from 'lucide-react';
import PageHero from '../components/PageHero';
import ServiceContactForm from '../components/ServiceContactForm';

const AcademicSupport: React.FC = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Research Guidance',
      description: 'Expert guidance through every stage of your research journey.',
      details: ['Research Methodology', 'Literature Review', 'Data Analysis', 'Research Design']
    },
    {
      icon: PenTool,
      title: 'Academic Writing',
      description: 'Professional writing support for academic excellence.',
      details: ['Essay Writing', 'Report Writing', 'Academic Papers', 'Editing & Proofreading']
    },
    {
      icon: Award,
      title: 'Thesis Support',
      description: 'Comprehensive support for thesis and dissertation projects.',
      details: ['Proposal Development', 'Chapter Writing', 'Defense Preparation', 'Final Review']
    },
    {
      icon: Lightbulb,
      title: 'Publication Assistance',
      description: 'Help getting your research published in top journals.',
      details: ['Journal Selection', 'Manuscript Preparation', 'Peer Review Process', 'Publication Strategy']
    }
  ];

  const levels = [
    { level: 'Undergraduate', description: 'Support for bachelor\'s degree students', color: 'from-purple-400 to-purple-500' },
    { level: 'Graduate', description: 'Master\'s level academic assistance', color: 'from-purple-500 to-purple-600' },
    { level: 'Doctoral', description: 'PhD and doctoral research support', color: 'from-purple-600 to-purple-700' },
    { level: 'Professional', description: 'Continuing education and certification', color: 'from-purple-700 to-purple-800' }
  ];

  return (
    <div className="pt-20">
      <PageHero
        icon={GraduationCap}
        title="Academic Support Services"
        subtitle="Achieve academic excellence with our specialized educational consulting and comprehensive research support."
        backgroundGradient="from-purple-600 to-purple-800"
      />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">Comprehensive Academic Solutions</h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              From research design to publication, we support your entire academic journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4">{service.title}</h3>
                <p className="text-primary-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-primary-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Levels */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">All Academic Levels</h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              We provide tailored support for students at every stage of their academic journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((item, index) => (
              <div key={index} className="group text-center">
                <div className={`bg-gradient-to-r ${item.color} p-8 rounded-2xl text-white mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  <Users className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">{item.level}</h3>
                </div>
                <p className="text-primary-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceContactForm 
        serviceName="Academic Support"
        serviceColor="from-purple-600 to-purple-800"
      />
    </div>
  );
};

export default AcademicSupport;