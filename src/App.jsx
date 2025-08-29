import Nav from "./components/Nav";
import Home from "./components/Home";
import ParticleBackground from "./components/background/ParticleBackground";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutSection from "./components/AboutSection";
import { HashRouter } from "react-router-dom";

function App() {

  return (
    <HashRouter>
      {/* <ParticleBackground /> */}
      <main>
        <Nav />
        <Home />
        <Projects />
        <Contact />
      </main> 
    </HashRouter>
   
  )
}

export default App
