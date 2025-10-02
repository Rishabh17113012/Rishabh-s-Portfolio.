import React from 'react';
import { motion } from "framer-motion";
import { Briefcase, Calendar, Code, Palette } from "lucide-react";
import { BackgroundBeams } from './ui/background-beams';
import { EvervaultCard, Icon } from './ui/evervault-card';

const experiences = [
  {
    company: "Moronss",
    role: "Full Stack Developer Intern @ The Moronss",
    description: "Worked on building scalable web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality products.",
    icon: Code,
    color: "purple"
  },
  {
    company: "Cognifyz",
    role: "Frontend Developer Intern @ Cognifyz",
    description: "Designed and implemented responsive UI components with React and Tailwind CSS. Improved user experience and accessibility across the platform.",
    icon: Palette,
    color: "blue"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: i * 0.2
    }
  })
};

const iconVariants = {
  hover: {
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Briefcase className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">
              Experience
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2 
            }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Here are some of the roles and internships I've undertaken, showcasing my skills and growth as a developer.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {experiences.map((exp, idx) => {
            const IconComponent = exp.icon;
            return (
              <motion.div
                key={exp.company}
                custom={idx}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="relative"
              >
                <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-full p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg relative overflow-hidden group">
                  <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                  <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                  <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                  <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
                  
                  <motion.div
                    className="absolute top-6 right-6 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <IconComponent className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </motion.div>

                  <div className="w-full mb-6">
                    <EvervaultCard text={exp.company} />
                  </div>

                  <motion.h2 
                    className="dark:text-white text-gray-900 text-xl font-bold mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + idx * 0.2 }}
                  >
                    {exp.role}
                  </motion.h2>

                  <motion.p 
                    className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + idx * 0.2 }}
                  >
                    {exp.description}
                  </motion.p>

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <BackgroundBeams className="absolute z-0 inset-0 pointer-events-none" />
    </section>
  );
};

export default Experience;