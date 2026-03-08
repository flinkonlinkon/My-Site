import { motion } from 'framer-motion'
import { FiAlertTriangle, FiLock, FiShield, FiTarget } from 'react-icons/fi'
import SectionWrapper from '../common/SectionWrapper.jsx'
import TypingText from '../common/TypingText.jsx'

const terminalLines = [
  'Initializing secure environment...',
  'Running reconnaissance on target surface...',
  'Scanning for misconfigurations and weak points...',
  'Launching custom scripts for vulnerability discovery...',
  'Reporting exploitable findings and remediation steps.',
]

const focusAreas = [
  {
    icon: FiTarget,
    title: 'Penetration Testing',
    text: 'Thinking like an attacker to identify real‑world weaknesses across web apps, APIs, and infrastructure.',
  },
  {
    icon: FiLock,
    title: 'Ethical Hacking',
    text: 'Using hacking techniques responsibly to harden systems, not break them.',
  },
  {
    icon: FiShield,
    title: 'Security Research',
    text: 'Exploring new attack vectors, tools, and defenses to stay ahead of emerging threats.',
  },
  {
    icon: FiAlertTriangle,
    title: 'Vulnerability Testing',
    text: 'Systematically probing for misconfigurations, insecure defaults, and insecure design decisions.',
  },
]

function CyberSecurity() {
  return (
    <SectionWrapper id="security" className="bg-slate-950/90">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
              Cybersecurity
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Security isn&apos;t a feature—it's a mindset.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="glass-card rounded-3xl p-4 md:p-5"
          >
            <div className="mb-3 flex items-center justify-between text-xs text-emerald-300">
              <span className="terminal-font flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                root@fahim-sec-agent:~/
              </span>
              <span className="terminal-font text-slate-400">zsh · interactive session</span>
            </div>

            <div className="terminal-font rounded-2xl border border-emerald-500/40 bg-slate-950/80 p-4 text-xs text-emerald-200 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
              <p className="text-sky-300">
                {'>'} ./run_security_suite.sh{' '}
                <span className="text-xs text-slate-400">--target=full-stack-portfolio</span>
              </p>
              <div className="mt-3 space-y-1.5 text-emerald-200">
                <TypingText phrases={terminalLines} typingSpeed={60} deletingSpeed={40} pauseBetween={2200} />
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-[15px]">
              I enjoy building systems that assume compromise and design around it—principle of least
              privilege, secure defaults, and thoughtful logging. For me, great engineering means
              <span className="text-emerald-300"> performance, usability, and security</span> working
              together from day zero.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
            className="grid gap-4 md:grid-cols-2"
          >
            {focusAreas.map((area) => {
              const Icon = area.icon
              return (
                <div
                  key={area.title}
                  className="glass-card group relative flex h-full flex-col rounded-3xl border border-emerald-500/20 p-4 text-xs text-slate-200 transition-colors hover:border-emerald-400/70"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300 shadow-[0_0_18px_rgba(16,185,129,0.7)]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <p className="text-[13px] font-semibold text-slate-50">{area.title}</p>
                  </div>
                  <p className="text-[12px] leading-relaxed text-slate-300">{area.text}</p>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default CyberSecurity

