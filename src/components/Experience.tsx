
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior QA Automation Engineer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      achievements: [
        'Led automation initiatives reducing testing time by 60%',
        'Implemented CI/CD pipelines with Jenkins and GitHub Actions',
        'Mentored junior QA engineers on automation best practices',
        'Designed and executed comprehensive test strategies for microservices'
      ],
      technologies: ['Java', 'Selenium', 'TestNG', 'Jenkins', 'AWS', 'Docker']
    },
    {
      title: 'QA Automation Engineer',
      company: 'Digital Innovations Corp',
      location: 'Austin, TX',
      period: '2020 - 2022',
      achievements: [
        'Developed robust API testing framework using Rest Assured',
        'Implemented mobile testing automation with Appium',
        'Integrated automated tests with JIRA and Azure DevOps',
        'Achieved 85% test automation coverage across web and mobile platforms'
      ],
      technologies: ['Python', 'Selenium', 'Appium', 'Rest Assured', 'Azure DevOps']
    },
    {
      title: 'QA Engineer',
      company: 'StartupTech LLC',
      location: 'Denver, CO',
      period: '2018 - 2020',
      achievements: [
        'Established QA processes and testing standards from ground up',
        'Created comprehensive test documentation and test cases',
        'Performed manual and automated testing for web applications',
        'Collaborated with cross-functional teams in Agile environment'
      ],
      technologies: ['JavaScript', 'Selenium IDE', 'Postman', 'JIRA', 'MySQL']
    }
  ];

  const certifications = [
    'ISTQB Certified Tester',
    'AWS Cloud Practitioner',
    'Scrum Master Certified',
    'Selenium WebDriver Expert'
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Professional Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building quality and automation excellence across diverse tech environments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.title}
                className="glass border-gray-700 hover:border-gray-600 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-white text-xl mb-2">
                    {exp.title}
                  </CardTitle>
                  <div className="flex flex-wrap items-center gap-4 text-gray-300">
                    <div className="flex items-center">
                      <TrendingUp className="mr-2" size={16} />
                      <span className="font-semibold text-tech-blue">{exp.company}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2" size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-2" size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                    <ul className="text-gray-300 space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-tech-teal rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="border-gray-600 text-gray-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications & Stats */}
          <div className="space-y-8">
            <Card className="glass border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-center">
                      <span className="w-3 h-3 bg-tech-purple rounded-full mr-3"></span>
                      <span className="text-gray-300">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">6+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">90%</div>
                  <div className="text-gray-300">Test Coverage Achieved</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
