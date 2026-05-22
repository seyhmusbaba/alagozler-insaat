import Navbar from '../components/Navbar'
import RevealOnScroll from '../components/RevealOnScroll'
import DotReveal from '../components/DotReveal'
import FadeIn from '../components/FadeIn'
import AnimatedHeading from '../components/AnimatedHeading'

const CONTACT_ITEMS = [
  {
    label: 'Telefon',
    value: '+90 541 262 85 03 ',
    sub: 'Hafta içi 09:00–18:00',
    href: 'tel:+905412628503',
  },
  {
    label: 'WhatsApp',
    value: '+90 541 262 85 03',
    sub: '7/24 mesaj atabilirsiniz',
    href: 'https://wa.me/905412628503',
  },
  {
    label: 'E-posta',
    value: 'info@alagozleremlak.com',
    sub: 'En geç 24 saat içinde yanıtlarız',
    href: 'mailto:info@alagozleremlak.com',
  },
  {
    label: 'Adres',
    value: 'Atatürk Bulvarı No: 12/A',
    sub: 'Şanlıurfa, Türkiye',
    href: '#',
  },
]

const SOCIAL = [
  { label: 'Instagram', href: 'https://www.instagram.com/alagozleremlak', handle: '@alagozleremlak' },
  { label: 'Facebook', href: 'https://www.facebook.com/alagozleremlak', handle: 'Alagözler Emlak' },
]

const HOURS = [
  { day: 'Pazartesi – Cuma', time: '09:00 – 18:00' },
  { day: 'Cumartesi', time: '10:00 – 15:00' },
  { day: 'Pazar', time: 'Kapalı' },
]

export default function IletisimPage() {
  return (
    <div className="animated-contact-bg text-white min-h-screen">
      <Navbar fixed />

      {/* ── HERO ── */}
      <section className="relative screen-section flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 lg:pb-16">
        <div className="lg:grid lg:grid-cols-2 lg:items-end">
          <div>
            <AnimatedHeading
              text={"Konuşalım,\nçözüm üretelim."}
              initialDelay={200}
              charDelay={28}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4"
              style={{ letterSpacing: '-0.04em' }}
            />
            <FadeIn delay={800} duration={1000}>
              <p className="text-base md:text-lg text-gray-400 mb-5">
                Arsa, konut, inşaat veya araç konularında aklınıza takılan her şey için
                bize ulaşın. Size en uygun çözümü birlikte bulalım.
              </p>
            </FadeIn>
            <FadeIn delay={1200} duration={1000}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+905412628503"
                  className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  Hemen Ara
                </a>
                <a
                  href="https://wa.me/905412628503"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={1400} duration={1000} className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
            <DotReveal />
          </FadeIn>
        </div>
      </section>

      {/* ── İLETİŞİM KARTLARI ── */}
      <section className="px-6 md:px-12 lg:px-16 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <p className="text-xs font-medium tracking-widest text-white/40 uppercase mb-3">İletişim</p>
            <h2 className="text-3xl md:text-4xl font-normal mb-12" style={{ letterSpacing: '-0.03em' }}>
              Bize Nasıl Ulaşabilirsiniz?
            </h2>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONTACT_ITEMS.map((item, i) => (
              <RevealOnScroll key={item.label} delay={i * 80}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block liquid-glass border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:border-white/30 transition-all duration-300"
                >
                  <p className="text-xs font-medium tracking-widest text-white/40 uppercase mb-3">
                    {item.label}
                  </p>
                  <p className="font-medium mb-1 text-sm md:text-base break-words">{item.value}</p>
                  <p className="text-xs text-gray-600">{item.sub}</p>
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÇALIŞMA SAATLERİ + SOSYAL ── */}
      <section className="px-6 md:px-12 lg:px-16 py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16">

          {/* Çalışma saatleri */}
          <RevealOnScroll direction="left">
            <p className="text-xs font-medium tracking-widest text-white/40 uppercase mb-6">Çalışma Saatleri</p>
            <div className="space-y-4">
              {HOURS.map((h) => (
                <div key={h.day} className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-gray-400 text-sm">{h.day}</span>
                  <span className={`text-sm font-medium ${h.time === 'Kapalı' ? 'text-white/30' : 'text-white'}`}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Sosyal medya */}
          <RevealOnScroll delay={150}>
            <p className="text-xs font-medium tracking-widest text-white/40 uppercase mb-6 mt-12 lg:mt-0">
              Sosyal Medya
            </p>
            <div className="space-y-4">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-b border-white/5 pb-4 group"
                >
                  <span className="text-gray-400 text-sm group-hover:text-white transition-colors">{s.label}</span>
                  <span className="text-sm text-white/50 group-hover:text-white/90 transition-colors">{s.handle} →</span>
                </a>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-6 md:px-12 lg:px-16 py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} Alagözler Emlak İnşaat. Tüm hakları saklıdır.
          </p>
          <DotReveal />
        </div>
      </footer>
    </div>
  )
}
