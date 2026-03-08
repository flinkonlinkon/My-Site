import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import SectionWrapper from '../common/SectionWrapper.jsx'

const CONTACT = {
  email: 'flinkon9@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fahim-shahriar-linkon-113a63353/',
  github: 'https://github.com/flinkonlinkon',
}

function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Contact
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Let&apos;s build something secure and intelligent.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
          <div className="glass-card rounded-3xl p-5 md:p-6">
            <p className="text-sm leading-relaxed text-slate-300 md:text-[15px]">
              Whether it&apos;s a full‑stack product, a security‑focused feature, or a prototype you
              want to validate quickly, I&apos;d love to hear about it. Reach out for internships,
              freelance projects, or collaborations.
            </p>

            <div className="mt-5 space-y-3 text-sm text-slate-200">
              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/70 px-3.5 py-2.5 text-xs font-medium text-slate-200 transition-colors hover:border-cyan-400/70 hover:bg-slate-900"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300 shadow-neon-cyan">
                  <FiMail className="h-4 w-4" />
                </span>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                    Email
                  </span>
                  <span className="terminal-font text-[12px]">{CONTACT.email}</span>
                </div>
              </a>

              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/70 px-3.5 py-2.5 text-xs font-medium text-slate-200 transition-colors hover:border-cyan-400/70 hover:bg-slate-900"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-300 shadow-[0_0_18px_rgba(56,189,248,0.7)]">
                  <FiLinkedin className="h-4 w-4" />
                </span>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                    LinkedIn
                  </span>
                  <span className="text-[12px]">linkedin.com/in/your-linkedin</span>
                </div>
              </a>

              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/70 px-3.5 py-2.5 text-xs font-medium text-slate-200 transition-colors hover:border-cyan-400/70 hover:bg-slate-900"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-500/15 text-slate-200 shadow-[0_0_18px_rgba(148,163,184,0.7)]">
                  <FiGithub className="h-4 w-4" />
                </span>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                    GitHub
                  </span>
                  <span className="text-[12px]">github.com/flinkonlinkon</span>
                </div>
              </a>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="glass-card space-y-4 rounded-3xl p-5 md:p-6"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[11px] uppercase tracking-[0.24em] text-slate-400">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-sm rounded-2xl border-slate-700/80 bg-slate-950/80 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[11px] uppercase tracking-[0.24em] text-slate-400">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  className="input input-sm rounded-2xl border-slate-700/80 bg-slate-950/80 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-[11px] uppercase tracking-[0.24em] text-slate-400">
                  Subject
                </span>
              </label>
              <input
                type="text"
                className="input input-sm rounded-2xl border-slate-700/80 bg-slate-950/80 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
                placeholder="How can I help?"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-[11px] uppercase tracking-[0.24em] text-slate-400">
                  Message
                </span>
              </label>
              <textarea
                rows={4}
                className="textarea rounded-2xl border-slate-700/80 bg-slate-950/80 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
                placeholder="Share project details, ideas, or questions..."
              />
            </div>

            <div className="pt-1">
              <button
                type="submit"
                className="btn neon-button w-full border-none bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-500 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 hover:brightness-110"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Contact

