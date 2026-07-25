import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiPhone, FiMapPin } from 'react-icons/fi'
import { SectionLabel } from './About'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-black/[0.07]">
      <div className="max-w-5xl mx-auto">
        <SectionLabel number="05" label="Get in Touch"/>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          <motion.div
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.5 }}
          >
            <p className="text-[#5a5652] leading-relaxed mb-8 text-[15px]">
              I'm currently open to internship and junior developer opportunities.
              Whether you have a project in mind or just want to connect — reach out.
            </p>
            <motion.a href="mailto:yethu2000517@gmail.com"
              whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
              className="inline-flex items-center gap-3 px-7 py-3 bg-accent text-white font-semibold
                rounded-xl hover:bg-amber-900 transition-colors text-sm"
            >
              <FiMail size={16}/> Say Hello
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.5, delay:0.1 }}
            className="bg-[#faf8f4] rounded-2xl border border-black/[0.07] divide-y divide-black/[0.06]"
          >
            {[
              { Icon:FiMail,   label:'Email',    value:'yethu2000517@gmail.com', href:'mailto:yethu2000517@gmail.com' },
              { Icon:FiPhone,  label:'Phone',    value:'032 522 7456',           href:'tel:+840325227456' },
              { Icon:FiGithub, label:'GitHub',   value:'github.com/Yethu-2',    href:'https://github.com/Yethu-2', external:true },
              { Icon:FiMapPin, label:'Location', value:'Ho Chi Minh, Vietnam' },
            ].map(({ Icon, label, value, href, external }) => {
              const row = (
                <div className="flex items-center gap-4 px-6 py-4 group">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-accent"/>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-[#9b9895] uppercase tracking-widest font-medium">{label}</p>
                    <p className="text-sm text-[#4a4745] font-medium group-hover:text-accent transition-colors">{value}</p>
                  </div>
                </div>
              )
              if (!href) return <div key={label}>{row}</div>
              return (
                <a key={label} href={href} {...(external ? { target:'_blank', rel:'noreferrer' } : {})}>
                  {row}
                </a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
