import Link from 'next/link'

const Footer = () => {
  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github/Ravi0720' },
    { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/ravi-shankar-18730b233/' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com/RaviShanka83714' },
    { icon: 'fab fa-dribbble', url: '#' },
  ]

  return (
    <footer className="bg-darker py-12 border-t border-light/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-bold text-light">
              Portfolio<span className="text-primary">.</span>
            </Link>
            <p className="text-light/60 mt-2">
              Creating amazing digital experiences
            </p>
          </div>
          
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="w-10 h-10 bg-dark border border-light/10 rounded-full flex items-center justify-center text-light hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-light/10 mt-8 pt-8 text-center">
          <p className="text-light/50">
            &copy; 2024 Ravi Shankar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer