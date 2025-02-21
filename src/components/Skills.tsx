import React from 'react';
import { motion } from "framer-motion";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript, 
  SiMysql, 
  SiCplusplus, 
  SiPython, 
  SiC, 
  SiPhp, 
  SiJupyter, 
  SiGithub, 
  SiReact, 
  SiNodedotjs, 
  SiVite,
  SiGooglechrome
} from 'react-icons/si';
import { Mail, Wrench, Cpu, Zap, Server, Code } from 'lucide-react';

// Define a common type that accepts size as either a number or string.
type IconComponentType = React.ComponentType<{ size?: number | string; className?: string }>;

const skillIconMap: Record<string, IconComponentType> = {
  "HTML": SiHtml5,
  "CSS": SiCss3,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "SQL": SiMysql,
  "C++": SiCplusplus,
  "Python": SiPython,
  "C": SiC,
  "PHP": SiPhp,
  "VS Code": Code,             
  "WEKA": Wrench,             
  "Chrome DevTools": SiGooglechrome, 
  "Jupyter Notebook": SiJupyter,
  "GitHub": SiGithub,
  "React": SiReact,
  "Node.js": SiNodedotjs,
  "Vite": SiVite,
  "Mail JS": Mail,
  "Particle JS": Zap,
  "Express JS": Server,
  "Data Structures": Cpu,
  "Algorithms (DSA)": Cpu,
  "Object-Oriented Programming (OOP)": Cpu
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Skills</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Technical expertise and tools I work with
          </p>
        </motion.div>

        <motion.div 
          className="mt-12 grid gap-8 sm:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              category: "Programming Languages",
              items: ["HTML", "CSS", "JavaScript", "TypeScript", "SQL", "C++", "Python", "C", "PHP"]
            },
            {
              category: "Developer Tools",
              items: ["VS Code", "WEKA", "Chrome DevTools", "Jupyter Notebook"]
            },
            {
              category: "Technologies/Frameworks",
              items: ["GitHub", "React", "Node.js", "Vite", "Mail JS", "Particle JS", "Express JS"]
            },
            {
              category: "Computer Engineering",
              items: ["Data Structures", "Algorithms (DSA)", "Object-Oriented Programming (OOP)"]
            }
          ].map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={cardVariants}
              className="glass-card rounded-lg p-6 transition-all duration-300 backdrop-blur-sm bg-white/80 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {skillGroup.category}
              </h3>
              <motion.div 
                className="grid grid-cols-3 sm:grid-cols-4 gap-4 justify-items-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skillGroup.items.map((skill) => {
                  const IconComponent = skillIconMap[skill];
                  return (
                    <motion.div
                      key={skill}
                      variants={skillVariants}
                      whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                      className="flex flex-col items-center"
                    >
                      {IconComponent && (
                        <IconComponent size={40} className="text-purple-600" />
                      )}
                      <span className="mt-1 text-sm text-gray-700 text-center">{skill}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
