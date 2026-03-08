import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'

function Navbar({ sections, onSectionClick, theme, onToggleTheme }) {
  const [active, setActive] = useState('hero')

  const handleClick = (id) => {
    setActive(id)
    onSectionClick(id)
  }

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-2">
          <span className="rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 px-2 py-1 text-xs font-semibold tracking-widest text-cyan-300/90">
            FH
          </span>
          <div className="text-xs leading-tight text-slate-400 md:text-sm">
            <p className="font-semibold text-slate-100">Fahim Shahriar Linkon</p>
            <p>CSE · MERN · Security</p>
          </div>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <div className="relative flex items-center gap-5 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
            {sections.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleClick(item.id)}
                className="relative pb-1 transition-colors hover:text-cyan-300"
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-purple-500"
                  />
                )}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            className="btn btn-circle btn-ghost border border-slate-700/70 bg-slate-900/40 text-cyan-300 hover:border-cyan-400/60 hover:bg-slate-900/80"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

