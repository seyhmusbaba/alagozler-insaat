import { useInView } from '../hooks/useInView'

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'none'
}

export default function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: RevealOnScrollProps) {
  const { ref, inView } = useInView()

  const transform = {
    up: inView ? 'translateY(0)' : 'translateY(32px)',
    left: inView ? 'translateX(0)' : 'translateX(-24px)',
    none: 'none',
  }[direction]

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform,
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
