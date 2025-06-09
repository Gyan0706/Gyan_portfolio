import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
  {
    title: 'Complete Web Development Bootcamp',
    issuer: 'Hitesh Choudhary, Udemy',
    date: '2025',
    credentialId: 'UDEMY-WEBDEV-001',
    status: 'Completed',
    description: 'Comprehensive training on front-end and back-end web development, including deployment and best practices.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'DevOps'],
    verifyUrl: 'https://www.udemy.com/certificate/UC-f2b9d53d-6949-42ca-8653-7dd829b05c3f', // You can replace this with your Udemy certificate URL
  },
  {
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI & Stanford University',
    date: '2025',
    credentialId: 'COURSERA-ML-SUP-101',
    status: 'Completed',
    description: 'Covered supervised learning techniques including linear regression, logistic regression, and classification.',
    skills: ['Supervised Learning', 'Logistic Regression', 'Python', 'Model Evaluation'],
    verifyUrl: 'https://coursera.org/share/58669ca84523acf2392761c95b644eb3',
  },
  {
    title: 'Advanced Learning Algorithms',
    issuer: 'DeepLearning.AI & Stanford University',
    date: '2025',
    credentialId: 'COURSERA-ML-ADV-102',
    status: 'Completed',
    description: 'Focused on deep learning, neural networks, and decision trees, including real-world applications.',
    skills: ['Neural Networks', 'Decision Trees', 'SVM', 'Model Tuning'],
    verifyUrl: 'https://coursera.org/share/58669ca84523acf2392761c95b644eb3',
  },
  {
    title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
    issuer: 'DeepLearning.AI & Stanford University',
    date: '2025',
    credentialId: 'COURSERA-ML-UNSUP-103',
    status: 'Completed',
    description: 'Introduced clustering, recommendation systems, and reinforcement learning algorithms.',
    skills: ['Clustering', 'K-means', 'Recommender Systems', 'Q-Learning'],
    verifyUrl: 'https://coursera.org/share/58669ca84523acf2392761c95b644eb3',
  },
];


  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Award className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div className="flex items-center text-green-600 dark:text-green-400">
                  <CheckCircle size={16} className="mr-1" />
                  <span className="text-xs font-medium">{cert.status}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {cert.title}
              </h3>
              
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                {cert.issuer}
              </p>
              
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                <Calendar size={14} className="mr-1" />
                <span>{cert.date}</span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Skills Validated:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  ID: {cert.credentialId}
                </span>
                <motion.a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                >
                  <ExternalLink size={14} className="mr-1" />
                  Verify
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;