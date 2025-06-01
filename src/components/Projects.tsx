
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Automation Suite',
      description: 'Comprehensive Selenium WebDriver framework with TestNG, featuring data-driven testing, parallel execution, and detailed reporting.',
      technologies: ['Java', 'Selenium', 'TestNG', 'Maven', 'Allure Reports'],
      highlights: ['Cross-browser testing', 'CI/CD Integration', 'Page Object Model'],
      gradient: 'from-tech-blue to-tech-teal'
    },
    {
      title: 'API Testing Framework',
      description: 'Rest Assured based framework for comprehensive API testing with automated validation, authentication handling, and performance testing.',
      technologies: ['Java', 'Rest Assured', 'TestNG', 'JSON Schema', 'Jenkins'],
      highlights: ['OAuth 2.0 Testing', 'Response Validation', 'Load Testing'],
      gradient: 'from-tech-teal to-tech-purple'
    },
    {
      title: 'Mobile App Test Automation',
      description: 'Appium-based mobile testing framework supporting both Android and iOS platforms with cloud device integration.',
      technologies: ['Java', 'Appium', 'TestNG', 'BrowserStack', 'Sauce Labs'],
      highlights: ['Cross-platform testing', 'Cloud integration', 'Real device testing'],
      gradient: 'from-tech-purple to-tech-orange'
    },
    {
      title: 'BDD Cucumber Framework',
      description: 'Behavior-driven development framework using Cucumber with Serenity for living documentation and stakeholder collaboration.',
      technologies: ['Java', 'Cucumber', 'Serenity', 'Gherkin', 'Maven'],
      highlights: ['Living documentation', 'Stakeholder reports', 'Feature-driven testing'],
      gradient: 'from-tech-orange to-tech-blue'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Automation Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world automation solutions that demonstrate expertise across different testing domains
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass border-gray-700 hover:border-gray-600 transition-all duration-300 group animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <CardHeader>
                <CardTitle className="text-white group-hover:text-tech-blue transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="border-gray-600 text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="text-white font-semibold">Key Features:</h4>
                  <ul className="text-gray-300 space-y-1">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center">
                        <span className="w-2 h-2 bg-tech-blue rounded-full mr-3"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button size="sm" className="bg-tech-blue hover:bg-blue-600">
                    <Github className="mr-2" size={16} />
                    View Code
                  </Button>
                  <Button size="sm" variant="outline" className="border-tech-teal text-tech-teal hover:bg-tech-teal hover:text-white">
                    <Play className="mr-2" size={16} />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
