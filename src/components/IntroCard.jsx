import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload } from 'react-icons/fi'
import { MdLocationOn } from 'react-icons/md'
import { GiGraduateCap } from 'react-icons/gi'
import { MdComputer } from 'react-icons/md'

/**
 * IntroCard - Professional introduction card component
 * Serves as the landing screen/digital visiting card
 */
const IntroCard = ({ onExplore }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative pt-16 pb-16 creative-section"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl relative z-10"
      >
        {/* Main Introduction Card */}
        <motion.div
          variants={cardVariants}
          className="kinetic-card rounded-[2rem] p-8 sm:p-12 lg:p-16 border border-accent border-opacity-20 overflow-hidden group relative"
        >
          <div className="scanline opacity-40" />
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-teal-300/20 blur-3xl" />

          <motion.div
            className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 p-[2px] pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            style={{
              background: 'linear-gradient(135deg, #5EEAD4, #93C5FD, #C084FC, #F472B6)',
              backgroundSize: '220% 220%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          <div className="relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Profile Image */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center md:justify-start"
              >
                <div className="relative">
                  {/* Outer glow circle */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 30px rgba(94, 234, 212, 0.32)',
                        '0 0 70px rgba(192, 132, 252, 0.55)',
                        '0 0 30px rgba(244, 114, 182, 0.28)',
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-accent"
                  >
                    <img
                      src="/img/varunavi-profile.jpeg"
                      alt="Varunavi B"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Floating accent circles */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="orbit-ring"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    className="absolute -inset-9 rounded-full border border-dashed border-violet-300/25"
                  />
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -right-4 top-10 rounded-2xl border border-teal-200/20 bg-dark-bg/70 px-3 py-2 text-xs font-bold text-teal-200 backdrop-blur-md"
                  >
                    OPEN TO BUILD
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Side - Introduction Content */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {/* Greeting */}
                <motion.div variants={itemVariants}>
                  <p className="mb-3 inline-flex rounded-full border border-teal-200/20 bg-teal-300/10 px-4 py-2 text-sm font-semibold text-teal-100">
                    Digital portfolio // creative developer mode
                  </p>
                  <h1 className="text-4xl sm:text-5xl font-bold mb-2">
                    Hi, I'm <span className="gradient-text">Varunavi B</span>
                  </h1>
                  <h2 className="text-xl sm:text-2xl text-teal-200 font-semibold">
                    I build interfaces that feel alive, useful, and memorable.
                  </h2>
                </motion.div>

                {/* Description */}
                <motion.div variants={itemVariants} className="space-y-4">
                  <p className="text-text-secondary text-lg leading-relaxed">
                    I am currently pursuing my 3rd year of B.Tech in Information Technology,
                    exploring the sweet spot between full-stack engineering, UI craft, and
                    practical problem solving.
                  </p>

                  <div className="space-y-3">
                    <p className="text-accent font-semibold">Current creative stack:</p>
                    <div className="flex flex-wrap gap-2 text-sm">
                      {['Full Stack', 'UI/UX', 'React', 'AI Ideas', 'Problem Solving'].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-teal-200/20 bg-white/5 px-3 py-1 text-text-primary"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-text-secondary text-lg leading-relaxed">
                    I enjoy turning fuzzy ideas into polished, real-world products with
                    motion, clarity, and a little spark.
                  </p>
                </motion.div>

                {/* Details Grid */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-2 gap-4 py-6 border-y border-accent border-opacity-10"
                >
                  <div className="flex items-center gap-3">
                    <MdLocationOn className="text-2xl text-teal-200" />
                    <div>
                      <p className="text-xs text-text-secondary uppercase">Location</p>
                      <p className="font-semibold text-text-primary">Tamil Nadu, India</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <GiGraduateCap className="text-2xl text-violet-200" />
                    <div>
                      <p className="text-xs text-text-secondary uppercase">Role</p>
                      <p className="font-semibold text-text-primary">B.Tech IT (3rd Year)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 col-span-2">
                    <MdComputer className="text-2xl text-pink-200" />
                    <div>
                      <p className="text-xs text-text-secondary uppercase">Focus Areas</p>
                      <p className="font-semibold text-text-primary">Full Stack & UI/UX Design</p>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 0 30px rgba(56, 189, 248, 0.5)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onExplore}
                    className="holo-button px-8 py-3 font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-smooth group"
                  >
                    Explore My Portfolio
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FiArrowRight className="group-hover:text-dark-bg" />
                    </motion.div>
                  </motion.button>

                  <motion.a
                    href="/resume.pdf"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border-2 border-accent/70 text-accent font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-accent hover:text-dark-bg transition-smooth"
                  >
                    Download Resume
                    <FiDownload />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator or bottom text */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 text-center text-text-secondary text-sm"
        >
          <p>Click "Explore My Portfolio" to continue</p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default IntroCard
