import { motion } from 'framer-motion'
import { FaAward, FaUsers, FaMicrophone } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'
import { achievementsData } from '../data/achievements'

/**
 * Achievements - Timeline layout of accomplishments and awards
 */
const Achievements = () => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'competition':
        return <FaAward className="text-2xl text-accent" />
      case 'workshop':
        return <FaUsers className="text-2xl text-accent" />
      case 'seminar':
        return <FaMicrophone className="text-2xl text-accent" />
      default:
        return <FaAward className="text-2xl text-accent" />
    }
  }

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-text-secondary text-lg">
              Recognition and milestones
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-accent via-accent hidden md:block"
          />

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-12">
            {achievementsData.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="absolute left-2 top-2 w-12 h-12 bg-dark-bg border-4 border-accent rounded-full flex items-center justify-center hidden md:flex"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, linear: true }}
                  >
                    {getCategoryIcon(achievement.category)}
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="md:ml-32 glass p-6 sm:p-8 rounded-xl border border-accent border-opacity-10 hover:border-opacity-30 transition-smooth group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="md:hidden">
                      {getCategoryIcon(achievement.category)}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="text-xl sm:text-2xl font-bold">
                          {achievement.title}
                        </h3>
                        <span className="text-text-secondary text-sm">
                          {achievement.date}
                        </span>
                      </div>
                      <p className="text-accent font-semibold mb-2">
                        {achievement.event}
                      </p>
                      <p className="text-text-secondary leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>

                  {/* Category badge */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-block mt-4 px-4 py-2 rounded-full bg-accent bg-opacity-10 text-accent text-sm font-semibold border border-accent border-opacity-30 capitalize"
                  >
                    {achievement.category}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements stats */}
        <AnimatedSection delay={0.5} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-lg border border-accent border-opacity-10 text-center"
            >
              <motion.p
                className="text-3xl font-bold gradient-text mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                1
              </motion.p>
              <p className="text-text-secondary text-sm">First Prize</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-lg border border-accent border-opacity-10 text-center"
            >
              <motion.p
                className="text-3xl font-bold gradient-text mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                4+
              </motion.p>
              <p className="text-text-secondary text-sm">Events</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-lg border border-accent border-opacity-10 text-center"
            >
              <motion.p
                className="text-3xl font-bold gradient-text mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                2024
              </motion.p>
              <p className="text-text-secondary text-sm">Year</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-lg border border-accent border-opacity-10 text-center"
            >
              <motion.p
                className="text-3xl font-bold gradient-text mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                🚀
              </motion.p>
              <p className="text-text-secondary text-sm">Growing</p>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Achievements
