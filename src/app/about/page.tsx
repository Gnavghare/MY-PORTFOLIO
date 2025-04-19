'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div id="about" className="min-h-screen pt-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>
        <motion.div 
          className="prose dark:prose-invert"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Hello! I'm a passionate developer with a love for creating beautiful and functional web applications. I specialize in modern web technologies and enjoy bringing creative ideas to life.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            With expertise in frontend and backend development, I craft responsive and user-friendly applications that deliver exceptional user experiences. I'm always excited to learn new technologies and tackle challenging projects.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
          </p>
        </motion.div>
      </div>
    </div>
  );
}