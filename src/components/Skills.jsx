import { motion } from 'framer-motion'
import { FaJs, FaJava, FaDatabase, FaCode, FaTools, FaHtml5, FaCss3 } from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'
import AnimatedSection from './AnimatedSection'
import { allSkills } from '../data/skills'

/**
 * Skills - Showcase technical skills with category grouping
 */
const Skills = () => {
  const skillCategories = [
    {
      name: 'Programming Languages',
      icon: '💻',
      skills: ['JavaScript', 'Java', 'SQL', 'HTML', 'CSS'],
    },
    {
      name: 'Frontend',
      icon: '🎨',
      skills: ['React', 'Tailwind CSS', 'Bootstrap', 'Framer Motion'],
    },
    {
      name: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Express.js'],
    },
    {
      name: 'Database',
      icon: '🗄️',
      skills: ['MongoDB', 'MySQL'],
    },
    {
      name: 'Tools & Platforms',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-text-secondary text-lg">
              Technologies I've mastered
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-6 sm:p-8 rounded-xl border border-accent border-opacity-10 group hover:border-opacity-30 transition-smooth"
            >
              {/* Category Header */}
              <div className="mb-6 flex items-center gap-3">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-accent">{category.name}</h3>
              </div>

              {/* Skills Grid */}
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-3 group/item"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full bg-accent"
                      whileHover={{ scale: 2 }}
                    />
                    <span className="text-text-secondary group-hover/item:text-accent transition-smooth">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative accent */}
              <motion.div
                className="mt-6 h-1 bg-gradient-to-r from-accent to-transparent rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Icons */}
        <AnimatedSection delay={0.3} className="mt-16">
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Technology Stack</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {['JavaScript', 'Java', 'React', 'Node.js', 'MongoDB', 'MySQL', 'Git', 'HTML'].map((tech, index) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center p-4 glass rounded-lg border border-accent border-opacity-10 hover:border-opacity-30 group cursor-pointer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span className="text-2xl group-hover:text-accent transition-smooth">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Skills
