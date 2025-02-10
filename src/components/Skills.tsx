
import { motion } from "framer-motion";

const skills = [
  { category: "Programming Languages", items: ["HTML", "CSS", "JavaScript","TypeScript", "SQL", "C++", "Python", "C", "PHP"] },
  { category: "Developer Tools", items: ["VS Code", "WEKA", "Chrome DevTools", "Jupyter Notebook"] },
  { category: "Technologies/Frameworks", items: ["GitHub", "React", "Node.js", "Vite", "Mail JS", "Particle JS", "Express JS"] },
  { category: "Computer Engineering", items: ["Data Structures", "Algorithms (DSA)", "Object-Oriented Programming (OOP)"] }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Skills</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Technical expertise and tools I work with
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm hover:bg-purple-200 transition-colors cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 glass-card rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Leadership Experience</h3>
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="font-medium text-gray-900">Team Captain, Zonal Railways Cricket Academy</h4>
              <p className="text-gray-600 mt-2">
                • Represented Zonal Railways Cricket Academy as a player and team Captain (2017).<br />
                • Led the team to success in regional tournaments, fostering teamwork and strategic thinking.<br />
                • Demonstrated leadership skills by guiding and mentoring teammates and maintaining a positive team atmosphere.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
