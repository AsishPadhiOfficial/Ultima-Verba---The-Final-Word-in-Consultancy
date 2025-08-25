import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BusinessStrategy from './pages/BusinessStrategy';
import LegalAdvisory from './pages/LegalAdvisory';
import AcademicSupport from './pages/AcademicSupport';
import TechConsulting from './pages/TechConsulting';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import CaseStudies from './pages/CaseStudies';
import BlogPage from './pages/BlogPage';
import CareersPage from './pages/CareersPage';
import ScrollToTop from './components/ScrollToTop';
import ChatBot from './components/ChatBot';
import BackToTop from './components/BackToTop';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Router basename="/AI-Nexus">
        <div className="min-h-screen bg-white">
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/business-strategy" element={<BusinessStrategy />} />
            <Route path="/services/legal-advisory" element={<LegalAdvisory />} />
            <Route path="/services/academic-support" element={<AcademicSupport />} />
            <Route path="/services/tech-consulting" element={<TechConsulting />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/careers" element={<CareersPage />} />
          </Routes>
          <Footer />
          <ChatBot />
          <BackToTop />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;