import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ATC Chatbot",
    description: "Modern chatbot with responsive design and image generation",
    longDescription: "A fully responsive lchatbor built with React and Tailwind CSS along with Bot feature from BotPress, featuring smooth animations and modern design principles.",
    live: "https://landing-page-topaz-seven-67.vercel.app",
    github: "https://github.com/Rishabh17113012/Landing_page",
    image: "/atc.png"
  },
  {
    title: "Genre - College Magazine Platform",
    description: "Digital magazine platform with genre categorization",
    longDescription: "Developed a comprehensive platform for the Editorial Board, that transforms the college magazine into an accessible e-book format. Features include PDF viewing, easy navigation, and mobile responsiveness. The platform also includes book categorization by Magazine from different years, making it easy for users to discover and track their reading preferences.",
    live: "https://genre-tawny.vercel.app",
    github: "https://github.com/Rishabh17113012/BookRead",
    image: "/genre.png"
  },
  {
    title: "Expense Tracker",
    description: "Track and manage your expenses efficiently",
    longDescription: "A powerful expense tracking application that helps users monitor their spending habits with detailed analytics and budgeting features along with charting system.",
    live: "https://expense-tracker-app-chi-lyart.vercel.app",
    github: "https://github.com/Rishabh17113012/ExpenseTracker-App",
    image: "/expenseTracker.png"
  },
  {
    title: "To-Do List",
    description: "Simple and effective task management",
    longDescription: "An intuitive to-do list application with task prioritization, and progress tracking features. Visual Immagery is it's forte",
    live: "https://to-do-list-fawn-six-33.vercel.app",
    github: "https://github.com/Rishabh17113012/To-Do-List",
    image: "/Todo.png"
  },
  {
    title: "Task Manager",
    description: "Advanced task management system",
    longDescription: "A comprehensive task management solution with team collaboration features, deadline tracking, and project organization tools.",
    live: "https://task-manager-cyan-nine.vercel.app",
    github: "https://github.com/Rishabh17113012/Task-Manager",
    image: "/TaskManager.png"
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
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="flex-shrink-0 relative group">
                <img 
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110" 
                  src={project.image} 
                  alt={project.title} 
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <p className="text-white text-sm mb-4">{project.longDescription}</p>
                  <div className="space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between bg-white">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="mt-3 text-base text-gray-500">{project.description}</p>
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
