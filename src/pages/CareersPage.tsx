import React from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Users, Award, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import ContactCTA from '../components/ContactCTA';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: "Senior Business Strategy Consultant",
      department: "Business Strategy",
      location: "New York, NY",
      type: "Full-time",
      salary: "$120,000 - $180,000",
      description: "Lead strategic consulting projects for Fortune 500 clients, developing comprehensive business strategies and transformation roadmaps.",
      requirements: ["MBA from top-tier university", "5+ years consulting experience", "Strong analytical skills", "Client management experience"],
      benefits: ["Competitive salary", "Performance bonuses", "Health insurance", "Professional development"]
    },
    {
      title: "Legal Advisory Specialist",
      department: "Legal Advisory",
      location: "Washington, DC",
      type: "Full-time",
      salary: "$100,000 - $150,000",
      description: "Provide expert legal guidance to clients on regulatory compliance, contract negotiations, and risk management.",
      requirements: ["JD from accredited law school", "Bar admission", "3+ years legal experience", "Corporate law expertise"],
      benefits: ["Competitive salary", "Continuing education", "Health benefits", "Flexible schedule"]
    },
    {
      title: "Academic Research Consultant",
      department: "Academic Support",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$80,000 - $120,000",
      description: "Support academic clients with research methodology, publication strategies, and grant writing assistance.",
      requirements: ["PhD in relevant field", "Research experience", "Publication record", "Grant writing experience"],
      benefits: ["Research stipend", "Conference attendance", "Publication support", "Academic partnerships"]
    },
    {
      title: "Technology Solutions Architect",
      department: "Technology Consulting",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$130,000 - $200,000",
      description: "Design and implement technology solutions for digital transformation initiatives and system modernization projects.",
      requirements: ["Computer Science degree", "Cloud architecture experience", "5+ years tech consulting", "Leadership skills"],
      benefits: ["Stock options", "Tech allowance", "Remote work options", "Innovation time"]
    },
    {
      title: "Junior Consultant",
      department: "Multiple Departments",
      location: "Multiple Locations",
      type: "Full-time",
      salary: "$70,000 - $90,000",
      description: "Entry-level position supporting senior consultants across various practice areas and client engagements.",
      requirements: ["Bachelor's degree", "Strong analytical skills", "Excellent communication", "Willingness to travel"],
      benefits: ["Mentorship program", "Training opportunities", "Career development", "Travel opportunities"]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Professional Development",
      description: "Continuous learning opportunities, certifications, and skill development programs."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with brilliant minds in a supportive, team-oriented environment."
    },
    {
      icon: Briefcase,
      title: "Diverse Projects",
      description: "Engage with challenging projects across multiple industries and domains."
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Industry-leading salaries, performance bonuses, and comprehensive benefits."
    }
  ];

  return (
    <div className="pt-20">
      <PageHero
        icon={Briefcase}
        title="Join Our Team"
        subtitle="Build your career with Ultima Verba. Join a team of exceptional professionals making a real impact across industries."
        backgroundGradient="from-violet-600 to-violet-800"
      />

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">Why Choose Ultima Verba?</h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              We offer more than just a job – we provide a platform for professional growth and meaningful impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-violet-500 to-violet-600 p-6 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto w-fit">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4">{benefit.title}</h3>
                <p className="text-primary-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">Open Positions</h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Explore our current openings and find the perfect role to advance your career.
            </p>
          </div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-primary-600 mb-4">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-2" />
                          {position.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-2" />
                          {position.salary}
                        </div>
                      </div>
                    </div>
                    
                    <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center space-x-2 mt-4 lg:mt-0">
                      <span>Apply Now</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <p className="text-primary-700 mb-6">{position.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center text-primary-700">
                            <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-primary-700">
                            <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">Application Process</h2>
            <p className="text-xl text-primary-600">
              Our streamlined application process is designed to identify the best talent efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Apply Online", description: "Submit your application and resume through our portal." },
              { step: "02", title: "Initial Review", description: "Our team reviews your qualifications and experience." },
              { step: "03", title: "Interview Process", description: "Multiple rounds including technical and cultural fit assessments." },
              { step: "04", title: "Final Decision", description: "We'll make our decision and extend an offer to successful candidates." }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{step.title}</h3>
                <p className="text-primary-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA 
        title="Don't See the Right Role?"
        description="We're always interested in connecting with exceptional talent. Send us your resume and let's explore opportunities."
      />
    </div>
  );
};

export default CareersPage;