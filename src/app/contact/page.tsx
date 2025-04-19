'use client';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com'
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourusername',
      href: 'https://linkedin.com/in/yourusername'
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: 'GitHub',
      value: 'github.com/yourusername',
      href: 'https://github.com/yourusername'
    },
    {
      icon: <FaTwitter className="text-2xl" />,
      label: 'Twitter',
      value: '@yourusername',
      href: 'https://twitter.com/yourusername'
    }
  ];

  return (
    <div id="contact" className="min-h-screen pt-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Feel free to reach out for collaborations or just a friendly chat. I'm always open to discussing new projects and opportunities.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-purple-600 dark:text-purple-400">
                {contact.icon}
              </div>
              <div>
                <h2 className="text-sm text-gray-500 dark:text-gray-400">
                  {contact.label}
                </h2>
                <p className="text-gray-800 dark:text-gray-200">
                  {contact.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}