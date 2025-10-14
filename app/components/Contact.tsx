'use client'
import { useState } from 'react'
import ScrollAnimation from './ScrollAnimation'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const contactInfo = [
    {
      type: 'location',
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Delhi, India'
    },
    {
      type: 'email',
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'rs2583192@gmail.com'
    },
    {
      type: 'phone',
      icon: 'fas fa-phone',
      label: 'Phone',
      value: 'public soon'
    }
  ]

  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/Ravi0720' },
    { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/ravi-shankar-18730b233' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com/RaviShanka83714' },
    { icon: 'fab fa-dribbble', url: '#' }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <ScrollAnimation animation="fade-in">
          <div className="section-title">
            <h2>Get In Touch</h2>
            <p>Have a project in mind? Let&apos;s discuss how we can work together</p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <ScrollAnimation animation="slide-left" className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-light mb-6">Contact Information</h3>
              <p className="text-light/70 text-lg">
                Feel free to reach out to me for any questions or opportunities!
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.type} className="flex items-center gap-4 p-4 rounded-xl bg-dark/30 hover:bg-dark/50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-lg">
                    <i className={info.icon}></i>
                  </div>
                  <div>
                    <h4 className="text-light font-semibold">{info.label}</h4>
                    <p className="text-light/70">
                      {info.type === 'email' ? (
                        <a href={`mailto:${info.value}`} className="hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        info.value
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-dark/50 border border-light/10 rounded-full flex items-center justify-center text-light hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-right">
            <form onSubmit={handleSubmit} className="bg-dark/50 backdrop-blur-sm p-8 rounded-2xl border border-light/10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-light font-medium mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark/30 border border-light/10 rounded-lg text-light placeholder-light/50 focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Enter Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-light font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark/30 border border-light/10 rounded-lg text-light placeholder-light/50 focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-light font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark/30 border border-light/10 rounded-lg text-light placeholder-light/50 focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder="Enter subject"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-light font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-dark/30 border border-light/10 rounded-lg text-light placeholder-light/50 focus:outline-none focus:border-primary transition-colors duration-300 resize-vertical"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn w-full text-center">
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </button>
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default Contact