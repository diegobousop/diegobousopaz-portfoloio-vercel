import Experience from "./components/Experience"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import StackTechnologico from "./components/StackTechnologico"
import Introduction from "./components/Introduction"
import ContactContent from "./components/contact/ContactContent"


import { useState } from "react"

const Contact = () => {
  const [activeSection, setActiveSection] = useState("Contact")
  return (
    <main className="min-h-screen bg-[#0E111E] bg-no-repeat bg-top bg-cover"> 
      <div className="z-10 relative ">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} /> 
        <ContactContent />
        <Footer />
      </div>
    </main>
  )
}

export default Contact