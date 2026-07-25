import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiGithub, FiMail, FiDownload } from 'react-icons/fi'

const ROLES = ['Full Stack Developer', 'AI Systems Builder', 'Android Developer', 'Cloud Engineer']

function useTyping(words) {
  const [idx, setIdx]   = useState(0)
  const [text, setText] = useState('')
  const [del, setDel]   = useState(false)

  useEffect(() => {
    const word = words[idx], speed = del ? 35 : 80
    if (!del && text === word) { const t = setTimeout(() => setDel(true), 2000); return () => clearTimeout(t) }
    if (del && !text)          { setDel(false); setIdx(i => (i + 1) % words.length); return }
    const t = setTimeout(() => setText(del ? text.slice(0,-1) : word.slice(0, text.length+1)), speed)
    return () => clearTimeout(t)
  }, [text, del, idx, words])

  return text
}

export default function Hero() {
  const role = useTyping(ROLES)

  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-16">
      <div className="max-w-5xl mx-auto w-full py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 relative"
          >
            <div className="w-48 h-60 md:w-56 md:h-72 lg:w-64 lg:h-80 rounded-2xl overflow-hidden
              ring-1 ring-black/10 shadow-xl shadow-black/10">
              <img src="/profile.jpg" alt="Ye Thu Aung"
                className="w-full h-full object-cover object-top grayscale"/>
            </div>
            {/* Accent corner bracket */}
            <div className="absolute -bottom-3 -right-3 w-14 h-1 bg-accent rounded-full"/>
            <div className="absolute -bottom-3 -right-3 w-1 h-14 bg-accent rounded-full"/>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 min-w-0"
          >
            <p className="font-mono text-accent text-xs tracking-widest uppercase mb-4 font-medium">
              Hey, I'm
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#18181b]
              leading-[1.05] tracking-tight mb-4">
              Ye Thu<br/>Aung
            </h1>

            <div className="flex items-center gap-2 mb-6 h-8">
              <span className="text-[#4a4745] font-semibold text-lg">{role}</span>
              <span className="w-0.5 h-5 bg-accent animate-pulse inline-block"/>
            </div>

            <p className="text-[#5a5652] leading-relaxed mb-4 max-w-lg text-[15px]">
              IT student at <span className="text-[#18181b] font-semibold">RMIT University Vietnam</span>{' '}
              building full-stack products across web, mobile, and AI — from Spring Boot REST APIs
              and React frontends to Kotlin Android apps and local LLM tooling.
            </p>
            <p className="text-[#5a5652] leading-relaxed mb-6 max-w-lg text-[15px]">
              I care about clean architecture and shipping things that actually work —
              containerised with Docker, deployed on self-hosted infrastructure,
              and currently open to <span className="text-[#18181b] font-medium">internship and junior developer</span> roles.
            </p>

            <div className="flex gap-6 mb-8">
              {[['3', 'Projects'], ['20+', 'Technologies'], ['2027', 'Graduating']].map(([val, lbl]) => (
                <div key={lbl}>
                  <p className="text-xl font-extrabold text-[#18181b]">{val}</p>
                  <p className="font-mono text-[10px] text-[#9b9895] uppercase tracking-widest">{lbl}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link to="projects" smooth duration={500} offset={-64}>
                <motion.button whileHover={{scale:1.03}} whileTap={{scale:0.97}}
                  className="px-6 py-2.5 bg-[#18181b] text-white font-semibold rounded-lg text-sm hover:bg-zinc-700 transition-colors">
                  View Projects
                </motion.button>
              </Link>
              <a href="/cv.pdf" download>
                <motion.button whileHover={{scale:1.03}} whileTap={{scale:0.97}}
                  className="px-6 py-2.5 border border-accent text-accent font-semibold rounded-lg text-sm hover:bg-accent hover:text-white transition-all flex items-center gap-2">
                  <FiDownload size={14}/> Resume
                </motion.button>
              </a>
            </div>

            <div className="flex items-center gap-5">
              <a href="https://github.com/Yethu-2" target="_blank" rel="noreferrer"
                className="text-[#706d6a] hover:text-accent transition-colors" aria-label="GitHub">
                <FiGithub size={20}/>
              </a>
              <a href="mailto:yethu2000517@gmail.com"
                className="text-[#706d6a] hover:text-accent transition-colors" aria-label="Email">
                <FiMail size={20}/>
              </a>
              <span className="text-[#c5c0b8]">|</span>
              <span className="font-mono text-xs text-[#706d6a]">Ho Chi Minh, Vietnam</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
