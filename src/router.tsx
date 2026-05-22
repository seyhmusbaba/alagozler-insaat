import { useState, useEffect } from 'react'

function getHash() {
  return window.location.hash.replace('#', '') || '/'
}

export function useRouter() {
  const [path, setPath] = useState(getHash)

  useEffect(() => {
    const onHash = () => setPath(getHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const navigate = (to: string) => {
    window.location.hash = to
  }

  return { path, navigate }
}

interface LinkProps {
  to: string
  children: React.ReactNode
  className?: string
}

export function Link({ to, children, className = '' }: LinkProps) {
  return (
    <a
      href={`#${to}`}
      className={className}
      onClick={(e) => {
        e.preventDefault()
        window.location.hash = to
      }}
    >
      {children}
    </a>
  )
}
