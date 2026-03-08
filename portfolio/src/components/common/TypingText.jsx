import { useEffect, useState } from 'react'

function TypingText({ phrases, typingSpeed = 120, deletingSpeed = 60, pauseBetween = 1600 }) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]

    const tick = () => {
      if (!isDeleting) {
        const next = current.substring(0, displayText.length + 1)
        setDisplayText(next)
        if (next === current) {
          setTimeout(() => setIsDeleting(true), pauseBetween)
          return
        }
      } else {
        const next = current.substring(0, displayText.length - 1)
        setDisplayText(next)
        if (next === '') {
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
          return
        }
      }
    }

    const timeout = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseBetween])

  return (
    <span className="terminal-font text-cyan-300">
      {displayText}
      <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-cyan-400 align-middle" />
    </span>
  )
}

export default TypingText

