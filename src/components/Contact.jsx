import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import ShinyText from '/src/components/animations/ShinyText';
import Form from './Form';

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
        start: 'top 80%', 
      },
    });
  }, []);

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

  return (
    <section className="h-auto mt-10 md:mt-15" id="contact" ref={sectionRef}>
      <div className='wrapper'>
        <div className='section-wrapper'>
          <ShinyText 
            text={t("cta")} 
            disabled={false} 
            speed={3} 
            className='text-lg md:text-xl mb-2' 
          />
          <h1 className='poppins-500'><span className='accent tracking-widest'></span>{capitalize(t("contact"))}</h1>
          <div className='flex flex-wrap md:flex-nowrap poppins-400 md:gap-5'>
            <div className='mt-5 flex flex-col lg:min-w-130 md:min-w-95'>
              <p className=''>{t("contactText")}</p>
              <div className='flex gap-2 mt-3'>
                <p>{t("location")}</p>
                <span className='text-white opacity-85'>{t("country")}, Minas Gerais</span>
              </div>
            </div>
            <div className='mt-5 w-full'>
              <Form />
            </div>
          </div>
        </div>
      </div>
        <span className="gray-bg h-[1px] block w-[90%] mx-auto mt-13"/>
    </section>
  )
}

export default Contact;