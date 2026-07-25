import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const LINKS = [
  { id: 'about',     label: 'About'     },
  { id: 'skills',    label: 'Skills'    },
  { id: 'projects',  label: 'Projects'  },
  { id: 'education', label: 'Education' },
  { id: 'contact',   label: 'Contact'   },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-[#f0ede6]/90 backdrop-blur-md shadow-sm shadow-black/5' : ''}`}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link to="home" smooth duration={500} className="cursor-pointer">
          <span className="font-bold text-[#18181b] tracking-tight text-lg">
            YTA<span className="text-accent">.</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map(({ id, label }) => (
            <li key={id}>
              <Link to={id} smooth duration={500} offset={-64} spy
                activeClass="!text-accent !font-semibold"
                className="text-sm text-[#5a5652] hover:text-[#18181b] transition-colors cursor-pointer font-medium"
              >{label}</Link>
            </li>
          ))}
          <li>
            <a href="/cv.pdf" download
              className="text-sm font-semibold px-4 py-2 rounded-lg border border-accent text-accent hover:bg-accent hover:text-white transition-all">
              Resume
            </a>
          </li>
        </ul>

        <button onClick={() => setOpen(v => !v)} className="md:hidden text-[#5a5652] hover:text-black">
          {open ? <HiX size={24}/> : <HiMenu size={24}/>}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.15 }}
            className="md:hidden bg-[#f0ede6] border-t border-black/[0.07] px-6 py-6 flex flex-col gap-5"
          >
            {LINKS.map(({ id, label }) => (
              <Link key={id} to={id} smooth duration={500} offset={-64}
                onClick={() => setOpen(false)}
                className="text-sm text-[#5a5652] hover:text-accent transition-colors font-medium cursor-pointer"
              >{label}</Link>
            ))}
            <a href="/cv.pdf" download className="text-sm font-semibold text-accent w-fit border-b border-accent pb-0.5">
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
