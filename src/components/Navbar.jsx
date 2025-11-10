import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#highlights', label: 'Highlights' },
    { href: '#curriculum', label: 'Curriculum' },
    { href: '#testimonials', label: 'Stories' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur border-b border-white/10 bg-white/40 dark:bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-amber-400 grid place-items-center text-white shadow-md">
              <Sparkles size={18} />
            </div>
            <div className="text-left">
              <p className="text-sm leading-4 text-gray-600">Masrer Jeff</p>
              <p className="text-base font-semibold tracking-tight">Awakening</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-black">
              Join the Course
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-md hover:bg-black/5" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-2 py-2 rounded-md text-gray-800 hover:bg-black/5">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block px-2 py-2 rounded-md bg-gray-900 text-white text-center">
              Join the Course
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
