'use client'
import ScrollAnimation from './ScrollAnimation'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: '3D E-Commerce Experience',
      description: 'An immersive shopping experience with 3D product visualization and AR try-on features built with Three.js and React.',
      tags: ['Three.js', 'React', 'WebGL', 'Node.js'],
      gradient: 'from-primary to-secondary',
      icon: 'fas fa-globe'
    },
    {
      id: 2,
      title: 'Interactive Web Game',
      description: 'A browser-based multiplayer game with real-time physics simulation and WebSocket communication.',
      tags: ['JavaScript', 'WebSockets', 'Canvas', 'Node.js'],
      gradient: 'from-accent to-primary',
      icon: 'fas fa-gamepad'
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for visualizing complex datasets with 3D charts and real-time analytics.',
      tags: ['D3.js', 'Vue.js', 'TypeScript', 'WebGL'],
      gradient: 'from-secondary to-accent',
      icon: 'fas fa-chart-line'
    },
    {
      id: 4,
      title: 'AR Portfolio Platform',
      description: 'Augmented reality portfolio showcase using WebXR and device camera integration.',
      tags: ['WebXR', 'Three.js', 'React', 'AR'],
      gradient: 'from-primary to-accent',
      icon: 'fas fa-vr-cardboard'
    },
    {
      id: 5,
      title: 'Games Hub',
      description: 'A website Which integrate mutiple games for fun play',
      tags: ['react'],
      gradient: 'from-secondary to-forth',
      icon: 'fas fa-brush'
    },
    {
      id: 6,
      title:'SAAS',
      description: 'A software service for learninig what market is doing in latest years.',
      tags: ['Fastapi', 'Next.js', 'Ollama models'],
      gradient: 'from-accent to-primary',
      icon: 'fas fa-robot'

    }

  ]

  return (
    <section id="projects" className="py-20 lg:py-28 bg-dark/30">
      <div className="container mx-auto px-6">
        <ScrollAnimation animation="fade-in">
          <div className="section-title">
            <h2>My Projects</h2>
            <p>Check out some of my recent work and creative projects</p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation 
              key={project.id}
              animation="scale"
              delay={index * 200}
            >
              <div className="group bg-dark/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-light/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <i className={`${project.icon} text-white text-5xl z-10`}></i>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-light mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-light/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="btn text-sm px-6 py-2">
                      <i className="fas fa-eye mr-2"></i>
                      View Project
                    </button>
                    <button className="btn btn-outline text-sm px-6 py-2">
                      <i className="fab fa-github mr-2"></i>
                      Code
                    </button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects