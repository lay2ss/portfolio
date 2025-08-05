import { useTranslation } from 'react-i18next';
import ProjectsCard from './ProjectsCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { projectsDataEn, projectsDataPt } from '../data/projectsData';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
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

  const handleMouseEnter = (i) => {
    gsap.to(cardsRef.current[i], {
      scale: 1.03,
      y: -20,
      zIndex: 10,
      duration: 0.6,
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = (i) => {
    gsap.to(cardsRef.current[i], {
      scale: 1,
      y: 0,
      zIndex: 1,
      duration: 0.6,
      ease: 'power3.out',
    });
  };

  return (
    <section className="wrapper h-[100vh]" id="projects" ref={projectsRef}>
        <div className='flex w-[90vw] mt-30 lg:max-w-[1024px] flex-col'>
            <h1 className='figtree-400'><span className='accent tracking-widest'>/</span>{t("projects")}</h1>
          <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto'>
            {(language === 'en' ? projectsDataEn : projectsDataPt).map((item, index) => (
            <div
            key={item.id}
            ref={el => cardsRef.current[index] = el}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}>
              <ProjectsCard
              image = {item.image}
              tools = {item.tools.map((item, index) => (<span key={index}> <span className='accent'>#</span>{item}</span>))}
              header = {item.header}
              desc = {item.desc}
              />
            </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default ProjectsSection;