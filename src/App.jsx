import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Highlights, Curriculum, Testimonials, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Highlights />
        <Curriculum />
        <Testimonials />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Masrer Jeff • Awakening
      </footer>
    </div>
  )
}

export default App
