import { motion } from 'framer-motion'
import { achievementsData } from '../data/achievements'
import AnimatedSection from './AnimatedSection'

export default function AchievementTrophies() {
  const awards = achievementsData.filter(a => a.type === 'award')
  const research = achievementsData.filter(a => a.type === 'research')

  const TrophyItem = ({ item, index, isAward }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="relative group"
    >
      <div className={`kinetic-card p-6 rounded-2xl backdrop-blur-md border border-opacity-20 transition-all ${
        isAward
          ? 'bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border-yellow-500'
          : 'bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500'
      }`}>
        {/* Icon */}
        <div className="text-5xl mb-4">{item.icon}</div>

        {/* Content */}
        <h3 className="text-xl font-bold text-text-primary mb-2">
          {item.title}
        </h3>
        <p className="text-text-secondary text-sm mb-3">
          {item.description}
        </p>
        <p className={`text-xs font-semibold ${
          isAward ? 'text-yellow-400' : 'text-emerald-400'
        }`}>
          {item.date}
        </p>

        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity ${
          isAward ? 'bg-yellow-500' : 'bg-emerald-500'
        }`} />
      </div>
    </motion.div>
  )

  return (
    <AnimatedSection id="achievements" className="min-h-screen bg-gradient-to-br from-dark-bg via-secondary-bg to-dark-bg py-20 creative-section">
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
            Trophy Timeline
          </h2>
          <p className="text-text-secondary text-lg">
            Recognition of achievements and milestones
          </p>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-3">
            <span className="text-3xl">🏆</span>
            Awards & Competitions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, idx) => (
              <TrophyItem key={award.id} item={award} index={idx} isAward={true} />
            ))}
          </div>
        </motion.div>

        {/* Research Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-3">
            <span className="text-3xl">📜</span>
            Research Presentations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {research.map((item, idx) => (
              <TrophyItem key={item.id} item={item} index={idx} isAward={false} />
            ))}
          </div>
        </motion.div>

      </div>
    </AnimatedSection>
  )
}
