import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import ShinyText from '/src/components/animations/ShinyText';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

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

  // const cardsRef = useRef([]);
  // const projectsRef = useRef(null);
  

  // useGSAP(() => {
  //   gsap.from(cardsRef.current, {
  //     opacity: 0,
  //     y: 50,
  //     duration: 1,
  //     stagger: 0.4, 
  //     ease: 'power2.out',
  //     scrollTrigger: {
  //       trigger: projectsRef.current, 
  //       start: 'top 80%', 
  //     },
  //   });
  // }, []);

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

  return (
    <section className="h-[100vh] mt-10 md:mt-15" id="projects">
      <div className='wrapper'>
        <div className='section-wrapper'>
            <ShinyText 
              text={t("cta")} 
              disabled={false} 
              speed={3} 
              className='text-lg md:text-xl mb-2' 
            />
            <h1 className='poppins-500'><span className='accent tracking-widest'></span>{capitalize(t("contact"))}</h1>
            <p className='poppins-400 mt-5'>{t("contactText")}</p>
            <div className='poppins-400 mt-3 flex gap-2'>
              <p>{t("location")}</p>
              <span className='text-white opacity-85'>{t("country")}, Minas Gerais</span>
            </div>
        </div>
      </div>
        <span className="gray-bg h-[1px] block w-[90%] mx-auto"/>
    </section>
  )
}

export default Contact;