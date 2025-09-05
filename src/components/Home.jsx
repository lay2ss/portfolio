import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import GradientText from "/src/components/animations/GradientText.jsx";
import Loop from "/src/components/animations/Loop.jsx";
import SkillsCard from "./SkillsCard";
import LetterGlitch from '/src/components/animations/LetterGlitch.jsx';
import { social } from "../data/socialData";
import { skills } from "../data/skillsData";

const Home = () => {
    
    const { t } = useTranslation();
    
    const homeRef = useRef(null);
    const arrowRef = useRef(null);
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState('');
      
      useEffect(() => {
        setLanguage(i18n.language);
        const onLanguageChanged = (lng) => {
          setLanguage(lng);
        };
        i18n.on('languageChanged', onLanguageChanged);
        return () => {
          i18n.off('languageChanged', onLanguageChanged);
        };
      }, [i18n]);

    useGSAP(() => {
        gsap.fromTo(
            homeRef.current,
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
    <section ref={homeRef} id="home" className="h-auto">
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
                        className="text-5xl md:text-6xl max-w-[340px] poppins-400"
                        >
                        {t("greetingAccent")}
                    </GradientText>
                    <div className="[@media(min-width:1010px)]:mt-4 max-w-[530px] xl:max-w-[700px] space-y-4">
                        <p className="poppins-400 text-md md:text-2xl">{t("desc")}</p>
                    </div>
                </div>
                    <div className="flex gap-3 mt-4 md:mt-8">
                        {social.map((item) => (<a href={item.link} aria-label={item.name} key={item.name}>
                            <div className="icon-card"><img src={item.icon} alt={`${item.name} icon`} loading="lazy"/></div>
                        </a>)
                        )}
                    </div>
                    <div className="opacity-50 mt-13">
                        <Loop/>
                    </div>
                    <div className="flex justify-center lg:justify-between gap-10 lg:gap-0 flex-wrap items-center">
                            <div>
                                <h1 className="poppins-500 tracking-wide mb-5">
                                    {t('skillsTittle')}
                                </h1>
                                <div className="flex flex-col gap-4">
                                    {skills.map((item) => (
                                        <div key={item.id}>
                                            <SkillsCard
                                            header={t(item.header)}
                                            desc={
                                            item.desc.map((i) => (<li key={t(i)} className="flex items-center gap-3">
                                                                            <span className='border border-gray-400 rounded-full h-min'/> <p className="pt-1">{t(i)}</p>
                                                                        </li>))}
                                            icon={item.icon}
                                            />
                                        </div>
                                        ))}  
                                </div>
                            </div>
                            <div className="w-full sm:w-[50%] md:w-full lg:w-[50%] lg:mt-15 h-[230px] md:h-[240px] lg:h-fit">
                                <LetterGlitch />
                            </div>
                    </div>
               
            </div>  
        </div>
         <span className="gray-bg h-[1px] block w-[90%] mx-auto"/>
    </section>
  )
}

export default Home