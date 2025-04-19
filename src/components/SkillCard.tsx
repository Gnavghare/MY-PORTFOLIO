'use client';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  items: string[];
}

const SkillCard = ({ title, items }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.02 }}
      transition={{
        duration: 0.4,
        scale: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <motion.h3 
        className="text-lg font-semibold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h3>
      <motion.ul className="space-y-1.5">
        {items.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.05 }}
            className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300"
          >
            <motion.span
              className="w-1.5 h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
                delay: 0.3 + index * 0.05
              }}
            />
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default SkillCard;