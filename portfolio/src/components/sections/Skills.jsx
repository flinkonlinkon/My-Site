import { motion } from 'framer-motion'
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si'
import SectionWrapper from '../common/SectionWrapper.jsx'

const skills = [
  { name: 'HTML', level: 92, icon: FaHtml5, color: 'text-orange-400' },
  { name: 'CSS', level: 88, icon: FaCss3Alt, color: 'text-sky-400' },
  { name: 'Tailwind CSS', level: 86, icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'JavaScript', level: 88, icon: FaJs, color: 'text-yellow-300' },
  { name: 'React.js', level: 86, icon: FaReact, color: 'text-cyan-300' },
  { name: 'Node.js', level: 80, icon: FaNodeJs, color: 'text-emerald-400' },
  { name: 'Express.js', level: 78, icon: SiExpress, color: 'text-slate-200' },
  { name: 'MongoDB', level: 80, icon: SiMongodb, color: 'text-emerald-400' },
  {
    name: 'Cybersecurity / PenTesting',
    level: 75,
    icon: FaGithub,
    color: 'text-fuchsia-300',
  },
  { name: 'Git & GitHub', level: 84, icon: FaGitAlt, color: 'text-orange-400' },
]

function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Skills
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              A full‑stack toolset with a security mindset.
            </h2>
          </div>
        </div>

        <div className="glass-card grid gap-5 rounded-3xl p-5 md:p-7">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.04, ease: 'easeOut' }}
                className="group flex items-center gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/40 p-3.5 transition-colors hover:border-cyan-400/60 hover:bg-slate-900/80"
              >
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 shadow-[0_0_18px_rgba(15,23,42,0.9)] group-hover:shadow-neon-cyan">
                  <Icon className={`h-5 w-5 ${skill.color}`} />
                  <span className="pointer-events-none absolute inset-0 rounded-xl border border-cyan-500/20 group-hover:border-cyan-400/50" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-200">
                    <span>{skill.name}</span>
                    <span className="text-cyan-300">{skill.level}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-800/80">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-purple-500 shadow-neon-cyan"
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Skills

