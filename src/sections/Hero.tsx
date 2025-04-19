'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div 
        className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity, scale, y }}
      >
        {/* Text Content */}
        <div className="space-y-6">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-cyan-300 dark:to-blue-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Hi, I'm Your Name
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300"
            variants={itemVariants}
          >
            Full Stack Developer
          </motion.p>
          <motion.p 
            className="text-gray-400"
            variants={itemVariants}
          >
            I build beautiful and functional web applications with modern technologies
          </motion.p>
          <motion.div 
            className="flex gap-4"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 backdrop-blur-sm text-white rounded-lg hover:bg-cyan-500/30 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-xl" />
              GitHub
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 backdrop-blur-sm text-white rounded-lg hover:bg-cyan-500/30 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </motion.a>
          </motion.div>
        </div>

        {/* Hexagonal Image Container with Glow */}
        <motion.div 
          className="relative"
          variants={imageVariants}
          style={{
            translateY: useTransform(scrollYProgress, [0, 1], [0, 150])
          }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[2rem] rotate-45 animate-pulse opacity-50 blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[2rem] rotate-45 mix-blend-overlay" />
            
            {/* Hexagonal container */}
            <motion.div 
              className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-cyan-500/50 rotate-45 bg-gray-900/50 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 -rotate-45">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile Image"
                  fill
                  className="object-cover scale-150"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-cyan-500/10 backdrop-blur-xl"
        animate={{
          y: [0, 30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 rounded-lg bg-blue-500/10 backdrop-blur-xl"
        animate={{
          y: [0, -40, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </section>
  );
};

export default Hero;