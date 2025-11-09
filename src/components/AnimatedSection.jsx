import { motion } from 'framer-motion'

const slideVariants = {
  left: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  },
  up: {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  },
  front: {
    hidden: { opacity: 0, scale: 0.8, z: -50 },
    visible: { opacity: 1, scale: 1, z: 0 },
  },
  back: {
    hidden: { opacity: 0, scale: 1.2, z: 50 },
    visible: { opacity: 1, scale: 1, z: 0 },
  },
}

const MotionDiv = motion.div

export function AnimatedSection({ children, delay = 0, direction = 'up' }) {
  const variants = slideVariants[direction] || slideVariants.up

  return (
    <MotionDiv
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      variants={variants}
    >
      {children}
    </MotionDiv>
  )
}


