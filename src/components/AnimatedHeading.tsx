import { useEffect, useState } from 'react'

interface AnimatedHeadingProps {
  text: string
  initialDelay?: number
  charDelay?: number
  className?: string
  style?: React.CSSProperties
}

export default function AnimatedHeading({
  text,
  initialDelay = 200,
  charDelay = 30,
  className = '',
  style,
}: AnimatedHeadingProps) {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), initialDelay)
    return () => clearTimeout(timer)
  }, [initialDelay])

  const lines = text.split('\n')

  // Count total chars before a given line for global delay offset
  const lineStartIndex = (lineIndex: number) =>
    lines.slice(0, lineIndex).reduce((sum, l) => sum + l.length, 0)

  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIndex) => {
        const offset = lineStartIndex(lineIndex)
        // Split into tokens: words and spaces, preserving order
        const tokens = line.split(/(\s+)/)
        let charCursor = 0

        return (
          <span key={lineIndex} className="block">
            {tokens.map((token, tokenIndex) => {
              const tokenStart = charCursor
              charCursor += token.length

              if (/^\s+$/.test(token)) {
                // Render space(s) as non-breaking, not animated
                return (
                  <span key={tokenIndex} className="inline-block">
                    {' '.repeat(token.length)}
                  </span>
                )
              }

              // Render word characters inside a nowrap container
              return (
                <span key={tokenIndex} className="inline-block whitespace-nowrap">
                  {token.split('').map((char, charIndex) => {
                    const globalIndex = offset + tokenStart + charIndex
                    const delay = globalIndex * charDelay
                    return (
                      <span
                        key={charIndex}
                        className="inline-block"
                        style={{
                          opacity: animated ? 1 : 0,
                          transform: animated ? 'translateX(0)' : 'translateX(-18px)',
                          transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`,
                        }}
                      >
                        {char}
                      </span>
                    )
                  })}
                </span>
              )
            })}
          </span>
        )
      })}
    </h1>
  )
}
