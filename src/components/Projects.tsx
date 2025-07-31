import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { BackgroundBeams } from "./ui/background-beams";

const projects = [
    {
    title: "The Moronss",
    description: "Modern chatbot with responsive design and resume generation",
    longDescription:
      "A fully responsive chatbot built with React and Tailwind CSS built specially for job guidance and resume enhancements.",
    live: "https://morons2-0.vercel.app",
    github: "https://github.com/Rishabh17113012/morons2.0",
    image: "/moron.png",
  },
  {
    title: "ATC Chatbot",
    description: "Modern chatbot with responsive design and image generation",
    longDescription:
      "A fully responsive chatbot built with React and Tailwind CSS along with Bot feature from BotPress, featuring smooth animations and modern design principles.",
    live: "https://landing-page-topaz-seven-67.vercel.app",
    github: "https://github.com/Rishabh17113012/Landing_page",
    image: "/atc.png",
  },
  {
    title: "Genre - College Magazine Platform",
    description: "Digital magazine platform with genre categorization",
    longDescription:
      "Developed a digital platform for the Editorial Board to transform the college magazine into an accessible e-book. Features include PDF viewing, easy navigation, mobile responsiveness, and magazine categorization by year for seamless discovery and tracking.",
    live: "https://genre2k25.vercel.app",
    github: "https://github.com/Rishabh17113012/BookRead",
    image: "/genre.png",
  },
  {
    title: "Expense Tracker",
    description: "Track and manage your expenses efficiently",
    longDescription:
      "A powerful expense tracking application that helps users monitor their spending habits with detailed analytics and budgeting features along with charting system.",
    live: "https://expense-tracker-app-chi-lyart.vercel.app",
    github: "https://github.com/Rishabh17113012/ExpenseTracker-App",
    image: "/expenseTracker.png",
  },
  {
    title: "To-Do List",
    description: "Simple and effective task management",
    longDescription:
      "An intuitive to-do list application with task prioritization, and progress tracking features. Visual Imagery is its forte",
    live: "https://to-do-list-fawn-six-33.vercel.app",
    github: "https://github.com/Rishabh17113012/To-Do-List",
    image: "/Todo.png",
  },
  {
    title: "Task Manager",
    description: "Advanced task management system",
    longDescription:
      "A comprehensive task management solution with team collaboration features, deadline tracking, and project organization tools.",
    live: "https://task-manager-cyan-nine.vercel.app",
    github: "https://github.com/Rishabh17113012/Task-Manager",
    image: "/TaskManager.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10,
        },
      }}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300"
    >
      <div className="flex-shrink-0 relative group">
        <motion.img
          className="h-48 w-full object-cover"
          src={project.image}
          alt={project.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-white text-sm mb-4">{project.longDescription}</p>
          <div className="space-x-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Github className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </motion.a>
          </div>
        </motion.div>
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between bg-white">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">
            {project.title}
          </h3>
          <p className="mt-3 text-base text-gray-500">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 bg-gray-50 z-10 overflow-hidden">
      <BackgroundBeams className="absolute inset-0 z-" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-500"
          >
            A selection of my recent work
          </motion.p>
        </div>

        <motion.div
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
