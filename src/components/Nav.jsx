import { useState } from "react";
import '/src/menuIcon.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <>
    <nav className="wrapper fixed z-50">
        <div className="nav poppins-200">
            <span className="text-2xl tracking-wider cursor-pointer">lay.</span> 
            <div className="flex gap-5 cursor-pointer items-center">
                <ul className="desktop-nav figtree-400">
                <li>SKILLS</li>
                <li>PROJECTS</li>
                <li>ABOUT</li>
                </ul>
                <button className="btn figtree-300 w-28">LET'S TALK</button>
                <button className={`menu_icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                  <img src="/assets/bar.png" alt="bar icon" className="bar bar1"/>
                  <img src="/assets/bar.png" alt="bar icon" className="bar bar2" />
                  <img src="/assets/bar.png" alt="bar icon" className="bar bar3" />
                  </button>
                  </div>
                </div> 
    </nav>
    <nav className={`flex justify-center lg:hidden w-[100vw] fixed top-20 z-50 ${isOpen ? '' : 'hidden'}`}>
      <div className={`mobile-nav figtree-400 mt-2`}>
                  <ul className={`flex flex-col gap-2 p-5 cursor-pointer`}>
                    <li>SKILLS</li>
                    <li>PROJECTS</li>
                    <li>ABOUT</li>
                  </ul>
                  <button className="btn figtree-300 w-[85vw]">LET'S TALK</button>
      </div>
    </nav>
    </>
  )
}
export default Nav