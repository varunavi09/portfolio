import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import TypingEffect from './TypingEffect'
import AnimatedSection from './AnimatedSection'

/**
 * Hero - Full-screen landing section with animated profile and CTA buttons
 */
const Hero = () => {
  const typingItems = ['Full Stack Developer', 'React Developer', 'Problem Solver', 'Tech Enthusiast']

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const socialIcons = [
    { icon: FaGithub, url: 'https://github.com/varunavi09/', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/varunavib/', label: 'LinkedIn' },
    { icon: MdEmail, url: 'mailto:varunavi.vi@gmail.com', label: 'Email' },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background orbs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full filter blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Profile Image Placeholder */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="mb-8 inline-block"
          >
            <div className="relative w-40 h-40 mx-auto mb-8">
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(56, 189, 248, 0.3)',
                    '0 0 40px rgba(56, 189, 248, 0.5)',
                    '0 0 20px rgba(56, 189, 248, 0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-full h-full rounded-full border-2 border-accent overflow-hidden glass"
              >
                <img
                  src="/img/varunavi-profile.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Greeting Text */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
          >
            Hi, I'm <span className="gradient-text">Varun</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl text-text-secondary mb-4"
          >
            B.Tech Information Technology Student
          </motion.h2>

          {/* Typing Effect */}
          <motion.div
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-semibold mb-8 h-12 flex items-center justify-center"
          >
            <TypingEffect items={typingItems} className="text-accent" />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I'm passionate about building modern, responsive web applications with cutting-edge technologies. 
            I love solving complex problems and continuously learning to stay ahead in tech.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(56, 189, 248, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-accent text-dark-bg font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-smooth"
            >
              View Projects
              <FiArrowRight />
            </motion.button>

            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-accent text-accent font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-accent hover:text-dark-bg transition-smooth"
            >
              Download Resume
              <FiDownload />
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            {socialIcons.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#38BDF8' }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl text-text-secondary hover:text-accent transition-smooth"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                title={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-accent text-3xl"
            >
              ↓
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
