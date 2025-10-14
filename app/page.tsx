import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingChatbot from './components/FloatingChatbot'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FloatingChatbot />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}