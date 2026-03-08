import { useCallback, useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

function BackgroundParticles() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  const particlesLoaded = useCallback(() => {}, [])

  if (!ready) return null

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      className="pointer-events-none absolute inset-0 -z-10"
      options={{
        fpsLimit: 60,
        fullScreen: false,
        background: { color: 'transparent' },
        particles: {
          number: { value: 45, density: { enable: true, area: 900 } },
          color: { value: ['#22d3ee', '#a855f7'] },
          links: {
            enable: true,
            distance: 140,
            color: '#22d3ee',
            opacity: 0.3,
            width: 1,
          },
          collisions: { enable: false },
          move: {
            enable: true,
            speed: 0.8,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'out' },
          },
          opacity: { value: 0.6 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 3 } },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            resize: true,
          },
          modes: {
            repulse: { distance: 80, duration: 0.4 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default BackgroundParticles

