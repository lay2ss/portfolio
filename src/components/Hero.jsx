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
import GradientText from "/src/components/animations/GradientText.jsx";
import Loop from "/src/components/animations/Loop.jsx";

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
        <div className="wrapper relative">
            <div className="flex flex-col space-y-2 md:space-y-4 p-10 md:p-20 mt-20 md:mt-10 ">
                <div className="max-w-[280px]">
                    <p className="figtree-400 text-md md:text-lg">{t("greeting")} Laís </p> 
                </div>
                <div className="flex flex-wrap lg:flex-nowrap gap-5 md:gap-10">
                    <GradientText
                        colors={["#FF69B4", "#4079ff", "#FF69B4", "#4079ff", "#FF69B4"]}
                        animationSpeed={5}
                        showBorder={false}
                        className="text-5xl md:text-6xl max-w-[280px]"
                        >
                        {t("greetingAccent")}
                    </GradientText>
                    <div className="[@media(min-width:1010px)]:mt-4 max-w-[530px] xl:max-w-[700px] space-y-4">
                        <p className="poppins-400 text-md md:text-2xl">{t("desc")}</p>
                    </div>
                </div>
                    <div className="flex gap-3 mt-4 md:mt-8">
                        <div className="icon-card"><img src="/assets/github_icon.svg" alt="github icon" /></div>
                        <div className="icon-card"><img src="/assets/linkedin_icon.svg" alt="github icon" /></div>
                        <div className="icon-card"><img src="/assets/gmail_icon.svg" alt="github icon" /></div>
                    </div>
                    <div className="opacity-50 mt-13">
                        <Loop/>
                    </div>
            </div>
                {/* <a href="#projects">
                    <div><img ref={arrowRef} className="arrow2" src="/assets/arrow2.png" alt="arrow icon" /></div>
                </a>      */}
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