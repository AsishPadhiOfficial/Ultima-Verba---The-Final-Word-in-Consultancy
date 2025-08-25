import React, { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle, AlertCircle, User, Mail, MessageSquare, Briefcase, Sparkles } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';
import NotificationToast from './NotificationToast';

interface FormData {
  name: string;
  email: string;
  consultancyType: string;
  subject: string;
  problem: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    consultancyType: '',
    subject: '',
    problem: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error' | 'info'>('info');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const consultancyTypes = [
    'Business Strategy',
    'Legal Advisory', 
    'Academic Support',
    'Tech Consulting',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear any previous error when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const newRipple = {
      id: Date.now(),
      x,
      y
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  };

  const showNotification = (type: 'success' | 'error' | 'info', message: string) => {
    setToastType(type);
    setToastMessage(message);
    setShowToast(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.consultancyType || 
        !formData.subject.trim() || !formData.problem.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all required fields.');
      setIsSubmitting(false);
      showNotification('error', 'Please fill in all required fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setErrorMessage('Please enter a valid email address.');
      setIsSubmitting(false);
      showNotification('error', 'Please enter a valid email address.');
      return;
    }

    // Google Analytics Event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'form_submit', {
        event_category: 'engagement',
        event_label: 'consultation_request'
      });
    }

    try {
      console.log('Submitting form data:', formData);
      
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      const result = await response.json();
      console.log('Response data:', result);

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          consultancyType: '',
          subject: '',
          problem: ''
        });
        
        showNotification('success', 'Thank you! We\'ll be in touch within 24 hours. Check your email for confirmation.');
        
        // Google Analytics Success Event
        if (typeof gtag !== 'undefined') {
          gtag('event', 'form_submit_success', {
            event_category: 'engagement',
            event_label: 'consultation_request_success'
          });
        }
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      const errorMsg = error instanceof Error ? error.message : 'Network error. Please check if the server is running and try again.';
      setErrorMessage(errorMsg);
      showNotification('error', errorMsg);
      
      // Google Analytics Error Event
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit_error', {
          event_category: 'engagement',
          event_label: 'consultation_request_error'
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-3 sm:px-4 py-2 sm:py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-300 bg-white hover:border-primary-300 focus:outline-none text-primary-900";
  const labelClasses = "block text-sm font-semibold text-primary-700 mb-2";

  return (
    <>
      {isSubmitting && <LoadingSpinner />}
      
      <NotificationToast
        type={toastType}
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />

      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-primary-50 to-accent-50 relative overflow-hidden" ref={sectionRef}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-accent-200 to-primary-200 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-primary-200 to-accent-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 bg-accent-100/80 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm">
                  <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-accent-600 animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-accent-700">Premium Consultation</span>
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-900 mb-4 sm:mb-6 px-4">
                Start Your Consultation
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
              <p className="text-base sm:text-lg lg:text-xl text-primary-600 max-w-2xl mx-auto px-4">
                Share your challenge with us, and let's craft the perfect solution together
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-primary-100 hover:shadow-3xl transition-all duration-500">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      <User className="inline h-4 w-4 mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={inputClasses}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      <Mail className="inline h-4 w-4 mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={inputClasses}
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="consultancyType" className={labelClasses}>
                    <Briefcase className="inline h-4 w-4 mr-2" />
                    Type of Consultancy
                  </label>
                  <select
                    id="consultancyType"
                    name="consultancyType"
                    value={formData.consultancyType}
                    onChange={handleInputChange}
                    required
                    className={inputClasses}
                  >
                    <option value="">Select consultancy type</option>
                    {consultancyTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className={labelClasses}>
                    <MessageSquare className="inline h-4 w-4 mr-2" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={inputClasses}
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="problem" className={labelClasses}>
                    Problem Description
                  </label>
                  <textarea
                    id="problem"
                    name="problem"
                    value={formData.problem}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={inputClasses}
                    placeholder="Please describe your challenge or requirements in detail..."
                  />
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={createRipple}
                    className={`group relative overflow-hidden bg-gradient-to-r from-primary-800 to-primary-900 hover:from-primary-900 hover:to-primary-800 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto justify-center ${
                      isSubmitting ? 'animate-pulse' : ''
                    }`}
                  >
                    {/* Ripple Effects */}
                    {ripples.map(ripple => (
                      <span
                        key={ripple.id}
                        className="absolute bg-white/30 rounded-full animate-ping"
                        style={{
                          left: ripple.x - 10,
                          top: ripple.y - 10,
                          width: 20,
                          height: 20,
                        }}
                      />
                    ))}
                    
                    {/* Button Content */}
                    <div className="relative z-10 flex items-center space-x-3">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span className="hidden sm:inline">Submitting...</span>
                          <span className="sm:hidden">Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                          <span className="hidden sm:inline">Submit Consultation Request</span>
                          <span className="sm:hidden">Submit Request</span>
                        </>
                      )}
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-600/20 to-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>

                  {submitStatus === 'success' && (
                    <div className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 px-4 sm:px-6 py-3 rounded-xl animate-scale-in border border-emerald-200 text-center">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <span className="font-medium text-sm sm:text-base">Thank you! We'll be in touch within 24 hours. Check your email for confirmation.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center space-x-2 text-red-600 bg-red-50 px-4 sm:px-6 py-3 rounded-xl animate-scale-in border border-red-200 text-center">
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      <span className="font-medium text-sm sm:text-base">{errorMessage}</span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;