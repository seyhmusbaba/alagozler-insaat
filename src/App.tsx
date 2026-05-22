import { Link } from './router'
import Navbar from './components/Navbar'
import FadeIn from './components/FadeIn'
import AnimatedHeading from './components/AnimatedHeading'
import DotReveal from './components/DotReveal'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4'

export default function App() {
  return (
    <div className="relative screen-section w-full overflow-hidden bg-black text-white">
      <video
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
        }}
      />

      <div className="relative z-10 h-full flex flex-col px-6 md:px-12 lg:px-16">
        <Navbar />

        <div className="flex-1 flex flex-col justify-end pb-12 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end">
            <div>
              <AnimatedHeading
                text={"Güvenli yatırım,\ngüçlü gelecek."}
                initialDelay={200}
                charDelay={30}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4"
                style={{ letterSpacing: '-0.04em' }}
              />

              <FadeIn delay={800} duration={1000}>
                <p className="text-base md:text-lg text-gray-300 mb-5">
                  Kahramanmaraş'ın köklü emlak ve inşaat firması.
                  Arsa, konut, inşaat ve araç kategorilerinde güvenilir çözümler.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/portfoy">
                    <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                      Portföyü İncele
                    </button>
                  </Link>
                  <Link to="/iletisim">
                    <button className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors duration-200">
                      Bize Ulaşın
                    </button>
                  </Link>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={1400} duration={1000} className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
              <DotReveal />
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  )
}
