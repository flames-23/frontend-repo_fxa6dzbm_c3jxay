export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What is Awakening?</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Awakening is not an idea — it's a direct experience of vivid presence. This course guides you through practical, embodied methods to dissolve noise, tune your nervous system, and meet life with quiet power. Minimal theory. Deep practice. Real integration.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                ['Somatic Calm', 'Regulate and ground your system.'],
                ['Clarity', 'See through mental fog and habit loops.'],
                ['Creative Flow', 'Act from intuition without force.'],
              ].map(([title, text]) => (
                <div key={title} className="p-4 rounded-xl bg-white/70 backdrop-blur ring-1 ring-black/5">
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="text-sm text-gray-600 mt-1">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-tr from-purple-200 via-blue-200 to-amber-100 ring-1 ring-black/5" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function Highlights() {
  const items = [
    ['Live Sessions', 'Weekly live practice and Q&A with Jeff.'],
    ['Micro Practices', '60–180 second resets you can do anywhere.'],
    ['Integration Labs', 'Turn insight into embodied skill.'],
    ['Community', 'Practice with a calm, focused cohort.'],
  ]
  return (
    <section id="highlights" className="relative py-20 sm:py-24 bg-gradient-to-b from-white to-purple-50/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">Course Highlights</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(([title, text]) => (
            <div key={title} className="p-5 rounded-xl bg-white/70 backdrop-blur ring-1 ring-black/5">
              <p className="font-semibold">{title}</p>
              <p className="text-sm text-gray-600 mt-1">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Curriculum() {
  const weeks = [
    ['Week 1', 'Nervous system reset'],
    ['Week 2', 'Depth of attention'],
    ['Week 3', 'Embodied clarity'],
    ['Week 4', 'Non-resistance & flow'],
    ['Week 5', 'Relating from presence'],
    ['Week 6', 'Integration & direction'],
  ]
  return (
    <section id="curriculum" className="relative py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">Curriculum</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {weeks.map(([w, t]) => (
            <div key={w} className="p-6 rounded-2xl ring-1 ring-black/5 bg-white/70 backdrop-blur">
              <p className="text-sm font-semibold text-gray-700">{w}</p>
              <p className="mt-2 font-medium">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const quotes = [
    ['I stopped chasing and started living from ease. Everything changed.', 'Maya'],
    ['The most practical spiritual training I’ve taken.', 'Daniel'],
    ['My art, my relationships, my work — calmer, clearer, better.', 'Asha'],
  ]
  return (
    <section id="testimonials" className="relative py-20 sm:py-24 bg-gradient-to-b from-purple-50/40 to-blue-50/40">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">Stories</h2>
        <div className="mt-10 grid gap-4">
          {quotes.map(([q, n]) => (
            <figure key={q} className="p-6 rounded-2xl bg-white/70 backdrop-blur ring-1 ring-black/5">
              <blockquote className="text-lg">“{q}”</blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">— {n}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="max-w-2xl mx-auto px-6 sm:px-8">
        <div className="rounded-2xl bg-white/80 backdrop-blur ring-1 ring-black/5 p-6">
          <h2 className="text-2xl font-bold tracking-tight">Join the Awakening waitlist</h2>
          <p className="mt-2 text-gray-700">Leave your email and we’ll send dates, pricing, and early access.</p>
          <form className="mt-6 grid sm:grid-cols-[1fr_auto] gap-3" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="you@example.com" required className="w-full rounded-full px-4 py-3 ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-gray-900 bg-white/90" />
            <button className="rounded-full px-6 py-3 bg-gray-900 text-white font-semibold hover:bg-black">Notify me</button>
          </form>
          <p className="mt-3 text-xs text-gray-500">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
