import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * TypingEffect - Component that displays typing animation effect
 */
const TypingEffect = ({ items, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentItem = items[currentItemIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const delayBeforeDelete = 1500

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentItem) {
        setIsDeleting(true)
      } else if (isDeleting && displayedText === '') {
        setCurrentItemIndex((prev) => (prev + 1) % items.length)
        setIsDeleting(false)
      } else {
        setDisplayedText((prev) =>
          isDeleting
            ? currentItem.substring(0, prev.length - 1)
            : currentItem.substring(0, prev.length + 1)
        )
      }
    }, isDeleting && displayedText === currentItem ? delayBeforeDelete : typingSpeed)

    return () => clearTimeout(timer)
  }, [displayedText, currentItemIndex, isDeleting, items])

  return (
    <motion.span
      className={`inline-block ${className}`}
      key={currentItemIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayedText}
      <motion.span
        className="inline-block w-1 h-8 ml-2 bg-accent"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
      />
    </motion.span>
  )
}

export default TypingEffect
