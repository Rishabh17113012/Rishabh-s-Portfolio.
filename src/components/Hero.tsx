import React from 'react';
import { motion } from "framer-motion";
import { Github, LinkedinIcon, Mail, InstagramIcon } from "lucide-react";

const socialVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: i * 0.1
    }
  })
};

const pulseVariants = {
  initial: { scale: 1, opacity: 0 },
  animate: { 
    scale: [1, 1.2, 1],
    opacity: [0, 0.5, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="relative w-32 h-32 mx-auto mb-8 group"
          >
            <motion.img
              src="/profile.jpg"
              alt="Profile"
              className="rounded-full object-cover w-full h-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-purple-600/20"
              variants={pulseVariants}
              initial="initial"
              animate="animate"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2 
            }}
            className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
          >
            <motion.span 
              className="block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Hi, I'm Rishabh
            </motion.span>
            <motion.span 
              className="block text-purple-600"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Full Stack Developer
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.4 
            }}
            className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            A passionate developer with expertise in full-stack web development, 
            bringing creative ideas to life with modern technologies. Currently pursuing 
            a Bachelor's degree in Computer Engineering at Bharati Vidyapeeth College of Engineering, 
            I specialize in building scalable and efficient applications. I love tackling challenges 
            and continuously improving my skills in software development.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            className="mt-8 flex justify-center space-x-6"
          >
            {[
              { href: "https://github.com/Rishabh17113012", Icon: Github },
              { href: "https://www.linkedin.com/in/rishabh-dev-mani-tripathi-92a8b724a/", Icon: LinkedinIcon },
              { href: "mailto:workwebdevtripathi736@gmail.com", Icon: Mail },
              { href: "https://www.instagram.com/rishabhtripathiii_?igsh=YnNxdmF1Z3VveTFs", Icon: InstagramIcon }
            ].map(({ href, Icon }, index) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                custom={index}
                variants={socialVariants}
                whileHover={{ 
                  scale: 1.2,
                  color: "#6B46C1",
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="text-gray-500 transition-colors"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.8 
            }}
            className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
          >
            <motion.div 
              className="rounded-md shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                whileHover={{ 
                  backgroundColor: "#553C9A",
                  boxShadow: "0 4px 15px rgba(107, 70, 193, 0.4)"
                }}
              >
                Hire Me
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;