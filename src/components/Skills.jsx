import { motion } from 'framer-motion'

const CATEGORIES = [
  {
    title: 'Languages',
    skills: ['Java', 'Kotlin', 'JavaScript', 'Python', 'SQL'],
    color: 'text-cyan-400',
    badge: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20',
    glow: 'hover:border-cyan-400/30',
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Express', 'Spring Boot', 'JavaFX', 'Jetpack Compose'],
    color: 'text-violet-400',
    badge: 'bg-violet-400/10 text-violet-300 border-violet-400/20',
    glow: 'hover:border-violet-400/30',
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase Firestore', 'Supabase'],
    color: 'text-emerald-400',
    badge: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20',
    glow: 'hover:border-emerald-400/30',
  },
  {
    title: 'Tools & Platforms',
    skills: ['Docker', 'Git', 'Maven', 'Linux', 'AWS', 'Nginx', 'Cloudflare'],
    color: 'text-amber-400',
    badge: 'bg-amber-400/10 text-amber-300 border-amber-400/20',
    glow: 'hover:border-amber-400/30',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-white/[0.012]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-accent font-mono text-sm mb-2">02. Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Tech Stack</h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-accent to-transparent mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {CATEGORIES.map(({ title, skills, color, badge, glow }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`p-6 rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-200 ${glow}`}
            >
              <h3 className={`font-bold text-base mb-5 ${color}`}>{title}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border ${badge}`}
                  >
                    {skill}
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
