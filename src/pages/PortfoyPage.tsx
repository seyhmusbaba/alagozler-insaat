import Navbar from '../components/Navbar'
import VideoBackground from '../components/VideoBackground'
import FadeIn from '../components/FadeIn'
import AnimatedHeading from '../components/AnimatedHeading'
import DotReveal from '../components/DotReveal'
import RevealOnScroll from '../components/RevealOnScroll'

const CATEGORIES = [
  {
    key: 'arsa',
    name: 'Arsa',
    photos: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&h=500&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&h=500&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=700&h=500&fit=crop&auto=format&q=80',
    ],
  },
  {
    key: 'konut',
    name: 'Konut / Ev',
    photos: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&h=500&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&h=500&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=700&h=500&fit=crop&auto=format&q=80',
    ],
  },
  {
    key: 'arac',
    name: 'Araç',
    photos: [
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=700&h=500&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=700&h=500&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=700&h=500&fit=crop&auto=format&q=80',
    ],
  },
]

export default function PortfoyPage() {
  return (
    <div className="bg-black text-white">
      <Navbar fixed />

      {/* ── HERO ── */}
      <section className="relative screen-section overflow-hidden">
        <VideoBackground src="/bg3.mp4" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end">
            <div>
              <AnimatedHeading
                text={"Değerli mülkler,\ndoğru yatırım."}
                initialDelay={200}
                charDelay={28}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4"
                style={{ letterSpacing: '-0.04em' }}
              />
              <FadeIn delay={800} duration={1000}>
                <p className="text-base md:text-lg text-gray-300 mb-5">
                  Arsa, konut ve araç kategorilerinde özenle seçilmiş
                  portföyümüzü keşfedin.
                </p>
              </FadeIn>
              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                    Kategorileri Gör
                  </button>
                  <button
                    onClick={() => { window.location.hash = '/iletisim' }}
                    className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors duration-200"
                  >
                    İletişim
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

      {/* ── KATEGORİLER ── */}
      {CATEGORIES.map((cat, catIdx) => (
        <section
          key={cat.key}
          className={`px-6 md:px-12 lg:px-16 py-20 ${catIdx < CATEGORIES.length - 1 ? 'border-b border-white/10' : ''}`}
        >
          <div className="max-w-6xl mx-auto">
            {/* Category heading */}
            <RevealOnScroll>
              <div className="flex items-baseline gap-4 mb-10">
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-light"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  {cat.name}
                </h2>
                <span className="text-white/20 text-sm font-mono tracking-widest uppercase">
                  0{catIdx + 1}
                </span>
              </div>
            </RevealOnScroll>

            {/* Photo grid — 1 col mobile, 3 col desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {cat.photos.map((src, i) => (
                <RevealOnScroll key={src} delay={i * 80} className="overflow-hidden rounded-2xl">
                  <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                    <img
                      src={src}
                      alt={`${cat.name} ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Subtle dark vignette on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 rounded-2xl" />
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="px-6 md:px-12 lg:px-16 py-24 border-t border-white/10">
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto liquid-glass border border-white/10 rounded-3xl px-8 py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-normal mb-4" style={{ letterSpacing: '-0.03em' }}>
              İlgilendiğiniz bir ilan mı var?
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Detaylı bilgi almak için bize ulaşın.
            </p>
            <button
              onClick={() => { window.location.hash = '/iletisim' }}
              className="bg-white text-black px-10 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Bize Ulaşın
            </button>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  )
}
