const SkillsCard = ({header, tools}) => {
  return (
    <div className="p-3 max-w-[250px] h-min skills-card">
        <h3 className="figtree-400 mb-2 pb-2">{header}</h3>
        
        <p className="poppins-400">{tools}</p>
    </div>
  )
}

export default SkillsCard