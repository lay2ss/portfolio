import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Hero = () => {

    const isMobile = useMediaQuery({maxWidth: 450});
    const isTablet = useMediaQuery({maxWidth:768, minWidth:450});
    const heroRef = useRef(null);
    useGSAP(() => {
        gsap.fromTo(
            heroRef.current,
            {opacity:0, y:30},
            {opacity: 1, y:0, duration: 1, ease: 'power2.out'}
        );
    }, []);

  return (
    <section ref={heroRef} className="p-7">
        <div className="wrapper relative top-15"> 
            <div className="text-center">
            <h1 className="figtree-400">Hi, I'm <span className="lora-400">Laís</span> <span className="wave-hand">👋</span> </h1>
            <p className="mt-2 poppins-300 lg:w-[50vw] md:w-[70vw]">Problem solver at heart, full-stack by choice — crafting thoughtful, functional, and future-ready web experiences driven by curiosity and code.</p>
            </div>
            <div className="h-[85vh] inset-0 absolute"> 
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <ambientLight intensity={0.7} />
                        <directionalLight position={[5, 5, 5]} intensity={1.3} />

                        <PerspectiveCamera makeDefault position={[0,0,30]} />
                        <Model scale={isMobile? 0.0082 : isTablet? 0.01 : 0.012}
                         
                        ></Model>
                    </Suspense>
                </Canvas>
            </div>
        </div>
    </section>
  )
}

export default Hero