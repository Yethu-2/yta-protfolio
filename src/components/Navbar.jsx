import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050510]/90 backdrop-blur-md shadow-lg shadow-black/30'
          : ''
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="home" smooth duration={500} className="cursor-pointer select-none">
          <span className="font-mono text-xl font-bold text-accent">
            YTA<span className="text-white">.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ id, label }, i) => (
            <li key={id}>
              <Link
                to={id}
                smooth
                duration={500}
                offset={-70}
                spy
                activeClass="!text-accent"
                className="text-slate-400 hover:text-accent transition-colors cursor-pointer text-sm tracking-wide"
              >
                <span className="text-accent font-mono text-xs mr-1">
                  0{i + 1}.
                </span>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/cv.pdf"
              download
              className="px-4 py-2 border border-accent text-accent text-sm rounded-lg hover:bg-accent/10 transition-colors font-mono"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-300 hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-[#0a0a1a]/97 backdrop-blur-md border-t border-white/5"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {NAV_LINKS.map(({ id, label }, i) => (
                <li key={id}>
                  <Link
                    to={id}
                    smooth
                    duration={500}
                    offset={-70}
                    onClick={() => setOpen(false)}
                    className="text-slate-300 hover:text-accent transition-colors cursor-pointer"
                  >
                    <span className="text-accent font-mono text-xs mr-2">
                      0{i + 1}.
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/cv.pdf"
                  download
                  className="px-6 py-2 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors font-mono text-sm"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
