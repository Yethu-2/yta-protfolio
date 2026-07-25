import { motion } from 'framer-motion'
import {
  SiJavascript, SiPython, SiKotlin, SiReact, SiSpring,
  SiNodedotjs, SiPostgresql, SiMysql, SiMongodb,
  SiFirebase, SiSupabase, SiDocker, SiGit, SiLinux, SiNginx, SiCloudflare, SiAndroid,
} from 'react-icons/si'
import { SectionLabel } from './About'

const CATEGORIES = [
  {
    label: 'Languages',
    items: [
      { name:'Java',       Icon:null },
      { name:'Kotlin',     Icon:SiKotlin },
      { name:'JavaScript', Icon:SiJavascript },
      { name:'Python',     Icon:SiPython },
      { name:'SQL',        Icon:null },
    ],
  },
  {
    label: 'Frameworks',
    items: [
      { name:'React',           Icon:SiReact },
      { name:'Node.js',         Icon:SiNodedotjs },
      { name:'Spring Boot',     Icon:SiSpring },
      { name:'Express',         Icon:null },
      { name:'Jetpack Compose', Icon:SiAndroid },
    ],
  },
  {
    label: 'Databases',
    items: [
      { name:'PostgreSQL', Icon:SiPostgresql },
      { name:'MySQL',      Icon:SiMysql },
      { name:'MongoDB',    Icon:SiMongodb },
      { name:'Firebase',   Icon:SiFirebase },
      { name:'Supabase',   Icon:SiSupabase },
    ],
  },
  {
    label: 'Tools & Infra',
    items: [
      { name:'Docker',     Icon:SiDocker },
      { name:'Git',        Icon:SiGit },
      { name:'Linux',      Icon:SiLinux },
      { name:'Nginx',      Icon:SiNginx },
      { name:'Cloudflare', Icon:SiCloudflare },
      { name:'AWS',        Icon:null },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-black/[0.07]">
      <div className="max-w-5xl mx-auto">
        <SectionLabel number="02" label="Tech Stack"/>

        <div className="grid sm:grid-cols-2 gap-5">
          {CATEGORIES.map(({ label, items }, ci) => (
            <motion.div key={label}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay:ci*0.08, duration:0.5 }}
              className="bg-[#faf8f4] rounded-xl p-6 border border-black/[0.07]"
            >
              <p className="font-mono text-[11px] text-[#9b9895] tracking-widest uppercase mb-4 font-medium">
                {label}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map(({ name, Icon }) => (
                  <span key={name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5
                      bg-white border border-black/[0.08] text-[#4a4745] text-xs font-medium rounded-lg
                      hover:border-accent/40 hover:text-accent transition-all cursor-default group"
                  >
                    {Icon
                      ? <Icon size={12} className="text-[#9b9895] group-hover:text-accent transition-colors"/>
                      : <span className="w-1.5 h-1.5 rounded-full bg-[#c5c0b8] group-hover:bg-accent transition-colors"/>
                    }
                    {name}
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
