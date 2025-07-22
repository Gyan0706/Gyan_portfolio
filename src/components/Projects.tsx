import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Loan Guru',
      description: 'A comprehensive loan management platform...',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'Web App',
      icon: Globe,
      github: 'https://github.com/Gyan0706/LoanGuru',
    },
    {
      title: 'Railway Management App',
      description: 'An application to manage railway operations...',
      tech: ['React', 'Node.js', 'Firebase', 'REST API'],
      category: 'Web App',
      icon: Code,
      github: 'https://github.com/Gyan0706/railwaymanagement',
    },
    {
      title: 'Stock Price Prediction App',
      description: 'A machine learning powered app...',
      tech: ['Python', 'Machine Learning', 'Scikit-learn', 'Flask'],
      category: 'Data Science',
      icon: Code,
      github: 'https://github.com/Gyan0706/StockPricePredictor',
    },
    {
      title: 'AI Powered LinkedIn Post Generator',
      description: 'An AI tool that generates optimized LinkedIn posts...',
      tech: ['React', 'OpenAI API', 'Node.js'],
      category: 'AI / Productivity',
      icon: Code,
      github: 'https://github.com/Gyan0706/linkedin-post-generator',
    },
    {
      title: 'Log Classification',
      description: 'A system that classifies logs using NLP techniques...',
      tech: ['Python', 'NLP', 'TensorFlow', 'Flask'],
      category: 'Data Science',
      icon: Code,
      github: 'https://github.com/Gyan0706/Classification-logs',
    },
    {
      title: 'AI Powered Cold Email Generator',
      description: 'Generates personalized and persuasive cold emails...',
      tech: ['React', 'Node.js', 'OpenAI API'],
      category: 'AI / Productivity',
      icon: Code,
      github: 'https://github.com/Gyan0706/Cold-Email-Generator',
    },
    {
      title: 'Droply',
      description: 'A platform that automates file sharing across clouds...',
      tech: ['React', 'Node.js', 'AWS', 'API Integration'],
      category: 'Web App',
      icon: Globe,
      github: 'https://github.com/Gyan0706/Droply',
    },
    {
      title: 'n8n Agent',
      description: 'An automation tool built to extend n8n workflows...',
      tech: ['Node.js', 'n8n', 'JavaScript'],
      category: 'Automation',
      icon: Code,
      github: 'https://github.com/Gyan0706/my-n8n-agent',
    },
    {
  title: 'Image Colorization',
  description: 'A deep learning model that colorizes black-and-white images using CNN and LAB color space.',
  tech: ['Python', 'TensorFlow', 'OpenCV'],
  category: 'Deep Learning',
  icon: Code,
  github: 'https://github.com/Gyan0706/Image-colorization'
    }, 
    {
  title: 'Expense Tracker & Currency Converter',
  description: 'A Python GUI application to track daily expenses and convert currency with real-time exchange rates.',
  tech: ['Python', 'Tkinter', 'JSON', 'API'],
  category: 'Finance Utility',
  icon: Code,
  github: 'https://github.com/Gyan0706/Python-mini-project-on-expense-tracker-and-currency-converter-'
}

  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating my skills in full-stack development and user experience design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                    <project.icon size={14} className="mr-1" />
                    {project.category}
                  </span>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors"
                      title="View on GitHub"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                    >
                      {tech}
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

export default Projects;
