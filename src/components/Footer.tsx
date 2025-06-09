import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Gyan0706', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gyanada-muvvala-868874270', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/GyanadaSat47905', label: 'Twitter' },
    { icon: Mail, href: 'mailto:muvvalagyanada@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">Gyanada Muvvala</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Building digital experiences that make a difference. 
              Always excited to connect and collaborate on new projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-gray-800 text-gray-400 text-sm"
          >
            <p className="flex items-center justify-center">
              © {new Date().getFullYear()} Gyanada Muvvala. Made with{' '}
              <Heart className="text-red-500 mx-1" size={16} fill="currentColor" />
              and React
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;