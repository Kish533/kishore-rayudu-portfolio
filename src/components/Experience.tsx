'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior QA Automation Engineer',
      company: 'State Farm',
      location: 'McKinney, TX',
      period: 'May 2025 - Present',
      achievements: [
        'Developed modular automation frameworks using Selenium, Appium, TestNG, and Java',
        'Implemented CI/CD pipelines with Jenkins and GitHub Actions',
        'Tested REST APIs using Postman; validated backend data with SQL',
        'Participated in Agile ceremonies; mentored juniors; improved QA best practices'
      ],
      technologies: ['Java', 'Selenium WebDriver', 'Serenity BDD', 'Appium', 'IOS', 'Android', 'JIRA', 'Zephyr', 'Cucumber','Agile', 'IntelliJ', 'Maven', 'Jenkins', 'CI/CD','Jenkins', 'Git', 'BDD', 'Browser Stack', 'DBeaver']
    },
    {
      title: 'QA Automation Engineer',
      company: 'CVS',
      location: 'Irving, TX',
      period: 'Nov 2024 - April 2025',
      achievements: [
        'Established QA processes and testing standards from ground up',
        'Created comprehensive test documentation and test cases',
        'Performed manual and automated testing for web applications',
        'Collaborated with cross-functional teams in Agile environment'
      ],      
      technologies: ['Java', 'Selenium WebDriver', 'Serenity BDD', 'Appium', 'IOS', 'Android', 'JIRA', 'Zephyr', 'Cucumber','Agile', 'IntelliJ', 'Maven', 'Jenkins', 'CI/CD','Jenkins', 'Git', 'BDD', 'Browser Stack', 'DBeaver']
    },
    {
      title: 'Sr. Automation Test Engineer',
      company: 'Anthem',
      location: 'Plano, TX',
      period: 'Sep 2023 - Aug 2024',
      achievements: [
        'Developed test automation frameworks using Selenium, Appium, TestNG, and Maven',
        'Configured Azure CI/CD pipeline for automated test execution and integration',
        'Created scalable mobile automation framework for Android, iOS, and hybrid',
        'Collaborated with development teams to resolve bugs and improve testing',
        'Designed comprehensive test plans and cases using Jira and JBehave',
        'Enhanced automation scripts to improve efficiency and expand test coverage',
        'Executed manual and automated tests ensuring quality and functionality',
        'Collaborated in Agile teams to refine requirements and improve processes'
      ],
      technologies: ['Java', 'Selenium WebDriver', 'Serenity BDD', 'Appium', 'emulator', 'simulator', 'IOS', 'Android', 'JIRA', 'Zephyr', 'Cucumber', 'Agile', 'IntelliJ', 'Maven', 'Jenkins', 'CI/CD', 'Jenkins', 'Git', 'BDD', 'Browser Stack', 'DBeaver', 'Saviynt']
    },
    {
      title: 'Sr. Software Test Engineer',
      company: 'Inovalon',
      location: 'Bowie, MD',
      period: 'Mar 2023 - Aug 2023',
      achievements: [
        'Reviewed requirements, participated in sprint planning, stand-ups, and Scrum ceremonies',
        'Developed end-to-end test cases within Agile software development lifecycle',
        'Implemented Data-Driven Framework using POM; integrated Apache POI for testing',
        'Tracked defects in JIRA, collaborated with development teams for resolution'
      ],
      technologies: ['Java', 'Selenium WebDriver', 'Serenity BDD', 'Appium', 'emulator', 'simulator', 'IOS', 'Android', 'JIRA', 'Zephyr', 'Cucumber', 'Agile', 'IntelliJ', 'Maven', 'Jenkins', 'CI/CD', 'Jenkins', 'Git', 'BDD', 'Browser Stack', 'DBeaver', 'Saviynt']
    },
    {
      title: 'Sr. Associate - Software Services',
      company: 'Freyr Solutions',
      location: 'Princeton, NJ',
      period: 'Feb 2021 - Feb 2023',
      achievements: [
        'Developed test automation frameworks using Selenium, Appium, TestNG, and Maven',
        'Configured Azure CI/CD pipeline for automated test execution and integration',
        'Created scalable mobile automation framework for Android, iOS, and hybrid',
        'Collaborated with development teams to resolve bugs and improve testing',
        'Designed comprehensive test plans and cases using Jira and JBehave',
        'Enhanced automation scripts to improve efficiency and expand test coverage',
        'Executed manual and automated tests ensuring quality and functionality',
        'Collaborated in Agile teams to refine requirements and improve processes'
      ],
      technologies: ['Java', 'Selenium WebDriver', 'Serenity BDD', 'Appium', 'emulator', 'simulator', 'IOS', 'Android', 'JIRA', 'Zephyr', 'Cucumber', 'Agile', 'IntelliJ', 'Maven', 'Jenkins', 'CI/CD', 'Jenkins', 'Git', 'BDD', 'Browser Stack', 'DBeaver', 'Saviynt']
    },
    {
      title: 'Sr. Automation Test Engineer',
      company: 'Unilog',
      location: 'Wayne, PA',
      period: 'Aug 2016 - Nov 2020',
      achievements: [
        'Developed test automation frameworks using Selenium, Appium, TestNG, and Maven',
        'Configured Azure CI/CD pipeline for automated test execution and integration',
        'Created scalable mobile automation framework for Android, iOS, and hybrid',
        'Collaborated with development teams to resolve bugs and improve testing',
        'Designed comprehensive test plans and cases using Jira and JBehave',
        'Enhanced automation scripts to improve efficiency and expand test coverage',
        'Executed manual and automated tests ensuring quality and functionality',
        'Collaborated in Agile teams to refine requirements and improve processes'
      ],
      technologies: ['Selenium WebDriver', 'Eclipse', 'Postman', 'Java', 'TestNG', 'SQL', 'Jira', 'Jenkins', 'GIT', 'Maven', 'TestNG']
    }
  ];

   const certifications = [
    {
      title: 'ISTQB Certified Tester – Advanced Level Test Automation Engineer (CTAL-TAE)',
      image: '/certificates/istqb-tae.png',
      date: '2024'
    },
    {
      title: 'ISTQB Foundation Level Certification (CTFL)',
      image: '/certificates/istqb-foundation.png',
      date: '2023'
    },
    {
      title: 'AWS Certified Developer – Associate',
      image: '/certificates/aws-developer.png',
      date: '2024'
    },
    {
      title: 'Azure Administrator Associate',
      image: '/certificates/azure-admin.png',
      date: '2023'
    },
    {
      title: 'Lean Six Sigma – Certified White Belt',
      image: '/certificates/six-sigma.png',
      date: '2023'
    }
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <Card
              key={`${exp.title}-${index}`}
              className="glass border-gray-700 hover:border-gray-600 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-white text-xl mb-2">{exp.title}</CardTitle>
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
                        key={`${exp.title}-${tech}`}
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

        <Card className="glass border-gray-700">
          <CardHeader>
            <CardTitle className="text-tech-orange">Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800/50 transition-colors"
                >
                  <div className="w-16 h-16 relative flex-shrink-0">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      width={64}
                      height={64}
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-300 font-medium">{cert.title}</div>
                    <div className="text-sm text-gray-500">Achieved: {cert.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-gray-700 mt-12">
          <CardHeader>
            <CardTitle className="text-tech-purple">Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">8+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">10+</div>
              <div className="text-gray-300">Developed Automation Frameworks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">5000+</div>
              <div className="text-gray-300">Test Cases Migrated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">90%</div>
              <div className="text-gray-300">Test Coverage Achieved</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;