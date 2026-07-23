import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import MarketingResults from './sections/MarketingResults'
import Experience from './sections/Experience'
import Certifications from './sections/Certifications'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <MarketingResults />
        <Experience />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
