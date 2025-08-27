import { useState, useEffect } from "react";

const SkillsCard = ({header, desc, icon}) => {
  const [turn, setTurn] = useState(false);

  const turnArrow = () => {
    setTurn(prev => !prev);
  }

  return (
    <div className='btn-border skills-card sm:w-85 md:w-100 select-none' onClick={turnArrow}>
      <div className={`flex items-center justify-between gap-5 ${turn ? 'pb-3' : ''}`}>
        <div className='flex gap-3 items-center'>
          <img src={icon} alt="icon" />
          <h4 className='figtree-300 opacity-90'>{header}</h4>
        </div>
        <div>
          <img src="/assets/arrow.png" alt="arrow icon" className={`arrow pr-1 ${turn ? 'turn' : ''}`}/>
        </div>
      </div>
        <div className={`${turn ? '' : 'hidden'}`}>
          <ul className='figtree-300'>
             {desc}
          </ul>
        </div>
    </div>
  )
}

export default SkillsCard