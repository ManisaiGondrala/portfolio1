import React from 'react';
import { my_profile } from '../assets/assets';
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ManisaiGondrala/',
      icon: Github,
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gondrala-mani-sai-588192226/',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      url: 'mailto:manisaigondrala94@gmail.com',
      icon: Mail,
      color: 'hover:text-red-500'
    },
    {
      name: 'Phone',
      url: 'tel:+918790749549',
      icon: Phone,
      color: 'hover:text-green-500'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center backdrop-blur-md bg-white/10 dark:bg-gray-800/10">
                <span className="text-6xl lg:text-8xl text-gray-600 dark:text-gray-400"><img className="w-60 h-60 lg:w-75 lg:h-75 rounded-full" src={my_profile}  alt='profile photo'/></span>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Gondrala Mani Sai
              </span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Full Stack Developer & Computer Science Student
            </h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 max-w-2xl leading-relaxed">
              I am a Computer Science student with hands-on experience in full-stack development using Java, Python, React, HTML, CSS, and MySQL. I have built real-time projects such as ecommerce platforms, rental systems, and interactive games during my internships.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg backdrop-blur-md bg-white/10 dark:bg-gray-800/10 hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300 ${social.color} shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                  title={social.name}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 rounded-lg backdrop-blur-md bg-white/10 dark:bg-gray-800/10 hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;