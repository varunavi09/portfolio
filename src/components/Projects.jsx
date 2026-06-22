import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import AnimatedSection from './AnimatedSection'
import { projectsData } from '../data/projects'

/**
 * Projects - Showcase portfolio projects with detailed cards
 */
const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-text-secondary text-lg">
              Showcasing my best work and expertise
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <div className="glass rounded-xl overflow-hidden border border-accent border-opacity-10 hover:border-opacity-30 transition-smooth">
                {/* Project Image */}
                <div className="relative h-64 sm:h-80 overflow-hidden bg-dark-secondary">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-dark-bg bg-opacity-70 flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-accent rounded-full text-dark-bg hover:bg-opacity-90 transition-smooth"
                      title="View on GitHub"
                    >
                      <FiGithub size={24} />
                    </motion.a>
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-accent rounded-full text-dark-bg hover:bg-opacity-90 transition-smooth"
                      title="View Live Demo"
                    >
                      <FiExternalLink size={24} />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-text-secondary text-lg mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.highlights.map((highlight) => (
                      <motion.span
                        key={highlight}
                        whileHover={{ scale: 1.05 }}
                        className="text-sm bg-accent bg-opacity-10 text-accent px-3 py-1 rounded-full border border-accent border-opacity-30"
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-text-secondary text-sm font-semibold mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <motion.div
                          key={tech}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-4 py-2 rounded-lg bg-dark-secondary border border-accent border-opacity-20 text-accent text-sm hover:border-opacity-50 transition-smooth"
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)' }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-accent text-dark-bg font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-smooth"
                    >
                      <FiGithub />
                      View Code
                    </motion.a>
                    <motion.a
                      href={"https://sentimentanalysisappnlp-exsshvxf5axgqcvh6fzmxy.streamlit.app/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)' }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 border-2 border-accent text-accent font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-accent hover:text-dark-bg transition-smooth"
                    >
                      Live Demo
                      <FiExternalLink />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
