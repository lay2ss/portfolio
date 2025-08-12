import { useState, useRef } from 'react';

const SkillsCard = ({header, tools}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div ref={cardRef}
      onMouseMove={handleMouseMove}
      className="p-3 max-w-[250px] h-min card-border relative">

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(61, 54, 59, 1), transparent 80%)`,
          }}
        />

        <div className='relative z-10'>
          <h3 className="figtree-400 mb-2 pb-2">
            <span className="accent">#</span>{header}</h3>
          
          <p className="poppins-400">{tools}</p>
        </div>
    </div>
  )
}

export default SkillsCard