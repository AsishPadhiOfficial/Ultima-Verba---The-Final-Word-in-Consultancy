import React from 'react';
import { BookOpen, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import PageHero from '../components/PageHero';
import ContactCTA from '../components/ContactCTA';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: "The Future of Business Strategy in a Digital World",
      excerpt: "Explore how digital transformation is reshaping traditional business strategy and what leaders need to know to stay competitive.",
      author: "Dr. Alexandra Sterling",
      date: "March 15, 2024",
      category: "Business Strategy",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tags: ["Strategy", "Digital Transformation", "Leadership"]
    },
    {
      title: "Navigating Complex Legal Landscapes in Global Business",
      excerpt: "Understanding the intricacies of international law and compliance requirements for businesses operating across borders.",
      author: "Sarah Williams",
      date: "March 10, 2024",
      category: "Legal Advisory",
      readTime: "12 min read",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tags: ["Legal", "Compliance", "International Business"]
    },
    {
      title: "Research Excellence: Best Practices for Academic Success",
      excerpt: "Key strategies and methodologies that leading researchers use to produce high-impact academic work and publications.",
      author: "Dr. James Rodriguez",
      date: "March 5, 2024",
      category: "Academic Support",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tags: ["Research", "Academia", "Publishing"]
    },
    {
      title: "Emerging Technologies Reshaping Industries",
      excerpt: "An in-depth look at AI, blockchain, and IoT technologies and their transformative impact on various industries.",
      author: "Emily Park",
      date: "February 28, 2024",
      category: "Technology",
      readTime: "15 min read",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tags: ["Technology", "AI", "Innovation"]
    },
    {
      title: "Building Resilient Organizations in Uncertain Times",
      excerpt: "Strategies for creating organizational resilience and adaptability in an increasingly volatile business environment.",
      author: "Marcus Chen",
      date: "February 20, 2024",
      category: "Business Strategy",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tags: ["Resilience", "Change Management", "Strategy"]
    },
    {
      title: "The Evolution of Legal Tech and Its Impact on Practice",
      excerpt: "How technology is transforming legal practice and what legal professionals need to know about the digital revolution.",
      author: "Sarah Williams",
      date: "February 15, 2024",
      category: "Legal Advisory",
      readTime: "11 min read",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tags: ["Legal Tech", "Innovation", "Practice Management"]
    }
  ];

  const categories = ["All", "Business Strategy", "Legal Advisory", "Academic Support", "Technology"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="pt-20">
      <PageHero
        icon={BookOpen}
        title="Insights & Expertise"
        subtitle="Stay informed with the latest insights, trends, and expert perspectives from our team of consultancy professionals."
        backgroundGradient="from-teal-600 to-teal-800"
      />

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-primary-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-primary-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-primary-500 mb-4">
                    <User className="h-4 w-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="flex items-center text-xs bg-primary-100 text-primary-600 px-2 py-1 rounded-full">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="group/btn flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-900 mb-6">Stay Updated</h2>
          <p className="text-xl text-primary-600 mb-8">
            Subscribe to our newsletter and never miss our latest insights and expert analysis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
            />
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <ContactCTA 
        title="Have a Topic You'd Like Us to Cover?"
        description="We're always looking for new topics to explore. Share your suggestions or questions with us."
      />
    </div>
  );
};

export default BlogPage;