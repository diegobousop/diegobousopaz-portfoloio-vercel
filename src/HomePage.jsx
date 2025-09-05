import Experience from "./components/Experience"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import StackTechnologico from "./components/StackTechnologico"
import Introduction from "./components/Introduction"
import ProjectsSnippet from "./components/ProjectsSnippet"

import { useState } from "react"

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("Inicio")
  return (
    <main className="min-h-screen bg-[#0E111E] bg-no-repeat bg-top bg-cover"> 
      <Header activeSection={activeSection} setActiveSection={setActiveSection} /> 
      <div className="z-10 relative  md:px-12  xl:px-72">
        
        <Hero />
        <Introduction />
        <Experience />
        <ProjectsSnippet />
        <StackTechnologico />
        <Footer />
      </div>
    </main>
  )
}

export default HomePage