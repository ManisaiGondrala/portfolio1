import React from 'react';
import { Calendar, Award, BookOpen, ExternalLink } from 'lucide-react';
const Experience: React.FC = () => {
  const education = [
    {
      degree: 'B. Tech',
      school: 'KL University',
      location: 'Vijayawada',
      period: 'Sep 2021 - May 2025',
      gpa: '9.06',
      coursework: ['OOP', 'DBMS', 'Full Stack Development', 'Software Engineering'],
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      degree: 'Intermediate',
      school: 'Narayana IIT Academy',
      location: 'Hyderabad',
      period: 'Jun 2019 - May 2021',
      gpa: '896',
      coursework: ['MPC'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      degree: '10th',
      school: 'Winfield High School',
      location: 'Khammam',
      period: 'Jun 2018 - May 2019',
      gpa: '9.7',
      coursework: ['-'],
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  const certifications = [
    {
      title: 'Red Hat Certified Enterprise Application Developer',
      issuer: 'Redhat',
      date: 'Dec 2023',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Oracle Cloud Infrastructure 2023 Certified Architect Associate',
      issuer: 'Oracle',
      date: 'Aug 2023',
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const publications = [
    {
      title: 'BIG DATA ANALYTICS USING HEALTHCARE',
      conference: '45th World Conference on Applied Science, Engineering & Technology (45th WCASET-2023)',
      publisher: 'IFERP',
      isbn: '978-93-92105-88-3',
      date: 'Dec 2023'
    }
  ];

  const volunteerExperience = [
    {
      role: 'Core Member',
      organization: 'Megha Club',
      period: 'Jun 2023 - Jun 2024',
      description: 'Megha Club is a student-led technical club promoting emerging tech knowledge through events. As a core member, I prepare presentation content, handle event documentation, research topics, design visuals, and coordinate with the team to ensure smooth session execution.',
      skills: ['Team Work', 'AWS Cloud']
    }
  ];


const handlePublicationDownload = () => {
  window.open("https://www.wcasetgoa.com/45th%20WCASET_%20Proceeding.pdf", "_blank");
};


  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic journey, certifications, and professional contributions
          </p>
        </div>
        
        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl backdrop-blur-md bg-white/10 dark:bg-gray-800/10 hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2"
              >
                <div className={`h-1 bg-gradient-to-r ${edu.gradient} rounded-full mb-6`}></div>
                
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {edu.degree}
                </h4>
                
                <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {edu.school}
                </h5>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>📍 {edu.location}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">GPA: </span>
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{edu.gpa}</span>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 block">
                    Relevant Coursework:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="px-3 py-1 text-xs bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Volunteer Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
            Volunteer Experience
          </h3>
          {volunteerExperience.map((exp, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl backdrop-blur-md bg-white/10 dark:bg-gray-800/10 shadow-lg"
            >
              <div className="h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-6"></div>
              
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                    {exp.role}
                  </h4>
                  <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {exp.organization}
                  </h5>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-xs bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 text-green-700 dark:text-green-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Languages & Interests */}
<div className="mb-16">
  <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
    Languages & Interests
  </h3>

  <div className="grid md:grid-cols-2 gap-12">
    {/* Languages */}
    <div>
      <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Languages</h4>
      <div className="space-y-3">
        {[
          { name: 'English', level: 'Fluent' },
          { name: 'Telugu', level: 'Native' },
          { name: 'Hindi', level: 'Basic proficiency' }
        ].map((lang, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg backdrop-blur-md bg-white/10 dark:bg-gray-800/10">
            <span className="font-medium text-gray-800 dark:text-gray-200">{lang.name}</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">{lang.level}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Interests */}
    <div>
      <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Interests</h4>
      <div className="flex flex-wrap gap-3">
        {['Photography', 'Traveling'].map((interest, index) => (
          <span
            key={index}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 text-teal-700 dark:text-teal-300 text-sm font-medium"
          >
            {interest}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>




        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl backdrop-blur-md bg-white/10 dark:bg-gray-800/10 hover:bg-white/20 dark:hover:bg-gray-700/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2"
              >
                <div className={`h-1 bg-gradient-to-r ${cert.color} rounded-full mb-6`}></div>
                
                <div className="flex items-start gap-3 mb-4">
                  <Award className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 leading-tight">
                      {cert.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {cert.date}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Publications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
            Publications
          </h3>
          {publications.map((pub, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl backdrop-blur-md bg-white/10 dark:bg-gray-800/10 shadow-lg"
            >
              <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"></div>
              
              <div className="flex items-start gap-3 mb-4">
                <BookOpen className="text-purple-500 flex-shrink-0 mt-1" size={24} />
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {pub.title}
                  </h4>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {pub.conference}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span>Publisher: {pub.publisher}</span>
                    <span>ISBN: {pub.isbn}</span>
                    <span>{pub.date}</span>
                  </div>
                  
                  <button 
                    onClick={handlePublicationDownload}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <ExternalLink size={16} />
                    View Proceedings
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;