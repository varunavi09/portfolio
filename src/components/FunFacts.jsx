import { motion } from 'framer-motion'
import { funFactsData } from '../data/funFacts'
import AnimatedSection from './AnimatedSection'

export default function FunFacts() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <AnimatedSection className="min-h-screen bg-gradient-to-br from-dark-bg via-secondary-bg to-dark-bg py-20 creative-section">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Things I Enjoy
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            What makes me tick and fuels my passion for technology
          </p>
        </motion.div>

        {/* Fun Facts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {funFactsData.map((fact) => (
            <motion.div
              key={fact.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group"
            >
              {/* Card */}
              <div className="kinetic-card relative h-full p-6 rounded-2xl border border-teal-300/20 hover:border-violet-300/60 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20">
                {/* Icon */}
                <motion.div
                  className="text-5xl mb-4 text-center group-hover:scale-110 transition-transform"
                >
                  {fact.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-bold text-text-primary text-center mb-2 group-hover:text-teal-200 transition-colors">
                  {fact.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {fact.description}
                </p>

                {/* Gradient background on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-300 to-violet-400 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary text-lg mb-4">
            My passion drives my commitment to excellence in every project
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl"
          >
            ✨
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
