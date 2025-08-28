import Nav from "./components/Nav";
import Home from "./components/Home";
import ParticleBackground from "./components/background/ParticleBackground";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";
import { HashRouter } from "react-router-dom";

function App() {

  return (
    <HashRouter>
      {/* <ParticleBackground /> */}
      <main>
        <Nav />
        <Home />
        <ProjectsSection />
        {/* <SkillsSection />
        <AboutSection /> */}
      </main> 
    </HashRouter>
   
  )
}

export default App
