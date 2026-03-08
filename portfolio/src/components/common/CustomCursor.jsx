import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

function CustomCursor() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const outlineX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 })
  const outlineY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 })

  useEffect(() => {
    const move = (event) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <>
      <motion.div style={{ x, y }} className="custom-cursor" />
      <motion.div style={{ x: outlineX, y: outlineY }} className="custom-cursor-outline" />
    </>
  )
}

export default CustomCursor

