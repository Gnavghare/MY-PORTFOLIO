'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { useTheme } from 'next-themes';

const AnimatedCursor = () => {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const scale = useMotionValue(1);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if the cursor is over a clickable element
      const target = e.target as HTMLElement;
      const computedStyle = window.getComputedStyle(target);
      setIsPointer(computedStyle.cursor === 'pointer');
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      scale.set(1.5);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      scale.set(1);
    };

    window.addEventListener('mousemove', updateMousePosition);
    
    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, select, [role="button"]');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [scale]);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      scale: 1,
      opacity: 0.75,
    },
    hovering: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.3,
      opacity: 0.9,
    }
  };

  const cursorDotVariants = {
    default: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 2,
      scale: 1,
    },
    hovering: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 2,
      scale: 0,
    }
  };

  return (
    <>
      <motion.div
        className={`pointer-events-none fixed top-0 left-0 z-[9999] ${
          theme === 'dark' ? 'mix-blend-difference' : 'mix-blend-exclusion'
        }`}
        animate={isHovering || isPointer ? "hovering" : "default"}
        variants={cursorVariants}
        transition={{ 
          type: "spring", 
          stiffness: 800, // Increased from 150
          damping: 25,    // Increased from 15
          mass: 0.2       // Decreased from 0.5
        }}
      >
        <div className={`w-6 h-6 rounded-full ${
          theme === 'dark' ? 'bg-white' : 'bg-purple-600'
        } opacity-75 blur-[0.5px]`} />
      </motion.div>
      
      {/* Cursor dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
        animate={isHovering || isPointer ? "hovering" : "default"}
        variants={cursorDotVariants}
        transition={{ 
          type: "spring", 
          stiffness: 1000, // Increased from 250
          damping: 30,     // Increased from 20
          mass: 0.1        // Decreased from 0.25
        }}
      >
        <div className="w-1 h-1 bg-white rounded-full" />
      </motion.div>

      <style jsx global>{`
        * {
          cursor: none !important;
        }
        html {
          cursor: none !important;
        }
        body {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default AnimatedCursor;