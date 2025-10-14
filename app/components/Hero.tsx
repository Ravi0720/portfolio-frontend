'use client'
import { useRef, MouseEvent } from 'react'
import ScrollAnimation from './ScrollAnimation'
import Dragon from './Dragon'

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null)

  // Handler for text pointer follow motion
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!textRef.current) return
    const { clientX, clientY } = e

    // Get screen width and height to normalize position
    const vw = window.innerWidth
    const vh = window.innerHeight

    // Map cursor position from 0 to 1, then shift and scale
    const x = ((clientX / vw) - 0.5) * 20 // text moves max ±10px on X
    const y = ((clientY / vh) - 0.5) * 20 // text moves max ±10px on Y

    textRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
    textRef.current.style.transition = 'transform 0.1s ease-out'
  }

  const handleMouseLeave = () => {
    if (!textRef.current) return
    textRef.current.style.transform = 'translate3d(0, 0, 0)'
    textRef.current.style.transition = 'transform 0.6s ease-in-out'
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950"
    >
      {/* Aurora Background Effect */}
      <div className="aurora-background absolute inset-0 z-0">
        <div className="aurora-shape shape1"></div>
        <div className="aurora-shape shape2"></div>
        <div className="aurora-shape shape3"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10 flex flex-col lg:flex-row items-center justify-center gap-16 w-full h-full">
        {/* Left Side: Text Content with effect */}
        <div
          ref={textRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="lg:w-1/2 w-full flex flex-col items-center lg:items-start cursor-pointer"
        >
          <ScrollAnimation animation="slide-right" delay={200}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-light mb-6 leading-tight text-center lg:text-left">
              Hi, I&apos;m <span className="text-primary">Ravi Shankar</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Creative Developer
              </span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in" delay={400}>
            <p className="text-xl text-light/80 mb-8 leading-relaxed text-center lg:text-left">
              I create immersive digital experiences with cutting-edge technologies
              and innovative design approaches.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="slide-left" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="btn text-center">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline text-center">
                Get In Touch
              </a>
            </div>
          </ScrollAnimation>
        </div>

        {/* Right Side: Dragon Component full height */}
        <div className="lg:w-1/2 w-full flex items-center justify-center mt-12 lg:mt-0 h-full">
          <div className="w-full h-full flex items-center justify-center">
            <Dragon />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
