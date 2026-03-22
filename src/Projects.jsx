import Experience from "./components/Experience"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import StackTechnologico from "./components/StackTechnologico"
import Introduction from "./components/Introduction"
import Project from "./components/Projects/Project"
import ProjectBeachAndVoley from "./components/Projects/ProjectBeachAndVoley"
import ProjectGymTonic from "./components/Projects/GymTonic"
import ProjectEcosDoSur from "./components/Projects/ProjectEcosDoSur"
import ProjectDigitalBrain from "./components/Projects/ProjectDigitalBrain"

import { useState, useEffect } from "react"
import ProjectFantasyRift from "./components/Projects/ProjectFantasyRift"

const projectsIndex = [
  { id: 'ecosdosur', name: 'Ecos do Sur', color: '#F59E0B' },
  { id: 'digitalbrain', name: 'Digital Brain', color: '#8B5CF6' },
  { id: 'bigchef', name: 'Big Chef', color: '#EF4444' },
  { id: 'fantasyrift', name: 'Fantasy Rift', color: '#3B82F6' },
  { id: 'beachandvoley', name: 'Beach & Voley', color: '#10B981' },
  { id: 'gymtonic', name: 'Gym Tonic', color: '#EC4899' },
]

const Projects = () => {
  const [activeSection, setActiveSection] = useState("Projects")
  const [activeProject, setActiveProject] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200
      
      for (const project of projectsIndex) {
        const element = document.getElementById(project.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveProject(project.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToProject = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main className="min-h-screen bg-[#0E111E] bg-no-repeat bg-top bg-cover"> 
      <div className="z-10 relative">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} /> 
        
        {/* Índice lateral fijo */}
        <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
          <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-4">
            <h3 
              className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 px-2"
              style={{ fontFamily: 'Syncopate, sans-serif' }}
            >
              Índice
            </h3>
            {projectsIndex.map((project) => (
              <button
                key={project.id}
                onClick={() => scrollToProject(project.id)}
                className={`
                  w-full text-left px-3 py-2.5 rounded-lg transition-all duration-300
                  flex items-center gap-3 group
                  ${activeProject === project.id 
                    ? 'bg-white/10' 
                    : 'hover:bg-white/5'
                  }
                `}
              >
                <span 
                  className={`
                    w-2 h-2 rounded-full transition-all duration-300
                    ${activeProject === project.id ? 'scale-125' : 'scale-100 opacity-50 group-hover:opacity-100'}
                  `}
                  style={{ backgroundColor: project.color }}
                />
                <span 
                  className={`
                    text-sm transition-all duration-300
                    ${activeProject === project.id 
                      ? 'text-white' 
                      : 'text-white/50 group-hover:text-white/80'
                    }
                  `}
                  style={{ 
                    fontFamily: 'Syncopate, sans-serif',
                    color: activeProject === project.id ? project.color : undefined
                  }}
                >
                  {project.name}
                </span>
              </button>
            ))}
          </div>
        </nav>

        <ProjectEcosDoSur />
        <ProjectDigitalBrain />
        <Project />
        <ProjectFantasyRift />
        <ProjectBeachAndVoley />
        <ProjectGymTonic />
        <Footer />
      </div>
    </main>
  )
}

export default Projects