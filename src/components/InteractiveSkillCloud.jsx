import { motion } from 'framer-motion'
import { useState } from 'react'
import { allSkills } from '../data/skills'
import AnimatedSection from './AnimatedSection'

export default function InteractiveSkillCloud() {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const categories = [
    'Programming Languages',
    'Frontend',
    'Backend',
    'Database',
    'AI & ML',
    'Data',
    'Tools'
  ]

  const filteredSkills = selectedCategory
    ? allSkills.filter(skill => skill.category === selectedCategory)
    : allSkills

  return (
    <AnimatedSection id="skills" className="min-h-screen bg-gradient-to-br from-dark-bg via-secondary-bg to-dark-bg py-20 creative-section">
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
            Interactive Skill Cloud
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Hover over skills to explore categories and discover my tech stack
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === null
                ? 'bg-gradient-to-r from-teal-300 to-violet-300 text-dark-bg shadow-lg shadow-teal-300/20'
                : 'bg-secondary-bg/70 text-text-secondary hover:text-text-primary border border-white/10'
            }`}
          >
            All Skills
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-teal-300 to-violet-300 text-dark-bg shadow-lg shadow-teal-300/20'
                  : 'bg-secondary-bg/70 text-text-secondary hover:text-text-primary border border-white/10'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skill Cloud */}
        <motion.div
          layout
          className="kinetic-card flex flex-wrap justify-center gap-4 p-8 rounded-[2rem] border border-teal-300/20"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: 'spring', delay: index * 0.02 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="relative"
            >
              {/* Skill Badge */}
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                className={`px-4 py-2 rounded-full font-semibold cursor-pointer transition-all duration-300 ${
                  hoveredSkill === skill.name
                    ? 'bg-gradient-to-r from-teal-300 to-violet-300 text-dark-bg shadow-lg shadow-teal-300/40'
                    : 'bg-gradient-to-r from-dark-bg to-secondary-bg text-text-primary border border-teal-300/30 hover:border-violet-300/70'
                }`}
              >
                {skill.name}
              </motion.div>

              {/* Tooltip */}
              {hoveredSkill === skill.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: -40 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gradient-to-r from-teal-500 to-violet-500 text-white text-xs rounded-lg whitespace-nowrap z-10 shadow-lg"
                >
                  <p className="font-semibold">{skill.name}</p>
                  {skill.tooltip && (
                    <p className="text-cyan-100 text-xs mt-1">{skill.tooltip}</p>
                  )}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </AnimatedSection>
  )
}
