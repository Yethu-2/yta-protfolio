import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Education  from './components/Education'
import Contact    from './components/Contact'

export default function App() {
  return (
    <div className="bg-[#f0ede6] text-[#18181b] font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-black/[0.06] py-8 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="font-mono text-xs text-zinc-400">Ye Thu Aung © 2025</span>
          <span className="font-mono text-xs text-zinc-300">Built with React</span>
        </div>
      </footer>
    </div>
  )
}
