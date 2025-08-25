import React from 'react';
import { Briefcase, TrendingUp, Target, BarChart3, Users, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import ServiceContactForm from '../components/ServiceContactForm';

const BusinessStrategy: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Comprehensive strategic planning that aligns with your vision and market opportunities.'
    },
    {
      icon: BarChart3,
      title: 'Market Analysis',
      description: 'Deep market research and competitive analysis to identify growth opportunities.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Data-driven strategies to accelerate growth and maximize ROI.'
    },
    {
      icon: Users,
      title: 'Organizational Development',
      description: 'Building high-performance teams and optimizing organizational structure.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Strategy',
      description: 'Fostering innovation culture and implementing breakthrough solutions.'
    },
    {
      icon: BarChart3,
      title: 'Performance Metrics',
      description: 'Establishing KPIs and measurement frameworks for continuous improvement.'
    }
  ];

  const process = [
    { step: '01', title: 'Discovery & Assessment', description: 'Comprehensive analysis of your current business state and challenges.' },
    { step: '02', title: 'Strategy Development', description: 'Crafting tailored strategies based on insights and market opportunities.' },
    { step: '03', title: 'Implementation Planning', description: 'Detailed roadmap with timelines, resources, and success metrics.' },
    { step: '04', title: 'Execution Support', description: 'Ongoing guidance and support throughout the implementation phase.' },
    { step: '05', title: 'Monitoring & Optimization', description: 'Continuous monitoring and optimization for sustained success.' }
  ];

  return (
    <div className="pt-20">
      <PageHero
        icon={Briefcase}
        title="Business Strategy Consulting"
        subtitle="Transform your vision into actionable strategies that drive sustainable growth and competitive advantage."
        backgroundGradient="from-blue-600 to-blue-800"
      />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">Our Strategic Approach</h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              We combine deep industry expertise with innovative methodologies to deliver strategies that work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4">{feature.title}</h3>
                <p className="text-primary-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">Our Proven Process</h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              A systematic approach that ensures successful strategy development and implementation.
            </p>
          </div>

          <div className="space-y-8">
            {process.map((item, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">{item.title}</h3>
                  <p className="text-primary-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceContactForm 
        serviceName="Business Strategy"
        serviceColor="from-blue-600 to-blue-800"
      />
    </div>
  );
};

export default BusinessStrategy;