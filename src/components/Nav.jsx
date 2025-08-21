import { useState, useEffect } from "react";
import '/src/menuIcon.css';
import { useTranslation } from 'react-i18next';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [turn, setTurn] = useState(false);

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

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  }
  const turnArrow = () => {
    setTurn(prev => !prev);
  }

  return (
    <>
    <nav className="wrapper fixed z-50">
        <div className="nav poppins-400">
          <div className="flex items-center"><a href="/">
          <img src="/assets/logo.png" alt="logo" />
          </a>
          </div>
            <div className="flex gap-11 cursor-pointer items-center">
                <ul className="desktop-nav figtree-400">
                  <li className="hover-li">HOME</li>
                  <li className="hover-li">{t("projects")}</li>
                  <li className="hover-li">{t("contact")}</li>
                </ul>
            <div>
            <div className={`top-2 right-18 lg:right-36 absolute flex flex-wrap btn-lang figtree-400 text-[14px] ] rounded-lg h-10 max-w-[54px] ${turn ? 'h-fit' : ''}`} onClick={turnArrow}>
              <div className="flex items-center gap-2">
                <button>{language === 'en' ? 'EN' : 'PT'}</button> 
                <img src="/assets/arrow.png" alt="arrow icon" className={`w-min h-min arrow ${turn ? 'turn' : ''}`} />
              </div> 
              <div className={`flex w-full mt-2 border btn-s ${turn ? '' : 'hidden'}`}>
                <button className={`w-full figtree-400 text-[14px] cursor-pointer ${turn ? '' : ''}`} onClick={() => language === 'en' ? changeLanguage('pt') : changeLanguage('en')}>{language === 'en' ? 'PT' : 'EN'}</button>
              </div>
            </div>
            </div>
                <button className="btn figtree-400 w-28 hidden lg:inline-block">{t("cta")}</button>
                <button className={`menu_icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                  <img src="/assets/bar.png" alt="bar icon" className="bar bar1"/>
                  <img src="/assets/bar.png" alt="bar icon" className="bar bar2" />
                  <img src="/assets/bar.png" alt="bar icon" className="bar bar3" />
                  </button>
                  </div>
                </div> 
    </nav>
    <nav className={`flex justify-center lg:hidden w-full fixed top-20 z-50 ${isOpen ? '' : 'hidden'}`}>
      <div className={`mobile-nav figtree-400`}>
                  <ul className={`flex flex-col gap-2 p-5 cursor-pointer`}>
                    <li>HOME</li>
                    <li>{t("projects")}</li>
                    <li>{t("contact")}</li>
                  </ul>
                  <button className="btn figtree-400 w-[85vw]">{t("cta")}</button>
      </div>
    </nav>
    </>
  )
}
export default Nav