import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiGithub, FiMail } from 'react-icons/fi'
import { HiLocationMarker } from 'react-icons/hi'

const ROLES = [
  'Full Stack Developer',
  'AI Systems Builder',
  'Android Developer',
  'Cloud & DevOps Enthusiast',
]

function useTyping(words) {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[idx]
    const speed = deleting ? 35 : 75

    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), 2200)
      return () => clearTimeout(t)
    }
    if (deleting && text === '') {
      setDeleting(false)
      setIdx((i) => (i + 1) % words.length)
      return
    }

    const t = setTimeout(() => {
      setText(deleting ? text.slice(0, -1) : word.slice(0, text.length + 1))
    }, speed)
    return () => clearTimeout(t)
  }, [text, deleting, idx, words])

  return text
}

export default function Hero() {
  const role = useTyping(ROLES)

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-40 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[140px]" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px]" />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(100,255,218,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="font-mono text-accent text-sm tracking-widest mb-5">
            Hi, my name is
          </p>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-white leading-none mb-4 tracking-tight">
            Ye Thu Aung<span className="text-accent">.</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-400 mb-6 flex items-center gap-2 h-10">
            <span className="text-accent/90">{role}</span>
            <span className="w-[2px] h-7 bg-accent/80 inline-block animate-pulse" />
          </h2>

          <p className="text-slate-400 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
            IT student at{' '}
            <span className="text-white font-medium">RMIT University Vietnam</span>{' '}
            specializing in{' '}
            <span className="text-accent">Full-Stack Development</span> and{' '}
            <span className="text-accent">AI Systems</span>. I build scalable
            applications with Node.js, Spring Boot, and React — and love turning
            complex problems into clean, efficient solutions.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="projects" smooth duration={500} offset={-70}>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-3 bg-accent text-[#050510] font-bold rounded-lg hover:bg-accent/90 transition-colors font-mono text-sm"
              >
                View My Work
              </motion.button>
            </Link>
            <Link to="contact" smooth duration={500} offset={-70}>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-3 border border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-colors font-mono text-sm"
              >
                Get In Touch
              </motion.button>
            </Link>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Yethu-2"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-accent transition-colors"
            >
              <FiGithub size={22} />
            </a>
            <a
              href="mailto:yethu2000517@gmail.com"
              aria-label="Email"
              className="text-slate-400 hover:text-accent transition-colors"
            >
              <FiMail size={22} />
            </a>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1.5 text-slate-500 text-sm">
              <HiLocationMarker size={13} className="text-accent" />
              Ho Chi Minh, Vietnam
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
