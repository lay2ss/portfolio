import { useTranslation } from 'react-i18next';
import Globe from './Globe';
import SkillsCard from './SkillsCard';
import { skills } from '../data/skillsData';
import { useState, useEffect } from 'react';

const SkillsSection = () => {
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

  return (
    <section className="wrapper">
        <div className='section-wrapper mt-5'>
            <h1 className='figtree-400'><span className='accent tracking-widest'>/</span>{t("skills")}</h1>
            <div className='flex flex-wrap mt-10 justify-center gap-5'>
              <div style={{ height: '35vh'}} className='cursor-grabbing'>
                  {/* <Globe /> */}
              </div>
              <div
              className='grid grid-cols-1 sm:grid-cols-2 gap-3 mx-auto h-min'>
                {skills.map((item) => (
                  <div key={item.id}>
                    <SkillsCard
                    
                    />
                  </div>
                ))}  
              </div>
            </div>
        </div>

    </section>
  )
}

export default SkillsSection