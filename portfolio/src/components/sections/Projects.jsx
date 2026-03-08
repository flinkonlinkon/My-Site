import { useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import SectionWrapper from '../common/SectionWrapper.jsx'

const projects = [
  {
    title: 'AI Tutor Agent',
    description:
      'A multi‑language AI tutor that can explain concepts, answer questions, and reason from images—designed to feel like a personal mentor for students.',
    tech: ['React', 'Node.js', 'AI APIs', 'Vision Models'],
    github: 'https://github.com/flinkonlinkon',
    demo: '#',
  },
  {
    title: 'Voice AI Assistant',
    description:
      'Jarvis‑style voice assistant built with JavaScript and AI APIs that responds to natural language, executes commands, and speaks back results.',
    tech: ['JavaScript', 'Web Speech API', 'AI APIs'],
    github: 'https://github.com/flinkonlinkon',
    demo: '#',
  },
  {
    title: 'RFID Attendance System',
    description:
      'IoT‑powered attendance tracking with ESP8266, RFID, Google Sheets, and LCD display for real‑time logging and analytics.',
    tech: ['ESP8266', 'RFID', 'Google Apps Script', 'IoT'],
    github: 'https://github.com/flinkonlinkon',
    demo: '#',
  },
  {
    title: 'Hospital Management System (C)',
    description:
      'Console‑based hospital management system for patients and doctors using structured file handling in C.',
    tech: ['C', 'File Handling', 'Data Structures'],
    github: 'https://github.com/flinkonlinkon',
    demo: '#',
  },
  {
    title: 'Traffic AI System',
    description:
      'AI‑driven traffic monitoring and smart decision system for adaptive signal control and congestion analysis.',
    tech: ['Computer Vision', 'Python', 'AI Models'],
    github: 'https://github.com/flinkonlinkon',
    demo: '#',
  },
]

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(0, { stiffness: 140, damping: 18 })
  const rotateY = useSpring(0, { stiffness: 140, damping: 18 })

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const offsetX = event.clientX - rect.left
    const offsetY = event.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateAmountX = ((offsetY - centerY) / centerY) * -8
    const rotateAmountY = ((offsetX - centerX) / centerX) * 8

    rotateX.set(rotateAmountX)
    rotateY.set(rotateAmountY)
    x.set(offsetX - centerX)
    y.set(offsetY - centerY)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    setHovered(false)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="group glass-card relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800/90 px-4 py-5 shadow-neon-cyan will-change-transform md:px-5 md:py-6"
      >
        <div className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute -inset-16 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.28),transparent_60%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.32),transparent_65%)]" />
        </div>

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-slate-50">
              {project.title}
            </h3>
            <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-500">
              {project.tech.join(' · ')}
            </p>
          </div>
          <motion.span
            animate={{
              opacity: hovered ? 1 : 0.3,
              y: hovered ? -2 : 0,
              boxShadow: hovered
                ? '0 0 20px rgba(56,189,248,0.8)'
                : '0 0 12px rgba(15,23,42,0.9)',
            }}
            className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-cyan-400/40 bg-slate-900/80 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300"
          >
            #{String(index + 1).padStart(2, '0')}
          </motion.span>
        </div>

        <p className="relative mt-3 text-sm leading-relaxed text-slate-300">
          {project.description}
        </p>

        <div className="relative mt-4 flex items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-1 text-[11px] text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-xs neon-button-secondary border border-slate-700/80 bg-slate-950/80 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200 hover:border-cyan-400/80 hover:text-cyan-200"
            >
              <FiGithub className="h-3 w-3" />
              <span>Code</span>
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-xs neon-button border-none bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-500 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950 hover:brightness-110"
            >
              <FiExternalLink className="h-3 w-3" />
              <span>Live</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.article>
  )
}

function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Projects
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Selected work across AI, IoT, and systems.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Projects

