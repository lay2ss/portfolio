import LogoLoop from '/src/components/animations/LogoLoop';

const imageLogos = [
    { src: "/assets/logos/html5.png", alt: "html", href: "", name: "HTML5" },
    { src: "/assets/logos/css3.png", alt: "css", href: "", name: "CSS3" },
    { src: "/assets/logos/js.png", alt: "javascript", href: "", name: "JavaScript" },
    { src: "/assets/logos/typescript.png", alt: "typescript", href: "", name: "TypeScript" },
    { src: "/assets/logos/react.png", alt: "react", href: "", name: "React" },
    { src: "/assets/logos/tailwindcss.png", alt: "tailwindcss", href: "", name: "Tailwindcss" },
    { src: "/assets/logos/git.png", alt: "git", href: "", name: "Git" },
    { src: "/assets/logos/nextjs.png", alt: "next", href: "", name: "Next" },
    { src: "/assets/logos/nodejs.png", alt: "nodejs", href: "", name: "Nodejs" },
    { src: "/assets/logos/threejs.png", alt: "threejs", href: "", name: "Threejs" },
    { src: "/assets/logos/vercel.png", alt: "vercel", href: "", name: "Vercel" },
];

function App() {
  return (
    <div style={{ height: '100px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={imageLogos}
        speed={60}
        direction="left"
        logoHeight={28}
        gap={50}
        pauseOnHover = {false}
        scaleOnHover
        fadeOut
        fadeOutColor="#0e0e0e"
        ariaLabel="Technology partners"
      />
    </div>
  );
}

export default App