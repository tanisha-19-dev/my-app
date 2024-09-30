'use client'

import { useState } from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Mail, Github, Linkedin, Twitter, Menu, X, ExternalLink } from 'lucide-react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from 'next/image';
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },  
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    
              <h1 className="text-2xl font-bold">Tanisha Rathore</h1>
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-blue-600 transition-colors text-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
          <div className="container mx-auto px-4 text-center">
            <img src="/images/tanisha.jpg" alt="" className="rounded-full w-64 h-64 object-contain shadow-lg mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-4">Tanisha Rathore</h2>
            <p className="text-xl mb-6">Computer Science and Engineering Student</p>
            <p className="mb-6">Raipur, Chhattisgarh  |  tanisha20579@gmail.com</p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com/in/tanisha-19-rathore/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-gray-800">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/tanisha-19-dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-gray-800">
                <Github size={24} />
              </a>
              <a href="https://x.com/62Tanisha99507" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-gray-800">
                <Twitter size={24} />
              </a>
              
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <p className="text-center max-w-3xl mx-auto">
              Dynamic and motivated Computer Science and Engineering graduate with a passion for technology and innovation. 
              Possess a solid foundation in software development, machine learning, and data analysis, complemented by hands-on project experience. 
              Driven by a love for solving complex problems and a commitment to continuous learning and professional growth.
            </p>
          </div>
        </section>

        <section id="education" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Bhilai Institute of Technology, Durg</h3>
              <p className="text-gray-600">B. Tech, Computer Science & Engineering (Data Science)</p>
              <p>Nov 2021 - Jun 2025</p>
              <p>CPI: 8.68</p>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Bytewise Fellow [Machine Learning, Deep Learning]</h3>
                <p className="text-gray-600">Bytewise Ltd.</p>
                <p>Jun 2024 – Aug 2024</p>
                <p>Followed-up with daily task schedule and learnt Machine Learning application.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Gen AI & Cloud Research Intern</h3>
                <p className="text-gray-600">Kloudstac</p>
                <p>Apl 2024 – Jul 2024</p>
                <p>Developed 29+ documentation in Llama, LLM, Generative AI, data engineering & cloud (AWS, Azure, GCP, Databricks).</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Web Dev Intern</h3>
                <p className="text-gray-600">Octanet Pvt. Ltd.</p>
                <p>Jul 2023 – Aug 2023</p>
                <p>Curated different web designs for the organization&apos;s websites and socials.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/images/ticket.png" alt="Lara-Desk" className="w-full h-48 object-contain" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Lara-Desk</h3>
                  <p className="text-gray-600 mb-4">Full stack ticket management web application for event organization and centralized attendee management.</p>
                  <div className="flex justify-between">
                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                      <Github size={16} className="mr-1" /> Code
                    </a>
                    <a href="https://getlaradesk.com/dashboard/home" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink size={16} className="mr-1" /> Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/images/cup.png" alt="Starbucks Web Page" className="w-full h-48 object-contain" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Starbucks Web Page</h3>
                  <p className="text-gray-600 mb-4">Interactive UI and UX for a commercial website to facilitate customer engagement.</p>
                  <div className="flex justify-between">
                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                      <Github size={16} className="mr-1" /> Code
                    </a>
                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink size={16} className="mr-1" /> Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/images/weather.png" alt="Weather App" className="w-full h-48 object-contain" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Weather App</h3>
                  <p className="text-gray-600 mb-4">Interactive UI and UX for weather-related queries with API integration.</p>
                  <div className="flex justify-between">
                    <a href="https://tanisha-19-dev.github.io/Starbucks-Web/" className="text-blue-600 hover:underline flex items-center">
                      <Github size={16} className="mr-1" /> Code
                    </a>
                    <a href="https://tanisha-19-dev.github.io/Weather-App/" className="text-blue-600 hover:underline flex items-center">
                      <ExternalLink size={16} className="mr-1" /> Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                'Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'PHP',
                'MySQL', 'Matplotlib', 'Seaborn',
                'Figma', 'Firebase', 'Power BI', 'Canva', 'GitHub', 'Git', 'APIs', 'Laravel',
                'Windows', 'Amazon Web Services'
              ].map((skill) => (
                <div key={skill} className="bg-white rounded-lg shadow-md p-4 text-center">
                  <h3 className="font-semibold">{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Achievements & Leadership</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>TPO Co-Ordinator, Campus Bit&apos;D [Jul 2023 – Jul 2024]</li>
              <li>SMO Co-Ordinator, NSS Bit&apos;D [Jul 2023 –Jul 2024]</li>
              <li>Treasurer, CSEA [Dec 2023 – Sep 2024]</li>
              <li>Graphic Designer Lead, Open Source Days India [July - Dec, 2023]</li>
              <li>Postman Student Expert, Postman [April 2023]</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Tanisha Rathore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}