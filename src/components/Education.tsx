import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering in Information Science Engineering',
      institution: 'RV Institute of Technology and Management',
      location: 'Bengaluru, India',
      period: '2022 - 2026',
      cgpa: '9.29/10',
    },
    {
      degree: 'High School Diploma',
      institution: 'Deeksha C F L PU College',
      location: 'Bengaluru, India',
      period: '2021 - 2022',
      percentage: '96.67%',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic journey and educational achievements that have shaped my knowledge and skills.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < education.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-blue-200 dark:bg-blue-800"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="ml-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 mb-1">
                      <GraduationCap size={16} className="mr-2" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center mb-1">
                      <Calendar size={14} className="mr-1" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <MapPin size={14} className="mr-1" />
                      <span>{edu.location}</span>
                    </div>
                    {edu.cgpa && (
                      <div className="flex items-center">
                        <Award size={14} className="mr-1" />
                        <span className="font-semibold">CGPA: {edu.cgpa}</span>
                      </div>
                    )}
                    {edu.percentage && (
                      <div className="flex items-center">
                        <Award size={14} className="mr-1" />
                        <span className="font-semibold">Percentage: {edu.percentage}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
