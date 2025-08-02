import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useTranslation } from 'react-i18next';

const Hero = () => {
    
    const { t } = useTranslation();
    
    const isMobile = useMediaQuery({maxWidth: 450});
    const isTablet = useMediaQuery({maxWidth:768, minWidth:450});
    const heroRef = useRef(null);
    const arrowRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            heroRef.current,
            {opacity:0, y:30},
            {opacity: 1, y:0, duration: 1, ease: 'power2.out'}
        );
    }, []);

    useGSAP(() => {
        gsap.to(arrowRef.current, {
        y: -20, 
        duration: 1,
        repeat: -1, 
        yoyo: true, 
        ease: 'power1.inOut',
    });
    }, []);

  return (    
    <section ref={heroRef} className="h-[100vh]">
        <div className="wrapper relative items-center h-full">
            <div className="text-center flex flex-col items-center px-4">
                <h1 className="figtree-400">{t("greeting")} <span className="lora-400">Laís</span>. <span className="accent">{t("greetingAccent")}</span>.</h1>
                <p className="mt-4 poppins-400 lg:max-w-[40vw] md:max-w-[70vw]">{t("desc")}</p>
                <a href="#projects">
                    <div><img ref={arrowRef} className="arrow2" src="public/assets/arrow2.png" alt="arrow icon" /></div>
                </a>     
            </div>
            {/* <div className="h-[85vh] inset-0 absolute">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                    <ambientLight intensity={0.2} />
                    <directionalLight position={[5, 5, 5]} intensity={1.3} />
                    
                    <PerspectiveCamera makeDefault position={[0,0,30]} />
                    <Model scale={isMobile? 100 : isTablet? 115 : 150} position={[-1,-8,0]} rotation={[1,4.72,1]}
                    
                    ></Model>
                    </Suspense>
                </Canvas>
            </div> */}   
        </div>
    </section>
  )
}

export default Hero