const Nav = () => {
  return (
    <nav className="wrapper">
        <div className="nav poppins-200">
            <span className="text-2xl tracking-wider cursor-pointer">lay.</span> 
            <div className="flex gap-5 cursor-pointer">
                <ul className="mobile-nav figtree-400">
                <li>SKILLS</li>
                <li>PROJECTS</li>
                <li>ABOUT</li>
                </ul>
                <button className="btn figtree-300">LET'S TALK</button>
                <button className="lg:hidden cursor-pointer"><img src="public/assets/bars.png" alt="bars icon" /></button>
                </div> 
            </div>
    </nav>
  )
}
export default Nav