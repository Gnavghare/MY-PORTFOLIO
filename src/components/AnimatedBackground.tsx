'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const particles: HTMLDivElement[] = [];
    const colors = ['#4F46E5', '#7C3AED', '#2563EB', '#4338CA'];
    const particleCount = 20;

    const createParticle = () => {
      const particle = document.createElement('div');
      const size = Math.random() * 10 + 5;
      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.position = 'absolute';
      particle.style.borderRadius = '50%';
      particle.style.opacity = '0.2';
      particle.style.transition = 'all 3s ease-in-out';

      resetParticle(particle);
      particles.push(particle);
      backgroundRef.current?.appendChild(particle);
    };

    const resetParticle = (particle: HTMLDivElement) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      particle.style.transform = `translate(${x}vw, ${y}vh)`;
    };

    const animateParticles = () => {
      particles.forEach((particle) => {
        resetParticle(particle);
      });
    };

    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }

    // Animate particles periodically
    const interval = setInterval(animateParticles, 3000);

    return () => {
      clearInterval(interval);
      particles.forEach((particle) => particle.remove());
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
    />
  );
};

export default AnimatedBackground;