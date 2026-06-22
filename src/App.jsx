import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import IntroCard from './components/IntroCard'
import AnimatedBackground from './components/AnimatedBackground'
import AboutTimeline from './components/AboutTimeline'
import InteractiveSkillCloud from './components/InteractiveSkillCloud'
import ProjectShowcase from './components/ProjectShowcase'
import Certifications from './components/Certifications'
import AchievementTrophies from './components/AchievementTrophies'
import FunFacts from './components/FunFacts'
import ContactCard from './components/ContactCard'
import Footer from './components/Footer'

/**
 * App - Main application component
 * Manages intro card and portfolio sections with smooth transitions
 * New flow: Intro → About Timeline → Skills Cloud → Projects → Achievements → Fun Facts → Contact
 */
function App() {
  const [showPortfolio, setShowPortfolio] = useState(false)

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'

    // Handle anchor links
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    // Add click handlers to all anchor links
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener('click', handleAnchorClick)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  const handleExplorePortfolio = () => {
    setShowPortfolio(true)
  }

  return (
    <div className="min-h-screen bg-dark-bg text-text-primary overflow-x-hidden">
      <AnimatedBackground />

      <AnimatePresence mode="wait">
        {!showPortfolio ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <IntroCard onExplore={handleExplorePortfolio} />
          </motion.div>
        ) : (
          <motion.div
            key="portfolio"
            id="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Navbar />
            <main>
              <AboutTimeline />
              <InteractiveSkillCloud />
              <ProjectShowcase />
              <Certifications />
              <AchievementTrophies />
              <FunFacts />
              <ContactCard />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
