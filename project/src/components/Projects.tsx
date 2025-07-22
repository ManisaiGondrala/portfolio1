import React from 'react';
import { ExternalLink, Github, Calendar, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'BuZZ Mart - Ecommerce Platform',
      period: 'Jun 2025 - Jul 2025',
      description: 'BuzzMart is a MERN-based grocery eCommerce site with customer and seller modules, real-time operations, role-based access, Stripe/COD payments, inventory management, and features like login, order history, and a responsive user interface.',
      url:'https://bu-zz-m-art.vercel.app/',
      techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Stripe API', 'HTML', 'CSS', 'JavaScript', 'Git'],
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Vehicle Rental Management System',
      period: 'Oct 2022 - Dec 2022',
      description: 'Developed a comprehensive Vehicle Rental Management System to automate rental operations with secure login, user registration, password management, and vehicle search functionality with user-friendly interface.',
      url:'https://github.com/ManisaiGondrala/SDP2-Vehicle-Rental-Management-System',
      techStack: ['HTML', 'CSS', 'Django', 'MySQL'],
      tools: 'PyCharm Community Edition 2022.3',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: '3D Model Industrial Robot',
      period: 'Oct 2021 - Nov 2021',
      description: 'Designed a detailed industrial robot prototype using Fusion 360, leveraging parametric modelling for flexible iterations. Focused on optimising structure, aerodynamics, and usability with precision engineering.',
      url:'https://grabcad.com/library/industrial-model-2',
      techStack: ['Fusion 360', '3D Modeling', 'Parametric Design'],
      tools: 'Fusion 360',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical projects and development experience
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl backdrop-blur-md bg-white/10 dark:bg-gray-800/10 hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 leading-tight">
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>{project.period}</span>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                {/* Visit Project Button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition duration-300 shadow-md mb-4"
                >
                  Visit Project
                  <ExternalLink size={16} />
                </a>
                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Code size={16} className="text-gray-600 dark:text-gray-400" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Tech Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.tools && (
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Tools: </span>
                    <span>{project.tools}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;