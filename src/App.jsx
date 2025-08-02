import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ParticleBackground from "./components/ParticleBackground";
import ProjectsSection from "./components/ProjectsSection";


function App() {

  return (
    <>
      <ParticleBackground />
    <main>
      <Nav />
      <Hero />
      <ProjectsSection />
    </main>
    </>
  )
}

export default App
