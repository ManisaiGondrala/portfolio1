import React from 'react';
import { Code, Database, Globe, Cloud, Wrench, Brain, Users, Clock } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Java', 'Python', 'C'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['HTML', 'React', 'MERN Stack', 'Django'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'MongoDB'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: ['Postman', 'Git', 'GitHub', 'AWS (Basic)', 'Fusion 360'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const coreSkills = [
    { name: 'Problem Solving', icon: Brain, level: 95 },
    { name: 'Logical Thinking', icon: Brain, level: 90 }
  ];

  const softSkills = [
    { name: 'Communication', icon: Users },
    { name: 'Teamwork', icon: Users },
    { name: 'Adaptability', icon: Clock },
    { name: 'Critical Thinking', icon: Brain },
    { name: 'Time Management', icon: Clock },
    { name: 'Quick Learning', icon: Brain }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My technical and soft skills that drive successful project delivery
          </p>
        </div>
        
        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl backdrop-blur-md bg-white/10 dark:bg-gray-800/10 hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700/50 dark:to-gray-600/50 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Core Skills with Progress */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coreSkills.map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl backdrop-blur-md bg-white/10 dark:bg-gray-800/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <skill.icon className="text-blue-500" size={24} />
                  <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="p-4 text-center rounded-xl backdrop-blur-md bg-white/10 dark:bg-gray-800/10 hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <skill.icon className="mx-auto mb-2 text-gray-600 dark:text-gray-400" size={24} />
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;