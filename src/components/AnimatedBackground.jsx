import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  const auroras = [
    { className: 'top-[-12%] left-[-8%] h-72 w-[42rem] bg-teal-300/20', duration: 14, rotate: -8 },
    { className: 'top-[18%] right-[-16%] h-80 w-[48rem] bg-violet-400/18', duration: 18, rotate: 12 },
    { className: 'bottom-[-18%] left-[18%] h-96 w-[46rem] bg-pink-400/12', duration: 20, rotate: -14 },
  ]

  const particles = Array.from({ length: 18 }, (_, index) => ({
    left: `${(index * 37) % 100}%`,
    top: `${(index * 53) % 100}%`,
    delay: (index % 7) * 0.45,
    duration: 5 + (index % 5),
  }))

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(248,250,252,0.08),transparent_1px)] [background-size:34px_34px] opacity-30" />

      {auroras.map((aurora, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-3xl ${aurora.className}`}
          animate={{
            x: [0, index % 2 === 0 ? 46 : -36, 0],
            y: [0, index % 2 === 0 ? 28 : -22, 0],
            rotate: [aurora.rotate, -aurora.rotate, aurora.rotate],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: aurora.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <motion.div
        className="absolute left-1/2 top-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-200/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-200/10 border-dashed"
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
      />

      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-teal-200/70 shadow-[0_0_18px_rgba(94,234,212,0.8)]"
          style={{ left: particle.left, top: particle.top }}
          animate={{
            opacity: [0.15, 0.9, 0.15],
            y: [0, -24, 0],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/10 via-transparent to-dark-bg/70" />
    </div>
  )
}

export default AnimatedBackground
