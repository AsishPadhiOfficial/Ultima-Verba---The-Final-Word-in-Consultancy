import React from 'react';
import { Crown, Target, Eye, Heart, Award, Users, Globe, Lightbulb } from 'lucide-react';
import PageHero from '../components/PageHero';
import ContactCTA from '../components/ContactCTA';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards and complete transparency.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace innovative approaches to solve complex challenges and drive progress.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of collaboration and building strong partnerships with our clients.'
    }
  ];

  const milestones = [
    { year: '2008', event: 'Founded Ultima Verba with a vision to provide premium consultancy services' },
    { year: '2012', event: 'Expanded to legal advisory services, serving Fortune 500 companies' },
    { year: '2016', event: 'Launched academic support division, partnering with top universities' },
    { year: '2020', event: 'Added technology consulting, helping businesses with digital transformation' },
    { year: '2024', event: 'Reached 500+ successful projects across 25+ countries' }
  ];

  return (
    <div className="pt-20">
      <PageHero
        icon={Crown}
        title="About Ultima Verba"
        subtitle="The story behind our commitment to delivering the final word in consultancy excellence."
        backgroundGradient="from-primary-600 to-primary-800"
      />

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">Our Story</h2>
          </div>

          <div className="prose prose-lg mx-auto text-primary-700">
            <p className="text-xl leading-relaxed mb-8">
              Founded in 2008, Ultima Verba emerged from a simple yet powerful belief: every challenge deserves 
              the definitive solution. Our name, meaning "the final word" in Latin, reflects our commitment to 
              providing conclusive, effective solutions that stand the test of time.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              What started as a boutique business consultancy has evolved into a comprehensive advisory firm 
              spanning multiple domains. Our growth has been driven not by ambition alone, but by our clients' 
              trust and the measurable impact of our work.
            </p>

            <p className="text-lg leading-relaxed">
              Today, we serve clients across the globe, from startups to Fortune 500 companies, from individual 
              researchers to prestigious academic institutions. Our multidisciplinary approach ensures that we 
              can address complex challenges that span traditional boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Target className="h-12 w-12 text-accent-500 mb-6" />
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Our Mission</h3>
              <p className="text-primary-700 leading-relaxed">
                To empower individuals and organizations with strategic insights and innovative solutions 
                that drive sustainable success. We are committed to being the definitive partner in our 
                clients' journey toward excellence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Eye className="h-12 w-12 text-accent-500 mb-6" />
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Our Vision</h3>
              <p className="text-primary-700 leading-relaxed">
                To be recognized globally as the premier consultancy firm that consistently delivers 
                transformative solutions across diverse domains, setting new standards for excellence 
                and innovation in the consulting industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              These values guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-accent-500 to-accent-600 p-6 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto w-fit">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4">{value.title}</h3>
                <p className="text-primary-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">Our Journey</h2>
            <p className="text-xl text-primary-600">
              Key milestones that have shaped our growth and success.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
                  <p className="text-primary-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA 
        title="Ready to Work with Us?"
        description="Join the hundreds of satisfied clients who have made Ultima Verba their trusted partner."
      />
    </div>
  );
};

export default AboutPage;