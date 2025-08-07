import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ParticleBackground from "./components/ParticleBackground";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

function App() {

  return (
    <>
      <ParticleBackground />
    <main>
      <Nav />
      <Hero />
      <ProjectsSection />
      <SkillsSection />
    </main>
    </>
  )
}

export default App
