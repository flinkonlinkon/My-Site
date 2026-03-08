import { motion } from 'framer-motion'
import { FiDownload, FiMail } from 'react-icons/fi'
import TypingText from '../common/TypingText.jsx'
import SectionWrapper from '../common/SectionWrapper.jsx'

const typedPhrases = [
  'CSE Student',
  'MERN Stack Developer',
  'Cybersecurity Enthusiast',
]

function Hero({ onContactClick }) {
  return (
    <SectionWrapper
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950 hero-gradient"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="mx-auto h-full max-w-6xl bg-grid-neon-size bg-grid-neon" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row md:items-stretch md:px-6">
        <div className="relative flex-1 space-y-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-slate-900/60 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-300/90 shadow-neon-cyan"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            Available for internships &amp; freelance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.05 }}
            className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
              Fahim Shahriar Linkon
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400"
          >
            <TypingText phrases={typedPhrases} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.16 }}
            className="max-w-xl text-sm leading-relaxed text-slate-400 md:text-base"
          >
            I&apos;m a Computer Science and Engineering student at Daffodil International University,
            building full‑stack experiences with the MERN stack and exploring how AI agents, security,
            and immersive UI can come together to create intelligent, resilient systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.22 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2 md:justify-start"
          >
            <a
              href="/Fahim_Shahriar_Linkon_CV.pdf"
              download
              className="btn neon-button border-none bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-500 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 hover:brightness-110"
            >
              <FiDownload className="h-4 w-4" />
              <span>Download CV</span>
            </a>

            <button
              type="button"
              onClick={onContactClick}
              className="btn neon-button-secondary border border-slate-700/80 bg-slate-900/80 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 hover:border-cyan-400/80 hover:bg-slate-900"
            >
              <FiMail className="h-4 w-4" />
              <span>Contact Me</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.28 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-4 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500 md:justify-start"
          >
            <span className="rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-[10px] text-sky-300">
              CSE @ Daffodil International University
            </span>
            <span className="rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-[10px] text-emerald-300">
              MERN Stack
            </span>
            <span className="rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-[10px] text-fuchsia-300">
              Cybersecurity &amp; AI Agents
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.12 }}
          className="relative flex flex-1 items-center justify-center md:justify-end"
        >
          <div className="absolute -bottom-10 left-0 h-44 w-44 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -top-16 right-0 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />

          <motion.div
            whileHover={{ rotateX: 6, rotateY: -6, translateY: -4 }}
            className="glass-card relative flex h-72 w-72 items-center justify-center rounded-3xl border border-slate-700/70 shadow-neon-cyan md:h-80 md:w-80"
          >
            <div className="absolute inset-4 rounded-2xl border border-cyan-400/25" />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-slate-600/80 shadow-[0_0_32px_rgba(59,130,246,0.4)] md:h-48 md:w-48">
                <img
                  src="/fahim-profile.png"
                  alt="Fahim Shahriar Linkon"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-cyan-400/30" />
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default Hero

