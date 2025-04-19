import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern and responsive portfolio website built with Next.js 13, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and interactive cursor.",
      image: "/images/profile.jpg",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://your-portfolio-url.com"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with user authentication, product management, cart functionality, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://your-ecommerce-url.com"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application powered by AI for smart responses, featuring user authentication and message history.",
      tech: ["React", "OpenAI API", "Firebase", "Tailwind CSS"],
      github: "https://github.com/yourusername/ai-chat",
      live: "https://your-chat-url.com"
    },
    {
      title: "Task Management System",
      description: "Collaborative task management system with real-time updates, drag-and-drop functionality, and team features.",
      tech: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://your-taskmanager-url.com"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard showing real-time weather data, forecasts, and weather maps using multiple APIs.",
      tech: ["React", "Weather API", "Chart.js", "Leaflet"],
      github: "https://github.com/yourusername/weather-dashboard",
      live: "https://your-weather-url.com"
    }
  ];

  return (
    <div id="projects" className="min-h-screen pt-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </div>
  );
}