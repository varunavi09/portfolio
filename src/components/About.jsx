import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

/**
 * About - Professional about-me section with statistics
 */
const About = () => {
  const stats = [
    { number: '10+', label: 'Projects Completed', icon: '💻' },
    { number: '5+', label: 'Certifications', icon: '🏆' },
    { number: '20+', label: 'Technologies Learned', icon: '🚀' },
  ]

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-opacity-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-text-secondary text-lg">
              Get to know me better
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold">
                I'm a <span className="gradient-text">passionate developer</span> and learner
              </h3>

              <p className="text-text-secondary text-lg leading-relaxed">
                As a 3rd-year B.Tech Information Technology student, I've developed a strong passion for web development 
                and modern technologies. I love creating intuitive, user-friendly applications that solve real-world problems.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-2xl mt-1">🎓</div>
                  <div>
                    <h4 className="font-bold text-lg">Education First</h4>
                    <p className="text-text-secondary">Pursuing B.Tech in Information Technology</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl mt-1">💡</div>
                  <div>
                    <h4 className="font-bold text-lg">Problem Solver</h4>
                    <p className="text-text-secondary">Love tackling complex challenges with creative solutions</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl mt-1">🚀</div>
                  <div>
                    <h4 className="font-bold text-lg">Tech Enthusiast</h4>
                    <p className="text-text-secondary">Always learning and exploring new technologies</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl mt-1">🛠️</div>
                  <div>
                    <h4 className="font-bold text-lg">Full Stack Developer</h4>
                    <p className="text-text-secondary">Building real-world projects from frontend to backend</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Content - Stats */}
          <AnimatedSection delay={0.3}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="glass p-8 rounded-xl border border-accent border-opacity-20 group cursor-pointer"
                >
                  <motion.div
                    className="flex items-center gap-6"
                    whileHover={{ gap: 8 }}
                  >
                    <span className="text-5xl group-hover:scale-125 transition-transform duration-300">
                      {stat.icon}
                    </span>
                    <div>
                      <motion.p
                        className="text-4xl font-bold gradient-text"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        {stat.number}
                      </motion.p>
                      <p className="text-text-secondary text-lg">{stat.label}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default About
