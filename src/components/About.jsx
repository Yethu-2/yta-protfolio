import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiServer, FiSmartphone } from 'react-icons/fi'

const HIGHLIGHTS = [
  { icon: FiCode,        label: 'Frontend',   desc: 'React · Vite · Tailwind' },
  { icon: FiServer,      label: 'Backend',    desc: 'Node.js · Spring Boot · Express' },
  { icon: FiSmartphone,  label: 'Mobile',     desc: 'Kotlin · Jetpack Compose' },
  { icon: FiCpu,         label: 'AI & DevOps', desc: 'LLMs · Ollama · Docker' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="01" title="Who I Am" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-slate-400 text-base leading-relaxed"
          >
            <p>
              I'm an IT student at{' '}
              <span className="text-accent font-medium">RMIT University Vietnam</span>{' '}
              (expected graduation 2027), majoring in Full-Stack Development and AI
              Systems. I thrive at the intersection of clean backend architecture and
              intuitive frontend experiences.
            </p>
            <p>
              My work spans REST APIs with{' '}
              <span className="text-white">Spring Boot</span>, reactive UIs with{' '}
              <span className="text-white">React</span>, Android apps using{' '}
              <span className="text-white">Kotlin + Jetpack Compose</span>, and
              AI-driven tools powered by large language models via{' '}
              <span className="text-white">Ollama</span>.
            </p>
            <p>
              I care deeply about maintainable code, clean architecture, and shipping
              things that actually work — from local development all the way to
              containerised cloud deployment.
            </p>
            <p>
              Off the keyboard I'm exploring home server setups, self-hosting
              services, and reading about AI research.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Chip>English — Fluent</Chip>
              <Chip>Burmese — Native</Chip>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {HIGHLIGHTS.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-accent/20 transition-all"
              >
                <Icon className="text-accent mb-3" size={22} />
                <p className="text-white font-semibold text-sm mb-1">{label}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Chip({ children }) {
  return (
    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-mono rounded-full border border-accent/20">
      {children}
    </span>
  )
}

export function SectionHeading({ index, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-14"
    >
      <p className="text-accent font-mono text-sm mb-2">{index}. About Me</p>
      <h2 className="text-4xl md:text-5xl font-bold text-white">{title}</h2>
      <div className="w-14 h-0.5 bg-gradient-to-r from-accent to-transparent mt-4" />
    </motion.div>
  )
}
