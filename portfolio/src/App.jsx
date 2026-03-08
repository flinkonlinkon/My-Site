import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/layout/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Skills from './components/sections/Skills.jsx'
import Projects from './components/sections/Projects.jsx'
import CyberSecurity from './components/sections/CyberSecurity.jsx'
import Contact from './components/sections/Contact.jsx'
import Footer from './components/layout/Footer.jsx'
import ScrollProgress from './components/common/ScrollProgress.jsx'
import CustomCursor from './components/common/CustomCursor.jsx'
import BackgroundParticles from './components/common/BackgroundParticles.jsx'
import MatrixBackground from './components/common/MatrixBackground.jsx'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'security', label: 'Cybersecurity' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.setAttribute('data-theme', 'cyberdark')
    } else {
      root.classList.remove('dark')
      root.setAttribute('data-theme', 'light')
    }
  }, [theme])

  const handleSectionClick = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <MatrixBackground />
      <BackgroundParticles />
      <CustomCursor />
      <ScrollProgress />

      <Navbar
        sections={sections}
        onSectionClick={handleSectionClick}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <AnimatePresence mode="wait">
        <motion.main
          key={theme}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative z-10"
        >
          <Hero onContactClick={() => handleSectionClick('contact')} />
          <About />
          <Skills />
          <Projects />
          <CyberSecurity />
          <Contact />
          <Footer />
        </motion.main>
      </AnimatePresence>
    </div>
  )
}

export default App
