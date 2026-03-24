
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Cloud, Smartphone, TestTube, Settings, GitBranch, Activity, BarChart3, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI Tools',
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: 'GitHub Copilot', level: 95 },
        { name: 'Windsurf', level: 90 },
        { name: 'Aviva', level: 85 },
        { name: 'Juno', level: 85 }
      ],
      color: 'tech-purple'
    },
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'Java', level: 95 },
        { name: 'SQL', level: 90 },
        { name: 'TypeScript', level: 85 },
      ],
      color: 'tech-blue'
    },
    {
      title: 'Web/UI Automation',
      icon: <TestTube className="w-6 h-6" />,
      skills: [
        { name: 'Selenium WebDriver', level: 95 },
        { name: 'TestNG', level: 95 },
        { name: 'Maven', level: 90 },
        { name: 'Selenium Grid', level: 85 },
        { name: 'Cucumber BDD', level: 95 }
      ],
      color: 'tech-teal'
    },
    {
      title: 'API & Mobile Testing',
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: 'Postman', level: 95 },
        { name: 'Rest Assured', level: 90 },
        { name: 'Appium', level: 85 }
      ],
      color: 'tech-purple'
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'MSSQL', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'Oracle', level: 85 },
        { name: 'PostgreSQL', level: 80 }
      ],
      color: 'tech-orange'
    },
    {
      title: 'Cloud & CI/CD',
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: 'AWS (Lambda, Batch)', level: 85 },
        { name: 'Jenkins', level: 90 },
        { name: 'GitHub Actions', level: 85 },
        { name: 'Saviynt', level: 80 }
      ],
      color: 'tech-blue'
    },
    {
      title: 'Monitoring & Analytics',
      icon: <Activity className="w-6 h-6" />,
      skills: [
        { name: 'New Relic', level: 85 },
        { name: 'Kibana', level: 85 },
        { name: 'Mixpanel', level: 80 }
      ],
      color: 'tech-green'
    },
    {
      title: 'Version Control',
      icon: <GitBranch className="w-6 h-6" />,
      skills: [
        { name: 'GitHub', level: 95 },
        { name: 'Azure DevOps (Git)', level: 90 },
        { name: 'TFS', level: 80 }
      ],
      color: 'tech-purple'
    },
    {
      title: 'Automation Frameworks',
      icon: <TestTube className="w-6 h-6" />,
      skills: [
        { name: 'Data-Driven', level: 95 },
        { name: 'Keyword-Driven', level: 95 },
        { name: 'BDD (Cucumber)', level: 95 },
        { name: 'Serenity', level: 90 }
      ],
      color: 'tech-teal'
    },
    {
      title: 'Test Management',
      icon: <BarChart3 className="w-6 h-6" />,
      skills: [
        { name: 'JIRA', level: 95 },
        { name: 'Zephyr', level: 90 },
        { name: 'TestRail', level: 85 },
        { name: 'Azure DevOps', level: 85 },
        { name: 'Quality Center', level: 80 }
      ],
      color: 'tech-orange'
    },
    {
      title: 'IDEs',
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: 'Eclipse', level: 95 },
        { name: 'IntelliJ IDEA', level: 95 },
        { name: 'VS Code', level: 90 }
      ],
      color: 'tech-blue'
    },
    {
      title: 'Testing & Performance',
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: 'BrowserStack', level: 90 },
        { name: 'Pcloudy', level: 80 },
        { name: 'JMeter', level: 80 },
        { name: 'OWASP', level: 75 }
      ],
      color: 'tech-teal'
    },
    {
      title: 'Productivity & Integration',
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: 'Confluence', level: 85 },
        { name: 'DBeaver', level: 85 },
        { name: 'ServiceNow', level: 80 },
        { name: 'RabbitMQ', level: 75 }
      ],
      color: 'tech-orange'
    }
  ];

  return (
    <section id="skills" className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Technical Arsenal</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of automation testing experience
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="glass border-gray-700 hover:border-gray-600 transition-all duration-300 group animate-slide-up break-inside-avoid mb-8"
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
