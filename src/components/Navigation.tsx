
import React, { useState, useEffect } from 'react';
import { Menu, X, Code, TestTube, Briefcase, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold gradient-text">
            QA Automation Tester
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('skills')}
              className="flex items-center space-x-2 hover:text-tech-blue transition-colors"
            >
              <Code size={18} />
              <span>Skills</span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="flex items-center space-x-2 hover:text-tech-teal transition-colors"
            >
              <TestTube size={18} />
              <span>Projects</span>
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="flex items-center space-x-2 hover:text-tech-purple transition-colors"
            >
              <Briefcase size={18} />
              <span>Experience</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 hover:text-tech-orange transition-colors"
            >
              <Mail size={18} />
              <span>Contact</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass rounded-lg mt-2 p-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('skills')}
                className="flex items-center space-x-2 hover:text-tech-blue transition-colors text-left"
              >
                <Code size={18} />
                <span>Skills</span>
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="flex items-center space-x-2 hover:text-tech-teal transition-colors text-left"
              >
                <TestTube size={18} />
                <span>Projects</span>
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="flex items-center space-x-2 hover:text-tech-purple transition-colors text-left"
              >
                <Briefcase size={18} />
                <span>Experience</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 hover:text-tech-orange transition-colors text-left"
              >
                <Mail size={18} />
                <span>Contact</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
