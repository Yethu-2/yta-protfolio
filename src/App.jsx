import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="bg-[#050510] text-slate-100 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-8 text-center text-slate-600 text-sm">
        <p>
          Designed &amp; Built by{' '}
          <span className="text-accent font-medium">Ye Thu Aung</span>
        </p>
      </footer>
    </div>
  )
}
