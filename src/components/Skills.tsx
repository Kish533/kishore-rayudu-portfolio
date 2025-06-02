
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Cloud, Smartphone, TestTube, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 80 },
      ],
      color: 'tech-blue'
    },
    {
      title: 'Automation Tools',
      icon: <TestTube className="w-6 h-6" />,
      skills: [
        { name: 'Selenium WebDriver', level: 95 },
        { name: 'TestNG', level: 95 },
        { name: 'Cucumber BDD', level: 95 },
        { name: 'Appium', level: 85 },
        { name: 'Rest Assured', level: 80 }
      ],
      color: 'tech-teal'
    },
    {
      title: 'API Testing',
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: 'HTTP Requests', level: 95 },
        { name: 'Postman', level: 90 },
        { name: 'Swagger', level: 92 }
      ],
      color: 'tech-purple'
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Oracle', level: 80 }
      ],
      color: 'tech-orange'
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: 'AZURE', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Jenkins', level: 85 },
        { name: 'CI/CD', level: 85 }
      ],
      color: 'tech-blue'
    },
    {
      title: 'Automation Frameworks',
      icon: <TestTube className="w-6 h-6" />,
      skills: [
        { name: 'Keyword Driven', level: 95 },
        { name: 'Data Driven', level: 95 },
        { name: 'BDD', level: 95 },
        { name: 'Serenity', level: 85 }
      ],
      color: 'tech-teal'
    },
    {
      title: 'Tools & IDEs',
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: 'Eclipse', level: 95 },
        { name: 'IntelliJ IDEA', level: 90 },
        { name: 'VS Code', level: 90 },
        { name: 'JIRA', level: 90 },
        { name: 'Zephyr', level: 90 },
        { name: 'JMETER', level: 50 },
         { name: 'OSWAP', level: 50 }        
      ],
      color: 'tech-teal'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Technical Arsenal</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of automation testing experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="glass border-gray-700 hover:border-gray-600 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-white group-hover:text-tech-blue transition-colors">
                  <div className={`p-2 rounded-lg bg-${category.color}/20`}>
                    {category.icon}
                  </div>
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-gray-800"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
