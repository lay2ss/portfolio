import LogoLoop from '/src/components/animations/LogoLoop';

const imageLogos = [
    { src: "/logos/html5.png", alt: "html", href: "", name: "HTML5" },
    { src: "/logos/css3.png", alt: "css", href: "", name: "CSS3" },
    { src: "/logos/js.png", alt: "javascript", href: "", name: "JavaScript" },
    { src: "/logos/typescript.png", alt: "typescript", href: "", name: "TypeScript" },
    { src: "/logos/react.png", alt: "react", href: "", name: "React" },
    { src: "/logos/tailwindcss.png", alt: "tailwindcss", href: "", name: "Tailwindcss" },
    { src: "/logos/git.png", alt: "git", href: "", name: "Git" },
    { src: "/logos/nextjs.png", alt: "next", href: "", name: "Next" },
    { src: "/logos/nodejs.png", alt: "nodejs", href: "", name: "Nodejs" },
    { src: "/logos/threejs.png", alt: "threejs", href: "", name: "Threejs" },
    { src: "/logos/vercel.png", alt: "vercel", href: "", name: "Vercel" },
];

function App() {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
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