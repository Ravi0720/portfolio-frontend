'use client'
import ScrollAnimation from './ScrollAnimation'

const About = () => {
  const skills = [
    'JavaScript', 'Three.js', 'React/Next.js', 'TypeScript',
    'Node.js', 'WebGL', 'Tailwind CSS', 'Python'
  ]

  const expertise = [
    { name: 'Frontend Development', level: 95 },
    { name: '3D Web Experiences', level: 90 },
    { name: 'Backend Development', level: 85 },
    { name: 'UI/UX Design', level: 80 },
  ]

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <ScrollAnimation animation="fade-in">
          <div className="section-title">
            <h2>About Me</h2>
            <p>Learn more about my skills, experience, and passion for technology</p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollAnimation animation="slide-left" className="space-y-6">
            <h3 className="text-3xl font-bold text-light">Creating Digital Magic</h3>
            <p className="text-light/80 text-lg leading-relaxed">
              I&apos;m a passionate full-stack developer with over 5 years of experience creating
              innovative web solutions. My expertise spans frontend and backend technologies,
              with a special focus on creating immersive 3D experiences.
            </p>

            <p className="text-light/80 text-lg leading-relaxed">
              I believe in the power of technology to transform ideas into reality, and I&apos;m
              constantly exploring new ways to push the boundaries of what&apos;s possible on the web.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-right">
            <div className="bg-dark/50 backdrop-blur-sm p-8 rounded-2xl border border-light/10">
              <h3 className="text-2xl font-bold text-light mb-6">My Expertise</h3>
              <div className="space-y-6">
                {expertise.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-light font-medium">{item.name}</span>
                      <span className="text-primary font-semibold">{item.level}%</span>
                    </div>
                    <div className="w-full bg-light/10 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default About