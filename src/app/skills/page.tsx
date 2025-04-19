import SkillCard from '@/components/SkillCard';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      items: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "HTML5/CSS3",
        "Responsive Design"
      ]
    },
    {
      title: "Backend Development",
      items: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "GraphQL",
        "MongoDB",
        "PostgreSQL",
        "API Integration"
      ]
    },
    {
      title: "DevOps & Tools",
      items: [
        "Git/GitHub",
        "Docker",
        "AWS",
        "CI/CD",
        "Vercel",
        "Jest",
        "Webpack"
      ]
    },
    {
      title: "Next.js Expertise",
      items: [
        "App Router",
        "Server Components",
        "API Routes",
        "SSR/SSG",
        "Dynamic Imports",
        "Image Optimization",
        "Middleware"
      ]
    },
    {
      title: "Development Practices",
      items: [
        "Clean Code",
        "Performance Optimization",
        "Responsive Design",
        "SEO Best Practices",
        "Security",
        "Accessibility",
        "Code Review"
      ]
    },
    {
      title: "Soft Skills",
      items: [
        "Problem Solving",
        "Team Collaboration",
        "Project Management",
        "Communication",
        "Time Management",
        "Agile/Scrum",
        "Documentation"
      ]
    }
  ];

  return (
    <div id="skills" className="min-h-screen pt-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              title={category.title}
              items={category.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
}