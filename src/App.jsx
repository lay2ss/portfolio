import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ParticleBackground from "./components/background/ParticleBackground";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";

function App() {

  return (
    <>
      <ParticleBackground />
    <main>
      <Nav />
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
    </main>
    </>
  )
}

export default App
