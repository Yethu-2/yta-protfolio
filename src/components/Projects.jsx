import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { HiOutlineDeviceMobile, HiOutlineGlobe, HiOutlineLightBulb } from 'react-icons/hi'
import { SiKotlin, SiFirebase, SiReact, SiSpring, SiPostgresql, SiNodedotjs } from 'react-icons/si'
import { SectionLabel } from './About'

const PROJECTS = [
  {
    number: '01',
    title: 'Location Based Attendance System',
    type: 'Android App',
    TypeIcon: HiOutlineDeviceMobile,
    description: 'Android attendance app with geofence check-in/out, MVVM Clean Architecture, and offline-first sync between Firebase Firestore and Room DB — built with Jetpack Compose.',
    tech: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Hilt', 'Room DB', 'MVVM'],
    TechIcons: [SiKotlin, SiFirebase],
    github: 'https://github.com/Yethu-2',
  },
  {
    number: '02',
    title: 'RentMate — Property Rental Platform',
    type: 'Full-Stack Web App',
    TypeIcon: HiOutlineGlobe,
    description: 'Full-stack rental platform with Spring Boot REST API, JWT auth, React frontend, Stripe payments, and real-time WebSocket messaging on PostgreSQL/Supabase.',
    tech: ['Spring Boot', 'React', 'JWT', 'Stripe', 'WebSocket', 'PostgreSQL'],
    TechIcons: [SiSpring, SiReact, SiPostgresql],
    github: 'https://github.com/Yethu-2',
  },
  {
    number: '03',
    title: 'Promptly — AI Chatbot Generator',
    type: 'AI Application',
    TypeIcon: HiOutlineLightBulb,
    description: 'AI chatbot generator powered by local LLMs via Ollama. Users create custom chatbots from prompts or datasets, deployable as embeddable widgets on any website.',
    tech: ['Node.js', 'Ollama', 'LLMs', 'JavaScript', 'Embedded Widget'],
    TechIcons: [SiNodedotjs],
    github: 'https://github.com/Yethu-2',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-black/[0.07]">
      <div className="max-w-5xl mx-auto">
        <SectionLabel number="03" label="Projects"/>

        <div className="grid gap-5">
          {PROJECTS.map((p, i) => (
            <motion.div key={p.number}
              initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay:i*0.1, duration:0.5 }}
              className="bg-[#faf8f4] rounded-2xl border border-black/[0.07] p-7
                hover:border-accent/25 hover:shadow-lg hover:shadow-black/5 transition-all group"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <p.TypeIcon size={18} className="text-accent"/>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-mono text-[10px] text-[#9b9895] tracking-widest uppercase font-medium">
                        {p.type}
                      </span>
                      <span className="text-[#c5c0b8] text-xs">·</span>
                      <span className="font-mono text-[10px] text-accent font-medium">{p.number}</span>
                    </div>
                    <h3 className="font-bold text-[#18181b] text-lg leading-tight group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </div>
                <a href={p.github} target="_blank" rel="noreferrer"
                  className="text-[#c5c0b8] hover:text-accent transition-colors flex-shrink-0 mt-1"
                  aria-label="GitHub">
                  <FiArrowUpRight size={20}/>
                </a>
              </div>

              <p className="text-[#5a5652] leading-relaxed mb-5 ml-12 text-[14px]">
                {p.description}
              </p>

              <div className="flex flex-wrap items-center gap-2 ml-12">
                <div className="flex gap-2 mr-1">
                  {p.TechIcons.map((Icon, idx) => (
                    <Icon key={idx} size={14} className="text-[#9b9895]"/>
                  ))}
                </div>
                {p.tech.map(t => (
                  <span key={t}
                    className="px-2.5 py-1 bg-white border border-black/[0.07] text-[#5a5652] text-[11px] font-mono rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
