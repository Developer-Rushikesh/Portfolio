import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const slideVariants = {
  left: {
    hidden: { opacity: 0, x: -120 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 120 },
    visible: { opacity: 1, x: 0 },
  },
  up: {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -80 },
    visible: { opacity: 1, y: 0 },
  },
  front: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  back: {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1 },
  },
}

export function SectionWrapper({
  children,
  direction = 'up',
  id,
  className = '',
  delay = 0,
  duration = 1,
  once = true,
}) {
  const variants = slideVariants[direction] || slideVariants.up
  const controls = useAnimation()

  useEffect(() => {
    controls.set('hidden')
  }, [controls])

  return (
    <motion.section
      id={id}
      initial="hidden"
      animate={controls}
      whileInView={() => controls.start('visible')}
      onViewportLeave={() => !once && controls.start('hidden')}
      viewport={{ once, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      variants={variants}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.section>
  )
}
