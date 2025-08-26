import { useState, useRef } from 'react';

const SkillsCard = ({header, desc, icon}) => {

  return (
    <div className='btn-border skills-card sm:w-85 md:w-100'>
      <div className='flex items-center justify-between gap-5'>
        <div className='flex gap-3 items-center'>
          <img src={icon} alt="icon" />
          <h4 className='figtree-300 opacity-90'>{header}</h4>
        </div>
        <div>
          <img src="/assets/arrow.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default SkillsCard