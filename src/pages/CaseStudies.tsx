import React from 'react';
import { FileText, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import ContactCTA from '../components/ContactCTA';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: "Global Tech Company Digital Transformation",
      category: "Technology Consulting",
      client: "Fortune 500 Tech Company",
      challenge: "Legacy systems hindering growth and innovation",
      solution: "Comprehensive digital transformation strategy with cloud migration and process automation",
      results: ["300% increase in operational efficiency", "50% reduction in IT costs", "Improved scalability for global expansion"],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Healthcare Startup Legal Compliance Framework",
      category: "Legal Advisory",
      client: "Healthcare Technology Startup",
      challenge: "Complex regulatory compliance across multiple jurisdictions",
      solution: "Developed comprehensive compliance framework and regulatory strategy",
      results: ["100% regulatory compliance achieved", "Successful FDA approval", "Expanded to 15 new markets"],
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "University Research Excellence Program",
      category: "Academic Support",
      client: "Top-Tier Research University",
      challenge: "Declining research output and publication rates",
      solution: "Implemented research excellence program with mentorship and publication support",
      results: ["200% increase in publications", "Secured $50M in research grants", "Improved university rankings"],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Manufacturing Company Strategic Turnaround",
      category: "Business Strategy",
      client: "Mid-Size Manufacturing Company",
      challenge: "Declining market share and profitability",
      solution: "Comprehensive business strategy overhaul with market repositioning",
      results: ["400% increase in profitability", "Expanded market share by 150%", "Successful acquisition by industry leader"],
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Completed", icon: FileText },
    { value: "98%", label: "Success Rate", icon: Award },
    { value: "150+", label: "Happy Clients", icon: Users },
    { value: "300%", label: "Average ROI", icon: TrendingUp }
  ];

  return (
    <div className="pt-20">
      <PageHero
        icon={FileText}
        title="Case Studies"
        subtitle="Explore our success stories and see how we've helped clients achieve remarkable results across various industries."
        backgroundGradient="from-slate-600 to-slate-800"
      />

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-slate-500 to-slate-600 p-6 rounded-2xl mb-4 mx-auto w-fit">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary-900 mb-2">{stat.value}</div>
                <div className="text-primary-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">Success Stories</h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Real results from real clients. See how our expertise has transformed businesses and organizations.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className={`bg-white rounded-3xl shadow-xl overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex`}>
                <div className="lg:w-1/2">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${study.color} mb-4`}>
                    {study.category}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">{study.title}</h3>
                  <p className="text-primary-600 mb-6">{study.client}</p>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-2">Challenge</h4>
                      <p className="text-primary-700">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-2">Solution</h4>
                      <p className="text-primary-700">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-2">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-primary-700">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${study.color} mr-3`}></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <button className={`group flex items-center space-x-2 text-white px-6 py-3 rounded-xl font-semibold bg-gradient-to-r ${study.color} hover:shadow-lg transition-all duration-300`}>
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA 
        title="Ready to Create Your Success Story?"
        description="Let's discuss how we can help you achieve similar remarkable results for your organization."
      />
    </div>
  );
};

export default CaseStudies;