import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';

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
    <section className="h-auto mt-10" ref={sectionRef}>
      <div className='wrapper'>
        <div className='section-wrapper'>
            <div className='flex flex-col gap-10  items-center lg:flex-row lg:justify-evenly lg:items-center'>
                <div className="flex gap-6 justify-center">
                    <div className="icon-n-card"><img src="/assets/github_icon.svg" alt="github icon" /></div>
                    <div className="icon-n-card"><img src="/assets/linkedin_icon.svg" alt="linkedin icon" /></div>
                    <div className="icon-n-card"><img src="/assets/gmail_icon.svg" alt="gmail icon" /></div>
                </div>
                <div className='flex poppins-300 flex-col items-center gap-2 text-md'>
                    <div className='flex items-center gap-3'>
                        <p>{t("built")}</p> 
                        <img src="/assets/react.png" alt="react logo"  className='h-min'/>
                        <p>React</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p>{t("styled")}</p> 
                        <img src="/assets/tailwindcss.png" alt="tailwindcss logo"  className='h-min'/>
                        <p>TailwindCSS</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p>{t("deployed")}</p> 
                        <img src="/assets/vercel.png" alt="vercel logo"  className='h-min'/>
                        <p>Vercel</p>
                    </div>
                </div>

                
                     
            </div>
        </div>
      </div>
        <span className="gray-bg h-[1px] block w-[90%] mx-auto lg:max-w-[1080px] mt-10"/>
        <div className='flex justify-center w-full gap-2 py-6 poppins-300'> 
            <p>{t("made")}</p>
            <img src="/assets/heart.png" alt="heart icon" />
            <p>{t("by")} @lay2ss</p>
        </div>
    </section>
  )
}

export default Footer