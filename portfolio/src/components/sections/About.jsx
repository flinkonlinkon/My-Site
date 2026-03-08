import SectionWrapper from '../common/SectionWrapper.jsx'

function About() {
  return (
    <SectionWrapper id="about">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              About Me
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Blending full‑stack engineering with security‑first thinking.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <div className="glass-card rounded-3xl p-6 md:p-7">
            <p className="text-sm leading-relaxed text-slate-300 md:text-[15px]">
              I am a <span className="font-semibold text-cyan-300">Computer Science and Engineering</span>{' '}
              student at Daffodil International University, passionate about building experiences that
              feel fast, secure, and delightful. I work primarily with the{' '}
              <span className="font-semibold text-sky-300">MERN stack</span>, crafting modern interfaces
              and robust backends.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-[15px]">
              My curiosity pulls me towards{' '}
              <span className="font-semibold text-fuchsia-300">cybersecurity and ethical hacking</span>,
              where I enjoy thinking like an attacker to design more resilient systems. I&apos;m
              particularly interested in <span className="text-emerald-300">AI agents</span>,{' '}
              <span className="text-emerald-300">penetration testing</span>, and{' '}
              <span className="text-emerald-300">security research</span>—understanding vulnerabilities
              and closing gaps before they matter.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-[15px]">
              Outside of code, I love <span className="text-sky-300">traveling</span>,{' '}
              <span className="text-sky-300">photography</span>, and <span className="text-sky-300">football</span>. Movies and anime keep me inspired with new
              worlds, stories, and aesthetics that often sneak their way into my UI design and side
              projects.
            </p>
          </div>

          <div className="space-y-4">
            <div className="glass-card rounded-3xl p-4 text-xs text-slate-300">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                Snapshot
              </p>
              <ul className="space-y-2">
                <li className="flex items-center justify-between gap-3">
                  <span className="text-slate-400">Current Role</span>
                  <span className="font-medium text-slate-100">CSE Student, DIU</span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span className="text-slate-400">Primary Stack</span>
                  <span className="font-medium text-sky-300">MongoDB · Express · React · Node</span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span className="text-slate-400">Focus Areas</span>
                  <span className="font-medium text-emerald-300">
                    AI Agents · PenTesting · Security
                  </span>
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-3xl p-4 text-xs text-slate-300">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                What I&apos;m Looking For
              </p>
              <p>
                Opportunities where I can grow as a{' '}
                <span className="font-semibold text-cyan-300">full‑stack engineer</span> and
                <span className="font-semibold text-fuchsia-300"> security‑minded developer</span>—from
                building dashboards and AI‑powered tools to helping teams ship secure, reliable
                products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default About

