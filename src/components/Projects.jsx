import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { HiOutlineDeviceMobile, HiOutlineOfficeBuilding, HiOutlineSparkles } from 'react-icons/hi'

const PROJECTS = [
  {
    number: '01',
    title: 'Location Based Attendance System',
    subtitle: 'Android Application',
    Icon: HiOutlineDeviceMobile,
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    iconColor: 'text-emerald-400',
    description:
      'An Android attendance app with location-based authentication and geofence check-in/out. Built with MVVM Clean Architecture and a fully offline-first data sync strategy.',
    points: [
      'Geofence-based check-in/out with real-time location validation',
      'MVVM + Clean Architecture using repositories, use cases, and Hilt DI',
      'Firebase Authentication & Firestore with offline-first Room DB synchronisation',
      'Jetpack Compose + Material3 UI with dark/light theme support',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Hilt', 'Room DB', 'MVVM', 'Material3'],
    github: 'https://github.com/Yethu-2',
    gradient: 'from-emerald-950/60 to-teal-950/30',
    border: 'border-emerald-500/15 hover:border-emerald-500/35',
    numColor: 'text-emerald-500/10 group-hover:text-emerald-500/20',
  },
  {
    number: '02',
    title: 'RentMate',
    subtitle: 'Property Rental Management System',
    Icon: HiOutlineOfficeBuilding,
    iconBg: 'bg-blue-500/10 border-blue-500/20',
    iconColor: 'text-blue-400',
    description:
      'A full-stack property rental platform connecting tenants, landlords, and property managers — with Spring Boot REST API, real-time messaging, and integrated payments.',
    points: [
      'Spring Boot REST API with JWT authentication and role-based access control',
      'React + Vite frontend for property browsing, applications, and lease management',
      'Stripe payment integration for rent and deposit transactions',
      'Real-time messaging and notifications via WebSocket (STOMP protocol)',
      'PostgreSQL on Supabase with Supabase Storage for file management',
    ],
    tech: ['Spring Boot', 'React', 'Vite', 'JWT', 'Stripe', 'WebSocket', 'PostgreSQL', 'Supabase'],
    github: 'https://github.com/Yethu-2',
    gradient: 'from-blue-950/60 to-indigo-950/30',
    border: 'border-blue-500/15 hover:border-blue-500/35',
    numColor: 'text-blue-500/10 group-hover:text-blue-500/20',
  },
  {
    number: '03',
    title: 'Promptly',
    subtitle: 'AI Chatbot Generator',
    Icon: HiOutlineSparkles,
    iconBg: 'bg-purple-500/10 border-purple-500/20',
    iconColor: 'text-purple-400',
    description:
      'An AI-powered chatbot generator using large language models via Ollama. Users define prompts or datasets to create custom chatbots deployable as embeddable widgets.',
    points: [
      'LLM integration through Ollama for local, privacy-first AI model inference',
      'Dynamic chatbot generation from user-defined prompts or custom datasets',
      'Node.js backend managing prompt templates, conversation flow, and responses',
      'Embeddable widget system for third-party site integration',
    ],
    tech: ['Node.js', 'Ollama', 'LLMs', 'JavaScript', 'Embedded Widget'],
    github: 'https://github.com/Yethu-2',
    gradient: 'from-purple-950/60 to-pink-950/30',
    border: 'border-purple-500/15 hover:border-purple-500/35',
    numColor: 'text-purple-500/10 group-hover:text-purple-500/20',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-accent font-mono text-sm mb-2">03. Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Things I've Built</h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-accent to-transparent mt-4" />
        </motion.div>

        <div className="space-y-6">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className={`group relative rounded-2xl border bg-gradient-to-br ${p.gradient} ${p.border} p-8 transition-all duration-300 overflow-hidden`}
            >
              {/* Background project number */}
              <span
                className={`absolute top-4 right-6 text-8xl font-bold font-mono select-none transition-colors duration-300 ${p.numColor}`}
              >
                {p.number}
              </span>

              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className={`p-2.5 rounded-xl border ${p.iconBg} flex-shrink-0`}>
                  <p.Icon size={22} className={p.iconColor} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-mono tracking-wide uppercase mb-0.5">
                    {p.subtitle}
                  </p>
                  <h3 className="text-white text-xl font-bold leading-tight">{p.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-3xl">
                {p.description}
              </p>

              {/* Bullet points */}
              <ul className="space-y-2 mb-6">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-slate-400 text-sm">
                    <span className="text-accent mt-0.5 flex-shrink-0 text-xs">▸</span>
                    {pt}
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex flex-wrap gap-2 flex-1">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-white/5 border border-white/8 text-slate-400 text-xs font-mono rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-slate-500 hover:text-accent transition-colors text-sm font-mono flex-shrink-0"
                >
                  <FiGithub size={15} />
                  GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
