import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { MdVerifiedUser } from 'react-icons/md'
import AnimatedSection from './AnimatedSection'
import { certificationsData } from '../data/certifications'

/**
 * Certifications - Display earned certifications with details
 */
const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="certifications" className="creative-section py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-text-secondary text-lg">
              Professional credentials and achievements
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="kinetic-card rounded-[1.5rem] overflow-hidden border border-accent/20 hover:border-violet-300/50 transition-smooth h-full flex flex-col">
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden bg-dark-secondary">
                  <motion.img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-dark-bg bg-opacity-70 flex items-center justify-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 20 }}
                      className="text-6xl"
                    >
                      🏆
                    </motion.div>
                  </motion.div>
                </div>

                {/* Certificate Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start gap-3 mb-3">
                    <MdVerifiedUser className="text-accent text-xl flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-bold line-clamp-2">{cert.title}</h3>
                  </div>

                  <p className="text-text-secondary text-sm mb-2">
                    <span className="font-semibold">{cert.organization}</span>
                  </p>

                  <p className="text-text-secondary text-sm mb-4">
                    {cert.date}
                  </p>

                  <p className="text-text-secondary text-xs mb-4">
                    ID: {cert.credentialId}
                  </p>

                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(94, 234, 212, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    className="holo-button mt-auto w-full px-4 py-2 font-bold rounded-lg flex items-center justify-center gap-2 transition-smooth"
                  >
                    View Certificate
                    <FiExternalLink />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
