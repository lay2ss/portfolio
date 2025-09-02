import { useTranslation } from 'react-i18next';
import ProjectsCard from './ProjectsCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { projectsDataEn, projectsDataPt } from '../data/projectsData';
import ShinyText from '/src/components/animations/ShinyText';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const cardsRef = useRef([]);
  const projectsRef = useRef(null);
  
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

  useGSAP(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.4, 
      ease: 'power2.out',
      scrollTrigger: {
        trigger: projectsRef.current, 
        start: 'top 80%', 
      },
    });
  }, []);

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

  return (
    <section className="h-auto mt-10 md:mt-15" id="projects" ref={projectsRef}>
      <div className='wrapper'>
        <div className='section-wrapper'>
            <ShinyText 
              text={t("work")} 
              disabled={false} 
              speed={3} 
              className='text-lg md:text-xl mb-2' 
            />
            <h1 className='poppins-500'><span className='accent tracking-widest'></span>{capitalize(t("projects"))}</h1>
          <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 mx-auto p-3 md:p-0'>
            {(language === 'en' ? projectsDataEn : projectsDataPt).map((item, index) => (
            <div
            key={item.id}
            ref={el => cardsRef.current[index] = el}
          >
              <ProjectsCard
              image = {item.image}
              tools = {item.tools.map((item, index) => (<span key={index}> <span className='accent'>#</span>{item}</span>))}
              header = {item.header}
              code = {item.code}
              preview = {item.preview}
              />
            </div>
            ))}
          </div>
          <div className='flex py-10 w-full'>
              <button className='btn-project figtree-400 cursor-pointer w-full justify-center hover:scale-105 transition-transform duration-300'>
                <a href="https://github.com/lay2ss" className='flex gap-3 items-center'>
                  <span className='text-white poppins-400 md:text-lg'>{t("ctaPjc")}</span>
                  <div className=''>
                    <img src="/assets/github_icon.svg" alt="github icon" className='w-min h-min' loading="lazy"/>
                  </div>
                </a>
              </button>
          </div>
        </div>
      </div>
        <span className="gray-bg h-[1px] block w-[90%] mx-auto"/>
    </section>
  )
}

export default Projects;