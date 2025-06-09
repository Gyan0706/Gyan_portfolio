import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Heart, Code, Calendar, MapPin, Music } from 'lucide-react';

const Activities = () => {
  const activities = [
  {
    title: 'Secretary - IEEE Student Branch',
    organization: 'RV Institute of Technology and Management',
    period: '2023 - Present',
    location: 'Bengaluru, India',
    icon: Users, // or replace with a suitable icon
    description: 'Managed and organized technical initiatives under the IEEE student branch to foster innovation and peer learning.',
    achievements: [
      'Led multiple workshops, speaker sessions, and coding challenges',
      'Collaborated with student clubs and faculty for tech events',
      'Enhanced IEEE student engagement and visibility on campus',
    ],
    skills: ['Leadership', 'Event Management', 'Team Coordination', 'Public Speaking'],
  },
  {
    title: 'Mentor - Toyota Hackathon',
    organization: 'Toyota Mobility Foundation',
    period: '2024',
    location: 'Bengaluru, India',
    icon: Trophy, // symbolizing competition
    description: 'Mentored participants in a national-level hackathon organized by Toyota, focusing on smart mobility and innovation.',
    achievements: [
      'Guided teams through ideation and tech implementation',
      'Team ranked 5th out of 33 participating teams',
      'Contributed to problem-solving in real-world mobility use-cases',
    ],
    skills: ['Mentorship', 'Hackathon Strategy', 'Innovation', 'Problem Solving'],
  },
  {
    title: 'Member - Alt Stratus Club',
    organization: 'RV Institute of Technology and Management',
    period: '2023 - Present',
    location: 'Bengaluru, India',
    icon: Code, // or another icon representing club involvement
    description: 'Active contributor to Alt Stratus, a student-run club focused on emerging technologies, cloud computing, and hands-on development.',
    achievements: [
      'Participated in technical sessions and club projects',
      'Collaborated on cloud and DevOps-related mini-projects',
      'Enhanced skills through workshops and peer learning',
    ],
    skills: ['Teamwork', 'Cloud Computing Basics', 'Tech Exploration', 'Peer Learning'],
  },
  {
    title: 'Certified Keyboard Player',
    organization: 'Trinity College London',
    period: '2015 - 2020',
    location: 'Bengaluru, India',
    icon: Music, // if available, or use a custom music note icon
    description: 'Completed 4 Grades in Electronic Keyboard from Trinity College London, showcasing discipline and creativity through music.',
    achievements: [
      'Trained in both classical and contemporary styles',
      'Performed at school and community events',
      'Built a strong foundation in rhythm, melody, and notation',
    ],
    skills: ['Discipline', 'Creativity', 'Musical Expression', 'Performance'],
  },
];

  return (
    <section id="activities" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Extra Curricular Activities
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Leadership roles, volunteer work, and community involvement that demonstrate my commitment beyond academics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0">
                  <activity.icon className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {activity.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {activity.organization}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{activity.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      <span>{activity.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {activity.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Key Achievements:
                </h4>
                <ul className="space-y-1">
                  {activity.achievements.map((achievement, achievementIndex) => (
                    <motion.li
                      key={achievementIndex}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="text-gray-600 dark:text-gray-300 flex items-start text-sm"
                    >
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Skills Developed:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activity.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;