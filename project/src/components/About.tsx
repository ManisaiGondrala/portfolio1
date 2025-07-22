import React from 'react';
import { Award, BookOpen, Users, Target } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Award,
      title: 'GPA 9.06',
      description: 'Academic Excellence at KL University'
    },
    {
      icon: BookOpen,
      title: 'Published Research',
      description: 'Big Data Analytics in Healthcare'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Core Member at Megha Club'
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: '5 Star Python on HackerRank'
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate developer with strong problem-solving skills and a good understanding of databases and web development tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl backdrop-blur-md bg-white/10 dark:bg-gray-800/10 hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <item.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-2xl p-8 backdrop-blur-md">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                My Journey
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I enjoy creating user-friendly applications and continuously improving my technical abilities. 
                My experience spans across various domains including ecommerce development, rental management systems, 
                and even 3D modeling with industrial applications.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                As a quick learner with strong analytical skills, I'm always eager to take on new challenges 
                and contribute to innovative projects that make a difference.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Full Stack Development</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Database Management</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Cloud Technologies</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">3D Design & Modeling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;