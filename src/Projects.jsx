import Experience from "./components/Experience"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import StackTechnologico from "./components/StackTechnologico"
import Introduction from "./components/Introduction"
import Project from "./components/Projects/Project"
import ProjectBeachAndVoley from "./components/Projects/ProjectBeachAndVoley"

import { useState } from "react"
import ProjectFantasyRift from "./components/Projects/ProjectFantasyRift"

const Projects = () => {
  const [activeSection, setActiveSection] = useState("Projects")
  return (
    <main className="min-h-screen bg-[#0E111E] bg-no-repeat bg-top bg-cover"> 
      <div className="z-10 relative">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} /> 
        <Project />
        <ProjectFantasyRift />
        <ProjectBeachAndVoley />
        <Footer />
      </div>
    </main>
  )
}

export default Projects