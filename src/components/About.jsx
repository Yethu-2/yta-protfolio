import { motion } from 'framer-motion'
import { FiCode, FiServer, FiSmartphone, FiCpu } from 'react-icons/fi'

const CARDS = [
  { Icon: FiCode,       label: 'Frontend',    desc: 'React · Vite · Tailwind' },
  { Icon: FiServer,     label: 'Backend',     desc: 'Node.js · Spring Boot' },
  { Icon: FiSmartphone, label: 'Mobile',      desc: 'Kotlin · Jetpack Compose' },
  { Icon: FiCpu,        label: 'AI & DevOps', desc: 'LLMs · Ollama · Docker' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-black/[0.07]">
      <div className="max-w-5xl mx-auto">
        <SectionLabel number="01" label="About Me"/>

        <div className="grid md:grid-cols-2 gap-12 mb-10">
          <motion.div
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.5 }}
            className="space-y-4 text-[#4a4745] leading-relaxed text-[15px]"
          >
            <p>
              I'm an IT student at{' '}
              <span className="text-[#18181b] font-semibold">RMIT University Vietnam</span>{' '}
              (graduating 2027), specializing in Full-Stack Development and AI Systems.
            </p>
            <p>
              My work spans REST APIs with <span className="text-[#18181b] font-medium">Spring Boot</span>,
              reactive UIs with <span className="text-[#18181b] font-medium">React</span>, Android apps in{' '}
              <span className="text-[#18181b] font-medium">Kotlin + Jetpack Compose</span>, and AI tools
              built on <span className="text-[#18181b] font-medium">Ollama</span>.
            </p>
            <p>
              I care about clean architecture, maintainable code, and shipping things
              that work — from local dev to containerised cloud deployment.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <Tag>English — Fluent</Tag>
              <Tag>Burmese — Native</Tag>
              <Tag>Open to opportunities</Tag>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {CARDS.map(({ Icon, label, desc }, i) => (
              <motion.div key={label}
                initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay: i*0.08, duration:0.5 }}
                className="bg-[#faf8f4] rounded-xl p-5 border border-black/[0.07]
                  hover:border-accent/30 hover:shadow-md hover:shadow-black/5 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-accent"/>
                </div>
                <p className="font-semibold text-[#18181b] text-sm mb-0.5">{label}</p>
                <p className="text-[#706d6a] text-xs">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Tag({ children }) {
  return (
    <span className="px-3 py-1 bg-[#faf8f4] border border-black/[0.08] text-[#5a5652] text-xs rounded-full font-mono">
      {children}
    </span>
  )
}

export function SectionLabel({ number, label }) {
  return (
    <div className="mb-10">
      <span className="font-mono text-xs text-accent tracking-widest uppercase font-medium">{number} —</span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#18181b] mt-1">{label}</h2>
    </div>
  )
}
