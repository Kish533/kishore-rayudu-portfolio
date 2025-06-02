
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    try {
      // Create a link element and trigger download
      const link = document.createElement('a');
      link.href = '/Kishore_Rayudu_Resume.pdf';
      link.download = 'Kishore_Rayudu_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Resume download failed:', error);
      // Show a user-friendly message
      alert('Resume download is not available at the moment. Please contact me directly.');
    }
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/Kish533', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/kishore-rayudu-qa', '_blank');
  };

  const handleEmailClick = () => {
    scrollToSection('contact');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Test Automation</span>
            <br />
            <span className="text-white">Wizard</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto space-y-4">
            <p>
              Architecting scalable, Java-based automation frameworks that support rapid development and deliver consistent product quality. Skilled in Selenium, Appium, and API testing with seamless CI/CD integration. Committed to replacing manual QA efforts with robust automation strategies 
              that streamline workflows and elevate test coverage.  </p>
           
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-tech-blue hover:bg-blue-600 text-white px-8 py-3 text-lg animate-glow"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-tech-teal text-tech-teal hover:bg-tech-teal hover:text-white px-8 py-3 text-lg"
            onClick={handleResumeDownload}
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-tech-blue"
                onClick={handleGitHubClick}
              >
                <Github size={24} />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-auto p-2 bg-gray-800 border-gray-600">
              <p className="text-sm text-white">https://github.com/Kish533</p>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-tech-teal"
                onClick={handleLinkedInClick}
              >
                <Linkedin size={24} />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-auto p-2 bg-gray-800 border-gray-600">
              <p className="text-sm text-white">https://www.linkedin.com/in/kishore-rayudu-qa</p>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-tech-purple"
                onClick={handleEmailClick}
              >
                <Mail size={24} />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-auto p-3 bg-gray-800 border-gray-600">
              <div className="text-sm text-white space-y-1">
                <p>kishorerayuduqa@gmail.com</p>
                <p>+1 (469)-525-3629</p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className="animate-bounce">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => scrollToSection('skills')}
            className="hover:text-tech-blue"
          >
            <ChevronDown size={32} />
          </Button>
        </div>
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <div className="w-16 h-16 bg-tech-blue/20 rounded-lg flex items-center justify-center">
            <span className="text-tech-blue font-bold">Java</span>
          </div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-16 h-16 bg-tech-teal/20 rounded-lg flex items-center justify-center">
            <span className="text-tech-teal font-bold">Python</span>
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-16 h-16 bg-tech-purple/20 rounded-lg flex items-center justify-center">
            <span className="text-tech-purple font-bold">JS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
