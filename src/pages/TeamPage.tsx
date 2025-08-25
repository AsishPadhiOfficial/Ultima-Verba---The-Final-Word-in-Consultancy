import React from 'react';
import { Users, Linkedin, Mail, Award } from 'lucide-react';
import PageHero from '../components/PageHero';
import ContactCTA from '../components/ContactCTA';

const TeamPage: React.FC = () => {
  const team = [
    {
      name: "Dr. Alexandra Sterling",
      role: "Founder & CEO",
      expertise: "Strategic Leadership",
      bio: "With over 20 years of experience in management consulting, Dr. Sterling founded Ultima Verba with a vision to redefine consultancy excellence.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      achievements: ["Harvard MBA", "Former McKinsey Partner", "Published Author"]
    },
    {
      name: "Marcus Chen",
      role: "Head of Business Strategy",
      expertise: "Business Transformation",
      bio: "Marcus brings deep expertise in business transformation and has helped over 100 companies achieve sustainable growth.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      achievements: ["Wharton MBA", "Fortune 500 Advisor", "Growth Expert"]
    },
    {
      name: "Sarah Williams",
      role: "Chief Legal Counsel",
      expertise: "Corporate Law",
      bio: "Sarah leads our legal advisory division with expertise in corporate law, compliance, and regulatory affairs.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      achievements: ["Yale Law JD", "Bar Certified", "Legal Innovation Award"]
    },
    {
      name: "Dr. James Rodriguez",
      role: "Director of Academic Services",
      expertise: "Research & Academia",
      bio: "Dr. Rodriguez oversees our academic support services, helping researchers and institutions achieve their scholarly goals.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      achievements: ["PhD Stanford", "100+ Publications", "Research Excellence Award"]
    },
    {
      name: "Emily Park",
      role: "Head of Technology",
      expertise: "Digital Innovation",
      bio: "Emily leads our technology consulting practice, specializing in digital transformation and emerging technologies.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      achievements: ["MIT Graduate", "Tech Innovation Leader", "Cloud Architecture Expert"]
    },
    {
      name: "David Thompson",
      role: "Senior Partner",
      expertise: "Operations Excellence",
      bio: "David focuses on operational excellence and process optimization, helping organizations achieve peak performance.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      achievements: ["Operations Expert", "Lean Six Sigma Master", "Process Innovation"]
    }
  ];

  return (
    <div className="pt-20">
      <PageHero
        icon={Users}
        title="Our Expert Team"
        subtitle="Meet the brilliant minds behind Ultima Verba's success. Our diverse team of experts brings decades of combined experience."
        backgroundGradient="from-indigo-600 to-indigo-800"
      />

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Our leadership team combines deep expertise with a passion for delivering exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-primary-100">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">{member.name}</h3>
                  <p className="text-accent-600 font-semibold mb-1">{member.role}</p>
                  <p className="text-primary-500 text-sm mb-4">{member.expertise}</p>
                  <p className="text-primary-700 text-sm mb-6 leading-relaxed">{member.bio}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary-900 mb-2">Key Achievements</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.achievements.map((achievement, idx) => (
                        <span key={idx} className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="p-2 bg-primary-100 hover:bg-primary-200 rounded-lg transition-colors">
                      <Linkedin className="h-4 w-4 text-primary-600" />
                    </button>
                    <button className="p-2 bg-primary-100 hover:bg-primary-200 rounded-lg transition-colors">
                      <Mail className="h-4 w-4 text-primary-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-900 mb-6">Our Culture</h2>
          <p className="text-xl text-primary-600 mb-12">
            We foster a culture of excellence, innovation, and continuous learning where every team member can thrive.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Award className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-primary-900 mb-2">Excellence</h3>
              <p className="text-primary-600 text-sm">We set high standards and consistently deliver exceptional results.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Users className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-primary-900 mb-2">Collaboration</h3>
              <p className="text-primary-600 text-sm">We believe in the power of teamwork and collective intelligence.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Award className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-primary-900 mb-2">Innovation</h3>
              <p className="text-primary-600 text-sm">We embrace new ideas and cutting-edge approaches to problem-solving.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA 
        title="Want to Join Our Team?"
        description="We're always looking for exceptional talent to join our growing team of experts."
      />
    </div>
  );
};

export default TeamPage;