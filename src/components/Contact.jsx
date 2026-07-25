import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiPhone } from 'react-icons/fi'
import { HiLocationMarker } from 'react-icons/hi'

const CONTACT_ITEMS = [
  {
    Icon: FiMail,
    label: 'yethu2000517@gmail.com',
    href: 'mailto:yethu2000517@gmail.com',
  },
  {
    Icon: FiPhone,
    label: '032 522 7456',
    href: 'tel:+840325227456',
  },
  {
    Icon: FiGithub,
    label: 'github.com/Yethu-2',
    href: 'https://github.com/Yethu-2',
    external: true,
  },
  {
    Icon: HiLocationMarker,
    label: 'Ho Chi Minh, Vietnam',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-mono text-sm mb-2">05. Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-accent to-transparent mx-auto mb-8" />

          <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-xl mx-auto">
            I'm currently open to internship and junior developer opportunities.
            Whether you have a question, a project idea, or just want to say hi
            — my inbox is always open.
          </p>

          <motion.a
            href="mailto:yethu2000517@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 px-10 py-4 border-2 border-accent text-accent font-bold font-mono rounded-xl hover:bg-accent/10 transition-colors text-base mb-14"
          >
            <FiMail size={18} />
            Say Hello
          </motion.a>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {CONTACT_ITEMS.map(({ Icon, label, href, external }) => {
              const inner = (
                <span className="flex items-center gap-2 text-slate-400 hover:text-accent transition-colors text-sm">
                  <Icon size={14} className="text-accent flex-shrink-0" />
                  {label}
                </span>
              )
              if (!href) return <span key={label}>{inner}</span>
              return (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  {inner}
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
