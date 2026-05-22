import { useEffect, useState } from 'react'

type Phase = 'closed' | 'opening' | 'open' | 'closing'

const DURATIONS: Record<Phase, number> = {
  closed: 1800,
  opening: 850,
  open: 2800,
  closing: 450,
}

const NEXT: Record<Phase, Phase> = {
  closed: 'opening',
  opening: 'open',
  open: 'closing',
  closing: 'closed',
}

export default function DotReveal() {
  const [phase, setPhase] = useState<Phase>('closed')
  const [dotPop, setDotPop] = useState(false)

  // State machine — each phase auto-advances after its duration
  useEffect(() => {
    const t = setTimeout(() => setPhase(NEXT[phase]), DURATIONS[phase])
    return () => clearTimeout(t)
  }, [phase])

  // Dot pop burst when opening starts
  useEffect(() => {
    if (phase !== 'opening') return
    setDotPop(true)
    const t = setTimeout(() => setDotPop(false), 220)
    return () => clearTimeout(t)
  }, [phase])

  const isVisible = phase === 'opening' || phase === 'open'

  const textTransition =
    phase === 'opening'
      ? 'max-width 0.85s cubic-bezier(0.2,0.8,0.2,1), opacity 0.45s ease'
      : phase === 'closing'
      ? 'max-width 0.45s cubic-bezier(0.8,0,1,1), opacity 0.25s ease 0.15s'
      : 'none'

  return (
    <a
      href="https://www.github.com/seyhmusbaba"
      target="_blank"
      rel="noopener noreferrer"
      className="liquid-glass border border-white/20 px-5 py-3 rounded-xl inline-flex items-center gap-3 cursor-pointer hover:border-white/40 transition-colors duration-300"
    >
      {/* Dot with ping ring in idle */}
      <span className="relative flex-shrink-0 flex items-center justify-center w-5 h-5">
        {phase === 'closed' && (
          <span
            className="absolute inset-0 rounded-full bg-white/25 animate-ping"
            style={{ animationDuration: '1.8s' }}
          />
        )}
        <span
          className="relative z-10 text-white/80"
          style={{
            fontSize: '20px',
            lineHeight: 1,
            display: 'inline-block',
            transform: dotPop ? 'scale(1.6)' : 'scale(1)',
            transition: dotPop
              ? 'transform 0.1s cubic-bezier(0.2,0,0,1.8)'
              : 'transform 0.2s ease-out',
          }}
        >
          •
        </span>
      </span>

      {/* Sliding text */}
      <span
        className="overflow-hidden whitespace-nowrap text-lg md:text-xl lg:text-2xl font-light"
        style={{
          maxWidth: isVisible ? '340px' : '0px',
          opacity: isVisible ? 1 : 0,
          transition: textTransition,
        }}
      >
        Made with gAnatolian Labs&nbsp;❤️
      </span>
    </a>
  )
}
