import Navbar from '../components/Navbar'
import VideoBackground from '../components/VideoBackground'
import FadeIn from '../components/FadeIn'
import AnimatedHeading from '../components/AnimatedHeading'
import DotReveal from '../components/DotReveal'
import RevealOnScroll from '../components/RevealOnScroll'

const SERVICES = [
  {
    title: 'Arsa',
    desc: 'İmarlı, yatırımlık ve konut arsaları. Kahramanmaraş genelinde seçkin lokasyonlarda arsa portföyümüzle doğru yatırımı yapın.',
    icon: '⬜',
  },
  {
    title: 'Konut & Ev',
    desc: 'Hazır daire, müstakil ev ve villa satışları. Aile hayatınıza yakışan konforu uygun fiyatla sunuyoruz.',
    icon: '⬜',
  },
  {
    title: 'İnşaat',
    desc: 'Anahtar teslim inşaat projeleri. Temel atımından teslimata kadar güvenilir, kaliteli ve zamanında inşaat.',
    icon: '⬜',
  },
  {
    title: 'Araç',
    desc: 'İkinci el araç alım-satım hizmetleri. Güvenilir muayene ve ekspertiz raporlarıyla şeffaf araç ticareti.',
    icon: '⬜',
  },
]

const STATS = [
  { value: '20+', label: 'Yıllık Tecrübe' },
  { value: '500+', label: 'Tamamlanan Proje' },
  { value: '1200+', label: 'Memnun Müşteri' },
  { value: '3', label: 'Şehir' },
]

export default function EmlakInsaatiPage() {
  return (
    <div className="bg-black text-white">
      {/* Fixed nav floats over hero video */}
      <Navbar fixed />

      {/* ── HERO ── */}
      <section className="relative screen-section overflow-hidden">
        <VideoBackground src="/bg2.mp4" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end">
            <div>
              <AnimatedHeading
                text={"Güvenilir yapılar,\nkalıcı değerler."}
                initialDelay={200}
                charDelay={28}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4"
                style={{ letterSpacing: '-0.04em' }}
              />
              <FadeIn delay={800} duration={1000}>
                <p className="text-base md:text-lg text-gray-300 mb-5">
                  Alagözler Emlak İnşaat olarak; arsa, konut, inşaat ve araç
                  satışında güvenilir çözümler sunuyoruz.
                </p>
              </FadeIn>
              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                    Portföyümüz
                  </button>
                  <button className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors duration-200">
                    Bize Ulaşın
                  </button>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={1400} duration={1000} className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
              <DotReveal />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── HAKKIMIZDA ── */}
      <section className="px-6 md:px-12 lg:px-16 py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <RevealOnScroll direction="left">
            <p className="text-xs font-medium tracking-widest text-white/40 uppercase mb-4">Hakkımızda</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6" style={{ letterSpacing: '-0.03em' }}>
              20 yıldır yanınızdayız.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={150}>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Alagözler Emlak İnşaat, 2004 yılından bu yana Kahramanmaraş ve çevresinde
              güvenilir gayrimenkul ve inşaat hizmetleri sunmaktadır. Arsa, konut ve
              inşaat projeleri ile başlayan yolculuğumuza araç alım-satımını da ekleyerek
              müşterilerimize kapsamlı hizmet veriyoruz.
            </p>
            <p className="text-gray-500 text-base leading-relaxed">
              Müşteri memnuniyetini her zaman ön planda tutan ekibimiz, her projeyi
              zamanında ve söz verilen kalitede teslim etme ilkesiyle çalışmaktadır.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── İSTATİSTİKLER ── */}
      <section className="px-6 md:px-12 lg:px-16 py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <RevealOnScroll key={s.label} delay={i * 80}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-light mb-2" style={{ letterSpacing: '-0.04em' }}>
                  {s.value}
                </p>
                <p className="text-sm text-gray-500 tracking-wide">{s.label}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ── HİZMETLERİMİZ ── */}
      <section className="px-6 md:px-12 lg:px-16 py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <p className="text-xs font-medium tracking-widest text-white/40 uppercase mb-4">Hizmetlerimiz</p>
            <h2 className="text-3xl md:text-4xl font-normal mb-16" style={{ letterSpacing: '-0.03em' }}>
              Her ihtiyacınız için buradayız.
            </h2>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc, i) => (
              <RevealOnScroll key={svc.title} delay={i * 100}>
                <div className="liquid-glass border border-white/10 rounded-2xl p-6 h-full flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <span className="text-white/60 text-sm font-mono">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-xl font-medium">{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{svc.desc}</p>
                  <span className="text-xs text-white/30 tracking-widest uppercase">Detay →</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 md:px-12 lg:px-16 py-24">
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto liquid-glass border border-white/10 rounded-3xl px-8 py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-normal mb-4" style={{ letterSpacing: '-0.03em' }}>
              Projenizi birlikte hayata geçirelim.
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Sorularınız için bize ulaşın. Uzman ekibimiz en kısa sürede size dönecektir.
            </p>
            <button
              onClick={() => { window.location.hash = '/iletisim' }}
              className="bg-white text-black px-10 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              İletişime Geç
            </button>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  )
}
