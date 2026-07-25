import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'

const COURSES = [
  'Algorithms & Analysis',
  'Full Stack Development',
  'Mobile Application Development',
  'Further Programming',
  'Cloud Foundations',
  'Systems Deployment & Operations',
  'Software Engineering: Process & Tools',
  'Programming Internet of Things',
  'Software Engineering Project Management',
]

export default function Education() {
  return (
    <section id="education" className="py-28 px-6 bg-white/[0.012]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-accent font-mono text-sm mb-2">04. Education</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Background</h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-accent to-transparent mt-4" />
        </motion.div>

        <div className="relative">
          {/* Timeline bar */}
          <div className="absolute left-6 top-3 bottom-3 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent hidden md:block" />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:pl-16 relative"
          >
            {/* Timeline dot */}
            <div className="absolute left-[18px] top-4 w-5 h-5 rounded-full bg-accent border-4 border-[#050510] hidden md:block shadow-[0_0_10px_#64ffda50]" />

            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-accent/20 transition-all">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-7">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20">
                    <HiAcademicCap size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">
                      Bachelor of Information Technology
                    </h3>
                    <p className="text-accent font-medium text-sm mt-0.5">
                      RMIT University Vietnam (SGS)
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-mono rounded-full border border-accent/20">
                    Expected 2027
                  </span>
                  <p className="text-slate-500 text-xs mt-1.5">Ho Chi Minh City, Vietnam</p>
                </div>
              </div>

              <div>
                <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-4">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {COURSES.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1.5 bg-white/5 border border-white/8 text-slate-300 text-xs rounded-lg font-mono"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
