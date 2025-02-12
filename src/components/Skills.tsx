import React from 'react';
import { motion } from "framer-motion";

const skills = [
  { category: "Programming Languages", items: ["HTML", "CSS", "JavaScript", "TypeScript", "SQL", "C++", "Python", "C", "PHP"] },
  { category: "Developer Tools", items: ["VS Code", "WEKA", "Chrome DevTools", "Jupyter Notebook"] },
  { category: "Technologies/Frameworks", items: ["GitHub", "React", "Node.js", "Vite", "Mail JS", "Particle JS", "Express JS"] },
  { category: "Computer Engineering", items: ["Data Structures", "Algorithms (DSA)", "Object-Oriented Programming (OOP)"] }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const skillVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            type: "spring",
            stiffness: 100 
          }}
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
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
              className="glass-card rounded-lg p-6 hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/80"
            >
              <motion.h3 
                className="text-lg font-semibold text-gray-900 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                viewport={{ once: true }}
              >
                {skillGroup.category}
              </motion.h3>
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skillGroup.items.map((skill, index) => (
                  <motion.span
                    key={skill}
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "#E9D5FF",
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }
                    }}
                    className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm transition-all cursor-pointer shadow-sm hover:shadow-md"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 glass-card rounded-lg p-6 hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/80"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Leadership Experience</h3>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 12,
              delay: 0.2
            }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div>
              <h4 className="font-medium text-gray-900">Team Captain, Zonal Railways Cricket Academy</h4>
              <motion.p 
                className="text-gray-600 mt-2 space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div>• Represented Zonal Railways Cricket Academy as a player and team Captain (2017).</div>
                <div>• Led the team to success in regional tournaments, fostering teamwork and strategic thinking.</div>
                <div>• Demonstrated leadership skills by guiding and mentoring teammates and maintaining a positive team atmosphere.</div>
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;