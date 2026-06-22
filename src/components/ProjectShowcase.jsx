import { motion } from 'framer-motion'
import { projectsData } from '../data/projects'
import { FiArrowRight, FiGithub } from 'react-icons/fi'
import AnimatedSection from './AnimatedSection'

export default function ProjectShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <AnimatedSection id="projects" className="min-h-screen bg-gradient-to-br from-dark-bg via-secondary-bg to-dark-bg py-20 creative-section">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Showcase Projects
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Innovative solutions that showcase my full-stack expertise and problem-solving abilities
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group h-full"
            >
              {/* Project Card */}
              <div className="kinetic-card relative h-full rounded-[1.75rem] overflow-hidden border border-teal-300/20 transition-all duration-500 hover:border-violet-300/50 hover:shadow-2xl hover:shadow-violet-500/20">
                {/* Background Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-teal-300/20 to-violet-400/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/10 to-dark-bg" />

                  {/* Category Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-teal-300 to-violet-300 text-dark-bg rounded-full text-sm font-bold"
                  >
                    {project.category}
                  </motion.div>

                  {/* Icon */}
                  <div className="absolute top-4 right-4 text-5xl">{project.icon}</div>
                </div>

                {/* Content */}
                <div className="p-8 relative z-10">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-teal-200 transition-colors">
                    {project.title}
                  </h3>

                  {/* Story */}
                  <p className="text-text-secondary text-base leading-relaxed mb-6">
                    {project.story}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="text-text-secondary text-sm flex items-center"
                        >
                          <span className="w-2 h-2 bg-teal-300 rounded-full mr-3 shadow-[0_0_12px_rgba(94,234,212,0.8)]" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-teal-300/10 text-teal-100 rounded-full border border-teal-300/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="text-xs font-bold text-violet-100 bg-violet-400/10 px-3 py-1 rounded-full border border-violet-300/20"
                      >
                        ⭐ {highlight}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-teal-300/20">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-secondary-bg border border-teal-300/40 text-teal-100 rounded-lg font-semibold hover:border-opacity-100 hover:bg-teal-300/10 transition-all"
                    >
                      <FiGithub size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.liveDemo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="holo-button flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-bold hover:shadow-lg hover:shadow-teal-300/30 transition-all"
                    >
                      Demo
                      <FiArrowRight size={16} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
