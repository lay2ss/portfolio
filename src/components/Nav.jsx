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
  
  const list = [{
                  name: "HOME",
                  href: "#home",
                  pathName: "/home"
                }, 
                {
                  name: t("projects"),
                  href: "#projects",
                  pathName: "/projects"
                }, 
                {
                  name: t("contact"),
                  href: "#contact",
                  pathName: "/contact"
                }];


  return (
    <>
    <nav className="wrapper fixed z-15">
        <div className="nav poppins-400">
          <div className="flex items-center"><a href="/">
          <img src="/assets/logos/logo.png" alt="logo" loading="lazy" />
          </a>
          </div>
            <div className="flex gap-22 cursor-pointer items-center">
                <ul className="desktop-nav figtree-400">
                  {list.map((i, index) => 
                    (<a href={i.href} key={index}>
                      <li className="hover-li">{i.name}</li>
                    </a>)
                  )}
                </ul>
            <div>
            <div className={`top-2 right-18 md:right-6 absolute flex flex-wrap btn-lang figtree-400 text-[14px] rounded-lg max-w-[54px] h-10 ${turn ? 'h-fit' : ''}`} onClick={turnArrow}>
              <div className="flex items-center gap-2">
                <button>{t("language")}</button> 
                <img src="/assets/icons/arrow.png" alt="arrow icon" className={`w-min h-min arrow ${turn ? 'turn' : ''}`} loading="lazy"/>
              </div> 
              <div className={`flex w-full mt-2 border btn-s ${turn ? '' : 'hidden'}`}>
                <button className={`w-full figtree-400 text-[14px] cursor-pointer ${turn ? '' : ''}`} onClick={() => language === 'pt' ? changeLanguage('en') : changeLanguage('pt')}>{t("switchLanguage")}</button>
              </div>
            </div>
            </div>
                <button className={`menu_icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                  <img src="/assets/icons/bar.png" alt="bar icon" className="bar bar1" loading="lazy"/>
                  <img src="/assets/icons/bar.png" alt="bar icon" className="bar bar2" loading="lazy"/>
                  <img src="/assets/icons/bar.png" alt="bar icon" className="bar bar3" loading="lazy"/>
                  </button>
                  </div>
                </div> 
    </nav>
    <nav className={`flex justify-center md:hidden w-full fixed top-20 z-10 ${isOpen ? '' : 'hidden'}`}>
      <div className={`mobile-nav figtree-400`}>
                  <ul className={`flex flex-col gap-2 p-5 cursor-pointer`}>
                    {list.map((i, index) => 
                    (<a href={i.href} key={index}>
                      <li className="">{i.name}</li>
                    </a>)
                  )}
                  </ul>
      </div>
    </nav>
    </>
  )
}
export default Nav