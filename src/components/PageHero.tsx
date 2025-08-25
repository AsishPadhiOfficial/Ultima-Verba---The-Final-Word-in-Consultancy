import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface PageHeroProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  backgroundGradient: string;
}

const PageHero: React.FC<PageHeroProps> = ({ icon: Icon, title, subtitle, backgroundGradient }) => {
  return (
    <section className={`py-20 sm:py-24 lg:py-32 bg-gradient-to-br ${backgroundGradient} text-white relative overflow-hidden`}>
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-2xl w-fit mx-auto mb-6 sm:mb-8">
            <Icon className="h-8 w-8 sm:h-12 sm:w-12" />
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-4">
            {title}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto px-4">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;