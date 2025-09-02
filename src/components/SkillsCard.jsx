import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SkillsCard = ({ header, desc, icon }) => {

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null); 
  const contentRef = useRef(null); 


  useGSAP(() => {
    const contentEl = contentRef.current;

    if (isOpen) {

      gsap.to(contentEl, {
        height: "auto", 
        duration: 0.3,
        ease: 'power2.inOut',
        overwrite: 'auto'
      });
    } else {

      gsap.to(contentEl, {
        height: 0, 
        duration: 0.3,
        ease: 'power2.inOut',
        overwrite: 'auto'
      });
    }
  }, { dependencies: [isOpen], scope: containerRef }); 

  const toggleCard = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div ref={containerRef} onClick={toggleCard} className="btn-border skills-card sm:w-85 md:w-100 select-none overflow-hidden">
      <div className={`flex items-center justify-between gap-5 ${isOpen ? 'pb-3' : ''}`}>
        <div className='flex gap-3 items-center'>
          <img src={icon} alt="icon" loading="lazy"/>
          <h4 className='figtree-300 opacity-90'>{header}</h4>
        </div>
        <div>
          <img src="/assets/arrow.png" alt="arrow icon" className={`arrow pr-1 transition-transform duration-300 ${isOpen ? 'turn' : ''}`} loading="lazy"/>
        </div>
      </div>
      <div ref={contentRef} style={{ height: 0 }} className="overflow-hidden">
        <ul className='figtree-300 pt-2'>
          {desc}
        </ul>
      </div>
    </div>
  );
};

export default SkillsCard;