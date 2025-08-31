import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { HashRouter } from "react-router-dom";
import Footer from "./components/Footer";

function App() {

  return (
    <HashRouter>
      <main>
        <Nav />
        <Home />
        <Projects />
        <Contact />
        <Footer />        
      </main> 
    </HashRouter>
   
  )
}

export default App
