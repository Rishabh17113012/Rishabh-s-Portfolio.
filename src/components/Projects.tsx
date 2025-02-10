
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Landing Page",
    description: "Modern landing page with responsive design",
    live: "https://landing-page-topaz-seven-67.vercel.app",
    github: "https://github.com/Rishabh17113012/Landing_page",
    image: "/project1.jpg"
  },
  {
    title: "Genre",
    description: "Book reading application with genre categorization",
    live: "https://genre-tawny.vercel.app",
    github: "https://github.com/Rishabh17113012/BookRead",
    image: "/project2.jpg"
  },
  {
    title: "Expense Tracker",
    description: "Track and manage your expenses efficiently",
    live: "https://expense-tracker-app-chi-lyart.vercel.app",
    github: "https://github.com/Rishabh17113012/ExpenseTracker-App",
    image: "/project3.jpg"
  },
  {
    title: "To-Do List",
    description: "Simple and effective task management",
    live: "https://to-do-list-fawn-six-33.vercel.app",
    github: "https://github.com/Rishabh17113012/To-Do-List",
    image: "/project4.jpg"
  },
  {
    title: "Task Manager",
    description: "Advanced task management system",
    live: "https://task-manager-cyan-nine.vercel.app",
    github: "https://github.com/Rishabh17113012/Task-Manager",
    image: "/project5.jpg"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-500"
          >
            A selection of my recent work
          </motion.p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white"
            >
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={project.image} alt={project.title} />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="mt-3 text-base text-gray-500">{project.description}</p>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
