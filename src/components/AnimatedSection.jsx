import { motion } from 'framer-motion'

/**
 * AnimatedSection - Wrapper component for sections with fade-in and slide-up animations
 */
const AnimatedSection = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  ...props
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: delay,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
