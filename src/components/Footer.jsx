import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import SpotifyPlayer from './SpotifyPlayer';
import { social, tech } from "../data/socialData";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  const { t } = useTranslation();
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

  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.4, 
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current, 
        start: 'top 100%', 
      },
    });
  }, []);

  return (
    <footer className="h-auto mt-10" ref={sectionRef}>
      <div className='wrapper'>
        <div className='section-wrapper'>
            <div className='flex flex-col gap-10  items-center lg:flex-row lg:justify-between lg:items-center'>
                <div className="flex gap-6 justify-center">
                   {social.map((item) => (<a href={item.link} aria-label={item.name} key={item.name}>
                            <div className="icon-n-card"><img src={item.icon} alt={`${item.name} icon`} loading="lazy"/></div>
                        </a>)
                    )}
                </div>
                <div className='flex poppins-300 flex-col items-center gap-2 text-md lg:items-start'>
                  {tech.map((item) => 
                    (<div className='flex items-center gap-3' key={item.name}>
                        <p>{t(item.text)}</p> 
                        <img src={item.icon} alt={`${item.name} logo`}  className='h-min' loading="lazy"/>
                        <p>{item.name}</p>
                    </div>)
                  )}
                </div>
                <SpotifyPlayer />                         
            </div>
        </div>
      </div>
        <span className="gray-bg h-[1px] block w-[90%] mx-auto lg:max-w-[1080px] mt-10"/>
        <div className='flex justify-center w-full gap-1 py-6 poppins-300'> 
            <p>{t("made")}</p>
            <img src="/assets/icons/heart.png" alt="heart icon" loading="lazy"/>
            <p>{t("by")} &#64;lay2ss</p>
        </div>
    </footer>
  )
}

export default Footer