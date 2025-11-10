import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur text-xs font-semibold text-gray-800 ring-1 ring-black/5">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-amber-400 animate-pulse" />
            Now enrolling • Awakening Course 2025
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Awaken your highest self.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700">
            A modern program by Masrer Jeff that blends mindfulness, somatic practice, and enlightened strategy to unlock calm clarity, creative flow, and grounded purpose.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex justify-center items-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-black">
              Join the waitlist
            </a>
            <a href="#curriculum" className="inline-flex justify-center items-center rounded-full bg-white/70 backdrop-blur text-gray-900 ring-1 ring-black/10 px-6 py-3 text-sm font-semibold hover:bg-white">
              Explore the curriculum
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.25),rgba(59,130,246,0.15)_40%,rgba(251,146,60,0.12)_70%,transparent_80%)]" />
    </section>
  )
}
