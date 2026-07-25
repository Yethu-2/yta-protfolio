import { motion } from 'framer-motion'
import { HiOutlineAcademicCap } from 'react-icons/hi'
import { SectionLabel } from './About'

const COURSES = [
  'Algorithms & Analysis', 'Full Stack Development', 'Mobile App Development',
  'Further Programming', 'Cloud Foundations', 'Systems Deployment & Operations',
  'SE: Process & Tools', 'Programming IoT', 'SE Project Management',
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 border-t border-black/[0.07]">
      <div className="max-w-5xl mx-auto">
        <SectionLabel number="04" label="Education"/>

        <motion.div
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}
          className="bg-[#faf8f4] rounded-2xl border border-black/[0.07] p-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <HiOutlineAcademicCap size={22} className="text-accent"/>
              </div>
              <div>
                <h3 className="font-bold text-[#18181b] text-xl mb-1">
                  Bachelor of Information Technology
                </h3>
                <p className="text-[#4a4745] text-sm font-medium">RMIT University Vietnam (SGS)</p>
                <p className="text-[#706d6a] text-sm">Ho Chi Minh City, Vietnam</p>
              </div>
            </div>
            <span className="px-4 py-1.5 bg-accent/10 text-accent font-mono text-xs rounded-full border border-accent/20 font-medium">
              Expected 2027
            </span>
          </div>

          <div className="border-t border-black/[0.07] pt-6">
            <p className="font-mono text-[11px] text-[#9b9895] tracking-widest uppercase mb-4 font-medium">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {COURSES.map((c, i) => (
                <motion.span key={c}
                  initial={{ opacity:0 }} whileInView={{ opacity:1 }}
                  viewport={{ once:true }} transition={{ delay: i*0.04 }}
                  className="px-3 py-1.5 bg-white border border-black/[0.07] text-[#5a5652] text-xs rounded-lg
                    hover:border-accent/30 hover:text-accent transition-all cursor-default font-mono"
                >{c}</motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
