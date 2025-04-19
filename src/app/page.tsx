'use client';
import { motion } from 'framer-motion';
import Hero from '@/sections/Hero';
import About from './about/page';
import Skills from './skills/page';
import Projects from './projects/page';
import Contact from './contact/page';

export default function Home() {
  return (
    <motion.main 
      className="relative min-h-screen bg-[size:400%] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-gray-800"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10 blur-3xl"></div>
      <Hero />
      <motion.div
        className="relative z-10 bg-gradient-to-b from-transparent to-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <About />
        <Skills />
        <Projects />
        <Contact />
      </motion.div>
    </motion.main>
  );
}
