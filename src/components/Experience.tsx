import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, Code, Palette, MapPin, TrendingUp, Award, Zap, ChevronRight, Terminal, Sparkles } from "lucide-react";

const experiences = [
  {
    company: "Moronss",
    role: "Full Stack Developer Intern",
    period: "2024",
    location: "Remote",
    description: "Architected and deployed enterprise-grade web applications using modern full-stack technologies. Led development initiatives that enhanced system performance and user engagement.",
    icon: Code,
    color: "purple",
    achievements: [
      "Engineered 3+ production-ready full-stack applications with 99.9% uptime",
      "Optimized database architecture, boosting query performance by 40%",
      "Spearheaded responsive design implementation across 10+ pages",
      "Integrated RESTful APIs with seamless frontend-backend communication"
    ],
    skills: ["React", "Node.js", "MongoDB", "REST APIs", "Git", "Express.js"],
    impact: "Increased user engagement by 35%"
  },
  {
    company: "Cognifyz",
    role: "Frontend Developer Intern",
    period: "2024",
    location: "Remote",
    description: "Pioneered UI/UX excellence through cutting-edge React components and accessibility-first design principles. Transformed user interfaces into seamless, performant experiences.",
    icon: Palette,
    color: "blue",
    achievements: [
      "Architected 15+ production-grade reusable React components",
      "Elevated accessibility standards to WCAG 2.1 AA compliance",
      "Slashed page load times by 30% through advanced optimization",
      "Collaborated with design team to implement pixel-perfect interfaces"
    ],
    skills: ["React", "Tailwind CSS", "JavaScript", "TypeScript", "Figma", "CSS3"],
    impact: "Reduced bounce rate by 25%"
  }
];

// Simple icon component for corners
const Icon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0L8 0L8 2L2 2L2 8L0 8L0 0Z" fill="currentColor"/>
  </svg>
);

// Simple evervault-style card
const EvervaultCard = ({ text }) => (
  <div className="relative w-full h-16 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg flex items-center justify-center border border-purple-200 dark:border-purple-400/30 overflow-hidden">
    <motion.div
      className="absolute inset-0 opacity-20"
      animate={{
        backgroundPosition: ['0% 0%', '100% 100%'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    />
    <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 relative z-10">
      {text}
    </h2>
  </div>
);

const HolographicBorder = () => (
  <motion.div
    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    style={{
      background: 'linear-gradient(45deg, transparent 30%, rgba(139, 92, 246, 0.05) 50%, transparent 70%)',
      backgroundSize: '200% 200%',
    }}
    animate={{
      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }}
  />
);

const ScanLineEffect = () => (
  <motion.div
    className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden opacity-0 group-hover:opacity-20"
    initial={{ y: '-100%' }}
    animate={{ y: '100%' }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }}
  >
    <div className="w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
  </motion.div>
);

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: i => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: i * 0.2
    }
  })
};

const glitchVariants = {
  initial: { x: 0 },
  glitch: {
    x: [-2, 2, -2, 2, 0],
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatDelay: 3
    }
  }
};

const particleVariants = {
  animate: {
    scale: [0, 1, 0],
    opacity: [0, 0.3, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Experience = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 bg-gray-50">
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          variants={particleVariants}
          animate="animate"
          transition={{
            delay: Math.random() * 2,
            duration: 2 + Math.random() * 2
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="relative p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg shadow-lg"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(139, 92, 246, 0.3)',
                  '0 0 40px rgba(59, 130, 246, 0.3)',
                  '0 0 20px rgba(139, 92, 246, 0.3)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Briefcase className="w-6 h-6 text-white" />
              <motion.div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600"
              variants={glitchVariants}
              initial="initial"
              animate="glitch"
            >
              Professional Experience
            </motion.h1>
            <motion.div
              className="absolute -right-6 -top-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-purple-600" />
            </motion.div>
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
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            <motion.span
              className="inline-block text-purple-600"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ▸
            </motion.span>
            {" "}Showcasing mission-critical projects where innovation meets execution
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto"
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
                onHoverStart={() => setHoveredCard(idx)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group"
                style={{ perspective: '1000px' }}
              >
                <div className="relative border-2 border-purple-200 dark:border-purple-300 flex flex-col w-full p-5 bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden h-full">
                  {/* Jarvis-like corner accents */}
                  <Icon className="absolute h-4 w-4 -top-2 -left-2 text-purple-600 dark:text-white" />
                  <Icon className="absolute h-4 w-4 -bottom-2 -left-2 text-blue-600 dark:text-white" />
                  <Icon className="absolute h-4 w-4 -top-2 -right-2 text-blue-600 dark:text-white" />
                  <Icon className="absolute h-4 w-4 -bottom-2 -right-2 text-purple-600 dark:text-white" />
                  
                  {/* Holographic effects */}
                  <HolographicBorder />
                  <ScanLineEffect />
                  
                  {/* Animated circuit lines */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                      opacity: hoveredCard === idx ? [0, 1, 0] : 0
                    }}
                    transition={{
                      duration: 2,
                      repeat: hoveredCard === idx ? Infinity : 0,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Icon with energy field */}
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 flex items-center justify-center shadow-lg border-2 border-purple-300"
                    animate={{
                      boxShadow: hoveredCard === idx 
                        ? ['0 0 20px rgba(139, 92, 246, 0.3)', '0 0 40px rgba(59, 130, 246, 0.5)', '0 0 20px rgba(139, 92, 246, 0.3)']
                        : '0 0 20px rgba(139, 92, 246, 0.2)'
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <IconComponent className="w-5 h-5 text-purple-600" />
                  </motion.div>

                  <div className="w-full mb-4">
                    <EvervaultCard text={exp.company} />
                  </div>

                  {/* Terminal-style header */}
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="w-3 h-3 text-purple-600" />
                    <motion.div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            backgroundColor: i === 0 ? '#ef4444' : i === 1 ? '#f59e0b' : '#10b981'
                          }}
                          animate={{
                            opacity: hoveredCard === idx ? [0.5, 1, 0.5] : 0.5
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>

                  <motion.h2 
                    className="text-gray-900 dark:text-white text-lg font-bold mb-2 flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + idx * 0.2 }}
                  >
                    <ChevronRight className="w-4 h-4 text-purple-600" />
                    {exp.role}
                  </motion.h2>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <motion.div
                      className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-600/20 border border-purple-300 dark:border-purple-400/30 text-xs text-purple-700 dark:text-purple-300"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
                    >
                      <Calendar className="w-3 h-3" />
                      <span className="font-medium">{exp.period}</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-600/20 border border-blue-300 dark:border-blue-400/30 text-xs text-blue-700 dark:text-blue-300"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                    >
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </motion.div>
                  </div>

                  <motion.p 
                    className="text-gray-700 dark:text-gray-300 text-xs leading-relaxed mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + idx * 0.2 }}
                  >
                    {exp.description}
                  </motion.p>

                  {/* Impact badge */}
                  <motion.div
                    className="flex items-center gap-2 mb-3 px-2 py-1.5 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-600/20 dark:to-blue-600/20 border border-purple-200 dark:border-purple-400/30"
                    whileHover={{ scale: 1.02 }}
                  >
                    <TrendingUp className="w-3 h-3 text-purple-600" />
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">{exp.impact}</span>
                  </motion.div>

                  {/* Achievements with animated bullets */}
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-3 h-3 text-purple-600" />
                      <h3 className="text-gray-900 dark:text-white font-semibold text-xs">KEY ACHIEVEMENTS:</h3>
                    </div>
                    <AnimatePresence>
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.5 + idx * 0.2 + i * 0.1,
                            type: "spring",
                            stiffness: 100
                          }}
                          className="flex items-start gap-2 mb-1.5 group/item"
                        >
                          <motion.div
                            className="mt-1"
                            animate={{
                              rotate: hoveredCard === idx ? 360 : 0
                            }}
                            transition={{ duration: 1, repeat: hoveredCard === idx ? Infinity : 0 }}
                          >
                            <Zap className="w-2.5 h-2.5 text-purple-600" />
                          </motion.div>
                          <span className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-gray-300 transition-colors">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.6 + idx * 0.2 + i * 0.05,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: 'rgba(139, 92, 246, 0.2)',
                          borderColor: 'rgba(139, 92, 246, 0.6)'
                        }}
                        className="px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-800/50 text-purple-700 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-400/30 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Animated bottom accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-blue-400 to-purple-600"
                    initial={{ scaleX: 0 }}
                    animate={{ 
                      scaleX: hoveredCard === idx ? 1 : 0,
                      opacity: hoveredCard === idx ? [0.5, 1, 0.5] : 0
                    }}
                    transition={{ 
                      scaleX: { duration: 0.3 },
                      opacity: { duration: 1.5, repeat: Infinity }
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;