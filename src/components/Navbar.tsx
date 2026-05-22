import { useState } from 'react'
import { Link } from '../router'

const NAV_LINKS = [
  { label: 'Emlak/İnşaat', to: '/emlak-insaati', internal: true },
  { label: 'Portföy', to: '/portfoy', internal: true },
]

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/alagozleremlak',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/alagozleremlak',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Telefon',
    href: 'tel:+903441234567',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.97-1.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
]

function NavIcon({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  const [pressed, setPressed] = useState(false)
  return (
    <a
      href={href}
      target={href.startsWith('tel') ? undefined : '_blank'}
      rel={href.startsWith('tel') ? undefined : 'noopener noreferrer'}
      aria-label={label}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setTimeout(() => setPressed(false), 180)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setTimeout(() => setPressed(false), 180)}
      className="flex items-center justify-center w-9 h-9 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-150"
      style={{
        transform: pressed ? 'scale(0.78)' : 'scale(1)',
        transition: pressed
          ? 'transform 0.08s ease'
          : 'transform 0.22s cubic-bezier(0.2,0,0,1.6), color 0.15s, background 0.15s',
      }}
    >
      {icon}
    </a>
  )
}

interface NavbarProps {
  fixed?: boolean
}

export default function Navbar({ fixed = false }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const outer = fixed
    ? 'fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 pt-4'
    : 'px-6 md:px-12 lg:px-16 pt-6'

  const closeMenu = () => setMobileOpen(false)

  return (
    <>
      <nav className={outer}>
        <div className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-semibold tracking-tight leading-tight flex-shrink-0" onClick={closeMenu}>
            Alagözler<br />
            <span className="text-sm font-normal tracking-wide opacity-80">Emlak İnşaat</span>
          </Link>

          {/* Desktop center */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) =>
              link.internal ? (
                <Link key={link.label} to={link.to} className="text-sm text-white hover:text-gray-300 transition-colors duration-200">
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.to} className="text-sm text-white hover:text-gray-300 transition-colors duration-200">
                  {link.label}
                </a>
              ),
            )}
            <span className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-1">
              {SOCIAL_LINKS.map((s) => (
                <NavIcon key={s.label} href={s.href} label={s.label} icon={s.icon} />
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <Link to="/iletisim" className="hidden md:block">
            <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200">
              İletişim
            </button>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
            onClick={() => setMobileOpen(true)}
            aria-label="Menüyü Aç"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className="fixed inset-0 z-[60] md:hidden flex flex-col"
        style={{
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          background: 'rgba(0, 0, 0, 0.94)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: 'opacity 0.25s ease',
        }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <Link to="/" className="text-xl font-semibold tracking-tight leading-tight" onClick={closeMenu}>
            Alagözler<br />
            <span className="text-sm font-normal tracking-wide opacity-60">Emlak İnşaat</span>
          </Link>
          <button
            onClick={closeMenu}
            className="flex items-center justify-center w-9 h-9 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mx-6" />

        {/* Nav links */}
        <div className="flex flex-col px-6 pt-8 gap-2 flex-1">
          {NAV_LINKS.map((link) => (
            link.internal ? (
              <Link
                key={link.label}
                to={link.to}
                onClick={closeMenu}
                className="text-3xl font-light py-3 text-white/80 hover:text-white border-b border-white/8 transition-colors duration-200"
                style={{ letterSpacing: '-0.02em' }}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.to}
                onClick={closeMenu}
                className="text-3xl font-light py-3 text-white/80 hover:text-white border-b border-white/8 transition-colors duration-200"
                style={{ letterSpacing: '-0.02em' }}
              >
                {link.label}
              </a>
            )
          ))}
        </div>

        {/* Bottom: social icons + CTA */}
        <div className="px-6 pb-10 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((s) => (
              <NavIcon key={s.label} href={s.href} label={s.label} icon={s.icon} />
            ))}
          </div>
          <Link to="/iletisim" onClick={closeMenu}>
            <button className="w-full bg-white text-black py-3 rounded-xl font-medium text-base hover:bg-gray-100 transition-colors duration-200">
              İletişim
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
