import { useEffect } from "react";

const ParticlesBackground = () => {
  useEffect(() => {
    window.particlesJS("particles-js", {
      particles: {
        number: { value: 100 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 1 },
        line_linked: { enable: false },
        move: {
          enable: true,
          speed: 0.5,
          direction: "bottom",
          straight: false,
          out_mode: "out"
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: false },
          onclick: { enable: false },
          resize: true
        }
      },
      retina_detect: true
    });
  }, []);

  return (
    <div id="particles-js" className="absolute top-0 left-0 w-full h-full -z-10" />
  );
};

export default ParticlesBackground;

