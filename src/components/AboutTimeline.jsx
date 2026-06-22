import { motion } from 'framer-motion'
import { timelineData } from '../data/timeline'
import AnimatedSection from './AnimatedSection'

export default function AboutTimeline() {
  return (
    <AnimatedSection id="about" className="min-h-screen bg-gradient-to-br from-dark-bg via-secondary-bg to-dark-bg py-20 creative-section">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Who Am I?
          </h2>
          <p className="text-text-secondary text-lg">
            My journey of growth, learning, and innovation
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Content */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Left - Content (alternating) */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`kinetic-card p-6 rounded-2xl backdrop-blur-md border border-opacity-20 ${
                      index % 2 === 0
                        ? 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-teal-300 text-right md:text-right'
                        : 'bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-violet-300'
                    }`}
                  >
                    <h3 className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                      {item.year}
                    </h3>
                    <h4 className="text-xl font-semibold text-text-primary mb-3">
                      {item.title}
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center - Timeline Dot */}
                <div className={`relative ${index % 2 === 0 ? 'md:order-2' : 'md:order-2'}`}>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="relative w-6 h-6"
                  >
                    {/* Outer ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 rounded-full border-2 border-transparent border-t-teal-300 border-r-violet-300"
                    />
                    {/* Center dot */}
                    <div className="absolute inset-1 rounded-full bg-gradient-to-r from-teal-300 to-violet-300 shadow-lg shadow-teal-300/50" />
                  </motion.div>

                  {/* Vertical line */}
                  {index !== timelineData.length - 1 && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-teal-300 to-transparent" />
                  )}
                </div>

                {/* Right - Empty (for alignment) */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="kinetic-card mt-16 p-8 rounded-2xl border border-purple-500 border-opacity-20 text-center"
        >
          <p className="text-text-secondary text-lg mb-3">
            Always learning, always building, always innovating
          </p>
          <p className="text-2xl font-bold gradient-text">
            Let's create something amazing together! 🚀
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
